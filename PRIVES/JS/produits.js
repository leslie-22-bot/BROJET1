const produits = [
  {
    id: 1, 
    nom: "Talon aiguille noir à brides strassées", prix: "20000 FCFA",
    categorie: "escarpin",
     genre: "femme",
    description: "Talon aiguille noir avec brides de strass et perles à la cheville.",
    details: "Ce talon aiguille noir est conçu pour sublimer votre tenue. Ses brides ornées de strass et de perles lui donnent un style raffiné, parfait pour les mariages, les soirées et les cérémonies.",
    points_forts: ["Brides ornées de strass et de perles", "Talon aiguille pour une silhouette élancée", "Bout pointu élégant", "Idéal pour soirées et cérémonies"],
    pointures: "36, 37, 38, 39, 40",
     couleur: "Noir", 
     matiere: "Daim et strass",
      stock: 2,
    caracteristiques: { "Type de talon": "Aiguille", "Fermeture": "Bride à la cheville", "Occasion": "Soirée, cérémonie, mariage" },
    image: "../PRIVES/IMAGES/escapin2.jpg"
  },
  {
    id: 2,
     nom: "Ballerines à nœud",
     prix: "5000 FCFA",
    categorie: "ballerine", 
    genre: "femme",
    description: "Ballerines beige avec joli nœud et petit talon doré.",
    details: "Ces ballerines beige avec leur joli nœud apportent une touche féminine à toutes vos tenues. Leur petit talon doré les rend élégantes, et elles restent confortables toute la journée.",
    points_forts: ["Joli nœud décoratif", "Petit talon doré", "Confortables toute la journée", "Se marient avec toutes les tenues"],
    pointures: "36, 37, 38, 39, 40", 
    couleur: "Beige",
     matiere: "Synthétique vernis", 
     stock: 6,
    caracteristiques: { "Type de talon": "Petit talon", "Détail": "Nœud décoratif", "Occasion": "Bureau, ville, tous les jours" },
    image: "../PRIVES/IMAGES/ballerine1.jpg"
  },

  {
    id: 3, 
    nom: "Basket blanche à design tendance", 
    prix: "12500 FCFA",
    categorie: "basket", 
    genre: "femme",
    description: "Basket blanche à semelle épaisse et finition matelassée.",
    details: "Cette basket blanche à semelle épaisse et finition matelassée est un vrai indispensable. Son design tendance s'accorde avec un jean, une robe ou une tenue sport.",
    points_forts: ["Design tendance", "Semelle épaisse confortable", "Finition matelassée", "Facile à associer à toutes vos tenues"],
    pointures: "36, 37, 38, 39, 40", 
    couleur: "Blanc", 
    matiere: "Synthétique",
     stock: 2,
    caracteristiques: { "Semelle": "Épaisse", "Fermeture": "Lacets", "Occasion": "Sortie, ville, tous les jours" },
    image: "../PRIVES/IMAGES/basket2.jpg"
  },

  {
    id: 4, 
    nom: "Sandales plates", 
    prix: "9000 FCFA",
    categorie: "sandale", 
    genre: "femme",
    description: "Sandales plates à fines lanières, en noir et en marron.",
    details: "Ces sandales plates à fines lanières sont légères et élégantes. Disponibles en noir et en marron, elles accompagnent vos robes, jupes et tenues d'été avec simplicité.",
    points_forts: ["Légères et élégantes", "Fines lanières stylées", "Disponibles en noir et marron", "Parfaites pour l'été"],
    pointures: "36, 37, 38, 39, 40", 
    couleur: "Noir ou marron",
     matiere: "Synthétique souple",
      stock: 10,
    caracteristiques: { "Type": "Sandale plate à lanières", "Fermeture": "Lanières à la cheville", "Occasion": "Été, plage, sorties" },
    image: "../PRIVES/IMAGES/sandale1.jpg"
  },

  {
    id: 5, 
    nom: "Chaussure homme cuir noir", 
    prix: "25000 FCFA",
    categorie: "soulier", 
    genre: "homme",
    description: "Chaussure de ville en cuir noir brillant à lacets.",
    details: "Cette chaussure en cuir noir brillant donne une allure sérieuse et élégante. Idéale avec un costume ou une tenue habillée, pour le bureau, les cérémonies et les grandes occasions.",
    points_forts: ["Cuir noir brillant", "Finition élégante", "Fermeture à lacets", "Parfaite pour le bureau et les cérémonies"],
    pointures: "40, 41, 42, 43, 44, 45",
     couleur: "Noir",
      matiere: "Cuir",
       stock: 21,
    caracteristiques: { "Fermeture": "Lacets", "Style": "Chaussure de ville", "Occasion": "Bureau, cérémonie, mariage" },
    image: "../PRIVES/IMAGES/soulie1.jpg"
  },
  {
    id: 6, nom: "Sandales homme cuir croisé marron", prix: "13000 FCFA",
    categorie: "sandale", genre: "homme",
    description: "Sandales homme en cuir marron avec brides croisées.",
    details: "Ces sandales en cuir marron aux brides croisées allient confort et élégance. La boucle réglable au talon assure un bon maintien du pied.",
    points_forts: ["Cuir marron de belle allure", "Brides croisées", "Boucle réglable au talon", "Confort pour les journées chaudes"],
    pointures: "40, 41, 42, 43, 44, 45", couleur: "Marron", matiere: "Cuir", stock: 7,
    caracteristiques: { "Fermeture": "Boucle réglable", "Style": "Brides croisées", "Occasion": "Détente, sorties, tous les jours" },
    image: "../PRIVES/IMAGES/sandaleH.jpg"
  },
  {
    id: 7, nom: "Crocs blancs à fleurs rose", prix: "11500 FCFA",
    categorie: "crocs", genre: "femme",
    description: "Crocs blancs avec bordure rose et petites fleurs.",
    details: "Ces crocs blancs avec bordure rose et petites fleurs décoratives sont à la fois mignons et pratiques. Légers et faciles à entretenir, ils se lavent simplement à l'eau.",
    points_forts: ["Fleurs décoratives", "Légers et confortables", "Faciles à nettoyer", "Pratiques à la maison et à la plage"],
    pointures: "36, 37, 38, 39, 40", couleur: "Blanc et rose", matiere: "Caoutchouc léger", stock: 16,
    caracteristiques: { "Style": "Sabot avec fleurs décoratives", "Entretien": "Se lave à l'eau", "Occasion": "Maison, plage, balade" },
    image: "../PRIVES/IMAGES/cross1.jpg"
  },
  {
    id: 8, nom: "Longues bottes noires pour femme", prix: "32000 FCFA",
    categorie: "botte", genre: "femme",
    description: "Longues bottes noires à lacets, talon épais et chaîne décorative.",
    details: "Ces longues bottes noires affirment votre style. Le talon épais offre un bon équilibre, les lacets un bon maintien et la chaîne décorative une touche originale.",
    points_forts: ["Longue tige qui allonge la jambe", "Talon épais stable", "Chaîne décorative", "Fermeture à lacets"],
    pointures: "36, 37, 38, 39, 40", couleur: "Noir", matiere: "Synthétique", stock: 16,
    caracteristiques: { "Type de talon": "Épais", "Fermeture": "Lacets", "Détail": "Chaîne décorative" },
    image: "../PRIVES/IMAGES/botteF1.jpg"
  },
  {
    id: 9, nom: "Jordan blanche", prix: "30000 FCFA",
    categorie: "basket", genre: "mixte",
    description: "Basket blanche et bleu clair au style streetwear.",
    details: "Cette basket blanche et bleu clair au style streetwear fait toujours son effet. Confortable et facile à porter, elle convient aussi bien aux hommes qu'aux femmes.",
    points_forts: ["Style streetwear", "Coloris blanc et bleu clair", "Confortable au quotidien", "Pour homme et femme"],
    pointures: "38, 39, 40, 41, 42, 43, 44", couleur: "Blanc et bleu clair", matiere: "Synthétique", stock: 16,
    caracteristiques: { "Style": "Streetwear", "Fermeture": "Lacets", "Occasion": "Sport, sortie, tous les jours" },
    image: "../PRIVES/IMAGES/JORDANE.jpg"
  },
  {
    id: 10, nom: "Claquettes blanches Bear", prix: "6500 FCFA",
    categorie: "claquette", genre: "femme",
    description: "Claquettes blanches à semelle épaisse, motif ourson et fleurs.",
    details: "Ces claquettes blanches à semelle épaisse affichent un motif ourson et une décoration fleurie. Faciles à enfiler et très légères, elles sont idéales pour la maison, la plage et les petites sorties.",
    points_forts: ["Motif ourson original", "Décoration fleurie", "Semelle épaisse", "Faciles à enfiler"],
    pointures: "36, 37, 38, 39, 40", couleur: "Blanc", matiere: "EVA léger", stock: 16,
    caracteristiques: { "Semelle": "Épaisse", "Style": "Claquette ouverte", "Occasion": "Maison, plage, sorties" },
    image: "../PRIVES/IMAGES/tapette.jpg"
  },
  {
    id: 11, nom: "Chaussons peluche violets", prix: "9000 FCFA",
    categorie: "chausson", genre: "femme",
    description: "Chaussons doux en peluche violette avec petits pompons.",
    details: "Ces chaussons en peluche violette sont d'une grande douceur. Les petits pompons les rendent adorables, et ils vous tiennent chaud pour vos moments de détente à la maison.",
    points_forts: ["Peluche très douce", "Petits pompons décoratifs", "Chauds et confortables", "Parfaits pour la maison"],
    pointures: "36, 37, 38, 39, 40", couleur: "Violet", matiere: "Peluche", stock: 16,
    caracteristiques: { "Style": "Chausson fermé", "Détail": "Pompons décoratifs", "Occasion": "Maison, détente" },
    image: "../PRIVES/IMAGES/dormi.jpg"
  },
  {
    id: 12, nom: "Bottines beige à lacets", prix: "15500 FCFA",
    categorie: "botte", genre: "femme",
    description: "Bottines beige à lacets avec talon épais et semelle crantée.",
    details: "Ces bottines beige à lacets associent style et solidité. Le talon épais apporte du confort et la semelle crantée offre une bonne accroche.",
    points_forts: ["Talon épais confortable", "Semelle crantée", "Fermeture à lacets", "Look moderne et robuste"],
    pointures: "36, 37, 38, 39, 40", couleur: "Beige et noir", matiere: "Synthétique", stock: 16,
    caracteristiques: { "Type de talon": "Épais", "Fermeture": "Lacets", "Semelle": "Crantée" },
    image: "../PRIVES/IMAGES/botteF2.jpg"
  },
  {
    id: 13, nom: "Mocassins gris", prix: "17000 FCFA",
    categorie: "soulier", genre: "homme",
    description: "Mocassins gris avec détail métallique et semelle blanche.",
    details: "Ces mocassins gris, ornés d'un détail métallique et d'une semelle blanche, sont élégants tout en restant décontractés. Faciles à enfiler, ils s'adaptent à de nombreuses tenues.",
    points_forts: ["Détail métallique élégant", "Faciles à enfiler", "Semelle blanche", "Style chic et décontracté"],
    pointures: "40, 41, 42, 43, 44, 45", couleur: "Gris", matiere: "Daim synthétique", stock: 16,
    caracteristiques: { "Fermeture": "À enfiler", "Détail": "Boucle métallique", "Semelle": "Blanche" },
    image: "../PRIVES/IMAGES/soulie2.jpg"
  },
  {
    id: 14, nom: "Escarpin rouge", prix: "27000 FCFA",
    categorie: "escarpin", genre: "femme",
    description: "Escarpin rouge bordeaux vernis à bride arrière et talon aiguille.",
    details: "Cet escarpin rouge bordeaux vernis attire tous les regards. Sa bride arrière assure un bon maintien et son talon aiguille sublime vos tenues de soirée.",
    points_forts: ["Vernis brillant", "Bride arrière pour un bon maintien", "Talon aiguille", "Coloris rouge bordeaux chic"],
    pointures: "36, 37, 38, 39, 40", couleur: "Rouge bordeaux", matiere: "Vernis", stock: 16,
    caracteristiques: { "Type de talon": "Aiguille", "Fermeture": "Bride arrière", "Occasion": "Soirée, cérémonie" },
    image: "../PRIVES/IMAGES/escapin1.jpg"
  },
  {
    id: 15, nom: "Chaussures de football noires et bleues", prix: "28700 FCFA",
    categorie: "sport", genre: "homme",
    description: "Chaussures de football montantes à crampons, noires et bleues.",
    details: "Ces chaussures de football montantes noires aux détails bleus sont pensées pour jouer. Les crampons offrent une bonne accroche et la tige montante maintient bien la cheville.",
    points_forts: ["Crampons pour une bonne accroche", "Tige montante qui maintient la cheville", "Design noir et bleu moderne", "Fermeture à lacets"],
    pointures: "39, 40, 41, 42, 43, 44, 45", couleur: "Noir et bleu", matiere: "Synthétique", stock: 16,
    caracteristiques: { "Fermeture": "Lacets", "Semelle": "À crampons", "Usage": "Football sur terrain" },
    image: "../PRIVES/IMAGES/foot.jpg"
  },
  {
    id: 16, nom: "Sneakers noires homme", prix: "15000 FCFA",
    categorie: "soulier", genre: "homme",
    description: "Sneakers confortables, idéales pour tous les jours.",
    details: "Ces sneakers noires pour homme sont confortables et faciles à assortir. Elles vous accompagnent partout, au quotidien comme pour vos sorties.",
    points_forts: ["Très confortables", "Coloris noir facile à assortir", "Idéales pour tous les jours", "Look sobre et élégant"],
    pointures: "40, 41, 42, 43, 44", couleur: "Noir", matiere: "Daim synthétique", stock: 16,
    caracteristiques: { "Style": "Décontracté", "Occasion": "Tous les jours, sorties" },
    image: "../PRIVES/IMAGES/soulie3.jpg"
  }
];