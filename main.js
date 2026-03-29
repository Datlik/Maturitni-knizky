const booksData = [
  {
    id: 1, title: "Bílá nemoc", author: "Karel Čapek",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1890-1938", smer: "DEMOKRATICKÝ PROUD, meziválečná literatura", vydani: "1937", druh: "DRAMA", zanr: "Antiutopická TRAGÉDIE, 3 jednání" },
    dej: ["Svět zachvátí smrtelná BÍLÁ NEMOC","Dr. GALÉN objeví JEDINÝ LÉK","Léčí jen CHUDÉ, žádá KONEC VÁLKY","MARŠÁL chystá válečné TAŽENÍ","Maršál onemocní, SLÍBÍ MÍR","Galén ZABIT davem, lék ZTRACEN"],
    postavy: { hlavni: [{jmeno:"Dr. Galén",vlastnost:"OBĚTAVÝ humanista"},{jmeno:"Maršál",vlastnost:"DIKTÁTORSKÝ válečník"}], vedlejsi: [{jmeno:"Baron Krüg",funkce:"ZBROJAŘ, otec nemocné dcery"},{jmeno:"Dvorní rada Sigelius",funkce:"KARIÉRISTA, přisvojuje si zásluhy"}] },
    temata: { hlavni: "VAROVÁNÍ před fašismem a válkou", motivy: ["NEMOC jako symbol zla","ODPOVĚDNOST jedince","MANIPULACE davem","MOC vs. MORÁLKA"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, scénické poznámky", prostredky: "Publicistický styl, ŘEČNICKÉ otázky", tropus: "Metafora: Bílá nemoc = SYMBOL fašismu", figura: "Kontrast: Galénův MÍR x Maršálova VÁLKA" },
    kontext: { literarni: "Česká MEZIVÁLEČNÁ próza, demokratický proud", historicky: "Reakce na NÁSTUP nacismu v Evropě (1937)", inspirace: "Inspirováno hrozbou 2. SVĚTOVÉ VÁLKY", srovnani: ["R.U.R. (Čapek)","Válka s mloky (Čapek)"] }
  },
  {
    id: 2, title: "Věc Makropulos", author: "Karel Čapek",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1890-1938", smer: "DEMOKRATICKÝ PROUD, meziválečná literatura", vydani: "1922", druh: "DRAMA", zanr: "Filozofická KOMEDIE, 3 jednání" },
    dej: ["Spor GREGOR vs. PRUS trvá 100 let","Zpěvačka MARTY zná tajné DŮKAZY","Prozradí se: je ELINA MAKROPULOS (300 let)","Požila ELIXÍR MLÁDÍ od otce alchymisty","Život bez SMRTI ztratil veškerý SMYSL","SPÁLÍ recept, přijímá SMRTELNOST"],
    postavy: { hlavni: [{jmeno:"Emilia Marty",vlastnost:"CYNICKÁ, znuděná nesmrtelností"},{jmeno:"Albert Gregor",vlastnost:"ZAMILOVANÝ, naivní mladík"}], vedlejsi: [{jmeno:"Dr. Kolenatý",funkce:"ADVOKÁT v dědickém sporu"},{jmeno:"Jaroslav Prus",funkce:"PROTISTRANA ve sporu"}] },
    temata: { hlavni: "SMRT dává životu SMYSL", motivy: ["NESMRTELNOST jako prokletí","NUDA věčného života","STÁŘÍ vs. mládí","IDENTITA a přetvářka"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, scénické poznámky", prostredky: "Konverzační styl, FILOZOFICKÉ dialogy", tropus: "Metafora: elixír = TOUHA po věčnosti", figura: "Gradace: postupné ODHALENÍ identity Marty" },
    kontext: { literarni: "Česká MEZIVÁLEČNÁ próza, filozofická dramata", historicky: "Poválečné HLEDÁNÍ smyslu existence (1922)", inspirace: "Součást UTOPICKÉ trilogie s R.U.R.", srovnani: ["R.U.R. (Čapek)","Faust (Goethe)"] }
  },
  {
    id: 3, title: "Krysař", author: "Viktor Dyk",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1877-1931", smer: "GENERACE BUŘIČŮ, novoromantismus", vydani: "1915", druh: "EPIKA", zanr: "Novela" },
    dej: ["KRYSAŘ přichází zbavit Hammeln KRYS","Zamiluje se do krásné AGNES","Konšelé ho PODVEDOU, nevyplatí odměnu","Agnes OTĚHOTNÍ s Kristiánem","Agnes odchází do hory KOPPEL (smrt)","Krysař odvede VŠECHNY do propasti"],
    postavy: { hlavni: [{jmeno:"Krysař",vlastnost:"SAMOTÁŘSKÝ, výjimečný cizinec"},{jmeno:"Agnes",vlastnost:"KRÁSNÁ, ale slabá dívka"}], vedlejsi: [{jmeno:"Kristián",funkce:"ZÁLETNÍK, svede Agnes"},{jmeno:"Jörgen",funkce:"BLÁZEN - jediný přeživší"}] },
    temata: { hlavni: "KONFLIKT jedince a maloměšťácké společnosti", motivy: ["PÍŠŤALA jako symbol moci","Hora KOPPEL = smrt/vykoupení","HAMIŽNOST měšťanů","LÁSKA jako jediná hodnota"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, vševědoucí", prostredky: "Úsporný styl, KRÁTKÉ věty, symboly", tropus: "Symbol: píšťala = MOC nad davem", figura: "Opakování: motiv hory KOPPEL" },
    kontext: { literarni: "Generace BUŘIČŮ, vliv DEKADENCE", historicky: "Vznik za 1. SVĚTOVÉ VÁLKY (1915)", inspirace: "Středověká POVĚST o krysaři z Hammelnu", srovnani: ["Milá sedmi loupežníků (Dyk)","Démoni (Dostojevskij)"] }
  },
  {
    id: 4, title: "Malý princ", author: "Antoine de Saint-Exupéry",
    obdobi: 3,
    info: { narodnost: "Francouzský", roky: "1900-1944", smer: "EXISTENCIALISMUS, filozofická próza", vydani: "1943", druh: "EPIKA", zanr: "Filozofická POHÁDKA" },
    dej: ["PILOT havaruje na SAHAŘE","Potká MALÉHO PRINCE z planetky B-612","Princ vypráví o CESTĚ po planetách","Setkává PODIVNÉ dospělé (král, domýšlivec...)","Na Zemi se LIŠKA učí o přátelství","Princ se nechá UŠTKNOUT, vrací se domů"],
    postavy: { hlavni: [{jmeno:"Malý princ",vlastnost:"NEVINNÝ, moudrý dětský pohled"},{jmeno:"Pilot",vlastnost:"DOSPĚLÝ hledající ztracené dětství"}], vedlejsi: [{jmeno:"Liška",funkce:"UČITELKA přátelství a zodpovědnosti"},{jmeno:"Růže",funkce:"SYMBOL lásky a pýchy"}] },
    temata: { hlavni: "Správně vidíme jen SRDCEM", motivy: ["DĚTSTVÍ vs. dospělost","PŘÁTELSTVÍ a zodpovědnost","OSAMĚLOST","RŮŽE = křehká láska"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (pilot)", prostredky: "Jednoduchý POETICKÝ jazyk, alegorie", tropus: "Personifikace: Ochočit = vytvořit POUTA", figura: "Anafora: opakování - dospělí NIKDY..." },
    kontext: { literarni: "Francouzský EXISTENCIALISMUS 20. století", historicky: "Napsáno v USA v EXILU za 2. sv. války", inspirace: "AUTOBIOGRAFICKÉ - autor byl sám pilot", srovnani: ["Cizinec (Camus)","Alenka v říši divů (Carroll)"] }
  },
  {
    id: 5, title: "Tyrolské elegie", author: "Karel Havlíček Borovský",
    obdobi: 2,
    info: { narodnost: "Český", roky: "1821-1856", smer: "NÁRODNÍ OBROZENÍ, realismus 19. st.", vydani: "1861 (psáno 1852)", druh: "LYRIKA", zanr: "Satirická BÁSEŇ" },
    dej: ["Havlíček ZATČEN doma v noci tajně","PŘEVOZ v kočáru přes Alpy do Brixenu","Policejní hlídka NESCHOPNÁ a vystrašená","Koně se SPLAŠÍ v temném lese","Hlídka VYSKÁČE, Havlíček řídí sám","Ironický VÝSMĚCH rakouské zvůli"],
    postavy: { hlavni: [{jmeno:"Karel Havlíček",vlastnost:"STATEČNÝ satirik a novinář"}], vedlejsi: [{jmeno:"Policejní hlídka",funkce:"NESCHOPNÍ strážci, terč výsměchu"},{jmeno:"Dedera (komisař)",funkce:"PŘEDSTAVITEL rakouské moci"}] },
    temata: { hlavni: "VÝSMĚCH neschopné rakouské vládě", motivy: ["CENZURA a nesvoboda","HUMOR jako zbraň","NOC = tajemství moci","EXIL jako trest"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (sám Havlíček)", prostredky: "SATIRICKÝ tón, ironie, lidový jazyk", tropus: "Ironie: Vlast MILUJÍCÍ - o vládě", figura: "Anafora: opakované zvolání Ach..." },
    kontext: { literarni: "NÁRODNÍ OBROZENÍ, 4. fáze, realismus", historicky: "Bachovský ABSOLUTISMUS, cenzura tisku", inspirace: "Vlastní DEPORTACE do Brixenu (1851)", srovnani: ["Král Lávra (Havlíček)","Epigramy (Havlíček)"] }
  },
  {
    id: 6, title: "Stařec a moře", author: "Ernest Hemingway",
    obdobi: 3,
    info: { narodnost: "Americký", roky: "1899-1961", smer: "ZTRACENÁ GENERACE, realismus", vydani: "1952", druh: "EPIKA", zanr: "Novela" },
    dej: ["Santiago 84 DNÍ bez úlovku","Vyjíždí SAM daleko na moře","Chytí obrovského MARLÍNA","Třídenní VYČERPÁVAJÍCÍ boj s rybou","ŽRALOCI napadnou úlovek cestou zpět","Dorazí jen s KOSTROU, ale získá respekt"],
    postavy: { hlavni: [{jmeno:"Santiago",vlastnost:"HOUŽEVNATÝ, hrdý kubánský rybář"}], vedlejsi: [{jmeno:"Manolin",funkce:"CHLAPEC, věrný přítel a obdivovatel"}] },
    temata: { hlavni: "Člověk může být ZNIČEN, ne PORAŽEN", motivy: ["MOŘE jako soupeř i přítel","OSAMĚLOST hrdiny","LVI na pláži = mládí","MARLÍN = ušlechtilý protivník"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, polopřímá řeč", prostredky: "STROHÝ styl, krátké věty (ICEBERG)", tropus: "Symbol: marlín = NEDOSAŽITELNÝ ideál", figura: "Vnitřní monolog: Rybo, UMŘEŠ..." },
    kontext: { literarni: "ZTRACENÁ GENERACE americké literatury", historicky: "Nobelova cena 1954, KUBA 50. let", inspirace: "Hemingwayovy ZKUŠENOSTI s rybařením", srovnani: ["Sbohem, armádo (Hemingway)","Moby Dick (Melville)"] }
  },
  {
    id: 7, title: "Ostře sledované vlaky", author: "Bohumil Hrabal",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1914-1997", smer: "ČESKÁ POVÁLEČNÁ PRÓZA", vydani: "1965", druh: "EPIKA", zanr: "Novela" },
    dej: ["Elév HRMA nastupuje na malou STANICI","Trpí SEXUÁLNÍ nejistotou, pokus o sebevraždu","Výpravčí HUBIČKA - aféra s razítky","Hrma prožije MILOSTNÉ zasvěcení s odbojářkou","Rozhodne se ZNIČIT německý muniční vlak","Vlak VYHODÍ do vzduchu, sám ZAHYNE"],
    postavy: { hlavni: [{jmeno:"Miloš Hrma",vlastnost:"NESMĚLÝ elév hledající dospělost"}], vedlejsi: [{jmeno:"Výpravčí Hubička",funkce:"SUKNIČKÁŘ, vzor sebejistoty"},{jmeno:"Zdenička Svatá",funkce:"TELEGRAFISTKA, oběť razítkování"}] },
    temata: { hlavni: "DOSPÍVÁNÍ malého člověka k hrdinství", motivy: ["SEXUALITA jako cesta k dospělosti","VLAKY = symbol dějin","BANALITA vs. hrdinství","SMRT jako paradoxní vítězství"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (Hrma)", prostredky: "HOVOROVÝ jazyk, humor, pábení", tropus: "Symbol: vlaky = NEÚPROSNÝ chod dějin", figura: "Kontrast: BANÁLNÍ stanice x VÁLEČNÉ drama" },
    kontext: { literarni: "Česká PRÓZA 60. let, nová vlna", historicky: "Okupace, PROTEKTORÁT, rok 1945", inspirace: "Hrabalovy ZKUŠENOSTI z nádraží", srovnani: ["Obsluhoval jsem angl. krále (Hrabal)","Žert (Kundera)"] }
  },
  {
    id: 8, title: "Vražda v Orient expresu", author: "Agatha Christie",
    obdobi: 3,
    info: { narodnost: "Anglická", roky: "1890-1976", smer: "DETEKTIVNÍ literatura 20. st.", vydani: "1934", druh: "EPIKA", zanr: "Detektivní ROMÁN" },
    dej: ["POIROT cestuje Orient expresem","Vlak UVÍZNE ve sněhové závěji","Cestující RATCHETT nalezen ZAVRAŽDĚN","Poirot vyslýchá 12 PODEZŘELÝCH cestujících","Každý má ALIBI, stopy si ODPORUJÍ","VŠECH 12 je vrahů - SPOLEČNÁ pomsta"],
    postavy: { hlavni: [{jmeno:"Hercule Poirot",vlastnost:"GENIÁLNÍ belgický detektiv"}], vedlejsi: [{jmeno:"Ratchett (Cassetti)",funkce:"OBĚŤ - ve skutečnosti únosce"},{jmeno:"12 cestujících",funkce:"VRAZI z rodinné pomsty"}] },
    temata: { hlavni: "SPRAVEDLNOST vs. zákon", motivy: ["POMSTA za únos dítěte","ZDÁNÍ klame","VLAK = uzavřený prostor","KOLEKTIVNÍ vina"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, fokalizace Poirot", prostredky: "Logické DEDUKCE, výslechy, dialogy", tropus: "Metafora: vlak = IZOLOVANÝ svět", figura: "Řečnické otázky Poirota při VÝSLECHU" },
    kontext: { literarni: "Zlatý věk DETEKTIVKY (1920-1940)", historicky: "Meziválečné období, luxusní CESTOVÁNÍ", inspirace: "Christieho vlastní CESTA Orient expresem", srovnani: ["Deset malých černoušků (Christie)","Pes baskervillský (Doyle)"] }
  },
  {
    id: 9, title: "Saturnin", author: "Zdeněk Jirotka",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1911-2003", smer: "Česká HUMORISTICKÁ próza", vydani: "1942", druh: "EPIKA", zanr: "Humoristický ROMÁN" },
    dej: ["Pán JIŘÍ si najme sluhu SATURNINA","Saturnin působí KATASTROFY svou iniciativou","Příjezd otravné TETY KATEŘINY s Miloušem","Výlet na dědečkovu CHATU bez mostu","Saturnin ZACHRÁNÍ situaci při povodni","Jiří získá slečnu BARBORU díky Saturninovi"],
    postavy: { hlavni: [{jmeno:"Saturnin",vlastnost:"VYNALÉZAVÝ, drzý, suchý humor"},{jmeno:"Pan Jiří",vlastnost:"POHODLNÝ, nesmělý vypravěč"}], vedlejsi: [{jmeno:"Teta Kateřina",funkce:"PROTIVNÁ příbuzná, antagonistka"},{jmeno:"Slečna Barbora",funkce:"KRÁSNÁ, inteligentní láska Jiřího"}] },
    temata: { hlavni: "HUMOR jako lék na šedou dobu", motivy: ["SLUHA chytřejší než pán","ABSURDNÍ situace","LÁSKA skrz překážky","RODINA a její konflikty"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (pan Jiří)", prostredky: "SUCHÝ humor, anglický styl, ironie", tropus: "Litotes: Saturnin není DOCELA normální", figura: "Parenteze: odbočky a komentáře VYPRAVĚČE" },
    kontext: { literarni: "Česká HUMORISTICKÁ tradice za protektorátu", historicky: "Napsáno za OKUPACE jako únik od reality", inspirace: "Inspirován anglickým humorem (WODEHOUSE)", srovnani: ["Bylo nás pět (Poláček)","Tři muži ve člunu (Jerome)"] }
  },
  {
    id: 10, title: "Lakomec", author: "Molière",
    obdobi: 1,
    info: { narodnost: "Francouzský", roky: "1622-1673", smer: "KLASICISMUS 17. století", vydani: "1668", druh: "DRAMA", zanr: "Charakterová KOMEDIE, 5 jednání" },
    dej: ["HARPAGON posedlý lakotou, schová POKLAD","Syn KLEANT miluje chudou MARIANU","Harpagon chce Marianu za ŽENU sám","Sluha Čipera UKRADNE zakopanou truhlu","Harpagon obviní Valéra - NEDOROZUMĚNÍ","Anselm = otec Valéra i Mariany, VŠE se vyřeší"],
    postavy: { hlavni: [{jmeno:"Harpagon",vlastnost:"PATOLOGICKY lakomý otec"}], vedlejsi: [{jmeno:"Kleant",funkce:"SYN, zamilovaný do Mariany"},{jmeno:"Eliška",funkce:"DCERA, miluje Valéra"},{jmeno:"Valér",funkce:"Eliškin milý, syn Anselma"}] },
    temata: { hlavni: "LAKOTA ničí mezilidské vztahy", motivy: ["PENÍZE nad láskou","GENERAČNÍ konflikt otec-děti","PŘETVÁŘKA služebníků","SŇATEK z rozumu vs. z lásky"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, scénické poznámky", prostredky: "Komické SITUACE, qui pro quo, hyperbola", tropus: "Hyperbola: Harpagonova MÁ TRUHLIČKO!", figura: "Anafora: opak. výkřiků ZLODĚJI! VRAZI!" },
    kontext: { literarni: "Francouzský KLASICISMUS, pravidlo 3 jednot", historicky: "Doba Ludvíka XIV., ABSOLUTISMUS", inspirace: "Plautova KOMEDIE Aulularia (antika)", srovnani: ["Tartuffe (Molière)","Zdravý nemocný (Molière)"] }
  },
  {
    id: 11, title: "Balady a romance", author: "Jan Neruda",
    obdobi: 2,
    info: { narodnost: "ČESKÁ", roky: "1834-1891", smer: "ČESKÝ REALISMUS, generace MÁJOVCŮ", vydani: "VZNIKU a VYDÁNÍ 1883", druh: "LYRICKO-EPICKÁ", zanr: "Básnická sbírka, BALADY a ROMANCE" },
    dej: ["Ukřižování JEŽÍŠE, snaha o VYLÉČENÍ", "SMRTKA naláká těžce nemocné DÍTĚ", "Zloděj JOHN zaviní smrt svého ZETĚ", "Svatý PETR sní o NAROZENÍ Páně", "JEŽÍŠ zázračně promění VODU ve VÍNO"],
    postavy: { hlavni: [{jmeno:"JEŽÍŠ KRISTUS",vlastnost:"Symbol LÁSKY a ODPUŠTĚNÍ"},{jmeno:"KAREL IV.",vlastnost:"MOUDRÝ a spravedlivý VLADAŘ"}], vedlejsi: [{jmeno:"Rytíř PALEČEK",funkce:"VĚRNÝ, chce probouzet NA JAŘE"},{jmeno:"SMRTKA",funkce:"ODVÁDÍ trpící dítě do NEBE"}] },
    temata: { hlavni: "KONTRAST tradičních hodnot a LIDSKÝCH SLABOSTÍ", motivy: ["KŘESŤANSKÁ VÍRA a biblické LEGENDY","VLASTENECTVÍ a národní HRDOST","SMRT a lidský OSUD","VINA a spravedlivý TREST"] },
    jazyk: { vypravec: "ER-FORMA, vyprávění ve 3. OSOBĚ", prostredky: "ARCHAISMY, HOVOROVÝ jazyk, METAFORY, INVERZE", tropus: "Přívlastek: „SMAVÝ REK“ rytíř Paleček", figura: "Inverze: „ZVĚDAVY zas k oknu obracejí TVÁŘ“" },
    kontext: { literarni: "GENERACE MÁJOVCŮ, 2. polovina 19. STOLETÍ", historicky: "RAKOUSKÝ ABSOLUTISMUS a BACHOVA přísná CENZURA", inspirace: "Láska k MATCE a cestování AUTORA", srovnani: ["Básnická sbírka KYTICE (Karel Jaromír Erben)"] }
  },
  {
    id: 12, title: "Farma zvířat", author: "George Orwell",
    obdobi: 3,
    info: { narodnost: "Anglický", roky: "1903-1950", smer: "DYSTOPICKÁ literatura 20. st.", vydani: "1945", druh: "EPIKA", zanr: "Alegorická BAJKA / antiutopie" },
    dej: ["Zvířata VYŽENOU farmáře Jonese","Ustanoví 7 PŘIKÁZÁNÍ rovnosti","Prasata převezmou VEDENÍ (Napoleon)","Kuliš VYHNÁN, Napoleon vládne terorem","Přikázání postupně MĚNĚNA ve prospěch prasat","Prasata NEROZPOZNATELNÁ od lidí"],
    postavy: { hlavni: [{jmeno:"Napoleon",vlastnost:"LSTIVÝ diktátor (Stalin)"}], vedlejsi: [{jmeno:"Boxer",funkce:"VĚRNÝ, naivní dělník"},{jmeno:"Kuliš",funkce:"IDEALISTA vyhnán (Trockij)"}] },
    temata: { hlavni: "TOTALITARISMUS a zneužití moci", motivy: ["MANIPULACE propagandou","ROVNOST jen na papíře","PSI = tajná policie","PŘEPISOVÁNÍ dějin"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, vševědoucí", prostredky: "ALEGORICKÝ styl, jednoduchý jazyk", tropus: "Alegorie: farma = SOVĚTSKÝ SVAZ", figura: "Gradace: postupná ZMĚNA přikázání" },
    kontext: { literarni: "Anglická DYSTOPICKÁ próza 20. st.", historicky: "Kritika STALINISMU a SSSR", inspirace: "Orwellovy zkušenosti ze ŠPANĚLSKA", srovnani: ["1984 (Orwell)","Konec civilizace (Huxley)"] }
  },
  {
    id: 13, title: "Bylo nás pět", author: "Karel Poláček",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1892-1945", smer: "Česká MEZIVÁLEČNÁ próza", vydani: "1946 (psáno 1943)", druh: "EPIKA", zanr: "Humoristický ROMÁN" },
    dej: ["Péťa BAJZA vypráví o partě KLUKŮ","Bitvy s rivalskou JEŠÍNOVOU bandou","Éda KEMLINK - podnikavý kamarád","Dobrodružství s INDIÁNY a výpravami","Pan KEMLINK boří autoritu dospělých","IDYLICKÁ vzpomínka na dětství v městečku"],
    postavy: { hlavni: [{jmeno:"Péťa Bajza",vlastnost:"ZVÍDAVÝ vypravěč, syn obchodníka"}], vedlejsi: [{jmeno:"Éda Kemlink",funkce:"PODNIKAVÝ, vůdce party"},{jmeno:"Zilvar",funkce:"TICHÝ a věrný kamarád"}] },
    temata: { hlavni: "DĚTSTVÍ jako ztracený ráj", motivy: ["PŘÁTELSTVÍ party kluků","DOSPĚLÍ očima dětí","MALOMĚSTO a jeho figurky","HRA a fantazie"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (Péťa)", prostredky: "DĚTSKÝ naivní jazyk, humor, ironie", tropus: "Ironie: otec je VELMI moudrý", figura: "Opakování: ustálené FRÁZE otce" },
    kontext: { literarni: "Česká HUMORISTICKÁ próza 30. let", historicky: "Psáno v TEREZÍNĚ před smrtí autora", inspirace: "Poláčkovo DĚTSTVÍ v Rychnově n. Kn.", srovnani: ["Saturnin (Jirotka)","Tom Sawyer (Twain)"] }
  },
  {
    id: 14, title: "Piková dáma", author: "Alexandr Sergejevič Puškin",
    obdobi: 2,
    info: { narodnost: "Ruský", roky: "1799-1837", smer: "ROMANTISMUS s prvky realismu", vydani: "1834", druh: "EPIKA", zanr: "Novela" },
    dej: ["Důstojník HERMANN touží po BOHATSTVÍ","Zjistí tajemství STARÉ hraběnky (3 karty)","VNIKNE k hraběnce, ta umírá STRACHEM","Přízrak hraběnky mu prozradí: 3, 7, ESO","Dvakrát VYHRAJE, ale třetí karta...","Místo esa vytáhne PIKOVOU DÁMU - zešílí"],
    postavy: { hlavni: [{jmeno:"Hermann",vlastnost:"CHAMTIVÝ, posedlý hazardem"}], vedlejsi: [{jmeno:"Stará hraběnka",funkce:"STRÁŽKYNĚ tajemství karet"},{jmeno:"Líza",funkce:"VYUŽITÁ schovanka hraběnky"}] },
    temata: { hlavni: "CHAMTIVOST vede k záhubě", motivy: ["HAZARD jako posedlost","NADPŘIROZENO a osud","PIKOVÁ DÁMA = symbol trestu","PENÍZE vs. láska"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba", prostredky: "Úsporný ROMANTICKÝ styl, napětí", tropus: "Symbol: piková dáma = OSUDOVÝ trest", figura: "Gradace: stupňování NAPĚTÍ u karet" },
    kontext: { literarni: "Ruský ROMANTISMUS přecházející v realismus", historicky: "Carské RUSKO 30. let 19. století", inspirace: "Puškinova znalost PETROHRADSKÉ aristokracie", srovnani: ["Evžen Oněgin (Puškin)","Hráč (Dostojevskij)"] }
  },
  {
    id: 15, title: "Petr a Lucie", author: "Romain Rolland",
    obdobi: 3,
    info: { narodnost: "Francouzský", roky: "1866-1944", smer: "HUMANISMUS, protiválečná próza", vydani: "1920", druh: "EPIKA", zanr: "Protiválečná NOVELA" },
    dej: ["PETR potká LUCII při náletu v metru","Oba hledají ÚNIK z hrůz 1. sv. války","Postupně se do sebe ZAMILUJÍ","Lucie je CHUDÁ malířka, Petr z buržoazie","Plánují SPOLEČNOU budoucnost po válce","Na Velký pátek oba ZAHYNOU v kostele"],
    postavy: { hlavni: [{jmeno:"Petr",vlastnost:"CITLIVÝ student, odpůrce války"},{jmeno:"Lucie",vlastnost:"NĚŽNÁ chudá malířka"}], vedlejsi: [{jmeno:"Filip (bratr Petra)",funkce:"VOJÁK, cynický realista"}] },
    temata: { hlavni: "LÁSKA jako jediná hodnota proti válce", motivy: ["VÁLKA ničí nevinné","MLÁDÍ zmařené válkou","UMĚNÍ jako útěk","SMRT milenců = marnost války"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, lyrizovaná próza", prostredky: "POETICKÝ jazyk, kontrasty, symboly", tropus: "Symbol: kostel = FALEŠNÉ útočiště", figura: "Kontrast: LÁSKA x válečná ZKÁZA" },
    kontext: { literarni: "Francouzský HUMANISMUS, Nobelova cena 1915", historicky: "1. SVĚTOVÁ VÁLKA, bombardování Paříže", inspirace: "Rollandův PACIFISMUS a odpor k válce", srovnani: ["Na západní frontě klid (Remarque)","Romeo a Julie (Shakespeare)"] }
  },
  {
    id: 16, title: "Romeo a Julie", author: "William Shakespeare",
    obdobi: 1,
    info: { narodnost: "Anglický", roky: "1564-1616", smer: "RENESANCE, alžbětinské drama", vydani: "1597", druh: "DRAMA", zanr: "Milostná TRAGÉDIE, 5 jednání" },
    dej: ["Rody MONTEKŮ a KAPULETŮ se nenávidí","Romeo a Julie se ZAMILUJÍ na plese","Tajně se ODDAJÍ (bratr Vavřinec)","Romeo zabije TYBALTA, musí do vyhnanství","Julie předstírá SMRT uspávacím lektvarem","Romeo se OTRÁVÍ, Julie se PROBODNE"],
    postavy: { hlavni: [{jmeno:"Romeo",vlastnost:"VÁŠNIVÝ mladý Montek"},{jmeno:"Julie",vlastnost:"ODVÁŽNÁ mladá Kapuletová"}], vedlejsi: [{jmeno:"Bratr Vavřinec",funkce:"MNICH, tajně je oddá"},{jmeno:"Tybalt",funkce:"AGRESIVNÍ bratranec Julie"}] },
    temata: { hlavni: "LÁSKA silnější než nenávist rodů", motivy: ["OSUD a předurčení","NENÁVIST rodů","MLÁDÍ vs. stará generace","SMRT jako sjednocení"] },
    jazyk: { vypravec: "DIALOGICKÁ drama, BLANKVERS", prostredky: "Veršovaný JAZYK, monology, slovní hříčky", tropus: "Metafora: Julie je SLUNCE", figura: "Oxymóron: krásná PŘÍŠERO, andělský ďáble" },
    kontext: { literarni: "Anglická RENESANCE, alžbětinské divadlo", historicky: "Doba královny ALŽBĚTY I. (16. st.)", inspirace: "Italská NOVELA z 15. století", srovnani: ["Hamlet (Shakespeare)","Petr a Lucie (Rolland)"] }
  },
  {
    id: 17, title: "Vyšetřování ztráty třídní knihy", author: "Ladislav Smoljak, Zdeněk Svěrák",
    obdobi: 4,
    info: { narodnost: "Čeští", roky: "Smoljak 1931-2010, Svěrák *1936", smer: "DIVADLO Járy Cimrmana", vydani: "1967", druh: "DRAMA", zanr: "Mystifikační KOMEDIE" },
    dej: ["PŘEDNÁŠKA o géniovi Járovi Cimrmanovi","Cimrman údajně vynalezl PEDAGOGICKÉ metody","Hra: INSPEKTOR přijde na venkovskou školu","Zjišťuje ZTRÁTU třídní knihy","Absurdní VÝSLECHY učitelů a žáků","Třídní kniha NENALEZENA, chaos pokračuje"],
    postavy: { hlavni: [{jmeno:"Inspektor",vlastnost:"BYROKRATICKÝ úředník"}], vedlejsi: [{jmeno:"Učitelé",funkce:"NESCHOPNÍ pedagogové"},{jmeno:"Přednášející",funkce:"CIMRMANOLOGOVÉ v semináři"}] },
    temata: { hlavni: "SATIRA byrokracie a školství", motivy: ["MYSTIFIKACE génia Cimrmana","ABSURDITA úřadů","HUMOR jako kritika systému","PAPÍR důležitější než učení"] },
    jazyk: { vypravec: "DIALOGICKÁ forma + přednáškový monolog", prostredky: "SUCHÝ humor, mystifikace, nonsens", tropus: "Ironie: Cimrman PŘEDBĚHL svou dobu", figura: "Nonsensová GRADACE absurdních důkazů" },
    kontext: { literarni: "Divadlo Járy CIMRMANA, česká komedie", historicky: "60. léta, UVOLNĚNÍ v kultuře (před 1968)", inspirace: "Tradice českého DADAISMU a absurdity", srovnani: ["Dobytí sev. pólu (Smoljak/Svěrák)","Hospoda Na mýtince (Smoljak/Svěrák)"] }
  },
  {
    id: 18, title: "O myších a lidech", author: "John Steinbeck",
    obdobi: 3,
    info: { narodnost: "Americký", roky: "1902-1968", smer: "AMERICKÝ realismus, sociální próza", vydani: "1937", druh: "EPIKA", zanr: "Sociální NOVELA" },
    dej: ["George a Lennie hledají PRÁCI na farmách","Sní o vlastním RANČI s králíky","Lennie je SILNÝ ale mentálně zaostalý","Na farmě Lennie nechtěně ZABIJE štěně","Omylem ZLOMÍ vaz ženě majitelova syna","George Lennieho ZASTŘELÍ z milosrdenství"],
    postavy: { hlavni: [{jmeno:"George Milton",vlastnost:"CHYTRÝ, ochranitelský přítel"},{jmeno:"Lennie Small",vlastnost:"OBŘÍ, dobrosrdečný, mentálně zaostalý"}], vedlejsi: [{jmeno:"Slim",funkce:"MOUDRÝ kovboj, morální autorita"},{jmeno:"Curleyova žena",funkce:"OSAMĚLÁ, nešťastná oběť"}] },
    temata: { hlavni: "ZNIČENÍ amerického snu bezmocných", motivy: ["SEN o vlastním ranči","OSAMĚLOST tuláků","SÍLA vs. křehkost","MILOSRDENSTVÍ vs. krutost"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, objektivní", prostredky: "STROHÝ dialogický styl, krátké popisy", tropus: "Symbol: králíci = NEDOSAŽITELNÝ sen", figura: "Opakování: Povídej o KRÁLÍCÍCH, George" },
    kontext: { literarni: "Americký REALISMUS, sociální próza", historicky: "Velká HOSPODÁŘSKÁ krize 30. let", inspirace: "Steinbeckova znalost kalifornských FARMÁŘŮ", srovnani: ["Hrozny hněvu (Steinbeck)","Stařec a moře (Hemingway)"] }
  },
  {
    id: 19, title: "Rozmarné léto", author: "Vladislav Vančura",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1891-1942", smer: "Česká AVANTGARDA, poetismus", vydani: "1926", druh: "EPIKA", zanr: "Lyrizovaná NOVELA" },
    dej: ["Tři přátelé TRÁVÍ líné léto u vody","Přijíždí kouzelník ARNOŠTEK s Annou","Anna OKOUZLÍ všechny tři muže","Každý se pokusí o SBLÍŽENÍ s Annou","Všichni NEÚSPĚŠNÍ, zesměšněni","Arnoštek ODJÍŽDÍ, vše se vrátí do kolejí"],
    postavy: { hlavni: [{jmeno:"Antonín Důra",vlastnost:"POHODLNÝ správce lázní"}], vedlejsi: [{jmeno:"Kanovník Roch",funkce:"DUCHOVNÍ, podlehne kouzlu Anny"},{jmeno:"Major Hugo",funkce:"DŮSTOJNÍK, další oběť Anny"},{jmeno:"Arnoštek",funkce:"KEJKLÍŘ s krásnou Annou"}] },
    temata: { hlavni: "MARNOST touhy a nudný koloběh života", motivy: ["LÉTO jako symbol zahálky","KRÁSA narušuje stereotyp","MALOMĚSTO a jeho nuda","TOUHA vs. realita"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, autorský vypravěč", prostredky: "ARCHAICKÝ, básnický, bohatý jazyk", tropus: "Metafora: léto = ROZMARNÉ marné snění", figura: "Inverze: Nuže OBE DVĚ, slzy i úsměvy" },
    kontext: { literarni: "Česká AVANTGARDA, poetismus 20. let", historicky: "Stabilní PRVNÍ REPUBLIKA, kulturní rozkvět", inspirace: "Vančurova láska k JAZYKU a experimentu", srovnani: ["Markéta Lazarová (Vančura)","Poetismus (Nezval, Seifert)"] }
  },
  {
    id: 20, title: "Noc na Karlštejně", author: "Jaroslav Vrchlický",
    obdobi: 2,
    info: { narodnost: "Český", roky: "1853-1912", smer: "LUMÍROVCI, novoromantismus", vydani: "1884", druh: "DRAMA", zanr: "Veršovaná historická KOMEDIE, 4 jednání" },
    dej: ["Karel IV. ZAKÁŽE ženám vstup na Karlštejn","Královna ELIŠKA se tajně PŘEVLÉKNE","Purkrabí ARNOŠT bedlivě HLÍDÁ zákaz","Eliška prozrazena, ale Karel to TUŠÍ","Alžběta (Karlova žena) také PŘIJDE tajně","Karel ženám ODPUSTÍ, láska vítězí"],
    postavy: { hlavni: [{jmeno:"Karel IV.",vlastnost:"MOUDRÝ, tolerantní panovník"}], vedlejsi: [{jmeno:"Královna Eliška",funkce:"ZAMILOVANÁ, odvážná manželka"},{jmeno:"Purkrabí Arnošt",funkce:"PŘÍSNÝ strážce hradního řádu"}] },
    temata: { hlavni: "LÁSKA vítězí nad přísným zákonem", motivy: ["PŘEVLEK a tajemství","ŽENA vs. mužský řád","MOUDROST panovníka","HUMOR a laskavost"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, VERŠOVANÁ řeč", prostredky: "Elegantní VERŠ, historický jazyk, humor", tropus: "Metonymie: Karlštejn = MUŽSKÝ řád a moc", figura: "Antiteze: ZÁKON hradní x PRÁVO lásky" },
    kontext: { literarni: "LUMÍROVCI, kosmopolitní orientace", historicky: "Doba NÁRODNÍHO OBROZENÍ, vzor Karla IV.", inspirace: "Historická POVĚST o zákazu žen na Karlštejně", srovnani: ["Noc na Karlštejně film (1974)","Cyrano z Bergeracu (Rostand)"] }
  }
];

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
        '<div class="info-row"><span class="info-label">Srovn\u00e1n\u00ed:</span> ' + book.kontext.srovnani.join(', ') + '</div></div>' +
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
