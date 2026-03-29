/**
 * Doplňková data ke knihám: Časoprostor, Místo a Současníci.
 * Tento soubor se načte PO main.js a doplní chybějící pole.
 */
const extraData = {
  1: { // Bílá nemoc
    casoprostor: "BLÍZKÁ BUDOUCNOST, neurčitá evropská země",
    misto: "Nemocniční ordinace, Maršálův PALÁC, ulice",
    soucasnici: {
      cesti: ["Josef Čapek - Básně z koncentračního tábora","Vladislav Vančura - Markéta Lazarová","Karel Poláček - Bylo nás pět"],
      svetovi: ["George Orwell - 1984","Ernest Hemingway - Komu zvoní hrana","John Steinbeck - Hrozny hněvu"]
    }
  },
  2: { // Věc Makropulos
    casoprostor: "SOUČASNOST (20. léta 20. st.), Praha",
    misto: "Advokátní KANCELÁŘ, divadelní zákulisí, hotel",
    soucasnici: {
      cesti: ["Vladislav Vančura - Rozmarné léto","Viktor Dyk - Krysař","S. K. Neumann - Básně"],
      svetovi: ["Luigi Pirandello - Šest postav hledá autora","George B. Shaw - Pygmalion","T. S. Eliot - Pustá země"]
    }
  },
  3: { // Krysař
    casoprostor: "STŘEDOVĚK, neurčitý čas",
    misto: "Hanzovní město HAMMELN, hora Koppel",
    soucasnici: {
      cesti: ["Karel Čapek - R.U.R.","Fráňa Šrámek - Stříbrný vítr","Stanislav Kostka Neumann - básně"],
      svetovi: ["Franz Kafka - Proměna","Thomas Mann - Smrt v Benátkách","Rainer Maria Rilke - básně"]
    }
  },
  4: { // Malý princ
    casoprostor: "NADČASOVÝ, pouště a vesmír",
    misto: "Poušť SAHARA, planetka B-612, další planetky",
    soucasnici: {
      cesti: ["Vladislav Vančura - Markéta Lazarová","Karel Čapek - Válka s mloky","Jiří Wolker - Host do domu"],
      svetovi: ["Albert Camus - Cizinec","Jean-Paul Sartre - Zeď","Ernest Hemingway - Komu zvoní hrana"]
    }
  },
  5: { // Tyrolské elegie
    casoprostor: "ROK 1851, cesta z Čech do Tyrolska",
    misto: "Havlíčkův BYT, KOČÁR přes Alpy, Brixen",
    soucasnici: {
      cesti: ["Božena Němcová - Babička","Karel Jaromír Erben - Kytice","Josef Kajetán Tyl - Strakonický dudák"],
      svetovi: ["Charles Dickens - David Copperfield","Victor Hugo - Bídníci","Edgar Allan Poe - Havran"]
    }
  },
  6: { // Stařec a moře
    casoprostor: "50. LÉTA 20. st., Karibské moře",
    misto: "Kubánská VESNICE, otevřené MOŘE (Golfský proud)",
    soucasnici: {
      cesti: ["Bohumil Hrabal - Pábitelé","Jaroslav Seifert - básně","Jan Drda - Němá barikáda"],
      svetovi: ["John Steinbeck - Na východ od ráje","William Faulkner - Absolone","Albert Camus - Mor"]
    }
  },
  7: { // Ostře sledované vlaky
    casoprostor: "ÚNOR 1945, konec 2. světové války",
    misto: "Malá ŽELEZNIČNÍ STANICE v Čechách",
    soucasnici: {
      cesti: ["Milan Kundera - Žert","Josef Škvorecký - Zbabělci","Arnošt Lustig - Démanty noci"],
      svetovi: ["Gabriel García Márquez - Sto roků samoty","Joseph Heller - Hlava XXII","Kurt Vonnegut - Jatka č. 5"]
    }
  },
  8: { // Vražda v Orient expresu
    casoprostor: "30. LÉTA 20. st., zimní noc",
    misto: "ORIENT EXPRES (vlak), zasněžená Jugoslávie",
    soucasnici: {
      cesti: ["Karel Čapek - Povídky z jedné kapsy","Eduard Bass - Cirkus Humberto","Karel Poláček - Muži v offsidu"],
      svetovi: ["Arthur Conan Doyle - Sherlock Holmes","Dorothy L. Sayers - detektivky","Dashiell Hammett - Maltézský sokol"]
    }
  },
  9: { // Saturnin
    casoprostor: "30.-40. LÉTA 20. st., za protektorátu",
    misto: "Pražský BYT, dědečkova CHATA u řeky",
    soucasnici: {
      cesti: ["Karel Poláček - Bylo nás pět","Eduard Bass - Cirkus Humberto","Vladislav Vančura - Rozmarné léto"],
      svetovi: ["P. G. Wodehouse - Jeeves","Jerome K. Jerome - Tři muži ve člunu","Evelyn Waugh - Návrat na Brideshead"]
    }
  },
  10: { // Lakomec
    casoprostor: "17. STOLETÍ, současná Francie Molièra",
    misto: "Harpagonův DŮM v Paříži",
    soucasnici: {
      cesti: ["Jan Ámos Komenský - Labyrint světa","Bedřich Bridel - Co Bůh? Člověk?","Adam Michna z Otradovic - básně"],
      svetovi: ["Jean Racine - Faidra","Pierre Corneille - Cid","Jean de La Fontaine - Bajky"]
    }
  },
  11: { // Balady a romance
    casoprostor: "NADČASOVÝ, různá historická období",
    misto: "České KRAJINY, biblické prostředí, moře",
    soucasnici: {
      cesti: ["Alois Jirásek - Staré pověsti české","Svatopluk Čech - Písně otroka","Jaroslav Vrchlický - Noc na Karlštejně"],
      svetovi: ["Émile Zola - Germinal","Guy de Maupassant - Kulička","Mark Twain - Dobrodružství Huckleberryho Finna"]
    }
  },
  12: { // Farma zvířat
    casoprostor: "NADČASOVÝ (alegorie 1917-1943)",
    misto: "Panská FARMA v anglickém venkově",
    soucasnici: {
      cesti: ["Karel Čapek - Válka s mloky","Vladislav Vančura - Markéta Lazarová","Jiří Wolker - básně"],
      svetovi: ["Aldous Huxley - Konec civilizace","Ray Bradbury - 451 stupňů Fahrenheita","Arthur Koestler - Tma o poledni"]
    }
  },
  13: { // Bylo nás pět
    casoprostor: "POČÁTEK 20. st., před 1. sv. válkou",
    misto: "Malé MALOMĚSTO (Rychnov nad Kněžnou)",
    soucasnici: {
      cesti: ["Zdeněk Jirotka - Saturnin","Eduard Bass - Cirkus Humberto","Vladislav Vančura - Rozmarné léto"],
      svetovi: ["Mark Twain - Tom Sawyer","Erich Kästner - Emil a detektivové","Antoine de Saint-Exupéry - Malý princ"]
    }
  },
  14: { // Piková dáma
    casoprostor: "POČÁTEK 19. st., carské Rusko",
    misto: "PETROHRAD, salóny, dům hraběnky, herny",
    soucasnici: {
      cesti: ["Karel Hynek Mácha - Máj","Josef Kajetán Tyl - Fidlovačka","Karel Havlíček Borovský - Epigramy"],
      svetovi: ["Honoré de Balzac - Otec Goriot","Victor Hugo - Chrám Matky Boží","Nikolaj Gogol - Revizor"]
    }
  },
  15: { // Petr a Lucie
    casoprostor: "LEDEN-BŘEZEN 1918, 1. sv. válka",
    misto: "Bombardovaná PAŘÍŽ, metro, kostel",
    soucasnici: {
      cesti: ["Karel Čapek - R.U.R.","Jaroslav Hašek - Osudy dobrého vojáka Švejka","Viktor Dyk - Krysař"],
      svetovi: ["E. M. Remarque - Na západní frontě klid","Ernest Hemingway - Sbohem, armádo","Thomas Mann - Kouzelný vrch"]
    }
  },
  16: { // Romeo a Julie
    casoprostor: "14. STOLETÍ, renesanční Itálie",
    misto: "Italská VERONA, dům Kapuletů, hrobka",
    soucasnici: {
      cesti: ["Daniel Adam z Veleslavína - slovníky","Jan Blahoslav - Gramatika česká","Kryštof Harant - Cesta z Čech"],
      svetovi: ["Miguel de Cervantes - Don Quijote","Christopher Marlowe - Doctor Faustus","Ben Jonson - Volpone"]
    }
  },
  17: { // Vyšetřování ztráty třídní knihy
    casoprostor: "PŘELOM 19./20. st. (hra) + současnost (přednáška)",
    misto: "Venkovská ŠKOLA, divadelní pódium",
    soucasnici: {
      cesti: ["Václav Havel - Zahradní slavnost","Milan Kundera - Žert","Josef Škvorecký - Zbabělci"],
      svetovi: ["Samuel Beckett - Čekání na Godota","Eugène Ionesco - Plešatá zpěvačka","Tom Stoppard - Rosencrantz a Guildenstern"]
    }
  },
  18: { // O myších a lidech
    casoprostor: "30. LÉTA 20. st., Velká hospodářská krize",
    misto: "Kalifornské FARMY, břeh řeky Salinas",
    soucasnici: {
      cesti: ["Karel Čapek - Bílá nemoc","Vladislav Vančura - Markéta Lazarová","Karel Poláček - Bylo nás pět"],
      svetovi: ["Ernest Hemingway - Komu zvoní hrana","William Faulkner - Absolone!","Francis Scott Fitzgerald - Velký Gatsby"]
    }
  },
  19: { // Rozmarné léto
    casoprostor: "LÉTO, přelom 19./20. století",
    misto: "Malé LÁZEŇSKÉ MĚSTEČKO u řeky",
    soucasnici: {
      cesti: ["Karel Čapek - Povídky z jedné kapsy","Jaroslav Hašek - Osudy dobrého vojáka Švejka","Jiří Wolker - Host do domu"],
      svetovi: ["Franz Kafka - Proces","James Joyce - Odysseus","Virginia Woolf - Paní Dallowayová"]
    }
  },
  20: { // Noc na Karlštejně
    casoprostor: "14. STOLETÍ, vláda Karla IV.",
    misto: "Hrad KARLŠTEJN, hradní komnaty a kaple",
    soucasnici: {
      cesti: ["Jan Neruda - Povídky malostranské","Alois Jirásek - Staré pověsti české","Svatopluk Čech - Písně otroka"],
      svetovi: ["Victor Hugo - Bídníci","Henrik Ibsen - Domečkové","Fjodor Dostojevskij - Bratři Karamazovi"]
    }
  }
};

// Sloučení extra dat do hlavního pole
booksData.forEach(function(book) {
    var extra = extraData[book.id];
    if (extra) {
        book.casoprostor = extra.casoprostor;
        book.misto = extra.misto;
        book.soucasnici = extra.soucasnici;
    }
});
