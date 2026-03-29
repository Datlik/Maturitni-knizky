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
    id: 8, title: "Vražda v Orient expresu", author: "Agatha Christie",
    obdobi: 3,
    info: { narodnost: "ANGLIČANKA", roky: "1890–1976", smer: "MEZIVÁLEČNÁ LITERATURA, MODERNISMUS, zlatý věk detektivky", vydani: "1934", druh: "EPIKA", zanr: "Detektivní ROMÁN" },
    casoprostor: "ZIMA, rok 1929",
    misto: "LUXUSNÍ VLAK Orient expres, Jugoslávie (uzavřené kupé)",
    dej: [
      "Poirot NASTUPUJE do plného Orient expresu",
      "Ratchett žádá OCHRANU, Poirot odmítá",
      "Vlak UVÍZNE ve sněhové závěji",
      "Ratchett NALEZEN mrtev, ubodán 12 ranami",
      "Poirot VYŠETŘUJE všechny cestující, nachází stopy",
      "ODHALENÍ: Vraždili cestující společně ze msty"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Hercule Poirot",vlastnost:"PRECIZNÍ geniální detektiv"}
      ], 
      vedlejsi: [
        {jmeno:"Samuel Ratchett",funkce:"OBĚŤ vraždy"},
        {jmeno:"Monsieur Bouc",funkce:"ŘEDITEL železniční společnosti"},
        {jmeno:"Mary Debenhamová",funkce:"GUVERNANTKA"},
        {jmeno:"Hector MacQueen",funkce:"SEKRETÁŘ oběti"}
      ] 
    },
    temata: { 
      hlavni: "VYŠETŘOVÁNÍ VRAŽDY v uzavřeném vlaku", 
      motivy: ["KOLEKTIVNÍ POMSTA za hrůzný čin","SPRAVEDLNOST versus oficiální zákon","ZTRACENÝ KAPESNÍČEK s iniciálou H","ČISTIČ NA LULKU jako falešná stopa","ČERVENÉ KIMONO s draky"] 
    },
    jazyk: { 
      vypravec: "ER-FORMA, neosobní vševědoucí vypravěč", 
      prostredky: "SPISOVNÝ JAZYK, dialogy, francouzské fráze", 
      tropus: "PERSONIFIKACE: „pro tuto teorii mluví to...“", 
      figura: "ŘEČNICKÁ OTÁZKA: „Ztratila jej žena?“" 
    },
    kontext: { 
      literarni: "MEZIVÁLEČNÁ LITERATURA, ZLATÝ VĚK detektivky", 
      historicky: "INSPIRACE únosem syna Charlese Lindbergha", 
      inspirace: "ZNALOST LÉKŮ (lékárnice) a Orient expresu", 
      srovnani: ["Agatha Christie - SMRT NA NILU"] 
    },
    soucasnici: {
      cesti: ["KAREL ČAPEK - Bílá nemoc","EDUARD BASS - Cirkus Humberto"],
      svetovi: ["ERNEST HEMINGWAY - Stařec a moře","REMARQUE - Na západní frontě klid"]
    }
  },

  {
    id: 5, title: "Tyrolské elegie", author: "Karel Havlíček Borovský",
    obdobi: 2,
    info: { narodnost: "ČECH", roky: "1821–1856", smer: "REALISMUS, národní obrození, 19. STOLETÍ", vydani: "1861", druh: "LYRIKO-EPIKA", zanr: "Satirická báseň, ELEGIE" },
    casoprostor: "PROSINEC 1851, období BACHOVA ABSOLUTISMU",
    misto: "NĚMECKÝ BROD, strmé ALPY, BRIXEN",
    dej: [
      "NOČNÍ ZATČENÍ policií a LOUČENÍ doma",
      "Nucený ODJEZD do vyhnanství s Dederou",
      "Cesta přes Jihlavu, VZPOMÍNKY u kostela",
      "SPLAŠENÍ KONÍ na strmé cestě ALPAMI",
      "ZBABĚLÝ ÚTĚK strážníků ze splašeného vozu",
      "PŘÍJEZD do BRIXENU a policejní dohled"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"K. H. Borovský",vlastnost:"ODVÁŽNÝ, IRONICKÝ"}
      ], 
      vedlejsi: [
        {jmeno:"Franz DEDERA",funkce:"policejní komisař, ŘÍDÍ PŘEVOZ"},
        {jmeno:"MĚSÍČEK",funkce:"jediný přítel, NASLOUCHÁ PŘÍBĚHU"}
      ] 
    },
    temata: { 
      hlavni: "KRITIKA rakouského absolutismu a NESVOBODY", 
      motivy: ["VYHNANSTVÍ","LOUČENÍ","ZBABĚLOST","STRACH","NOC"] 
    },
    jazyk: { 
      vypravec: "ICH-FORMA, autobiografické, 1. OSOBA", 
      prostredky: "HOVOROVÝ JAZYK, ironie, satira, ARCHAISMY", 
      tropus: "PERSONIFIKACE: „kostelíček… na mne hledí“", 
      figura: "INVERZE: „tam Dedera koupil mělnického čtyry lahvice“" 
    },
    kontext: { 
      literarni: "Počátky REALISMUS, fáze NÁRODNÍHO OBROZENÍ", 
      historicky: "BACHŮV ABSOLUTISMUS v Rakousko-Uhersku", 
      inspirace: "VLASTNÍ ZÁŽITEK násilné nespravedlivé DEPORTACE", 
      srovnani: ["Žalozpěvy (Ovidius)"] 
    },
    soucasnici: {
      cesti: ["Božena NĚMCOVÁ - BABIČKA","K. J. ERBEN - KYTICE","J. K. TYL - STRAKONICKÝ DUDÁK"],
      svetovi: ["Victor HUGO - BÍDNÍCI","Charles DICKENS - OLIVER TWIST","L. N. TOLSTOJ - VOJNA A MÍR"]
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
    info: { narodnost: "ČESKÝ", roky: "1914–1997", smer: "ČESKÁ PRÓZA 2. POLOVINY 20. STOLETÍ", vydani: "1965", druh: "EPIKA", zanr: "Tragikomická novela" },
    casoprostor: "ÚNOR 1945, konec 2. SVĚTOVÉ VÁLKY",
    misto: "NÁDRAŽÍ Kostomlaty, PROTEKTORÁT Čechy a Morava",
    dej: [
      "NÁVRT Miloše po NEÚSPĚŠNÉ SEBEVRAŽDĚ",
      "ZÁŠKOLÁK Miloš SLEDUJE německé transporty",
      "HUBIČKA PLÁNUJE ZNIČIT MUNIČNÍ VLAK",
      "ODBOJÁŘKA Viktoria PŘINÁŠÍ BOMBU",
      "Viktoria ZBAVUJE Miloše PANICCTVÍ",
      "Miloš VHAZUJE BOMBU, ZMÍRÁ s Němcem"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"MILOŠ HRMA",vlastnost:"CITLIVÝ a LÍTOSTIVÝ"},
        {jmeno:"HUBIČKA",vlastnost:"VÝPRAVČÍ, INICIÁTOR odboje"}
      ], 
      vedlejsi: [
        {jmeno:"PŘEDNOSTA",funkce:"AMBICIÓZNÍ CHOVATEL holubů"},
        {jmeno:"VIKTORIA FREIE",funkce:"ODBOJÁŘKA, PŘINÁŠÍ bombu"},
        {jmeno:"MÁŠA",funkce:"Milošova PŘÍTELKYNĚ"}
      ] 
    },
    temata: { 
      hlavni: "KRITIKA nesmyslnosti VÁLKY", 
      motivy: ["VOJÁK a VÁLKA","LÁSKA a SMRT","RAZÍTKA na zadnici","DOSPÍVÁNÍ a SEXUALITA"] 
    },
    jazyk: { 
      vypravec: "ICH-FORMA, 1. OSOBA, RETROSPEKTIVA", 
      prostredky: "SPISOVNÁ i NESPISOVNÁ čeština, GERMANISMY, SLANG", 
      tropus: "PŘIROVNÁNÍ: „zvadl jako LILIUM“", 
      figura: "APOSIOPESE: „jdu k vám o radu…“" 
    },
    kontext: { 
      literarni: "DRUHÁ VLNA VÁLEČNÉ PRÓZY", 
      historicky: "PROTEKTORÁT, blížící se KONEC VÁLKY", 
      inspirace: "HRABAL PRACOVAL jako VÝPRAVČÍ v Kostomlatech", 
      srovnani: ["Romeo, Julie a tma (Jan Otčenášek)"] 
    },
    soucasnici: {
      cesti: ["Jan OTČENÁŠEK - ROMEO, JULIE A TMA","Karel ČAPEK - BÍLÁ NEMOC","Karel POLÁČEK - BYLO NÁS PĚT"],
      svetovi: ["George ORWELL - FARMA ZVÍŘAT","Ernest HEMINGWAY - STAŘEC A MOŘE","Romain ROLLAND - PETR A LUCIE"]
    }
  },

  {
    id: 9, title: "Saturnin", author: "Zdeněk Jirotka",
    obdobi: 4,
    info: { narodnost: "ČECH", roky: "1911–2003", smer: "ČESKÁ HUMORISTICKÁ LITERATURA, 1. polovina 20. století", vydani: "1942", druh: "EPIKA", zanr: "HUMORISTICKÝ ROMÁN" },
    casoprostor: "PRVNÍ REPUBLIKA, 30.–40. léta",
    misto: "PRAHA a VENKOV (hausbót, dědečkova vila, srub dr. Vlacha)",
    dej: [
      "Vypravěč NAJME svérázného sluhu Saturnina",
      "Saturnin PŘESTĚHUJE pána na hausbót",
      "Teta Kateřina VYHNÁNA maskami z lodi",
      "Povodeň STRHNE MOST k dědečkově vile",
      "Výprava do města pro NOVÉ ZÁSOBY",
      "Dědeček PŘEDSTÍRÁ ŠÍLENSTVÍ kvůli tetě Kateřině"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Saturnin",vlastnost:"VYNALÉZAVÝ a inteligentní hybatel děje"},
        {jmeno:"Vypravěč (Jiří)",vlastnost:"PASIVNÍ mladý gentleman"},
        {jmeno:"Teta Kateřina",vlastnost:"KOMICKÁ postava, touží po dědictví"},
        {jmeno:"Slečna Barbora",vlastnost:"LÁSKA vypravěče, elegantní sportovkyně"}
      ], 
      vedlejsi: [
        {jmeno:"Milouš",funkce:"HLOUPEJŠÍ dospívající a laciný světák"},
        {jmeno:"Dědeček",funkce:"BOHATÝ ředitel elektrárny bavící se okolím"},
        {jmeno:"Doktor Vlach",funkce:"SARKASTICKÝ rodinný přítel a glosátor"}
      ] 
    },
    temata: { 
      hlavni: "ABSURDITA konvencí, oslava HUMORU a fantazie", 
      motivy: ["SLUHA A PÁN","Teta chrlící PŘÍSLOVÍ","SUCHÝ ANGLICKÝ HUMOR","NÁHODA A DOBRODRUŽSTVÍ"] 
    },
    jazyk: { 
      vypravec: "ICH-FORMA, 1. osoba (vypravěč)", 
      prostredky: "SPISOVNÝ, ARCHAISMY, KNIŽNÍ VÝRAZY, SARKASMUS", 
      tropus: "PERSONIFIKACE: „zaječení zvonku“", 
      figura: "ŘEČNICKÁ OTÁZKA: „Co bude, proboha, dělat v létě?“" 
    },
    kontext: { 
      literarni: "ČESKÁ HUMORISTICKÁ LITERATURA, doba okupace", 
      historicky: "ÚNIK před hrůzami druhé světové války", 
      inspirace: "P. G. Wodehouse (SLUHA JEEVES)", 
      srovnani: ["KAREL POLÁČEK - MUŽI V OFSAJDU"] 
    },
    soucasnici: {
      cesti: ["Karel POLÁČEK - BYLO NÁS PĚT","Eduard BASS - CIRKUS HUMBERTO"],
      svetovi: ["George ORWELL - FARMA ZVÍŘAT","Ernest HEMINGWAY - STAŘEC A MOŘE"]
    }
  },

  {
    id: 10, title: "Lakomec", author: "Molière",
    obdobi: 1,
    info: { narodnost: "FRANCIE", roky: "1622–1673", smer: "Francouzský KLASICISMUS, 17. STOLETÍ", vydani: "1668", druh: "DRAMA", zanr: "Satirická komedie" },
    casoprostor: "Během 24 HODIN roku 1670",
    misto: "Harpagonův DŮM a ZAHRADA, Paříž",
    dej: [
      "Harpagon CHCE PROVDAT děti kvůli PENĚZŮM",
      "Kleant a Eliška MILUJÍ CHUDÉ partnery",
      "Sluha UKRADNE Harpagonovi truhlu s PENĚZI",
      "Harpagon ŠÍLÍ a VYŠETŘUJE celou rodinu",
      "Anselm POZNÁVÁ své ztracené DĚTI",
      "SVATBY párů, Harpagon ZÍSKÁ ZPĚT poklad"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Harpagon",vlastnost:"chorobný LAKOMEC"},
        {jmeno:"Kleant",vlastnost:"ZAMILOVANÝ odvážlivec"},
        {jmeno:"Eliška",vlastnost:"upřímná, SPRAVEDLIVÁ"},
        {jmeno:"Valér",vlastnost:"VĚRNÝ podlézavec"},
        {jmeno:"Mariana",vlastnost:"SKROMNÁ a plachá"}
      ], 
      vedlejsi: [
        {jmeno:"Anselm",funkce:"BOHATÝ šlechtic, rozuzluje děj"},
        {jmeno:"Frosina",funkce:"manipulativní DOHAZOVAČKA"},
        {jmeno:"Čipera",funkce:"SLUHA, ukradne truhlu"},
        {jmeno:"Jakub",funkce:"KUCHAŘ a kočí"}
      ] 
    },
    temata: { 
      hlavni: "Ničivá CHAMTIVOST a lakota", 
      motivy: ["PENÍZE a ukrytý poklad","LÁSKA a upřímné city","INTRIGY a společenská přetvářka","RODINNÉ VZTAHY"] 
    },
    jazyk: { 
      vypravec: "ER-FORMA (3. osoba), DIALOGY", 
      prostredky: "SPISOVNÁ čeština, HOVOROVÉ výrazy, ARCHAISMY", 
      tropus: "METAFORA: „aby ti z toho něco KÁPLO“", 
      figura: "APOSTROFA: „Ach, PENÍZE, penízky...“" 
    },
    kontext: { 
      literarni: "Francouzský KLASICISMUS a OSVÍCENSTVÍ", 
      historicky: "Doba absolutismu krále LUDVÍKA XIV.", 
      inspirace: "Plautova antická KOMEDIE O HRNCI", 
      srovnani: ["Tartuffe (Molière)","Sluha dvou pánů (Carlo Goldoni)"] 
    },
    soucasnici: {
      cesti: [],
      svetovi: ["Pierre CORNEILLE - CID","Jean RACINE - FAIDRA","Jean de la FONTAINE - BAJKY"]
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
    info: { narodnost: "ANGLIČAN", roky: "1903–1950", smer: "SVĚTOVÁ LITERATURA po r. 1945, ANTIUTOPIE", vydani: "1945", druh: "EPIKA", zanr: "Alegorický ROMÁN, BAJKA" },
    casoprostor: "30.–50. léta 20. století",
    misto: "ANGLIE, fiktivní PANSKÁ FARMA",
    dej: [
      "Vize REVOLUCE od kance Majora",
      "Vzpoura, VYHNÁNÍ lidí, Zvířecí farma",
      "SPORY vůdců, vyhnání kance Kuliše",
      "Stavba MLÝNA, krutá DIKTATURA prasete Napoleona",
      "Úmrtí dříče BOXERA na jatkách",
      "ROZPAD ideálů, prasata SPLÝVAJÍ s lidmi"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"NAPOLEON",vlastnost:"POKRYTECKÝ, zlý diktátor"},
        {jmeno:"KULIŠ",vlastnost:"INTELIGENTNÍ, čestný a vynalézavý"}
      ], 
      vedlejsi: [
        {jmeno:"BOXER",funkce:"PRACOVITÝ a zmanipulovaný"},
        {jmeno:"PIŠTÍK",funkce:"PROPAGANDISTA a mluvčí režimu"},
        {jmeno:"Pan JONES",funkce:"původní MAJITEL farmy"},
        {jmeno:"BENJAMIN",funkce:"PASIVNÍ intelektuál, autorovo alter-ego"}
      ] 
    },
    temata: { 
      hlavni: "Kritika TOTALITY a KOMUNISMU", 
      motivy: ["Ztráta SVOBODY a MANIPULACE","Píseň ZVÍŘATA ANGLIE","Měnící se SEDM PŘIKÁZÁNÍ","LŽI a propaganda"] 
    },
    jazyk: { 
      vypravec: "ER-FORMA (3. osoba), vševědoucí VYPRAVĚČ", 
      prostredky: "SPISOVNÝ jazyk, odborné TERMÍNY, PERSONIFIKACE", 
      tropus: "PŘIROVNÁNÍ: „budoucnost jak zlato září“", 
      figura: "REPETICE: „Čtyři nohy dobré, dvě špatné“" 
    },
    kontext: { 
      literarni: "LITERATURA PO 2. SVĚTOVÉ VÁLCE", 
      historicky: "Konec VÁLKY, nástup STALINISMU", 
      inspirace: "Situace v SSSR, AUTOBIOGRAFICKÝ osel Benjamin", 
      srovnani: ["1984 (George Orwell)"] 
    },
    soucasnici: {
      cesti: ["Karel ČAPEK - R.U.R.","Ludvík SOUČEK - Cesta slepých ptáků"],
      svetovi: ["Ray BRADBURY - Marťanská kronika","Isaac ASIMOV - Já, robot","Albert CAMUS - Cizinec"]
    }
  },

  {
    id: 13, title: "Bylo nás pět", author: "Karel Poláček",
    obdobi: 4,
    info: { narodnost: "ČESKÝ", roky: "1892–1945", smer: "ČESKÁ MEZIVÁLEČNÁ PRÓZA, demokratický PROUD", vydani: "1946", druh: "EPIKA", zanr: "Humoristický ROMÁN" },
    casoprostor: "ZAČÁTEK 20. STOLETÍ, PRVNÍ REPUBLIKA",
    misto: "MALOMĚSTO Rychnov nad Kněžnou, snová INDIE",
    dej: [
      "Péťa prožívá KLUKOVSKÁ DOBRODRUŽSTVÍ s partou",
      "Perou se s NEPŘÁTELSKÝMI Ješiňáky a Habrováky",
      "Neúspěšné vybírání VOSÍHO HNÍZDA",
      "Návštěva CIRKUSU a pomoc zvířatům",
      "Péťa onemocní SPÁLOU a těžce blouzní",
      "Snová výprava do INDIE, UZDRAVENÍ"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Petr Bajza",vlastnost:"VYPRAVĚČ, inteligentní ROŠŤÁK s představivostí"}
      ], 
      vedlejsi: [
        {jmeno:"Antonín Bejval",funkce:"KAMARÁD, ješitný VYNÁLEZCE"},
        {jmeno:"Čeněk Jirsák",funkce:"KAMARÁD, pobožný SBĚRATEL hříchů"},
        {jmeno:"Josef Zilvar",funkce:"KAMARÁD z chudobince, starší KUŘÁK"},
        {jmeno:"Eda Kemlink",funkce:"KAMARÁD, chytrý syn ÚŘEDNÍKA"},
        {jmeno:"Tatínek Bajza",funkce:"MAJITEL obchodu, přísný živitel"},
        {jmeno:"Kristýna (Rampepurda)",funkce:"bláznivá SLUŽKA z Rampuše"}
      ] 
    },
    temata: { 
      hlavni: "Svět DOSPĚLÝCH viděný DĚTSKÝMA OČIMA", 
      motivy: ["KLUKOVSKÁ DOBRODRUŽSTVÍ","Život na MALOMĚSTĚ","KAMARÁDSTVÍ a rodina","Snová EXOTIKA (Indie)"] 
    },
    jazyk: { 
      vypravec: "ICH-FORMA, 1. OSOBA (Petr)", 
      prostredky: "Zastaralý SPISOVNÝ jazyk, dětský SLANG, ARCHAISMY, GERMANISMY", 
      tropus: "PŘIROVNÁNÍ: „červený jako JABLÍČKO“", 
      figura: "EPIZEUXIS: „HOLÁ, HOLÁ!“" 
    },
    kontext: { 
      literarni: "DEMOKRATICKÝ PROUD, skupina Pátečníci", 
      historicky: "Vznik za OKUPACE před transportem", 
      inspirace: "AUTOBIOGRAFICKÉ vzpomínky na DĚTSTVÍ", 
      srovnani: ["Dobrodružství Toma Sawyera (Mark Twain)"] 
    },
    soucasnici: {
      cesti: ["Karel ČAPEK - BÍLÁ NEMOC","Eduard BASS - CIRKUS HUMBERTO","Vladislav VANČURA - ROZMARNÉ LÉTO"],
      svetovi: []
    }
  },

  {
    id: 14, title: "Piková dáma", author: "Alexandr Sergejevič Puškin",
    obdobi: 2,
    info: { narodnost: "RUSKÝ", roky: "1799\u20131837", smer: "Rusk\u00fd ROMANTISMUS, z\u00e1klady realismu", vydani: "1834", druh: "EPIKA", zanr: "Fantaskn\u00ed NOVELA / POV\u00cdDKA" },
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
    info: { narodnost: "FRANCIE", roky: "1866\u20131944", smer: "Sv\u011btov\u00e1 MEZIV\u00c1LE\u010cN\u00c1 LITERATURA, realismus", vydani: "VZNIKU a VYD\u00c1N\u00cd 1920", druh: "EPIKA, protiv\u00e1le\u010dn\u00e1 milostn\u00e1 NOVELA", zanr: "NOVELA" },
    casoprostor: "LEDEN-B\u0158EZEN 1918, 1. sv. v\u00e1lka",
    misto: "Bombardovan\u00e1 PA\u0158\u00cd\u017d, metro, kostel",
    dej: ["PETR potk\u00e1 LUCII p\u0159i n\u00e1letu v metru","Oba hledaj\u00ed \u00daNIK z hr\u016fz 1. sv. v\u00e1lky","Postupn\u011b se do sebe ZAMILUJ\u00cd","Lucie je CHUD\u00c1 mal\u00ed\u0159ka, Petr z bur\u017eoazie","Pl\u00e1nuj\u00ed SPOLE\u010cN_OU budoucnost po v\u00e1lce","Na Velk\u00fd p\u00e1tek oba ZAHYNOU v kostele"],
    postavy: { hlavni: [{jmeno:"Petr",vlastnost:"CITLIV\u00dd student, odp\u016frce v\u00e1lky"},{jmeno:"Lucie",vlastnost:"N\u011a\u017dN\u00c1 chud\u00e1 mal\u00ed\u0159ka"}], vedlejsi: [{jmeno:"Filip (bratr Petra)",funkce:"VOJ\u00c1K, cynick\u00fd realista"}] },
    temata: { hlavni: "L\u00c1SKA jako jedin\u00e1 hodnota proti v\u00e1lce", motivy: ["V\u00c1LKA ni\u010d\u00ed nevinn\u00e9","ML\u00c1D\u00cd zma\u0159en\u00e9 v\u00e1lkou","UM\u011aN\u00cd jako \u00fat\u011bk","SMRT milenc\u016f = marnost v\u00e1lky"] },
    jazyk: { vypravec: "ER-FORMA, 3. osoba, lyrizovan\u00e1 pr\u00f3za", prostredky: "POETICK\u00dd jazyk, kontrasty, symboly", tropus: "Symbol: kostel = FALE\u0160N\u00c9 \u00fato\u010di\u0161t\u011b", figura: "Kontrast: L\u00c1SKA x v\u00e1le\u010dn\u00e1 ZK\u00c1ZA" },
    kontext: { literarni: "Francouzsk\u00fd HUMANISMUS, Nobelova cena 1915", historicky: "1. SV\u011aTOV\u00c1 V\u00c1LKA, bombardov\u00e1n\u00ed Pa\u0159\u00ed\u017ee", inspirace: "Rolland\u016fv PACIFISMUS a odpor k v\u00e1lce", srovnani: ["Na z\u00e1padn\u00ed front\u011b klid (Remarque)","Romeo a Julie (Shakespeare)"] },
    soucasnici: {
      cesti: ["Karel \u010capek - R.U.R.","Jaroslav Ha\u0161ek - Osudy dobr\u00e9ho vojsk\u00e1 \u0160vejka","Viktor Dyk - Krysa\u0159"],
      svetovi: ["E. M. Remarque - Na z\u00e1padn\u00ed front\u011b klid","Ernest Hemingway - Sbohem, arm\u00e1do","Thomas Mann - Kouzeln\u00fd vrch"]
    }
  },

  {
    id: 4, title: "Malý princ", author: "Antoine de Saint-Exupéry",
    obdobi: 3,
    info: { narodnost: "FRANCOUZ", roky: "1900–1944", smer: "MEZIVÁLEČNÁ LITERATURA, realismus, experimentální próza", vydani: "1943", druh: "EPIKA", zanr: "Filozofická POHÁDKA pro dospělé" },
    casoprostor: "Pravděpodobně 20. STOLETÍ, děj trvá 8 DNÍ",
    misto: "ZEMĚ (Sahara), různé VESMÍRNÉ PLANETKY (B612)",
    dej: [
      "PILOT ztroskotá v poušti, POTKÁVÁ Malého prince",
      "Princ VYPRÁVÍ o planetce a milované RŮŽI",
      "Princ CESTUJE, poznává podivné DOSPĚLE na planetách",
      "NÁVŠTĚVA Země, setkání s HADEM a LIŠKOU",
      "OCHOČENÍ lišky, pochopení hodnoty pravého PŘÁTELSTVÍ",
      "Princ se nechá UŠTKNOUT, NÁVRT domů"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"MALÝ PRINC",vlastnost:"ZVĚDAVÝ a čistý dětský hrdina"},
        {jmeno:"PILOT",vlastnost:"OSAMĚLÝ dospělý vypravěč a snílek"}
      ], 
      vedlejsi: [
        {jmeno:"RŮŽE",funkce:"PYŠNÁ květina, DŮVOD k princovu návratu"},
        {jmeno:"LIŠKA",funkce:"MOUDRÁ, UČÍ prince pravému PŘÁTELSTVÍ"},
        {jmeno:"HAD",funkce:"Uštknutí NAVRACÍ prince na jeho planetu"}
      ] 
    },
    temata: { 
      hlavni: "STŘET dětského světa s DOSPĚLÝMI", 
      motivy: ["LÁSKA a pravé PŘÁTELSTVÍ","Hledání SMYSLU ŽIVOTA","Ztracená DĚTSKÁ FANTAZIE","Lidské VLASTNOSTI a NEDOSTATKY"] 
    },
    jazyk: { 
      vypravec: "ICH-FORMA (pilot) a ER-FORMA (princ)", 
      prostredky: "SPISOVNÝ jazyk, ZDROBNĚLINY, krátké věty, dialogy", 
      tropus: "PERSONIFIKACE: „HVĚZDY se tiše SMĚJÍ.“", 
      figura: "APOZIOPEZE: „Prosím pěkně... NAKRESLI mi beránka...“" 
    },
    kontext: { 
      literarni: "Francouzská MEZIVÁLEČNÁ a EXPERIMENTÁLNÍ próza", 
      historicky: "Napsáno za 2. SVĚTOVÉ VÁLKY v USA", 
      inspirace: "Vlastní HAVÁRIE autora v africké POUŠTI", 
      srovnani: ["Romain Rolland - novela PETR A LUCIE"] 
    },
    soucasnici: {
      cesti: ["KAREL ČAPEK - dramata R.U.R., BÍLÁ NEMOC","KAREL POLÁČEK - BYLO NÁS PĚT","JIŘÍ WOLKER - TĚŽKÁ HODINA"],
      svetovi: ["ROMAIN ROLLAND - PETR A LUCIE","E. M. REMARQUE - NA ZÁPADNÍ FRONTĚ KLID","HENRI BARBUSSE - OHEŇ"]
    }
  },

  {
    id: 16, title: "Romeo a Julie", author: "William Shakespeare",
    obdobi: 1,
    info: { narodnost: "ANGLIE", roky: "1564–1616", smer: "ANGLICKÁ RENESANCE a HUMANISMUS", vydani: "1596", druh: "DRAMA", zanr: "Milostná TRAGÉDIE" },
    casoprostor: "16. STOLETÍ, doba RENESANCE",
    misto: "ITALSKÁ města VERONA a MANTOVA",
    dej: [
      "Střet rodů a SETKÁNÍ na plese",
      "Tajná SVATBA milenců u VAVŘINCE",
      "Romeo ZABIJE Tybalta, následuje VYHNANSTVÍ",
      "Julie VYPIJE uspávací nápoj od VAVŘINCE",
      "Romeo nachází Julii mrtvou, VYPIJE JED",
      "Julie se PROBODNE, USMÍŘENÍ znepřátelených RODŮ"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"ROMEO Montek",vlastnost:"IMPULZIVNÍ a odvážný"},
        {jmeno:"JULIE Kapuletová",vlastnost:"VĚRNÁ a odvážná"}
      ], 
      vedlejsi: [
        {jmeno:"VAVŘINEC",funkce:"tajně ODDÁ milence"},
        {jmeno:"TYBALT",funkce:"ZABIJE Merkucia, vyvolává KONFLIKTY"}
      ] 
    },
    temata: { 
      hlavni: "Nešťastná LÁSKA ze znepřátelených RODŮ", 
      motivy: ["Rodová NENÁVIST a SPORY","Tragická SMRT a JED","Závěrečné USMÍŘENÍ obou RODŮ"] 
    },
    jazyk: { 
      vypravec: "DRAMA založené na DIALOZÍCH a MONOLOZÍCH", 
      prostredky: "Pětistopý jambický verš (BLANKVERS), SPISOVNÝ jazyk", 
      tropus: "METAFORA: „Jeť láska DÝM...“", 
      figura: "OXYMÓRON: „ĎÁBLE andělský“" 
    },
    kontext: { 
      literarni: "EVROPSKÝ HUMANISMUS a RENESANCE", 
      historicky: "Rozvoj VĚDY, objevení AMERIKY, KNIHTISK", 
      inspirace: "Antický příběh PHIRAMUS A THISBÉ", 
      srovnani: ["Cervantes (Don Quijote)","Lope de Vega (Fuente Ovejuna)"] 
    },
    soucasnici: {
      cesti: [],
      svetovi: ["Miguel de CERVANTES - DON QUIJOTE","Lope de VEGA - FUENTE OVEJUNA"]
    }
  },

  {
    id: 17, title: "Vyšetřování ztráty třídní knihy", author: "Ladislav Smoljak, Zdeněk Svěrák",
    obdobi: 4,
    info: { narodnost: "ČEŠTI", roky: "SMOLJAK 1931–2010, SVĚRÁK *1936", smer: "ČESKÉ DRAMA 60. LET, malá divadla", vydani: "Premiéra 1967", druh: "DRAMA", zanr: "Absurdní DIVADLO" },
    casoprostor: "2. POLOVINA 20. STOLETÍ, Rakousko-Uhersko",
    misto: "ČESKÁ ŠKOLA, učebna třídy 8. C",
    dej: [
      "UČITEL marně přemlouvá žáky k VRÁCENÍ KNIHY",
      "Zastrašování třídy ŘEDITELEM a čtení OBĚŽNÍKU",
      "Příchod ŘEDITELE, stěžování na NEPĚKNOU VĚC",
      "Přichází INSPEKTOR s hudební SKŘÍNÍ na krku",
      "Inspektor řeší ZTRACENÉ ČEPICE místo třídní knihy",
      "Příchod RADY vzbudí STRACH, vyšetřování končí NEÚSPĚCHEM"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"UČITEL",vlastnost:"PLACHÝ (slaboch bojící se ředitele)"},
        {jmeno:"ŘEDITEL",vlastnost:"SNAŽIVÝ (pánovitý, obává se inspekce)"}
      ], 
      vedlejsi: [
        {jmeno:"INSPEKTOR",funkce:"DOBRÁK (senilní, zajímají ho čepice)"},
        {jmeno:"ZEMSKÝ ŠKOLNÍ RADA",funkce:"ZAMLKLÝ (vzbuzuje hrůzu)"},
        {jmeno:"ŽÁCI (obecenstvo)",funkce:"LHOSTEJNÍ (cíl marného vyšetřování)"}
      ] 
    },
    temata: { 
      hlavni: "STRACH Z AUTORIT, absurdita školství", 
      motivy: ["TŘÍDNÍ KNIHA, ŠKOLA, KŮLNA, ČEPICE, SVAČINA"] 
    },
    jazyk: { 
      vypravec: "DIALOGY, monology, ICH-FORMA, dramatická akce", 
      prostredky: "SPISOVNÝ JAZYK, opakování, ABSURDNÍ DIALOGY, mystifikace", 
      tropus: "SYNEKDOCHA („A jsme NA LOPATKÁCH.“)", 
      figura: "ANAKOLUT („nepěknou, OŠKLIVÝ PŘÍPAD.“)" 
    },
    kontext: { 
      literarni: "60. LÉTA, uvolňování cenzury, MALÁ DIVADLA", 
      historicky: "NORMALIZACE (70. léta), odpor KOMUNISTICKÉMU REŽIMU", 
      inspirace: "Fiktivní JÁRA CIMRMAN, skutečná KRÁDEŽ (Kirchner)", 
      srovnani: ["IRENA DOUSKOVÁ - HRDÝ BUDŽES"] 
    },
    soucasnici: {
      cesti: ["MILOŇ ČEPELKA - ABECEDA LÁSKY","JAN VODŇANSKÝ a PETR SKOUMAL - PÍSNIČKÁŘI"],
      svetovi: []
    }
  },

  {
    id: 18, title: "O myších a lidech", author: "John Steinbeck",
    obdobi: 3,
    info: { narodnost: "AMERIČAN", roky: "1902–1968", smer: "AMERICKÝ REALISMUS, ZTRACENÁ GENERACE, MEZIVÁLEČNÁ LITERATURA", vydani: "1937", druh: "EPIKA", zanr: "Sociálně kritická NOVELA" },
    casoprostor: "30. LÉTA 20. STOLETÍ, HOSPODÁŘSKÁ KRIZE",
    misto: "KALIFORNIE, FARMA U SOLEDADU, ÚDOLÍ SALINAS",
    dej: [
      "PŘÍCHOD GEORGE a LENNIEHO na FARMU",
      "SEZNÁMENÍ, práce a CURLEYHO PROVOKACE",
      "LENNIE v sebeobraně ROZDRTÍ Curleymu RUKU",
      "LENNIE nechtěně ZLOMÍ VAZ Curleymu ŽENĚ",
      "LENNIE UTÍKÁ do vrbiček K ŘECE",
      "GEORGE ze soucitu LENNIEHO ZASTŘELÍ"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"GEORGE Milton",vlastnost:"OBĚTAVÝ přítel, touží po domově"},
        {jmeno:"LENNIE Small",vlastnost:"ZAOSTALÝ obrovitý dobrák, silný pracant"}
      ], 
      vedlejsi: [
        {jmeno:"CURLEY",funkce:"AGRESIVNÍ a ŽÁRLIVÝ SYN správce"},
        {jmeno:"CURLEYHO ŽENA",funkce:"OSAMĚLÁ KOKETA hledající pozornost"},
        {jmeno:"SLIM",funkce:"PŘIROZENÁ AUTORITA, chápavý a férový KOČÍ"},
        {jmeno:"CANDY",funkce:"STARÝ BEZRUKÝ UKLÍZEČ s úsporami"},
        {jmeno:"CROOKS",funkce:"INTELIGENTNÍ, ale ODSTRKOVANÝ ČERNOCH"}
      ] 
    },
    temata: { 
      hlavni: "NENAPLNĚNÝ AMERICKÝ SEN, KRITIKA SPOLEČNOSTI", 
      motivy: ["PŘÁTELSTVÍ versus OSAMĚLOST","HEBKÉ VĚCI (myši, štěňata, vlasy)","RASISMUS, VYKOUŘISŤOVÁNÍ a NÁSILÍ"] 
    },
    jazyk: { 
      vypravec: "ER-FORMA (3. osoba), NEZÁVISLÝ VYPRAVĚČ", 
      prostredky: "NESPISOVNÁ čeština, SLANG, VULGARISMY, živé DIALOGY", 
      tropus: "PŘIROVNÁNÍ: „Lennie vypadal jako přišlápnutý červ.“", 
      figura: "EPIZEUXIS: „Pusťte! Tak už pusťte!“" 
    },
    kontext: { 
      literarni: "MEZIVÁLEČNÁ LITERATURA, AMERICKÝ REALISMUS", 
      historicky: "HOSPODÁŘSKÁ KRIZE, NEZAMĚSTNANOST v 30. letech", 
      inspirace: "AUTOBIOGRAFICKÉ PRVKY: VLASTNÍ ZKUŠENOSTI námezdního dělníka", 
      srovnani: ["Theodore Dreiser - Americká tragédie"] 
    },
    soucasnici: {
      cesti: [],
      svetovi: ["F. S. FITZGERALD - VELKÝ GATSBY","Ernest HEMINGWAY - STAŘEC A MOŘE","W. FAULKNER - ABSOLÓNE, ABSOLÓNE!"]
    }
  },

  {
    id: 19, title: "Rozmarné léto", author: "Vladislav Vančura",
    obdobi: 4,
    info: { narodnost: "ČECH", roky: "1891–1942", smer: "IMAGINATIVNÍ PRÓZA, vliv POETISMU", vydani: "1926", druh: "EPIKA", zanr: "Humoristická NOVELA" },
    casoprostor: "TŘI deštivé ČERVNOVÉ DNY, první POLOVINA 20. STOLETÍ",
    misto: "LÁZNĚ Krokovy Vary, plovárna ORŠE",
    dej: [
      "Tři PŘÁTELÉ tráví LÉTO na PLOVÁRNĚ",
      "Přijíždí KOUZELNÍK Arnoštek a asistentka ANNA",
      "MUŽI svádějí Annu, KATEŘINA obdivuje Arnoštka",
      "Noční NÁMLUVY končí NEÚSPĚCHEM a rvačkami",
      "Arnoštek SPADNE, Anna DOKONČÍ provazochodecké představení",
      "KOMEDIANTI odjíždějí, vrací se stará VŠEDNOST"
    ],
    postavy: { 
      hlavni: [
        {jmeno:"Antonín DŮRA",vlastnost:"majitel plovárny, ZÁLETNÍK"},
        {jmeno:"Kanovník ROCH",vlastnost:"sečtělý kněz, MRAVOKÁRCE"},
        {jmeno:"Major HUGO",vlastnost:"bývalý voják, GALANTNÍ"},
        {jmeno:"Kateřina DŮROVÁ",vlastnost:"Antonínova manželka, ŽÁRLIVÁ"}
      ], 
      vedlejsi: [
        {jmeno:"ARNOŠTEK",funkce:"potulný KOUZELNÍK, rozhýbe dění"},
        {jmeno:"ANNA",funkce:"kouzelníkova POMOCNICE, objekt touhy"}
      ] 
    },
    temata: { 
      hlavni: "KRITIKA maloměšťáctví, OSLAVA obyčejné VŠEDNOSTI", 
      motivy: ["LÉTO, deštivé počasí, PLOVÁRNA","KOUZELNÍK, provazochodectví, CIRKUS","POMÍJIVOST času a MELANCHOLIE","NUDA, lenošení a STEREOTYP"] 
    },
    jazyk: { 
      vypravec: "Vševědoucí VYPRAVĚČ (ER-FORMA)", 
      prostredky: "ARCHAISMY, přechodníky, SLOŽITÁ SOUVĚTÍ", 
      tropus: "METAFORA: „sloupec téměř NEÚPLATNÝ sotva se POHNUL“", 
      figura: "INVERZE: „jenž maje JAZYK ven VYPLAZEN“" 
    },
    kontext: { 
      literarni: "ČESKÁ MEZIVÁLEČNÁ próza, POETISMUS", 
      historicky: "PRVNÍ REPUBLIKA, období relativního KLIDU", 
      inspirace: "Vlastní ZÁŽITKY z maloměsta, DADAISMUS", 
      srovnani: ["Zdeněk Jirotka - Saturnin"] 
    },
    soucasnici: {
      cesti: ["Karel ČAPEK - R. U. R.","Ivan OLBRACHT - NIKOLA ŠUHAJ LOUPEŽNÍK","Karel POLÁČEK - BYLO NÁS PĚT"],
      svetovi: ["Franz KAFKA - PROCES","Egon Erwin KISCH - PRAŽSKÝ PITAVAL"]
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
