// Books data is now loaded from data.js

// === UI LOGIKA ===
var booksGrid = document.getElementById('books-grid');
var bookModal = document.getElementById('book-modal');
var closeModalBtn = document.getElementById('close-modal');
var modalBody = document.getElementById('modal-body');
var searchInput = document.getElementById('search-input');
var searchClear = document.getElementById('search-clear');
var resultsCount = document.getElementById('results-count');
var themeToggle = document.getElementById('theme-toggle');
var quizToggle = document.getElementById('quiz-toggle');
var quizModal = document.getElementById('quiz-modal');
var quizBody = document.getElementById('quiz-body');
var closeQuizBtn = document.getElementById('close-quiz');

// Mapování období na popisky
var obdobiLabels = {
    1: 'I. Do konce 18. st.',
    2: 'II. 19. století',
    3: 'III. Světová 20./21. st.',
    4: 'IV. Česká 20./21. st.'
};

var obdobiColors = {
    1: '#8b5cf6',
    2: '#0891b2',
    3: '#059669',
    4: '#d97706'
};

var currentFilter = null;
var currentSearch = '';

// === ODPOČET DO MATURITY ===
function initCountdown() {
    var maturita = new Date(2026, 4, 25); // 25. května 2026
    var badge = document.getElementById('countdown-badge');
    function update() {
        var now = new Date();
        var diff = maturita - now;
        if (diff <= 0) {
            badge.innerHTML = 'Maturita je tady!';
            return;
        }
        var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        badge.innerHTML = 'Do maturity zbývá <span class="countdown-number">' + days + '</span> ' + getDaysWord(days);
    }
    function getDaysWord(n) {
        if (n === 1) return 'den';
        if (n >= 2 && n <= 4) return 'dny';
        return 'dní';
    }
    update();
}
initCountdown();

// === OBLÍBENÉ KNIHY ===
var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function toggleFavorite(bookId, event) {
    event.stopPropagation();
    var idx = favorites.indexOf(bookId);
    if (idx === -1) {
        favorites.push(bookId);
    } else {
        favorites.splice(idx, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavFilterBtn();
    renderGrid();
}

function isFavorite(bookId) {
    return favorites.indexOf(bookId) !== -1;
}

function updateFavFilterBtn() {
    var favBtn = document.querySelector('.filter-btn[data-obdobi="fav"]');
    if (favBtn) {
        favBtn.classList.toggle('has-favs', favorites.length > 0);
    }
}
updateFavFilterBtn();

// === DARK MODE ===
function initTheme() {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

themeToggle.addEventListener('click', function() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

initTheme();

// === VYHLEDÁVÁNÍ ===
function getSearchableText(book) {
    return (book.title + ' ' + book.author).toLowerCase();
}

function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Skóre relevance: shoda v názvu/autorovi je důležitější než shoda v ději
function getRelevanceScore(book, words) {
    var score = 0;
    var titleNorm = removeDiacritics(book.title.toLowerCase());
    var authorNorm = removeDiacritics(book.author.toLowerCase());
    var genreNorm = removeDiacritics(book.info.zanr.toLowerCase());

    words.forEach(function(w) {
        if (titleNorm.indexOf(w) !== -1) score += 100;   // shoda v názvu
        if (authorNorm.indexOf(w) !== -1) score += 80;    // shoda v autorovi
        if (genreNorm.indexOf(w) !== -1) score += 30;     // shoda v žánru
    });

    return score;
}

// Zvýraznění shody v textu
function highlightMatch(text, words) {
    if (!words || words.length === 0) return text;
    var result = text;
    words.forEach(function(w) {
        if (w.length < 2) return; // nechci zvýrazňovat jedno písmeno
        // Najdi shodu bez ohledu na diakritiku
        var textNorm = removeDiacritics(result.toLowerCase());
        var idx = textNorm.indexOf(w);
        if (idx !== -1) {
            var matchLen = w.length;
            var before = result.substring(0, idx);
            var match = result.substring(idx, idx + matchLen);
            var after = result.substring(idx + matchLen);
            result = before + '<mark>' + match + '</mark>' + after;
        }
    });
    return result;
}

var searchTimer = null;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
        currentSearch = searchInput.value.trim();
        searchClear.classList.toggle('visible', currentSearch.length > 0);
        renderGrid();
    }, 120);
});

