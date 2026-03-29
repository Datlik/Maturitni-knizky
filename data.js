/**
 * Centrální databáze knih pro maturitní četbu.
 * Každá kniha obsahuje kompletní informace pro detail i kvíz.
 */
const booksData = [
  {
    id: 1, title: "Bílá nemoc", author: "Karel Čapek",
    obdobi: 4,
    info: { narodnost: "ČESKÝ", roky: "1890–1938", smer: "DEMOKRATICKÝ PROUD, meziválečná literatura", vydani: "1937", druh: "DRAMA", zanr: "Tragédie" },
    casoprostor: "Autorova SOUČASNOST před válkou, FIKTIVNÍ neurčený STÁT",
    misto: "KLINIKA, Galénova ORDINACE, maršálova KANCELÁŘ, rodinný POKOJ",
    dej: [
      "Vypuká BÍLÁ NEMOC, vůdce MARŠÁL chystá VÁLKU",
      "LÉKAŘ Galén nachází LÉK pouze pro CHUDÉ",
      "Odmítá léčit ZBROJAŘE Krüga, žádá MÍR",
      "Baron Krüg páchá SEBEVRAŽDU, začíná VÁLKA",
      "Nakažený MARŠÁL přijímá PODMÍNKU míru za LÉK",
      "Zfanatizovaný DAV doktora UŠLAPE, lék je ZNIČEN"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Doktor GALÉN",vlastnost:"odvážný a naivní HUMANISTA"},
        {jmeno:"MARŠÁL",vlastnost:"bezcitný DIKTÁTOR toužící po MOCI"}
      ], 
      vedlejsi: [
        {jmeno:"Baron KRÜG",funkce:"majitel ZBROJOVKY, maršálův PŘÍTEL"},
        {jmeno:"Dvorní RADA Sigelius",funkce:"ředitel KLINIKY toužící po SLÁVĚ"}
      ] 
    },
    temata: { 
      hlavni: "BEZMOCNOST jedince proti davu, varování před FAŠISMEM", 
      motivy: ["BÍLÁ NEMOC jako symbol zla","Hrozba VÁLKY","Konflikt DEMOKRACIE a totalitní DIKTATURY","MOC vs. MORÁLKA"] 
    },
    jazyk: { 
      vypravec: "Bez vypravěče, děj tvoří živé DIALOGY postav", 
      prostredky: "SPISOVNÁ čeština, LÉKAŘSKÁ terminologie, cizí JAZYKY", 
      tropus: "METAFORA: „lepru KORUPCE a mor společenského rozkladu“", 
      figura: "EPIZEUXIS: „milióny, MILIÓNY, milióny v číslicích!“" 
    },
    kontext: { 
      literarni: "Česká MEZIVÁLEČNÁ próza, demokratický proud, PRAGMATISMUS", 
      historicky: "Reakce na hrozbu NACISMU před 2. VÁLKOU (1937)", 
      inspirace: "Autorův OTEC byl venkovský LÉKAŘ", 
      srovnani: ["Matka (Čapek)","Válka s mloky (Čapek)"] 
    },
    soucasnici: {
      cesti: ["Eduard BASS - Cirkus HUMBERTO","Karel POLÁČEK - Bylo nás PĚT"],
      svetovi: ["George ORWELL - Farma ZVÍŘAT","Franz KAFKA - PROMĚNA"]
    }
  },
  {
    id: 2, title: "Věc Makropulos", author: "Karel Čapek",
    obdobi: 4,
    info: { narodnost: "ČESKÝ", roky: "1890–1938", smer: "ČESKÁ MEZIVÁLEČNÁ LITERATURA, DEMOKRATICKÝ PROUD", vydani: "1922", druh: "DRAMA", zanr: "Utopická KOMEDIE" },
    casoprostor: "AUTOROVA SOUČASNOST, 20. LÉTA 20. STOLETÍ (minulost Rudolf II.)",
    misto: "KANCELÁŘ Dr. Kolenatého, JEVIŠTĚ divadla, HOTELOVÝ POKOJ Emilie Marty",
    dej: [
      "Vleklý SOUDNÍ SPOR o statky LOUKOV",
      "Přichází TAJEMNÁ EMILIA se znalostí MINULOSTI",
      "Nalezení ZÁVĚTI a starých milostných DOPISŮ",
      "PRUS získá DOPISY za NOC s EMILIÍ",
      "JANEK páchá SEBEVRAŽDU z nešťastné LÁSKY",
      "ODHALENÍ nesmrtelnosti, SPÁLENÍ receptu na ELIXÍR"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"EMILIA MARTY",vlastnost:"NESMRTELNÁ, unavená FEMME FATALE"},
        {jmeno:"JAROSLAV PRUS",vlastnost:"PŘÍSNÝ a STROHÝ sok"}
      ], 
      vedlejsi: [
        {jmeno:"ALBERT GREGOR",funkce:"POSEDLÝ výhrou soudu a EMILIÍ"},
        {jmeno:"DR. KOLENATÝ",funkce:"ADVOKÁT zastupující GREGORA v procesu"},
        {jmeno:"JANEK PRUS",funkce:"OBĚŤ romantické LÁSKY k EMILII"}
      ] 
    },
    temata: { 
      hlavni: "CENA NESMRTELNOSTI a SMYSL lidského ŽIVOTA", 
      motivy: ["ELIXÍR MLÁDÍ","VNITŘNÍ PRÁZDNOTA a NUDA","SMRT jako přirozená SOUČÁST existence","TAJEMSTVÍ MINULOSTI"] 
    },
    jazyk: { 
      vypravec: "DIVADELNÍ SCÉNÁŘ tvořený DIALOGY", 
      prostredky: "SPISOVNÝ jazyk, KRATŠÍ DYNAMICKÉ VĚTY, PRÁVNICKÁ TERMINOLOGIE", 
      tropus: "PERSONIFIKACE: „Staletí utíkají, a já je... neprožívám.“", 
      figura: "ALITERACE: „Smutek srdce a stesk zůstávají.“" 
    },
    kontext: { 
      literarni: "MEZIVÁLEČNÁ PRÓZA, silný DEMOKRATICKÝ PROUD", 
      historicky: "ZLATÁ ÉRA Československa, VAROVÁNÍ před TOTALITOU", 
      inspirace: "ÚVAHY nad VĚDOU a DLOUHOVĚKOSTÍ", 
      srovnani: ["R.U.R. (Čapek)","Zpět k Metuzalémovi (G. B. Shaw)"] 
    },
    soucasnici: {
      cesti: ["Karel POLÁČEK - BYLO NÁS PĚT","Eduard BASS - CIRKUS HUMBERTO","Josef ČAPEK - STÍN KAPRADINY"],
      svetovi: ["George ORWELL - FARMA ZVÍŘAT","Franz KAFKA - PROMĚNA","George Bernard SHAW - DŮM ZLOMENÝCH SRDCÍ"]
    }
  },
  {
    id: 3, title: "Krysař", author: "Viktor Dyk",
    obdobi: 4,
    info: { narodnost: "ČECH", roky: "1877–1931", smer: "ANARCHISTIČTÍ BUŘIČI, NOVOKLASICISMUS", vydani: "1915", druh: "EPIKA", zanr: "Lyrickoepická novela" },
    casoprostor: "Čas NEURČEN, hanzovní město HAMMELN",
    misto: "Hostinec, vrch KOPPEL, hluboká PROPAST",
    dej: [
      "KRYSAŘ přichází do HAMMELN vyhubit KRYSY",
      "Zamiluje se do krásné AGNES",
      "Konšelé ODMÍTNOU vyplatit slíbenou ODMĚNU",
      "Těhotná AGNES spáchá SEBEVRAŽDU skokem",
      "Zlomený KRYSAŘ odvede lidi do PROPASTI",
      "Přežije pouze SEPP JÖRGEN a DÍTĚ"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"KRYSAŘ",vlastnost:"tajemný a osamělý CIZINEC"},
        {jmeno:"AGNES",vlastnost:"mladá a KRÁSNÁ"}
      ], 
      vedlejsi: [
        {jmeno:"Dlouhý KRISTIÁN",funkce:"milenec a SOK"},
        {jmeno:"SEPP JÖRGEN",funkce:"rybář, zachrání DÍTĚ"},
        {jmeno:"KONŠELÉ (Frosch, Strumm)",funkce:"nedodrží SLIB"}
      ] 
    },
    temata: { 
      hlavni: "Nešťastná LÁSKA a krutá POMSTA", 
      motivy: ["PÍŠŤALA (symbol moci)","PROPAST (splněné sny)","KRYSY (společenská špína)","DÍTĚ (čistá duše)"] 
    },
    jazyk: { 
      vypravec: "ER-FORMA, vševědoucí vypravěč", 
      prostredky: "SPISOVNÁ čeština, KRÁTKÉ věty, ARCHAISMY", 
      tropus: "PERSONIFIKACE: „...zvuky vedly krysaře...“", 
      figura: "EPIZEUXIS: „...pískal a pískal.“" 
    },
    kontext: { 
      literarni: "ANARCHISTIČTÍ buřiči, přelom 19. a 20. STOLETÍ", 
      historicky: "I. SVĚTOVÁ VÁLKA, odpor ke SPOLEČNOSTI", 
      inspirace: "Staroněmecká POVĚST ze 13. STOLETÍ", 
      srovnani: ["Dostojevskij (Idiot)","Němcová (Divá Bára)"] 
    },
    soucasnici: {
      cesti: ["František GELLNER - Po nás POTOPA","Fráňa ŠRÁMEK - Stříbrný VÍTR"],
      svetovi: ["Franz KAFKA - PROMĚNA","George ORWELL - FARMA ZVÍŘAT"]
    }
  },
  {
    id: 4, title: "Malý princ", author: "Antoine de Saint-Exupéry",
    obdobi: 3,
    info: { narodnost: "Francouzský", roky: "1900-1944", smer: "EXISTENCIALISMUS, filozofická próza", vydani: "1943", druh: "EPIKA", zanr: "Filozofická POHÁDKA" },
    casoprostor: "NADČASOVÝ, pouště a vesmír",
    misto: "Poušť SAHARA, planetka B-612, další planetky",
    dej: ["PILOT havaruje na SAHAŘE","Potká MALÉHO PRINCE z planetky B-612","Princ vypráví o CESTĚ po planetách","Setkává PODIVNÉ dospělé (král, domýšlivec...)","Na Zemi se LIŠKA učí o přátelství","Princ se nechá UŠTKNOUT, vrací se domů"],
    postavy: { hlavni: [{jmeno:"Malý princ",vlastnost:"NEVINNÝ, moudrý dětský pohled"},{jmeno:"Pilot",vlastnost:"DOSPĚLÝ hledající ztracené dětství"}], vedlejsi: [{jmeno:"Liška",funkce:"UČITELKA přátelství a zodpovědnosti"},{jmeno:"Růže",funkce:"SYMBOL lásky a pýchy"}] },
    temata: { hlavni: "Správně vidíme jen SRDCEM", motivy: ["DĚTSTVÍ vs. dospělost","PŘÁTELSTVÍ a zodpovědnost","OSAMĚLOST","RŮŽE = křehká láska"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (pilot)", prostredky: "Jednoduchý POETICKÝ jazyk, alegorie", tropus: "Personifikace: Ochočit = vytvořit POUTA", figura: "Anafora: opakování - dospělí NIKDY..." },
    kontext: { literarni: "Francouzský EXISTENCIALISMUS 20. století", historicky: "Napsáno v USA v EXILU za 2. sv. války", inspirace: "AUTOBIOGRAFICKÉ - autor byl sám pilot", srovnani: ["Cizinec (Camus)","Alenka v říši divů (Carroll)"] },
    soucasnici: {
      cesti: ["Vladislav Vančura - Markéta Lazarová","Karel Čapek - Válka s mloky","Jiří Wolker - Host do domu"],
      svetovi: ["Albert Camus - Cizinec","Jean-Paul Sartre - Zeď","Ernest Hemingway - Komu zvoní hrana"]
    }
  },
  {
    id: 5, title: "Tyrolské elegie", author: "Karel Havlíček Borovský",
    obdobi: 2,
    info: { narodnost: "Český", roky: "1821-1856", smer: "NÁRODNÍ OBROZENÍ, realismus 19. st.", vydani: "1861 (psáno 1852)", druh: "LYRIKA", zanr: "Satirická BÁSEŇ" },
    casoprostor: "ROK 1851, cesta z Čech do Tyrolska",
    misto: "Havlíčkův BYT, KOČÁR přes Alpy, Brixen",
    dej: ["Havlíček ZATČEN doma v noci tajně","PŘEVOZ v kočáru přes Alpy do Brixenu","Policejní hlídka NESCHOPNÁ a vystrašená","Koně se SPLAŠÍ v temném lese","Hlídka VYSKÁČE, Havlíček řídí sám","Ironický VÝSMĚCH rakouské zvůli"],
    postavy: { hlavni: [{jmeno:"Karel Havlíček",vlastnost:"STATEČNÝ satirik a novinář"}], vedlejsi: [{jmeno:"Policejní hlídka",funkce:"NESCHOPNÍ strážci, terč výsměchu"},{jmeno:"Dedera (komisař)",funkce:"PŘEDSTAVITEL rakouské moci"}] },
    temata: { hlavni: "VÝSMĚCH neschopné rakouské vládě", motivy: ["CENZURA a nesvoboda","HUMOR jako zbraň","NOC = tajemství moci","EXIL jako trest"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (sám Havlíček)", prostredky: "SATIRICKÝ tón, ironie, lidový jazyk", tropus: "Ironie: Vlast MILUJÍCÍ - o vládě", figura: "Anafora: opakované zvolání Ach..." },
    kontext: { literarni: "NÁRODNÍ OBROZENÍ, 4. fáze, realismus", historicky: "Bachovský ABSOLUTISMUS, cenzura tisku", inspirace: "Vlastní DEPORTACE do Brixenu (1851)", srovnani: ["Král Lávra (Havlíček)","Epigramy (Havlíček)"] },
    soucasnici: {
      cesti: ["Božena Němcová - Babička","Karel Jaromír Erben - Kytice","Josef Kajetán Tyl - Strakonický dudák"],
      svetovi: ["Charles Dickens - David Copperfield","Victor Hugo - Bídníci","Edgar Allan Poe - Havran"]
    }
  },
  {
    id: 6, title: "Stařec a moře", author: "Ernest Hemingway",
    obdobi: 3,
    info: { narodnost: "AMERIČAN", roky: "1899–1961", smer: "ZTRACENÁ GENERACE, meziválečná americká literatura", vydani: "1952", druh: "EPIKA", zanr: "Novela" },
    casoprostor: "ZÁŘÍ, 40. léta, KUBA (TŘI DNY)",
    misto: "RYBÁŘSKÁ VESNICE, hospoda TERASA, ŠIRÉ MOŘE",
    dej: [
      "SANTIAGO loví 84 dní BEZ ÚLOVKU",
      "Vyplouvá SÁM daleko na širé MOŘE",
      "Chytí OBŘÍHO marlina, vyčerpávající SOUBOJ",
      "Rybu UDOLÁ a PŘIVÁŽE k lodi",
      "Cestou zpět ÚTOČÍ a žerou ŽRALOCI",
      "Návrat do přístavu POUZE S KOSTROU"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"SANTIAGO",vlastnost:"starý RYBÁŘ, mimořádně HOUŽEVNATÝ"}
      ], 
      vedlejsi: [
        {jmeno:"MANOLIN",funkce:"chlapec, POMOCNÍK a citová OPORA"},
        {jmeno:"MARTIN",funkce:"hostinský, poskytuje JÍDLO"}
      ] 
    },
    temata: { 
      hlavni: "NEKONEČNÝ ZÁPAS člověka s PŘÍRODOU", 
      motivy: ["TRAGICKÁ OSAMĚLOST a lidská STATEČNOST","KŘESŤANSKÁ SYMBOLIKA (lano jako KŘÍŽ)","MOŘE (příroda) a ŽRALOCI (zlo)","KOLOBĚH života"] 
    },
    jazyk: { 
      vypravec: "Vševědoucí vypravěč, ER-FORMA (3. osoba)", 
      prostredky: "METODA LEDOVCE, strohé věty, ŠPANĚLSKÉ VÝRAZY", 
      tropus: "PŘIROVNÁNÍ: „zužoval se jako PAPÍR“", 
      figura: "APOSTROFA: „Vzpamatuj se RUKO!“" 
    },
    kontext: { 
      literarni: "ZTRACENÁ GENERACE, americká meziválečná PRÓZA", 
      historicky: "Poválečná doba, přelom 40. a 50. LET", 
      inspirace: "Autorova tvůrčí KRIZE a pobyt na KUBĚ", 
      srovnani: ["E. M. Remarque - Na západní frontě KLID","J. Škvorecký - ZBABĚLCI"] 
    },
    soucasnici: {
      cesti: ["Karel Čapek - BÍLÁ NEMOC","Josef Škvorecký - ZBABĚLCI","Bohumil Hrabal - OSTŘE SLEDOVANÉ VLAKY"],
      svetovi: ["E. M. Remarque - NA ZÁPADNÍ frontě klid","F. S. Fitzgerald - VELKÝ GATSBY","John Steinbeck - O MYŠÍCH a lidech"]
    }
  },
  {
    id: 7, title: "Ostře sledované vlaky", author: "Bohumil Hrabal",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1914-1997", smer: "ČESKÁ POVÁLEČNÁ PRÓZA", vydani: "1965", druh: "EPIKA", zanr: "Novela" },
    casoprostor: "ÚNOR 1945, konec 2. světové války",
    misto: "Malá ŽELEZNIČNÍ STANICE v Čechách",
    dej: ["Elév HRMA nastupuje na malou STANICI","Trpí SEXUÁLNÍ nejistotou, pokus o sebevraždu","Výpravčí HUBIČKA - aféra s razítky","Hrma prožije MILOSTNÉ zasvěcení s odbojářkou","Rozhodne se ZNIČIT německý muniční vlak","Vlak VYHODÍ do vzduchu, sám ZAHYNE"],
    postavy: { hlavni: [{jmeno:"Miloš Hrma",vlastnost:"NESMĚLÝ elév hledající dospělost"}], vedlejsi: [{jmeno:"Výpravčí Hubička",funkce:"SUKNIČKÁŘ, vzor sebejistoty"},{jmeno:"Zdenička Svatá",funkce:"TELEGRAFISTKA, oběť razítkování"}] },
    temata: { hlavni: "DOSPÍVÁNÍ malého člověka k hrdinství", motivy: ["SEXUALITA jako cesta k dospělosti","VLAKY = symbol dějin","BANALITA vs. hrdinství","SMRT jako paradoxní vítězství"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (Hrma)", prostredky: "HOVOROVÝ jazyk, humor, pábení", tropus: "Symbol: vlaky = NEÚPROSNÝ chod dějin", figura: "Kontrast: BANÁLNÍ stanice x VÁLEČNÉ drama" },
    kontext: { literarni: "Česká PRÓZA 60. let, nová vlna", historicky: "Okupace, PROTEKTORÁT, rok 1945", inspirace: "Hrabalovy ZKUŠENOSTI z nádraží", srovnani: ["Obsluhoval jsem angl. krále (Hrabal)","Žert (Kundera)"] },
    soucasnici: {
      cesti: ["Milan Kundera - Žert","Josef Škvorecký - Zbabělci","Arnošt Lustig - Démanty noci"],
      svetovi: ["Gabriel García Márquez - Sto roků samoty","Joseph Heller - Hlava XXII","Kurt Vonnegut - Jatka č. 5"]
    }
  },
  {
    id: 8, title: "Vražda v Orient expresu", author: "Agatha Christie",
    obdobi: 3,
    info: { narodnost: "Anglická", roky: "1890-1976", smer: "DETEKTIVNÍ literatura 20. st.", vydani: "1934", druh: "EPIKA", zanr: "Detektivní ROMÁN" },
    casoprostor: "30. LÉTA 20. st., zimní noc",
    misto: "ORIENT EXPRES (vlak), zasněžená Jugoslávie",
    dej: ["POIROT cestuje Orient expresem","Vlak UVÍZNE ve sněhové závěji","Cestující RATCHETT nalezen ZAVRAŽDĚN","Poirot vyslýchá 12 PODEZŘELÝCH cestujících","Každý má ALIBI, stopy si ODPORUJÍ","VŠECH 12 je vrahů - SPOLEČNÁ pomsta"],
    postavy: { hlavni: [{jmeno:"Hercule Poirot",vlastnost:"GENIÁLNÍ belgický detektiv"}], vedlejsi: [{jmeno:"Ratchett (Cassetti)",funkce:"OBĚŤ - ve skutečnosti únosce"},{jmeno:"12 cestujících",funkce:"VRAZI z rodinné pomsty"}] },
    temata: { hlavni: "SPRAVEDLNOST vs. zákon", motivy: ["POMSTA za únos dítěte","ZDÁNÍ klame","VLAK = uzavřený prostor","KOLEKTIVNÍ vina"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, fokalizace Poirot", prostredky: "Logické DEDUKCE, výslechy, dialogy", tropus: "Metafora: vlak = IZOLOVANÝ svět", figura: "Řečnické otázky Poirota při VÝSLECHU" },
    kontext: { literarni: "Zlatý věk DETEKTIVKY (1920-1940)", historicky: "Meziválečné období, luxusní CESTOVÁNÍ", inspirace: "Christieho vlastní CESTA Orient expresem", srovnani: ["Deset malých černoušků (Christie)","Pes baskervillský (Doyle)"] },
    soucasnici: {
      cesti: ["Karel Čapek - Povídky z jedné kapsy","Eduard Bass - Cirkus Humberto","Karel Poláček - Muži v offsidu"],
      svetovi: ["Arthur Conan Doyle - Sherlock Holmes","Dorothy L. Sayers - detektivky","Dashiell Hammett - Maltézský sokol"]
    }
  },
  {
    id: 9, title: "Saturnin", author: "Zdeněk Jirotka",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1911-2003", smer: "Česká HUMORISTICKÁ próza", vydani: "1942", druh: "EPIKA", zanr: "Humoristický ROMÁN" },
    casoprostor: "30.-40. LÉTA 20. st., za protektorátu",
    misto: "Pražský BYT, dědečkova CHATA u řeky",
    dej: ["Pán JIŘÍ si najme sluhu SATURNINA","Saturnin působí KATASTROFY svou iniciativou","Příjezd otravné TETY KATEŘINY s Miloušem","Výlet na dědečkovu CHATU bez mostu","Saturnin ZACHRÁNÍ situaci při povodni","Jiří získá slečnu BARBORU díky Saturninovi"],
    postavy: { hlavni: [{jmeno:"Saturnin",vlastnost:"VYNALÉZAVÝ, drzý, suchý humor"},{jmeno:"Pan Jiří",vlastnost:"POHODLNÝ, nesmělý vypravěč"}], vedlejsi: [{jmeno:"Teta Kateřina",funkce:"PROTIVNÁ příbuzná, antagonistka"},{jmeno:"Slečna Barbora",funkce:"KRÁSNÁ, inteligentní láska Jiřího"}] },
    temata: { hlavni: "HUMOR jako lék na šedou dobu", motivy: ["SLUHA chytřejší než pán","ABSURDNÍ situace","LÁSKA skrz překážky","RODINA a její konflikty"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (pan Jiří)", prostredky: "SUCHÝ humor, anglický styl, ironie", tropus: "Litotes: Saturnin není DOCELA normální", figura: "Parenteze: odbočky a komentáře VYPRAVĚČE" },
    kontext: { literarni: "Česká HUMORISTICKÁ tradice za protektorátu", historicky: "Napsáno za OKUPACE jako únik od reality", inspirace: "Inspirován anglickým humorem (WODEHOUSE)", srovnani: ["Bylo nás pět (Poláček)","Tři muži ve člunu (Jerome)"] },
    soucasnici: {
      cesti: ["Karel Poláček - Bylo nás pět","Eduard Bass - Cirkus Humberto","Vladislav Vančura - Rozmarné léto"],
      svetovi: ["P. G. Wodehouse - Jeeves","Jerome K. Jerome - Tři muži ve člunu","Evelyn Waugh - Návrat na Brideshead"]
    }
  },
  {
    id: 10, title: "Lakomec", author: "Molière",
    obdobi: 1,
    info: { narodnost: "Francouzský", roky: "1622-1673", smer: "KLASICISMUS 17. století", vydani: "1668", druh: "DRAMA", zanr: "Charakterová KOMEDIE, 5 jednání" },
    casoprostor: "17. STOLETÍ, současná Francie Molièra",
    misto: "Harpagonův DŮM v Paříži",
    dej: ["HARPAGON posedlý lakotou, schová POKLAD","Syn KLEANT miluje chudou MARIANU","Harpagon chce Marianu za ŽENU sám","Sluha Čipera UKRADNE zakopanou truhlu","Harpagon obviní Valéra - NEDOROZUMĚNÍ","Anselm = otec Valéra i Mariany, VŠE se vyřeší"],
    postavy: { hlavni: [{jmeno:"Harpagon",vlastnost:"PATOLOGICKY lakomý otec"}], vedlejsi: [{jmeno:"Kleant",funkce:"SYN, zamilovaný do Mariany"},{jmeno:"Eliška",funkce:"DCERA, miluje Valéra"},{jmeno:"Valér",funkce:"Eliškin milý, syn Anselma"}] },
    temata: { hlavni: "LAKOTA ničí mezilidské vztahy", motivy: ["PENÍZE nad láskou","GENERAČNÍ konflikt otec-děti","PŘETVÁŘKA služebníků","SŇATEK z rozumu vs. z lásky"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, scénické poznámky", prostredky: "Komické SITUACE, qui pro quo, hyperbola", tropus: "Hyperbola: Harpagonova MÁ TRUHLIČKO!", figura: "Anafora: opak. výkřiků ZLODĚJI! VRAZI!" },
    kontext: { literarni: "Francouzský KLASICISMUS, pravidlo 3 jednot", historicky: "Doba Ludvíka XIV., ABSOLUTISMUS", inspirace: "Plautova KOMEDIE Aulularia (antika)", srovnani: ["Tartuffe (Molière)","Zdravý nemocný (Molière)"] },
    soucasnici: {
      cesti: ["Jan Ámos Komenský - Labyrint světa","Bedřich Bridel - Co Bůh? Člověk?","Adam Michna z Otradovic - básně"],
      svetovi: ["Jean Racine - Faidra","Pierre Corneille - Cid","Jean de La Fontaine - Bajky"]
    }
  },
  {
    id: 11, title: "Balady a romance", author: "Jan Neruda",
    obdobi: 2,
    info: { narodnost: "ČESKÁ", roky: "1834-1891", smer: "ČESKÝ REALISMUS, generace MÁJOVCŮ", vydani: "VZNIKU a VYDÁNÍ 1883", druh: "LYRICKO-EPICKÁ", zanr: "Básnická sbírka, BALADY a ROMANCE" },
    casoprostor: "Doba KARLA IV. i autorovo 19. STOLETÍ",
    misto: "Různá NEUPŘESNĚNÁ MÍSTA převážně v ČECHÁCH",
    dej: ["Ukřižování JEŽÍŠE, snaha o VYLÉČENÍ", "SMRTKA naláká těžce nemocné DÍTĚ", "Zloděj JOHN zaviní smrt svého ZETĚ", "Svatý PETR sní o NAROZENÍ Páně", "JEŽÍŠ zázračně promění VODU ve VÍNO"],
    postavy: { hlavni: [{jmeno:"JEŽÍŠ KRISTUS",vlastnost:"Symbol LÁSKY a ODPUŠTĚNÍ"},{jmeno:"KAREL IV.",vlastnost:"MOUDRÝ a spravedlivý VLADAŘ"}], vedlejsi: [{jmeno:"Rytíř PALEČEK",funkce:"VĚRNÝ, chce probouzet NA JAŘE"},{jmeno:"SMRTKA",funkce:"ODVÁDÍ trpící dítě do NEBE"}] },
    temata: { hlavni: "KONTRAST tradičních hodnot a LIDSKÝCH SLABOSTÍ", motivy: ["KŘESŤANSKÁ VÍRA a biblické LEGENDY","VLASTENECTVÍ a národní HRDOST","SMRT a lidský OSUD","VINA a spravedlivý TREST"] },
    jazyk: { vypravec: "ER-FORMA, vyprávění ve 3. OSOBĚ", prostredky: "ARCHAISMY, HOVOROVÝ jazyk, METAFORY, INVERZE", tropus: "Přívlastek: „SMAVÝ REK“ rytíř Paleček", figura: "Inverze: „ZVĚDAVY zas k oknu obracejí TVÁŘ“" },
    kontext: { literarni: "GENERACE MÁJOVCŮ, 2. polovina 19. STOLETÍ", historicky: "RAKOUSKÝ ABSOLUTISMUS a BACHOVA přísná CENZURA", inspirace: "Láska k MATCE a cestování AUTORA", srovnani: ["Básnická sbírka KYTICE (Karel Jaromír Erben)"] },
    soucasnici: {
      cesti: ["Vítězslav HÁLEK - Večerní písně", "Božena NĚMCOVÁ - Babička"],
      svetovi: ["Charlotte BRONTËOVÁ - Villette", "Arthur CONAN DOYLE - Studie v šarlatové"]
    }
  },
  {
    id: 12, title: "Farma zvířat", author: "George Orwell",
    obdobi: 3,
    info: { narodnost: "Anglický", roky: "1903-1950", smer: "DYSTOPICKÁ literatura 20. st.", vydani: "1945", druh: "EPIKA", zanr: "Alegorická BAJKA / antiutopie" },
    casoprostor: "NADČASOVÝ (alegorie 1917-1943)",
    misto: "Panská FARMA v anglickém venkově",
    dej: ["Zvířata VYŽENOU farmáře Jonese","Ustanoví 7 PŘIKÁZÁNÍ rovnosti","Prasata převezmou VEDENÍ (Napoleon)","Kuliš VYHNÁN, Napoleon vládne terorem","Přikázání postupně MĚNĚNA ve prospěch prasat","Prasata NEROZPOZNATELNÁ od lidí"],
    postavy: { hlavni: [{jmeno:"Napoleon",vlastnost:"LSTIVÝ diktátor (Stalin)"}], vedlejsi: [{jmeno:"Boxer",funkce:"VĚRNÝ, naivní dělník"},{jmeno:"Kuliš",funkce:"IDEALISTA vyhnán (Trockij)"}] },
    temata: { hlavni: "TOTALITARISMUS a zneužití moci", motivy: ["MANIPULACE propagandou","ROVNOST jen na papíře","PSI = tajná policie","PŘEPISOVÁNÍ dějin"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, vševědoucí", prostredky: "ALEGORICKÝ styl, jednoduchý jazyk", tropus: "Alegorie: farma = SOVĚTSKÝ SVAZ", figura: "Gradace: postupná ZMĚNA přikázání" },
    kontext: { literarni: "Anglická DYSTOPICKÁ próza 20. st.", historicky: "Kritika STALINISMU a SSSR", inspirace: "Orwellovy zkušenosti ze ŠPANĚLSKA", srovnani: ["1984 (Orwell)","Konec civilizace (Huxley)"] },
    soucasnici: {
      cesti: ["Karel Čapek - Válka s mloky","Vladislav Vančura - Markéta Lazarová","Jiří Wolker - básně"],
      svetovi: ["Aldous Huxley - Konec civilizace","Ray Bradbury - 451 stupňů Fahrenheita","Arthur Koestler - Tma o poledni"]
    }
  },
  {
    id: 13, title: "Bylo nás pět", author: "Karel Poláček",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1892-1945", smer: "Česká MEZIVÁLEČNÁ próza", vydani: "1946 (psáno 1943)", druh: "EPIKA", zanr: "Humoristický ROMÁN" },
    casoprostor: "POČÁTEK 20. st., před 1. sv. válkou",
    misto: "Malé MALOMĚSTO (Rychnov nad Kněžnou)",
    dej: ["Péťa BAJZA vypráví o partě KLUKŮ","Bitvy s rivalskou JEŠÍNOVOU bandou","Éda KEMLINK - podnikavý kamarád","Dobrodružství s INDIÁNY a výpravami","Pan KEMLINK boří autoritu dospělých","IDYLICKÁ vzpomínka na dětství v městečku"],
    postavy: { hlavni: [{jmeno:"Péťa Bajza",vlastnost:"ZVÍDAVÝ vypravěč, syn obchodníka"}], vedlejsi: [{jmeno:"Éda Kemlink",funkce:"PODNIKAVÝ, vůdce party"},{jmeno:"Zilvar",funkce:"TICHÝ a věrný kamarád"}] },
    temata: { hlavni: "DĚTSTVÍ jako ztracený ráj", motivy: ["PŘÁTELSTVÍ party kluků","DOSPĚLÍ očima dětí","MALOMĚSTO a jeho figurky","HRA a fantazie"] },
    jazyk: { vypravec: "ICH-FORMA, 1. osoba (Péťa)", prostredky: "DĚTSKÝ naivní jazyk, humor, ironie", tropus: "Ironie: otec je VELMI moudrý", figura: "Opakování: ustálené FRÁZE otce" },
    kontext: { literarni: "Česká HUMORISTICKÁ próza 30. let", historicky: "Psáno v TEREZÍNĚ před smrtí autora", inspirace: "Poláčkovo DĚTSTVÍ v Rychnově n. Kn.", srovnani: ["Saturnin (Jirotka)","Tom Sawyer (Twain)"] },
    soucasnici: {
      cesti: ["Zdeněk Jirotka - Saturnin","Eduard Bass - Cirkus Humberto","Vladislav Vančura - Rozmarné léto"],
      svetovi: ["Mark Twain - Tom Sawyer","Erich Kästner - Emil a detektivové","Antoine de Saint-Exupéry - Malý princ"]
    }
  },
  {
    id: 14, title: "Piková dáma", author: "Alexandr Sergejevič Puškin",
    obdobi: 2,
    info: { narodnost: "Ruský", roky: "1799-1837", smer: "ROMANTISMUS s prvky realismu", vydani: "1834", druh: "EPIKA", zanr: "Novela" },
    casoprostor: "POČÁTEK 19. st., carské Rusko",
    misto: "PETROHRAD, salóny, dům hraběnky, herny",
    dej: ["Důstojník HERMANN touží po BOHATSTVÍ","Zjistí tajemství STARÉ hraběnky (3 karty)","VNIKNE k hraběnce, ta umírá STRACHEM","Přízrak hraběnky mu prozradí: 3, 7, ESO","Dvakrát VYHRAJE, ale třetí karta...","Místo esa vytáhne PIKOVOU DÁMU - zešílí"],
    postavy: { hlavni: [{jmeno:"Hermann",vlastnost:"CHAMTIVÝ, posedlý hazardem"}], vedlejsi: [{jmeno:"Stará hraběnka",funkce:"STRÁŽKYNĚ tajemství karet"},{jmeno:"Líza",funkce:"VYUŽITÁ schovanka hraběnky"}] },
    temata: { hlavni: "CHAMTIVOST vede k záhubě", motivy: ["HAZARD jako posedlost","NADPŘIROZENO a osud","PIKOVÁ DÁMA = symbol trestu","PENÍZE vs. láska"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba", prostredky: "Úsporný ROMANTICKÝ styl, napětí", tropus: "Symbol: piková dáma = OSUDOVÝ trest", figura: "Gradace: stupňování NAPĚTÍ u karet" },
    kontext: { literarni: "Ruský ROMANTISMUS přecházející v realismus", historicky: "Carské RUSKO 30. let 19. století", inspirace: "Puškinova znalost PETROHRADSKÉ aristokracie", srovnani: ["Evžen Oněgin (Puškin)","Hráč (Dostojevskij)"] },
    soucasnici: {
      cesti: ["Karel Hynek Mácha - Máj","Josef Kajetán Tyl - Fidlovačka","Karel Havlíček Borovský - Epigramy"],
      svetovi: ["Honoré de Balzac - Otec Goriot","Victor Hugo - Chrám Matky Boží","Nikolaj Gogol - Revizor"]
    }
  },
  {
    id: 15, title: "Petr a Lucie", author: "Romain Rolland",
    obdobi: 3,
    info: { narodnost: "Francouzský", roky: "1866-1944", smer: "HUMANISMUS, protiválečná próza", vydani: "1920", druh: "EPIKA", zanr: "Protiválečná NOVELA" },
    casoprostor: "LEDEN-BŘEZEN 1918, 1. sv. válka",
    misto: "Bombardovaná PAŘÍŽ, metro, kostel",
    dej: ["PETR potká LUCII při náletu v metru","Oba hledají ÚNIK z hrůz 1. sv. války","Postupně se do sebe ZAMILUJÍ","Lucie je CHUDÁ malířka, Petr z buržoazie","Plánují SPOLEČNOU budoucnost po válce","Na Velký pátek oba ZAHYNOU v kostele"],
    postavy: { hlavni: [{jmeno:"Petr",vlastnost:"CITLIVÝ student, odpůrce války"},{jmeno:"Lucie",vlastnost:"NĚŽNÁ chudá malířka"}], vedlejsi: [{jmeno:"Filip (bratr Petra)",funkce:"VOJÁK, cynický realista"}] },
    temata: { hlavni: "LÁSKA jako jediná hodnota proti válce", motivy: ["VÁLKA ničí nevinné","MLÁDÍ zmařené válkou","UMĚNÍ jako útěk","SMRT milenců = marnost války"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, lyrizovaná próza", prostredky: "POETICKÝ jazyk, kontrasty, symboly", tropus: "Symbol: kostel = FALEŠNÉ útočiště", figura: "Kontrast: LÁSKA x válečná ZKÁZA" },
    kontext: { literarni: "Francouzský HUMANISMUS, Nobelova cena 1915", historicky: "1. SVĚTOVÁ VÁLKA, bombardování Paříže", inspirace: "Rollandův PACIFISMUS a odpor k válce", srovnani: ["Na západní frontě klid (Remarque)","Romeo a Julie (Shakespeare)"] },
    soucasnici: {
      cesti: ["Karel Čapek - R.U.R.","Jaroslav Hašek - Osudy dobrého vojáka Švejka","Viktor Dyk - Krysař"],
      svetovi: ["E. M. Remarque - Na západní frontě klid","Ernest Hemingway - Sbohem, armádo","Thomas Mann - Kouzelný vrch"]
    }
  },
  {
    id: 16, title: "Romeo a Julie", author: "William Shakespeare",
    obdobi: 1,
    info: { narodnost: "Anglický", roky: "1564-1616", smer: "RENESANCE, alžbětinské drama", vydani: "1597", druh: "DRAMA", zanr: "Milostná TRAGÉDIE, 5 jednání" },
    casoprostor: "14. STOLETÍ, renesanční Itálie",
    misto: "Italská VERONA, dům Kapuletů, hrobka",
    dej: ["Rody MONTEKŮ a KAPULETŮ se nenávidí","Romeo a Julie se ZAMILUJÍ na plese","Tajně se ODDAJÍ (bratr Vavřinec)","Romeo zabije TYBALTA, musí do vyhnanství","Julie předstírá SMRT uspávacím lektvarem","Romeo se OTRÁVÍ, Julie se PROBODNE"],
    postavy: { hlavni: [{jmeno:"Romeo",vlastnost:"VÁŠNIVÝ mladý Montek"},{jmeno:"Julie",vlastnost:"ODVÁŽNÁ mladá Kapuletová"}], vedlejsi: [{jmeno:"Bratr Vavřinec",funkce:"MNICH, tajně je oddá"},{jmeno:"Tybalt",funkce:"AGRESIVNÍ bratranec Julie"}] },
    temata: { hlavni: "LÁSKA silnější než nenávist rodů", motivy: ["OSUD a předurčení","NENÁVIST rodů","MLÁDÍ vs. stará generace","SMRT jako sjednocení"] },
    jazyk: { vypravec: "DIALOGICKÁ drama, BLANKVERS", prostredky: "Veršovaný JAZYK, monology, slovní hříčky", tropus: "Metafora: Julie je SLUNCE", figura: "Oxymóron: krásná PŘÍŠERO, andělský ďáble" },
    kontext: { literarni: "Anglická RENESANCE, alžbětinské divadlo", historicky: "Doba královny ALŽBĚTY I. (16. st.)", inspirace: "Italská NOVELA z 15. století", srovnani: ["Hamlet (Shakespeare)","Petr a Lucie (Rolland)"] },
    soucasnici: {
      cesti: ["Daniel Adam z Veleslavína - slovníky","Jan Blahoslav - Gramatika česká","Kryštof Harant - Cesta z Čech"],
      svetovi: ["Miguel de Cervantes - Don Quijote","Christopher Marlowe - Doctor Faustus","Ben Jonson - Volpone"]
    }
  },
  {
    id: 17, title: "Vyšetřování ztráty třídní knihy", author: "Ladislav Smoljak, Zdeněk Svěrák",
    obdobi: 4,
    info: { narodnost: "Čeští", roky: "Smoljak 1931-2010, Svěrák *1936", smer: "DIVADLO Járy Cimrmana", vydani: "1967", druh: "DRAMA", zanr: "Mystifikační KOMEDIE" },
    casoprostor: "PŘELOM 19./20. st. (hra) + současnost (přednáška)",
    misto: "Venkovská ŠKOLA, divadelní pódium",
    dej: ["PŘEDNÁŠKA o géniovi Járovi Cimrmanovi","Cimrman údajně vynalezl PEDAGOGICKÉ metody","Hra: INSPEKTOR přijde na venkovskou školu","Zjišťuje ZTRÁTU třídní knihy","Absurdní VÝSLECHY učitelů a žáků","Třídní kniha NENALEZENA, chaos pokračuje"],
    postavy: { hlavni: [{jmeno:"Inspektor",vlastnost:"BYROKRATICKÝ úředník"}], vedlejsi: [{jmeno:"Učitelé",funkce:"NESCHOPNÍ pedagogové"},{jmeno:"Přednášející",funkce:"CIMRMANOLOGOVÉ v semináři"}] },
    temata: { hlavni: "SATIRA byrokracie a školství", motivy: ["MYSTIFIKACE génia Cimrmana","ABSURDITA úřadů","HUMOR jako kritika systému","PAPÍR důležitější než učení"] },
    jazyk: { vypravec: "DIALOGICKÁ forma + přednáškový monolog", prostredky: "SUCHÝ humor, mystifikace, nonsens", tropus: "Ironie: Cimrman PŘEDBĚHL svou dobu", figura: "Nonsensová GRADACE absurdních důkazů" },
    kontext: { literarni: "Divadlo Járy CIMRMANA, česká komedie", historicky: "60. léta, UVOLNĚNÍ v kultuře (před 1968)", inspirace: "Tradice českého DADAISMU a absurdity", srovnani: ["Dobytí sev. pólu (Smoljak/Svěrák)","Hospoda Na mýtince (Smoljak/Svěrák)"] },
    soucasnici: {
      cesti: ["Václav Havel - Zahradní slavnost","Milan Kundera - Žert","Josef Škvorecký - Zbabělci"],
      svetovi: ["Samuel Beckett - Čekání na Godota","Eugène Ionesco - Plešatá zpěvačka","Tom Stoppard - Rosencrantz a Guildenstern"]
    }
  },
  {
    id: 18, title: "O myších a lidech", author: "John Steinbeck",
    obdobi: 3,
    info: { narodnost: "Americký", roky: "1902-1968", smer: "AMERICKÝ realismus, sociální próza", vydani: "1937", druh: "EPIKA", zanr: "Sociální NOVELA" },
    casoprostor: "30. LÉTA 20. st., Velká hospodářská krize",
    misto: "Kalifornské FARMY, břeh řeky Salinas",
    dej: ["George a Lennie hledají PRÁCI na farmách","Sní o vlastním RANČI s králíky","Lennie je SILNÝ ale mentálně zaostalý","Na farmě Lennie nechtěně ZABIJE štěně","Omylem ZLOMÍ vaz ženě majitelova syna","George Lennieho ZASTŘELÍ z milosrdenství"],
    postavy: { hlavni: [{jmeno:"George Milton",vlastnost:"CHYTRÝ, ochranitelský přítel"},{jmeno:"Lennie Small",vlastnost:"OBŘÍ, dobrosrdečný, mentálně zaostalý"}], vedlejsi: [{jmeno:"Slim",funkce:"MOUDRÝ kovboj, morální autorita"},{jmeno:"Curleyova žena",funkce:"OSAMĚLÁ, nešťastná oběť"}] },
    temata: { hlavni: "ZNIČENÍ amerického snu bezmocných", motivy: ["SEN o vlastním ranči","OSAMĚLOST tuláků","SÍLA vs. křehkost","MILOSRDENSTVÍ vs. krutost"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, objektivní", prostredky: "STROHÝ dialogický styl, krátké popisy", tropus: "Symbol: králíci = NEDOSAŽITELNÝ sen", figura: "Opakování: Povídej o KRÁLÍCÍCH, George" },
    kontext: { literarni: "Americký REALISMUS, sociální próza", historicky: "Velká HOSPODÁŘSKÁ krize 30. let", inspirace: "Steinbeckova znalost kalifornských FARMÁŘŮ", srovnani: ["Hrozny hněvu (Steinbeck)","Stařec a moře (Hemingway)"] },
    soucasnici: {
      cesti: ["Karel Čapek - Bílá nemoc","Vladislav Vančura - Markéta Lazarová","Karel Poláček - Bylo nás pět"],
      svetovi: ["Ernest Hemingway - Komu zvoní hrana","William Faulkner - Absolone!","Francis Scott Fitzgerald - Velký Gatsby"]
    }
  },
  {
    id: 19, title: "Rozmarné léto", author: "Vladislav Vančura",
    obdobi: 4,
    info: { narodnost: "Český", roky: "1891-1942", smer: "Česká AVANTGARDA, poetismus", vydani: "1926", druh: "EPIKA", zanr: "Lyrizovaná NOVELA" },
    casoprostor: "LÉTO, přelom 19./20. století",
    misto: "Malé LÁZEŇSKÉ MĚSTEČKO u řeky",
    dej: ["Tři přátelé TRÁVÍ líné léto u vody","Přijíždí kouzelník ARNOŠTEK s Annou","Anna OKOUZLÍ všechny tři muže","Každý se pokusí o SBLÍŽENÍ s Annou","Všichni NEÚSPĚŠNÍ, zesměšněni","Arnoštek ODJÍŽDÍ, vše se vrátí do kolejí"],
    postavy: { hlavni: [{jmeno:"Antonín Důra",vlastnost:"POHODLNÝ správce lázní"}], vedlejsi: [{jmeno:"Kanovník Roch",funkce:"DUCHOVNÍ, podlehne kouzlu Anny"},{jmeno:"Major Hugo",funkce:"DŮSTOJNÍK, další oběť Anny"},{jmeno:"Arnoštek",funkce:"KEJKLÍŘ s krásnou Annou"}] },
    temata: { hlavni: "MARNOST touhy a nudný koloběh života", motivy: ["LÉTO jako symbol zahálky","KRÁSA narušuje stereotyp","MALOMĚSTO a jeho nuda","TOUHA vs. realita"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, autorský vypravěč", prostredky: "ARCHAICKÝ, básnický, bohatý jazyk", tropus: "Metafora: léto = ROZMARNÉ marné snění", figura: "Inverze: Nuže OBE DVĚ, slzy i úsměvy" },
    kontext: { literarni: "Česká AVANTGARDA, poetismus 20. let", historicky: "Stabilní PRVNÍ REPUBLIKA, kulturní rozkvět", inspirace: "Vančurova láska k JAZYKU a experimentu", srovnani: ["Markéta Lazarová (Vančura)","Poetismus (Nezval, Seifert)"] },
    soucasnici: {
      cesti: ["Karel Čapek - Povídky z jedné kapsy","Jaroslav Hašek - Osudy dobrého vojáka Švejka","Jiří Wolker - Host do domu"],
      svetovi: ["Franz Kafka - Proces","James Joyce - Odysseus","Virginia Woolf - Paní Dallowayová"]
    }
  },
  {
    id: 20, title: "Noc na Karlštejně", author: "Jaroslav Vrchlický",
    obdobi: 2,
    info: { narodnost: "Český", roky: "1853-1912", smer: "LUMÍROVCI, novoromantismus", vydani: "1884", druh: "DRAMA", zanr: "Veršovaná historická KOMEDIE, 4 jednání" },
    casoprostor: "14. STOLETÍ, vláda Karla IV.",
    misto: "Hrad KARLŠTEJN, hradní komnaty a kaple",
    dej: ["Karel IV. ZAKÁŽE ženám vstup na Karlštejn","Královna ELIŠKA se tajně PŘEVLÉKNE","Purkrabí ARNOŠT bedlivě HLÍDÁ zákaz","Eliška prozrazena, ale Karel to TUŠÍ","Alžběta (Karlova žena) také PŘIJDE tajně","Karel ženám ODPUSTÍ, láska vítězí"],
    postavy: { hlavni: [{jmeno:"Karel IV.",vlastnost:"MOUDRÝ, tolerantní panovník"}], vedlejsi: [{jmeno:"Královna Eliška",funkce:"ZAMILOVANÁ, odvážná manželka"},{jmeno:"Purkrabí Arnošt",funkce:"PŘÍSNÝ strážce hradního řádu"}] },
    temata: { hlavni: "LÁSKA vítězí nad přísným zákonem", motivy: ["PŘEVLEK a tajemství","ŽENA vs. mužský řád","MOUDROST panovníka","HUMOR a laskavost"] },
    jazyk: { vypravec: "DIALOGICKÁ forma, VERŠOVANÁ řeč", prostredky: "Elegantní VERŠ, historický jazyk, humor", tropus: "Metonymie: Karlštejn = MUŽSKÝ řád a moc", figura: "Antiteze: ZÁKON hradní x PRÁVO lásky" },
    kontext: { literarni: "LUMÍROVCI, kosmopolitní orientace", historicky: "Doba NÁRODNÍHO OBROZENÍ, vzor Karla IV.", inspirace: "Historická POVĚST o zákazu žen na Karlštejně", srovnani: ["Noc na Karlštejně film (1974)","Cyrano z Bergeracu (Rostand)"] },
    soucasnici: {
      cesti: ["Jan Neruda - Povídky malostranské","Alois Jirásek - Staré pověsti české","Svatopluk Čech - Písně otroka"],
      svetovi: ["Victor Hugo - Bídníci","Henrik Ibsen - Domečkové","Fjodor Dostojevskij - Bratři Karamazovi"]
    }
  }
];