searchClear.addEventListener('click', function() {
    searchInput.value = '';
    currentSearch = '';
    searchClear.classList.remove('visible');
    renderGrid();
    searchInput.focus();
});

// === RENDEROVÁNÍ GRIDU (kombinace filtru + hledání) ===
function renderGrid() {
    booksGrid.innerHTML = '';
    var filtered = booksData.slice(); // kopie pole
    var searchWords = [];

    // Filtr období (přeskočit pro oblíbené)
    if (currentFilter && currentFilter !== 'fav') {
        filtered = filtered.filter(function(b) { return b.obdobi === currentFilter; });
    }

    // Fulltextové hledání — každé slovo musí být někde v textu (AND logika)
    if (currentSearch.length > 0) {
        searchWords = removeDiacritics(currentSearch.toLowerCase()).split(/\s+/).filter(function(w) { return w.length > 0; });
        filtered = filtered.filter(function(b) {
            var text = removeDiacritics(getSearchableText(b));
            return searchWords.every(function(word) {
                return text.indexOf(word) !== -1;
            });
        });

        // Seřadit podle relevance (název > autor > žánr > zbytek)
        filtered.sort(function(a, b) {
            return getRelevanceScore(b, searchWords) - getRelevanceScore(a, searchWords);
        });
    }

    // Filtr oblíbných
    if (currentFilter === 'fav') {
        filtered = filtered.filter(function(b) { return isFavorite(b.id); });
    }

    // Počet výsledků
    if (currentSearch.length > 0 || currentFilter) {
        resultsCount.textContent = 'Zobrazeno ' + filtered.length + ' z ' + booksData.length + ' knih';
    } else {
        resultsCount.textContent = '';
    }

    if (filtered.length === 0) {
        var emptyMsg = currentFilter === 'fav' ? 'Zatím nemáš žádné oblíbené knihy. Klikni na hvězdičku u knihy.' : 'Žádné knihy neodpovídají hledání.';
        booksGrid.innerHTML = '<p style="text-align:center;color:var(--text-secondary);grid-column:1/-1;padding:3rem;font-size:1.05rem;font-weight:500;">' + emptyMsg + '</p>';
        return;
    }

    filtered.forEach(function(book, i) {
        var card = document.createElement('div');
        card.classList.add('book-card');
        card.style.animationDelay = (i * 0.05) + 's';
        var tagColor = obdobiColors[book.obdobi] || '#d4af37';

        // Zvýrazni shodu v názvu a autorovi
        var displayTitle = searchWords.length > 0 ? highlightMatch(book.title, searchWords) : book.title;
        var displayAuthor = searchWords.length > 0 ? highlightMatch(book.author, searchWords) : book.author;

        // Hvězdička oblíbených
        var starClass = isFavorite(book.id) ? 'book-star active' : 'book-star';
        var starFill = isFavorite(book.id) ? 'var(--accent)' : 'none';

        card.innerHTML = '<button class="' + starClass + '" onclick="toggleFavorite(' + book.id + ', event)" aria-label="Oblíbená kniha" title="Přidat/odebrat z oblíbených"><svg width="18" height="18" viewBox="0 0 24 24" fill="' + starFill + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button>' +
            '<div class="book-obdobi-tag" style="background:' + tagColor + '15;color:' + tagColor + ';border-color:' + tagColor + '40">' + obdobiLabels[book.obdobi] + '</div>' +
            '<div class="book-title">' + displayTitle + '</div>' +
            '<div class="book-author">' + displayAuthor + '</div>' +
            '<div class="read-more">Detail knihy \u2192</div>';
        card.addEventListener('click', function() { openDetail(book); });
        booksGrid.appendChild(card);
    });
}

function setFilter(obdobi) {
    currentFilter = obdobi;
    var btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function(btn) {
        btn.classList.remove('active');
        var data = btn.getAttribute('data-obdobi');
        if (data === String(obdobi) || (obdobi === null && data === 'all') || (obdobi === 'fav' && data === 'fav')) {
            btn.classList.add('active');
        }
    });
    renderGrid();
}

// === KVÍZ (10 otázek, kola) ===
var QUIZ_ROUND_SIZE = 10;
var quizScore = { correct: 0, wrong: 0, total: 0 };
var quizRoundResults = []; // pole: true/false pro každou odpověď
var quizAnswered = false;
var currentQuizPool = [];

function generateQuizQuestion() {
    var types = [
        'author', 'genre', 'obdobi', 'theme', 'year',
        'druh', 'smer', 'hlavni_postava', 'vedlejsi_postava',
        'vypravec', 'kniha_od_autora', 'postava_v_dile'
    ];
    var type = types[Math.floor(Math.random() * types.length)];
    
    // Vybíráme knihu z aktuálního fondu (všechny nebo jen oblíbené)
    var book = currentQuizPool[Math.floor(Math.random() * currentQuizPool.length)];
    var question = '';
    var correctAnswer = '';
    var options = [];

    if (type === 'author') {
        question = 'Kdo napsal dílo „' + book.title + '"?';
        correctAnswer = book.author;
        var allAuthors = [];
        booksData.forEach(function(b) {
            if (allAuthors.indexOf(b.author) === -1) allAuthors.push(b.author);
        });
        options = getRandomOptions(allAuthors, correctAnswer, 3);

    } else if (type === 'genre') {
        question = 'Jaký je žánr díla „' + book.title + '"?';
        correctAnswer = book.info.zanr;
        var allGenres = [];
        booksData.forEach(function(b) {
            if (allGenres.indexOf(b.info.zanr) === -1) allGenres.push(b.info.zanr);
        });
        options = getRandomOptions(allGenres, correctAnswer, 3);

    } else if (type === 'obdobi') {
        question = 'Do jakého období patří dílo „' + book.title + '" od ' + book.author + '?';
        correctAnswer = obdobiLabels[book.obdobi];
        var allObdobi = [obdobiLabels[1], obdobiLabels[2], obdobiLabels[3], obdobiLabels[4]];
        options = getRandomOptions(allObdobi, correctAnswer, 3);

    } else if (type === 'theme') {
        question = 'Jaké je hlavní téma díla „' + book.title + '"?';
        correctAnswer = book.temata.hlavni;
        var allThemes = [];
        booksData.forEach(function(b) {
            if (allThemes.indexOf(b.temata.hlavni) === -1) allThemes.push(b.temata.hlavni);
        });
        options = getRandomOptions(allThemes, correctAnswer, 3);

    } else if (type === 'year') {
        question = 'Kdy bylo vydáno dílo „' + book.title + '"?';
        correctAnswer = book.info.vydani;
        var allYears = [];
        booksData.forEach(function(b) {
            if (allYears.indexOf(b.info.vydani) === -1) allYears.push(b.info.vydani);
        });
        options = getRandomOptions(allYears, correctAnswer, 3);

    } else if (type === 'druh') {
        question = 'Jaký je literární druh díla „' + book.title + '"?';
        correctAnswer = book.info.druh;
        var allDruhy = [];
        booksData.forEach(function(b) {
            if (allDruhy.indexOf(b.info.druh) === -1) allDruhy.push(b.info.druh);
        });
        options = getRandomOptions(allDruhy, correctAnswer, 3);

    } else if (type === 'smer') {
        question = 'Jaký literární směr reprezentuje dílo „' + book.title + '"?';
        correctAnswer = book.info.smer;
        var allSmery = [];
        booksData.forEach(function(b) {
            if (allSmery.indexOf(b.info.smer) === -1) allSmery.push(b.info.smer);
        });
        options = getRandomOptions(allSmery, correctAnswer, 3);

    } else if (type === 'hlavni_postava') {
        var hp = book.postavy.hlavni[0];
        question = 'Kdo je hlavní postava díla „' + book.title + '"?';
        correctAnswer = hp.jmeno;
        var allHlavni = [];
        booksData.forEach(function(b) {
            b.postavy.hlavni.forEach(function(p) {
                if (allHlavni.indexOf(p.jmeno) === -1) allHlavni.push(p.jmeno);
            });
        });
        options = getRandomOptions(allHlavni, correctAnswer, 3);

    } else if (type === 'vedlejsi_postava') {
        if (book.postavy.vedlejsi.length > 0) {
            var vp = book.postavy.vedlejsi[Math.floor(Math.random() * book.postavy.vedlejsi.length)];
            question = 'Jakou roli hraje ' + vp.jmeno + ' v díle „' + book.title + '"?';
            correctAnswer = vp.funkce;
            var allFunkce = [];
            booksData.forEach(function(b) {
                b.postavy.vedlejsi.forEach(function(p) {
                    if (allFunkce.indexOf(p.funkce) === -1) allFunkce.push(p.funkce);
                });
            });
            options = getRandomOptions(allFunkce, correctAnswer, 3);
        } else {
            return generateQuizQuestion(); // retry if no secondary chars
        }

    } else if (type === 'vypravec') {
        question = 'Jaká je forma vyprávění v díle „' + book.title + '"?';
        correctAnswer = book.jazyk.vypravec;
        var allVypraveci = [];
        booksData.forEach(function(b) {
            if (allVypraveci.indexOf(b.jazyk.vypravec) === -1) allVypraveci.push(b.jazyk.vypravec);
        });
        options = getRandomOptions(allVypraveci, correctAnswer, 3);

    } else if (type === 'kniha_od_autora') {
        // Reverse: which book did this author write?
        var authorBooks = booksData.filter(function(b) { return b.author === book.author; });
        question = 'Které z těchto děl napsal ' + book.author + '?';
        correctAnswer = book.title;
        var allTitles = [];
        booksData.forEach(function(b) {
            if (b.author !== book.author && allTitles.indexOf(b.title) === -1) allTitles.push(b.title);
        });
        options = getRandomOptions(allTitles.concat([correctAnswer]), correctAnswer, 3);

    } else if (type === 'postava_v_dile') {
        // Reverse: in which book does this character appear?
        var hp2 = book.postavy.hlavni[0];
        question = 'Ve kterém díle se vyskytuje postava ' + hp2.jmeno + '?';
        correctAnswer = book.title;
        var otherTitles = [];
        booksData.forEach(function(b) {
            if (b.title !== book.title && otherTitles.indexOf(b.title) === -1) otherTitles.push(b.title);
        });
        options = getRandomOptions(otherTitles.concat([correctAnswer]), correctAnswer, 3);
    }

    return { question: question, correct: correctAnswer, options: options, book: book };
}

function getRandomOptions(allItems, correct, count) {
    var others = allItems.filter(function(item) { return item !== correct; });
    shuffleArray(others);
    var picked = others.slice(0, count);
    picked.push(correct);
    shuffleArray(picked);
    return picked;
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function renderQuiz() {
    quizAnswered = false;

    // Pokud jsme dosáhli konce kola → ukaž výsledky
    if (quizScore.total >= QUIZ_ROUND_SIZE) {
        renderQuizResults();
        return;
    }

    var q = generateQuizQuestion();
    var questionNum = quizScore.total + 1;
    var isFavOnly = currentQuizPool.length < booksData.length;
    var scopeBadge = isFavOnly ? '<span class="quiz-scope-badge">Pouze oblíbené (' + currentQuizPool.length + ')</span>' : '';

    // Progress bar
    var progressHtml = '<div class="quiz-progress">';
    for (var p = 0; p < QUIZ_ROUND_SIZE; p++) {
        var dotClass = 'quiz-progress-dot';
        if (p < quizRoundResults.length) {
            dotClass += quizRoundResults[p] ? ' answered-correct' : ' answered-wrong';
        } else if (p === quizRoundResults.length) {
            dotClass += ' current';
        }
        progressHtml += '<div class="' + dotClass + '"></div>';
    }
    progressHtml += '</div>';

    var html = '<div class="quiz-header">' +
        '<h2>Kvíz ' + scopeBadge + '</h2>' +
        '<p>Otázka ' + questionNum + ' z ' + QUIZ_ROUND_SIZE + '</p>' +
        '</div>' +
        progressHtml +
        '<div class="quiz-score">' +
        '<div class="quiz-score-item"><div class="quiz-score-number correct">' + quizScore.correct + '</div><div class="quiz-score-label">Správně</div></div>' +
        '<div class="quiz-score-item"><div class="quiz-score-number wrong">' + quizScore.wrong + '</div><div class="quiz-score-label">Špatně</div></div>' +
        '</div>' +
        '<div class="quiz-question-label">Otázka ' + questionNum + '</div>' +
        '<div class="quiz-question">' + q.question + '</div>' +
        '<div class="quiz-options" id="quiz-options">';

    q.options.forEach(function(opt, i) {
        html += '<button class="quiz-option" data-answer="' + escapeHtml(opt) + '" data-correct="' + escapeHtml(q.correct) + '" onclick="answerQuiz(this)">' + opt + '</button>';
    });

    var isLast = (questionNum === QUIZ_ROUND_SIZE);
    var nextLabel = isLast ? 'Zobrazit výsledky' : 'Další otázka →';

    html += '</div>' +
        '<div class="quiz-feedback" id="quiz-feedback"></div>' +
        '<div class="quiz-actions">' +
        '<button class="quiz-btn quiz-btn-secondary" onclick="closeQuiz()">Zavřít</button>' +
        '<button class="quiz-btn quiz-btn-primary" id="quiz-next" onclick="renderQuiz()" style="display:none;">' + nextLabel + '</button>' +
        '</div>';

    quizBody.innerHTML = html;
}

function renderQuizResults() {
    var pct = Math.round((quizScore.correct / QUIZ_ROUND_SIZE) * 100);
    var grade, gradeClass, label;

    if (pct >= 80) { grade = pct + '%'; gradeClass = 'grade-a'; label = 'Výborně!'; }
    else if (pct >= 60) { grade = pct + '%'; gradeClass = 'grade-b'; label = 'Dobře!'; }
    else if (pct >= 40) { grade = pct + '%'; gradeClass = 'grade-c'; label = 'Jde to líp.'; }
    else { grade = pct + '%'; gradeClass = 'grade-d'; label = 'Musíš opakovat!'; }

    // Progress bar finální
    var progressHtml = '<div class="quiz-progress">';
    for (var p = 0; p < QUIZ_ROUND_SIZE; p++) {
        var dotClass = 'quiz-progress-dot';
        if (p < quizRoundResults.length) {
            dotClass += quizRoundResults[p] ? ' answered-correct' : ' answered-wrong';
        }
        progressHtml += '<div class="' + dotClass + '"></div>';
    }
    progressHtml += '</div>';

    var html = '<div class="quiz-header">' +
        '<h2>Výsledky</h2>' +
        '<p>Kolo ' + QUIZ_ROUND_SIZE + ' otázek dokončeno</p>' +
        '</div>' +
        progressHtml +
        '<div class="quiz-result">' +
        '<div class="quiz-result-score ' + gradeClass + '">' + grade + '</div>' +
        '<div class="quiz-result-label">' + label + '</div>' +
        '<div class="quiz-result-sub">' + quizScore.correct + ' správně, ' + quizScore.wrong + ' špatně z ' + QUIZ_ROUND_SIZE + ' otázek</div>' +
        '</div>' +
        '<div class="quiz-actions">' +
        '<button class="quiz-btn quiz-btn-secondary" onclick="closeQuiz()">Zavřít</button>' +
        '<button class="quiz-btn quiz-btn-primary" onclick="startNewRound()">Nové kolo →</button>' +
        '</div>';

    quizBody.innerHTML = html;
}

function startNewRound() {
    quizScore = { correct: 0, wrong: 0, total: 0 };
    quizRoundResults = [];
    
    // Nastavení okruhu otázek podle filtru
    if (currentFilter === 'fav' && favorites.length > 0) {
        currentQuizPool = booksData.filter(function(b) { return isFavorite(b.id); });
    } else {
        currentQuizPool = booksData;
    }
    
    renderQuiz();
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function answerQuiz(btn) {
    if (quizAnswered) return;
    quizAnswered = true;
    quizScore.total++;

    var answer = btn.getAttribute('data-answer');
    var correct = btn.getAttribute('data-correct');
    var isCorrect = (answer === correct);
    var feedback = document.getElementById('quiz-feedback');
    var nextBtn = document.getElementById('quiz-next');

    quizRoundResults.push(isCorrect);

    // Disable all buttons
    var allBtns = document.querySelectorAll('.quiz-option');
    allBtns.forEach(function(b) {
        b.classList.add('disabled');
        if (b.getAttribute('data-answer') === correct) {
            b.classList.add('correct');
        }
    });

    if (isCorrect) {
        quizScore.correct++;
        btn.classList.add('correct');
        feedback.className = 'quiz-feedback correct';
        feedback.textContent = 'Správně! Výborně!';
    } else {
        quizScore.wrong++;
        btn.classList.add('wrong');
        feedback.className = 'quiz-feedback wrong';
        feedback.textContent = 'Špatně. Správná odpověď: ' + correct;
    }

    // Update progress bar
    var dots = document.querySelectorAll('.quiz-progress-dot');
    var currentIdx = quizRoundResults.length - 1;
    if (dots[currentIdx]) {
        dots[currentIdx].className = 'quiz-progress-dot ' + (isCorrect ? 'answered-correct' : 'answered-wrong');
    }

    nextBtn.style.display = 'inline-block';
}

function openQuiz() {
    quizModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    quizToggle.classList.add('active');
    startNewRound();
}

function closeQuiz() {
    quizModal.classList.add('hidden');
    document.body.style.overflow = '';
    quizToggle.classList.remove('active');
}

quizToggle.addEventListener('click', openQuiz);
closeQuizBtn.addEventListener('click', closeQuiz);
quizModal.addEventListener('click', function(e) { if (e.target === quizModal) closeQuiz(); });

// === DETAIL KNIHY ===
function openDetail(book) {
    var ph = book.postavy.hlavni.map(function(p) { return '<strong>' + p.jmeno + '</strong> \u2013 ' + p.vlastnost; }).join('<br>');
    var pv = book.postavy.vedlejsi.map(function(p) { return '<strong>' + p.jmeno + '</strong> \u2013 ' + p.funkce; }).join('<br>');
    var dejH = book.dej.map(function(d) { return '<span class="timeline-step">\u2192 ' + d + '</span>'; }).join('');
    var motH = book.temata.motivy.map(function(m) { return '<span class="motiv-tag">' + m + '</span>'; }).join('');

    var casomistoHtml = '';
    if (book.casoprostor) {
        casomistoHtml =
            '<div class="info-row"><span class="info-label">\uD83D\uDD70 \u010Casoprostor:</span> ' + book.casoprostor + '</div>' +
            '<div class="info-row"><span class="info-label">\uD83D\uDCCD M\u00edsto:</span> ' + book.misto + '</div>';
    }

    var soucasniciHtml = '';
    if (book.soucasnici) {
        var cestiH = book.soucasnici.cesti.map(function(s) { return '<span class="timeline-step">\u2192 ' + s + '</span>'; }).join('');
        var svetH = book.soucasnici.svetovi.map(function(s) { return '<span class="timeline-step">\u2192 ' + s + '</span>'; }).join('');
        soucasniciHtml =
            '<div class="modal-section"><h3>\uD83D\uDC65 Sou\u010dasn\u00edci</h3>' +
            '<p><strong>\u010Ce\u0161t\u00ed:</strong></p><div class="timeline">' + cestiH + '</div>' +
            '<p style="margin-top:1rem;"><strong>Sv\u011btov\u00ed:</strong></p><div class="timeline">' + svetH + '</div></div>';
    }

    modalBody.innerHTML =
        '<h2 class="modal-title">' + book.title + '</h2>' +
        '<div class="modal-author">' + book.author + '</div>' +
        '<div class="modal-section info-grid"><h3>\uD83D\uDCCB Z\u00e1kladn\u00ed informace</h3>' +
        '<div class="info-row"><span class="info-label">Autor:</span> ' + book.info.narodnost + ', ' + book.info.roky + '</div>' +
        '<div class="info-row"><span class="info-label">Sm\u011br:</span> ' + book.info.smer + '</div>' +
        '<div class="info-row"><span class="info-label">Vyd\u00e1n\u00ed:</span> ' + book.info.vydani + '</div>' +
        '<div class="info-row"><span class="info-label">Druh:</span> ' + book.info.druh + '</div>' +
        '<div class="info-row"><span class="info-label">\u017d\u00e1nr:</span> ' + book.info.zanr + '</div></div>' +
        '<div class="modal-section"><h3>\uD83D\uDCD6 D\u011bj (timeline)</h3>' + casomistoHtml + '<div class="timeline">' + dejH + '</div></div>' +
        '<div class="modal-section"><h3>\uD83D\uDC64 Postavy</h3><p>' + ph + '<br>' + pv + '</p></div>' +
        '<div class="modal-section"><h3>\uD83D\uDCA1 T\u00e9mata a motivy</h3><p><strong>Hlavn\u00ed t\u00e9ma:</strong> ' + book.temata.hlavni + '</p><div class="motivy-container">' + motH + '</div></div>' +
        '<div class="modal-section"><h3>\u270D\uFE0F Jazyk a styl</h3>' +
        '<div class="info-row"><span class="info-label">Vyprav\u011b\u010d:</span> ' + book.jazyk.vypravec + '</div>' +
        '<div class="info-row"><span class="info-label">Prost\u0159edky:</span> ' + book.jazyk.prostredky + '</div>' +
        '<div class="info-row"><span class="info-label">Tropus:</span> ' + book.jazyk.tropus + '</div>' +
        '<div class="info-row"><span class="info-label">Figura:</span> ' + book.jazyk.figura + '</div></div>' +
        '<div class="modal-section"><h3>\uD83C\uDF0D Kontext</h3>' +
        '<div class="info-row"><span class="info-label">Liter\u00e1rn\u00ed:</span> ' + book.kontext.literarni + '</div>' +
        '<div class="info-row"><span class="info-label">Historick\u00fd:</span> ' + book.kontext.historicky + '</div>' +
        '<div class="info-row"><span class="info-label">Inspirace:</span> ' + book.kontext.inspirace + '</div>' +
        '<div class="info-row"><span class="info-label">Srov\u00e1n\u00ed:</span> ' + book.kontext.srovnani.join(', ') + '</div></div>' +
        soucasniciHtml;

    bookModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    bookModal.classList.add('hidden');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
bookModal.addEventListener('click', function(e) { if (e.target === bookModal) closeModal(); });
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!quizModal.classList.contains('hidden')) { closeQuiz(); return; }
        if (!bookModal.classList.contains('hidden')) closeModal();
    }
});
document.addEventListener('DOMContentLoaded', function() { 
    renderGrid(); 
});

// Back to top visibility
window.addEventListener('scroll', function() {
    var btn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});
