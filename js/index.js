//Los filtros se meterán en los grupos si en el filtro está la key del grupo,
//por ejemplo, todo lo que tenga "hair" (marrón-hair, rubio-hair, etc) se meterá en el grupo con key "hair"
//No es necesario que los filtros estén en inglés, lo único importante es que no contengan espacios,
//a la hora de pintarse se cambiarán los "-" por espacios y se quitarán las keys. Ejemplo: rubia-de-bote-hair -> rubia de bote
const FILTER_GROUPS = [
        {'key': 'media','txt':'Media'},
	{'key': 'hair','txt':'Pelo'},
	{'key': 'eyes','txt':'Ojos'}
];

//Waifus data
const WAIFUS = [
	{
		"id": 1,
		"name": "Caitlyn Kiramman",
		"age": "23",
		"show": "Arcane",
		"main_image": "caitlyn.jpg",
		"alternative_images": ["caitlyn-2.jpg", "caitlyn-3.jpg", "caitlyn-4.jpg", "caitlyn-5.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Serie-media", "Videojuego-media"]
	},
	{
		"id": 2,
		"name": "Elsa",
		"age": "24",
		"show": "Frozen",
		"main_image": "elsa.jpg",
		"alternative_images": ["elsa-2.jpg", "elsa-3.jpg", "elsa-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Película-media"]
	},
	{
		"id": 3,
		"name": "Adora / She-Ra",
		"age": "18",
		"show": "Shera y las princesas del poder",
		"main_image": "adora.jpg",
		"alternative_images": ["adora-2.jpg", "adora-3.jpg", "adora-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Serie-media"]
	},
	{
		"id": 4,
		"name": "Hanna Schulerin",
                "age": "10s",
		"age_text": "teen",
		"show": "Not so Shoujo Love Story",
		"main_image": "hanna.jpg",
		"alternative_images": ["hanna-2.jpg", "hanna-3.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Cómic-media"]
	},
	{
		"id": 5,
		"name": "Hancock Boa",
		"age": "31",
		"show": "One Piece",
		"main_image": "hancock.jpg",
		"alternative_images": ["hancock-2.jpg", "hancock-5.jpg", "hancock-6.jpg", "hancock-7.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "One-Piece", "Cómic-media", "Serie-media", "Película-media"]
	},
	{
		"id": 6,
		"name": "Ju Sungi",
		"age": "20s",
		"show": "What does the Fox Say?",
		"main_image": "sungi.jpg",
		"alternative_images": ["sungi-2.jpg", "sungi-3.jpg", "sungi-4.jpg"],
		"filters": ["dorado-eyes", "rubio-hair", "Cómic-media"]
	},
        {
		"id": 7,
		"name": "Asami Sato",
		"age": "22",
		"show": "Avatar: La leyenda de Korra",
		"main_image": "asami.png",
		"alternative_images": ["asami-2.jpg", "asami-3.jpg", "asami-4.png", "asami-5.jpg"],
		"filters": ["verdes-eyes", "oscuro-hair", "La-leyenda-de-Korra", "Serie-media", "Cómic-media"]
	},
        {
		"id": 8,
		"name": "A18 / Androide Nº 18",
		"age": "30s",
		"show": "Dragon Ball Z / Daima / Super / GT",
		"main_image": "a18.jpg",
		"alternative_images": ["a18-2.jpg", "a18-3.jpg", "a18-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Serie-media", "Cómic-media"]
	},
        {
		"id": 9,
		"name": "Baek Seol-A",
		"age": "20s",
		"show": "Fluttering Feelings",
		"main_image": "seola.jpg",
		"alternative_images": ["seola-2.jpg", "seola-3.jpg", "seola-4.png"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Cómic-media"]
	},
        {
		"id": 10,
		"name": "Blake Belladona",
		"age": "19",
		"show": "RWBY",
		"main_image": "blake.jpg",
		"alternative_images": ["blake-2.jpg", "blake-3.jpg", "blake-4.jpg"],
		"filters": ["dorado-eyes", "oscuro-hair", "RWBY", "Serie-media", "Videojuego-media"]
	},
        {
		"id": 11,
		"name": "Chikane Himemiya",
		"age": "16",
		"show": "Kannazuki no Miko",
		"main_image": "chikane.jpg",
		"alternative_images": ["chikane-2.jpg", "chikane-3.jpg", "chikane-4.jpg", "chikane-5.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Cómic-media", "Serie-media"]
	},
        {
		"id": 12,
		"name": "Diana Prince / Wonder Woman",
		"age": "800",
                "age_text": "adult",
		"show": "DC Comics",
		"main_image": "diana.jpg",
		"alternative_images": ["diana-2.jpg", "diana-3.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "superheroína", "Cómic-media", "Película-media"]
	},
        {
		"id": 13,
		"name": "Fortunia / Lucy",
		"age": "20s",
		"show": "Pokémon",
		"main_image": "fortunia.jpg",
		"alternative_images": ["fortunia-2.jpg", "fortunia-3.jpg", "fortunia-4.jpg"],
		"filters": ["rojos-eyes", "oscuro-hair", "Pokémon", "Serie-media", "Videojuego-media"]
	},
        {
		"id": 14,
		"name": "Gerd",
		"age": "25",
		"age_text": "75, edad gigante",
		"show": "One Piece",
		"main_image": "gerd.jpg",
		"alternative_images": ["gerd-2.jpg", "gerd-3.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "One-Piece", "Serie-media", "Cómic-media"]
	},
        {
		"id": 15,
		"name": "Helen Parr / Elastigirl / Mrs. Incredible",
		"age": "38",
		"show": "Los Increíbles",
		"main_image": "helen.jpg",
		"alternative_images": ["helen-2.jpg", "helen-3.jpg", "helen-4.jpg"],
		"filters": ["marrones-eyes", "pelirrojo-hair", "superheroína", "Película-media"]
	},
        {
		"id": 16,
		"name": "Jane Porter",
		"age": "20",
		"show": "Tarzán (Disney)",
		"main_image": "jane.jpg",
		"alternative_images": ["jane-2.jpg", "jane-3.jpg", "jane-4.jpg"],
		"filters": ["azul-eyes", "marrón-hair", "Película-media"]
	},
        {
		"id": 17,
		"name": "Kaon",
                "age": "16",
		"age_text": "teen",
		"show": "Shattered Angels",
		"main_image": "kaon.jpg",
		"alternative_images": ["kaon-2.jpg", "kaon-3.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Serie-media", "Cómic-media"]
	},
        {
		"id": 18,
		"name": "Kikunojo",
                "age": "22",
		"show": "One Piece",
		"main_image": "kiku.jpg",
		"alternative_images": ["kiku-2.jpg", "kiku-3.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "One-Piece", "Cómic-media", "Serie-media"]
	},
        {
		"id": 19,
		"name": "Marinette Dupain-Cheng / Ladybug / Ladynoir / Multimouse / Pegabug...",
                "age": "15",
		"show": "Las aventuras de Ladybug",
		"main_image": "ladybug.jpg",
		"alternative_images": ["ladybug-2.jpg", "ladybug-3.jpg", "ladybug-4.jpg", "ladybug-5.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "superheroína", "Serie-media", "Película-media"]
	},
        {
		"id": 20,
		"name": "Lilliane von Phoenix / Hime",
                "age": "17",
		"show": "Princess Resurrection",
		"main_image": "hime.jpg",
		"alternative_images": ["hime-2.jpg", "hime-3.jpg"],
		"filters": ["rojos-eyes", "rubio-hair", "Serie-media", "Cómic-media"]
	},
        {
		"id": 21,
		"name": "Lucy Wilde",
                "age": "42",
		"show": "Gru, mi villano favorito",
		"main_image": "lucy.jpg",
		"alternative_images": ["lucy-2.jpg", "lucy-3.jpg", "lucy-4.jpg", "lucy-5.jpg"],
		"filters": ["verdes-eyes", "pelirrojo-hair", "Película-media"]
	},
        {
		"id": 22,
		"name": "Mai Valentine / Mai Kujaku",
                "age": "24",
		"show": "Yu-Gi-Oh!",
		"main_image": "mai.jpg",
		"alternative_images": ["mai-2.jpg", "mai-3.jpg", "mai-4.jpg"],
		"filters": ["violeta-eyes", "rubio-hair", "Serie-media", "Cómic-media"]
	},
        {
		"id": 23,
		"name": "Mavis Dracula-Loughran",
                "age": "30s",
		"age_text": "130, edad vampira",
		"show": "Hotel Transylvania",
		"main_image": "mavis.jpg",
		"alternative_images": ["mavis-2.jpg", "mavis-3.jpg", "mavis-4.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Película-media"]
	},
        {
		"id": 24,
		"name": "Megara",
                "age": "20",
		"show": "Hércules (Disney)",
		"main_image": "meg.jpg",
		"alternative_images": ["meg-2.jpg", "meg-3.jpg", "meg-4.jpg"],
		"filters": ["violeta-eyes", "pelirrojo-hair", "Película-media"]
	},
        {
		"id": 25,
		"name": "Mel Medarda",
                "age": "34",
		"show": "Arcane",
		"main_image": "mel.jpg",
		"alternative_images": ["mel-2.jpg", "mel-3.jpg"],
		"filters": ["verdes-eyes", "oscuro-hair", "Serie-media"]
	},
	{
		"id": 26,
		"name": "Mencía / Nemona",
                "age": "16s",
		"age_text": "teen",
		"show": "Pokémon",
		"main_image": "mencia.jpg",
		"alternative_images": ["mencia-2.jpg", "mencia-3.jpg"],
		"filters": ["dorado-eyes", "oscuro-hair", "Pokémon", "Película-media", "Videojuego-media"]
	},
	{
		"id": 27,
		"name": "Michiru Kaiō / Sailor Neptuno",
                "age": "17",
		"show": "Sailor Moon S / SuperS / Stars",
		"main_image": "michiru.jpg",
		"alternative_images": ["michiru-2.jpg", "michiru-3.jpg", "michiru-4.jpg"],
		"filters": ["azul-eyes", "teal-hair", "Serie-media", "Cómic-media"]
	},
	{
		"id": 28,
		"name": "Namaari",
                "age": "18",
		"show": "Raya y el último dragón",
		"main_image": "namaari.jpg",
		"alternative_images": ["namaari-2.jpg", "namaari-3.jpg", "namaari-4.jpg"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Película-media"]
	},
	{
		"id": 29,
		"name": "Robin Nico",
                "age": "30",
		"show": "One Piece",
		"main_image": "robin.jpg",
		"alternative_images": ["robin-2.jpg", "robin-3.jpg", "robin-4.jpg", "robin-5.jpg", "robin-6.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "One-Piece", "Cómic-media", "Serie-media", "Película-media"]
	},
	{
		"id": 30,
		"name": "Nami",
                "age": "20",
		"show": "One Piece",
		"main_image": "nami.jpg",
		"alternative_images": ["nami-2.jpg", "nami-3.jpg", "nami-4.jpg", "nami-5.jpg"],
		"filters": ["marrones-eyes", "pelirrojo-hair", "One-Piece", "Cómic-media", "Serie-media", "Película-media"]
	},
	{
		"id": 31,
		"name": "Nojiko",
                "age": "22",
		"show": "One Piece",
		"main_image": "nojiko.jpg",
		"alternative_images": ["nojiko-2.jpg", "nojiko-3.jpg", "nojiko-4.jpg"],
		"filters": ["oscuros-eyes", "violeta-hair", "One-Piece", "Cómic-media", "Serie-media"]
	},
	{
		"id": 32,
		"name": "Odette",
                "age": "19",
		"show": "La princesa cisne",
		"main_image": "odette.jpg",
		"alternative_images": ["odette-2.jpg", "odette-3.jpg", "odette-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Película-media"]
	},
	{
		"id": 33,
		"name": "Pyrrha Nikos",
                "age": "18",
		"show": "RWBY",
		"main_image": "pyrrha.jpg",
		"alternative_images": ["pyrrha-2.jpg", "pyrrha-3.jpg", "pyrrha-4.jpg"],
		"filters": ["verdes-eyes", "pelirrojo-hair", "RWBY", "Serie-media"]
	},
	{
		"id": 34,
		"name": "Qiu Tong",
                "age": "17",
		"show": "Tamen De Gushi",
		"main_image": "qiutong.jpg",
		"alternative_images": ["qiutong-2.jpg", "qiutong-3.jpg", "qiutong-4.jpg"],
		"filters": ["dorado-eyes", "rubio-hair", "Cómic-media"]
	},
	{
		"id": 35,
		"name": "Raya",
                "age": "18",
		"show": "Raya y el último dragón",
		"main_image": "raya.jpg",
		"alternative_images": ["raya-2.jpg", "raya-3.jpg", "raya-4.jpg"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Película-media"]
	},
	{
		"id": 36,
		"name": "Sachiko Ogasawara",
                "age": "18",
		"show": "Maria nos mira / Maria-sama ga Miteru",
		"main_image": "sachiko.jpg",
		"alternative_images": ["sachiko-2.jpg", "sachiko-3.jpg", "sachiko-4.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Serie-media"]
	},
	{
		"id": 37,
		"name": "Shank",
                "age": "28",
		"age_text": "20-30s",
		"show": "Ralph rompe internet",
		"main_image": "shank.jpg",
		"alternative_images": ["shank-2.jpg", "shank-3.jpg", "shank-4.jpg"],
		"filters": ["marrones-eyes", "oscuro-hair", "Película-media"]
	},
	{
		"id": 38,
		"name": "Shizuma Hanazono",
                "age": "17",
		"show": "Strawberry Panic!",
		"main_image": "shizuma.jpg",
		"alternative_images": ["shizuma-2.jpg", "shizuma-3.jpg", "shizuma-4.jpg"],
		"filters": ["dorado-eyes", "gris-hair", "Cómic-media", "Serie-media"]
	},
	{
		"id": 39,
		"name": "Tomoka Kase",
                "age": "20",
		"show": "Kase y las campanillas azules / Asagao to Kase-san",
		"main_image": "kase.jpg",
		"alternative_images": ["kase-2.jpg", "kase-3.jpg", "kase-4.jpg", "kase-5.jpg"],
		"filters": ["dorado-eyes", "marrón-hair", "Cómic-media", "Película-media"]
	},
	{
		"id": 40,
		"name": "Reiju Vinsmoke",
                "age": "24",
		"show": "One Piece",
		"main_image": "reiju.jpg",
		"alternative_images": ["reiju-2.jpg", "reiju-3.jpg"],
		"filters": ["azul-eyes", "rosa-hair", "One-Piece", "Cómic-media", "Serie-media"]
	},
	{
		"id": 41,
		"name": "Weiss Schnee",
                "age": "19",
		"show": "RWBY",
		"main_image": "weiss.jpg",
		"alternative_images": ["weiss-2.jpg", "weiss-3.jpg"],
		"filters": ["azul-eyes", "blanco-hair", "RWBY", "Serie-media", "Videojuego-media"]
	},
	{
		"id": 42,
		"name": "Winter Schnee",
                "age": "25",
		"age_text": "20s",
		"show": "RWBY",
		"main_image": "winter.jpg",
		"alternative_images": ["winter-2.jpg", "winter-3.jpg"],
		"filters": ["azul-eyes", "blanco-hair", "RWBY", "Serie-media"]
	},
	{
		"id": 43,
		"name": "Yang Xiao Long",
                "age": "19",
		"show": "RWBY",
		"main_image": "yang.jpg",
		"alternative_images": ["yang-2.jpg", "yang-3.jpg", "yang-4.jpg", "yang-5.jpg"],
		"filters": ["violeta-eyes", "rubio-hair", "RWBY", "Serie-media", "Videojuego-media"]
	},
	{
		"id": 44,
		"name": "Yōko Mizuno",
                "age": "22",
		"age_text": "20s",
		"show": "Maria nos mira / Maria-sama ga Miteru",
		"main_image": "yoko.jpg",
		"alternative_images": ["yoko-2.jpg", "yoko-3.jpg"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Serie-media"]
	},
	{
		"id": 45,
		"name": "Yor Forger",
                "age": "27",
		"show": "Spy x Family",
		"main_image": "yor.jpg",
		"alternative_images": ["yor-2.jpg", "yor-3.jpg", "yor-4.jpg", "yor-5.jpg"],
		"filters": ["rojos-eyes", "oscuro-hair", "Cómic-media", "Serie-media", "Película-media"]
	},
	{
		"id": 46,
		"name": "Conis",
                "age": "21",
		"show": "One Piece",
		"main_image": "conis.jpg",
		"alternative_images": ["conis-2.jpg", "conis-3.jpg", "conis-4.jpg"],
		"filters": ["oscuros-eyes", "rubio-hair", "Cómic-media", "Serie-media", "One-Piece"]
	},
	{
		"id": 47,
		"name": "Hiyori Kōzuki",
                "age": "26",
		"show": "One Piece",
		"main_image": "hiyori.jpg",
		"alternative_images": ["hiyori-2.jpg", "hiyori-3.jpg", "hiyori-4.jpg", "hiyori-5.jpg"],
		"filters": ["azul-eyes", "teal-hair", "Cómic-media", "Serie-media", "One-Piece"]
	},
	{
		"id": 48,
		"name": "Koala",
        "age": "23",
		"show": "One Piece",
		"main_image": "koala.jpg",
		"alternative_images": ["koala-2.jpg", "koala-3.jpg", "koala-4.jpg"],
		"filters": ["azul-eyes", "pelirrojo-hair", "Cómic-media", "Serie-media", "One-Piece"]
	},
	{
		"id": 49,
		"name": "Cindry Victoria",
        "age": "24 [fallecida]",
		"show": "One Piece",
		"main_image": "cindry.jpg",
		"alternative_images": ["cindry-2.jpg", "cindry-3.jpg", "cindry-4.jpg"],
		"filters": ["oscuros-eyes", "rubio-hair", "Cómic-media", "Serie-media", "One-Piece"]
	},
	{
		"id": 50,
		"name": "Sun Jing",
        "age": "16",
		"show": "Tamen De Gushi",
		"main_image": "sunjing.jpg",
		"alternative_images": ["sunjing-2.jpg", "sunjing-3.jpg", "sunjing-4.jpg"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Cómic-media"]
	},
        {
		"id": 51,
		"name": "Kara Zor-El / Supergirl",
		"age": "24",
                "age_text": "24 [50s]",
		"show": "DC Comics",
		"main_image": "supergirl.jpg",
		"alternative_images": ["supergirl-2.jpg", "supergirl-3.jpg", "supergirl-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "superheroína", "Cómic-media", "Serie-media"]
	},
        {
		"id": 52,
		"name": "Carol Danvers / Ms. Marvel / Capitana Marvel",
		"age": "60",
                "age_text": "60s",
		"show": "Marvel Comics",
		"main_image": "marvel.jpg",
		"alternative_images": ["marvel-2.jpg", "marvel-3.jpg", "marvel-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "superheroína", "Cómic-media", "Película-media"]
	},
        {
		"id": 53,
		"name": "Korra",
        "age": "21",
		"show": "Avatar: La leyenda de Korra",
		"main_image": "korra.jpg",
		"alternative_images": ["korra-2.jpg", "korra-3.jpg", "korra-4.jpg", "korra-5.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "La-leyenda-de-Korra", "Serie-media", "Cómic-media"]
	},
        {
		"id": 54,
		"name": "Kimberly Ann Possible",
        "age": "17",
		"show": "Kim Possible",
		"main_image": "kim.jpg",
		"alternative_images": ["kim-2.jpg", "kim-3.jpg"],
		"filters": ["verdes-eyes", "pelirrojo-hair", "Serie-media", "Película-media"]
	},
        {
		"id": 55,
		"name": "Shego",
        "age": "30",
		"show": "Kim Possible",
		"main_image": "shego.jpg",
		"alternative_images": ["shego-2.jpg", "shego-3.jpg", "shego-4.jpg"],
		"filters": ["verdes-eyes", "oscuro-hair", "Serie-media", "Película-media"]
	},
        {
		"id": 56,
		"name": "Astrid Hofferson",
        "age": "31",
		"show": "Cómo entrenar a tu dragón",
		"main_image": "astrid.jpg",
		"alternative_images": ["astrid-2.jpg", "astrid-3.jpg", "astrid-4.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "Película-media"]
	},
       {
		"id": 57,
		"name": "Ripley (Provisional)",
        "age": "26",
                "age_text": "80, edad gigante",
		"show": "One Piece",
		"main_image": "ripley.jpg",
		"alternative_images": [],
		"filters": ["Cómic-media", "One-Piece"]
	},
      {
		"id": 58,
		"name": "Nani Pelekai",
        "age": "19",
		"show": "Lilo & Stitch",
		"main_image": "nani.jpg",
		"alternative_images": ["nani-2.jpg", "nani-3.jpg", "nani-4.jpg"],
		"filters": ["Película-media", "marrones-eyes", "oscuro-hair"]
	},
      {
		"id": 59,
		"name": "Elinor",
        "age": "41",
                "age_text": "40s",
		"show": "Brave",
		"main_image": "elinor.jpg",
		"alternative_images": ["elinor-2.jpg", "elinor-3.jpg", "elinor-4.jpg", "elinor-5.jpg"],
		"filters": ["Película-media", "marrones-eyes", "marrón-hair"]
	},
      {
		"id": 60,
		"name": "Yin",
        "age": "36",
                "age_text": "¿30s?",
		"show": "Ne Zha",
		"main_image": "yinshi.jpg",
		"alternative_images": ["yinshi-2.jpg", "yinshi-3.jpg", "yinshi-4.jpg"],
		"filters": ["Película-media", "marrones-eyes", "oscuro-hair"]
	},
      {
		"id": 61,
		"name": "Cass Hamada",
        "age": "33",
		"show": "Big Hero 6",
		"main_image": "cass.jpg",
		"alternative_images": ["cass-2.jpg"],
		"filters": ["Película-media", "verdes-eyes", "marrón-hair"]
	},
      {
		"id": 62,
		"name": "Honey Lemon / Aiko Miyazaki",
        "age": "22",
                "age_text": "20s",
		"show": "Big Hero 6",
		"main_image": "honeylemon.jpg",
		"alternative_images": ["honeylemon-2.jpg", "honeylemon-3.jpg", "honeylemon-4.jpg"],
		"filters": ["Película-media", "verdes-eyes", "rubio-hair", "superheroína"]
	},
      {
		"id": 63,
		"name": "Susan Murphy / Genórmica",
        "age": "27",
                "age_text": "Late 20s",
		"show": "Monstruos contra Alienígenas",
		"main_image": "susan.jpg",
		"alternative_images": ["susan-2.jpg", "susan-3.jpg", "susan-4.jpg"],
		"filters": ["Película-media", "azul-eyes", "blanco-hair"]
	},
	{
		"id": 64,
		"name": "Aki Mizuguchi",
        "age": "17",
		"show": "Whisper me a love song",
		"main_image": "aki.jpg",
		"alternative_images": ["aki-2.jpg", "aki-3.jpg", "aki-4.jpg"],
		"filters": ["verdes-eyes", "rubio-hair", "Cómic-media", "Serie-media"]
	},
	{
		"id": 65,
		"name": "Vaggi",
        "age": "20",
		"show": "Hazbin Hotel",
		"main_image": "vaggi.jpg",
		"alternative_images": ["vaggi-2.jpg", "vaggi-3.jpg", "vaggi-4.jpg", "vaggi-5.jpg"],
		"filters": ["rojos-eyes", "amarillos-eyes", "blanco-hair", "Serie-media"]
	},
	{
		"id": 66,
		"name": "Charlotte Morningstar",
        "age": "21",
        "age_text": "20s",
		"show": "Hazbin Hotel",
		"main_image": "charlie.jpg",
		"alternative_images": ["charlie-2.jpg", "charlie-3.jpg", "charlie-4.jpg", "charlie-5.jpg"],
		"filters": ["amarillos-eyes", "rojos-eyes", "rubio-hair", "Serie-media"]
	},
	{
		"id": 67,
		"name": "Mai Ôzuka",
        "age": "16",
		"show": "There's no freaking way I'll be your lover!! Unless...",
		"main_image": "maiouzuka.jpg",
		"alternative_images": ["maiouzuka-2.jpg", "maiouzuka-3.jpg", "maiouzuka-4.jpg", "maiouzuka-5.jpg"],
		"filters": ["amarillos-eyes", "rojos-eyes", "rubio-hair", "Serie-media"]
	},
	{
		"id": 68,
		"name": "Muni / Taunie",
                "age": "13",
		"age_text": "teen",
		"show": "Pokémon",
		"main_image": "muni.jpg",
		"alternative_images": ["muni-2.jpg", "muni-3.jpg"],
		"filters": ["azul-eyes", "rubio-hair", "rosa-hair", "Pokémon", "Videojuego-media"]
	},
	{
		"id": 69,
		"name": "Bárbara / Lida",
                "age": "13",
		"age_text": "teen",
		"show": "Pokémon",
		"main_image": "barb.jpg",
		"alternative_images": ["barb-2.jpg", "barb-3.jpg"],
		"filters": ["oscuros-eyes", "oscuro-hair", "Pokémon", "Videojuego-media"]
	},
	 {
		"id": 70,
		"name": "Chikane Kôzuki",
		"age": "18",
		"show": "Himegami no Miko",
		"main_image": "chikane2.jpg",
		"alternative_images": ["chikane2-2.jpg", "chikane2-3.jpg", "chikane2-4.jpg", "chikane2-5.jpg"],
		"filters": ["azul-eyes", "oscuro-hair", "Cómic-media"]
	},
	{
		"id": 71,
		"name": "Amaya",
                "age": "40",
		"age_text": "adult",
		"show": "wish",
		"main_image": "queenamaya.jpg",
		"alternative_images": ["queenamaya-2.jpg", "queenamaya-3.jpg", "queenamaya-4.jpg"],
		"filters": ["marrones-eyes", "marrón-hair", "Película-media"]
	},
	{
		"id": 72,
		"name": "Isabella Yamamoto",
        "age": "28",
		"show": "Paradise Kiss",
		"main_image": "isabella.jpg",
		"alternative_images": ["isabella-2.jpg", "isabella-3.jpg"],
		"filters": ["grises-eyes", "violeta-hair", "Serie-media", "Cómic-media"]
	},
	{
		"id": 73,
		"name": "Janai",
                "age": "30",
		"age_text": "adult",
		"show": "El príncipe dragón",
		"main_image": "janai.jpg",
		"alternative_images": ["janai-2.jpg", "janai-3.jpg", "janai-4.jpg", "janai-5.jpg"],
		"filters": ["marrones-eyes", "pelirrojo-hair", "Serie-media"]
	},
];

const IMAGES_PATH = 'images/';

//Add waifus count
function addWaifusCount() {
	const count_element = document.getElementById('waifus-count');
	count_element.innerHTML = WAIFUS.length;
}

//Add alternative images
function addAlternativeImges(waifu, other_images) {
	for(let i=0; i < other_images.length; i++){
		const alt_img_prototype = document.querySelector(".alternative-image.prototype");
		let alt_img = alt_img_prototype.cloneNode(true);
		alt_img.querySelector('img').src = IMAGES_PATH + other_images[i];
		alt_img = addChangeMainImageEvent(alt_img);
		alt_img.classList.remove("prototype");
		waifu.querySelector(".other-images").appendChild(alt_img);
	}
	return waifu;
}

//Change thumbnail image on click
function addChangeMainImageEvent(thumbnail) {
	thumbnail.addEventListener('click', function( event ){
		const main_image = this.closest(".waifu").querySelector(".image .main");
		const alternative_image = this.querySelector('img');
		const main_image_img = main_image.src;
		main_image.src = alternative_image.src;
		alternative_image.src = main_image_img;
	});
	return thumbnail;
}

//Sort functions
function sortByName(waifu_a, waifu_b) {
	if (!waifu_b.name || waifu_a.name < waifu_b.name) return -1;
	if (!waifu_a.name || waifu_a.name > waifu_b.name) return 1;
	return 0;
}
function sortByAge(waifu_a, waifu_b) {
	if (!waifu_b.age || waifu_a.age < waifu_b.age) return -1;
	if (!waifu_a.age || waifu_a.age > waifu_b.age) return 1;
	return 0;
}
function sortByShow(waifu_a, waifu_b) {
	if (!waifu_b.show || waifu_a.show < waifu_b.show) return -1;
	if (!waifu_a.show || waifu_a.show > waifu_b.show) return 1;
	return 0;
}
function sortById(waifu_a, waifu_b) {
	if (!waifu_b.id || waifu_a.id < waifu_b.id) return -1;
	if (!waifu_a.id || waifu_a.id > waifu_b.id) return 1;
	return 0;
}
function sortByNameNoCaseSensitive(element_a, element_b) {
	if (!element_b.name || element_a.name.toLowerCase() < element_b.name.toLowerCase()) return -1;
	if (!element_a.name || element_a.name.toLowerCase() > element_b.name.toLowerCase()) return 1;
	return 0;
}

function getSortedWaifus(by) {
	let waifus = WAIFUS;
	switch (by) {
		case 'name':
			waifus.sort(sortByName);
			break;
		case 'name-down':
			waifus.sort(sortByName).reverse();
			break;
		case 'age':
			waifus.sort(sortByAge);
			break;
		case 'age-down':
			waifus.sort(sortByAge).reverse();
			break;
		case 'show':
			waifus.sort(sortByShow);
			break;
		case 'show-down':
			waifus.sort(sortByShow).reverse();
			break;
		default:
			waifus.sort(sortByName);
	}
	return waifus;
}

//Sort buttons
function addSortListeners(){
	const sort_btns = document.querySelectorAll('.sort');
	for(let s=0; s < sort_btns.length; s++){
		sort_btns.item(s).addEventListener('click', function( event ){
			if (!this.classList.contains("selected")) {
				for(let s2=0; s2 < sort_btns.length; s2++){
					sort_btns[s2].classList.remove("selected");
				}
				const by = this.dataset.by;
				const sorted_waifus = getSortedWaifus(by);
				document.getElementById("waifus-container").innerHTML = "";
				this.classList.add('selected');
				paintWaifus(sorted_waifus);
				refreshFilters();
			}
		});	
	}
}

//Filter buttons
function refreshFilters(){
	const waifus = document.querySelectorAll('.waifu');
	const active_filters = document.getElementById('active-filters').value;
	
	if (active_filters == "") {
		for(let w=0; w < waifus.length; w++){
			waifus.item(w).classList.remove('hidden');
		}
	} else {
		const filters = active_filters.split(',');
		for(let w=0; w < waifus.length; w++){
			waifus.item(w).classList.add('hidden');
			let classes = waifus.item(w).classList;
			for(let f=0; f < filters.length; f++){
				if (classes.contains(filters[f])) {
					waifus.item(w).classList.remove('hidden');
				}
			}
		}
	}
}

function addFilters() {
	createFilterGroups();
	
	let filters_data = [];
	for(let w=0; w < WAIFUS.length; w++){
		let filters = WAIFUS[w].filters;
		for (let f=0; f < filters.length; f++) {
			filters_data = addFilterNoDuplicatedToArray(filters[f], filters_data);
		}
	}
	createFilterButtons(filters_data.sort(sortByNameNoCaseSensitive));
}

function addFilterNoDuplicatedToArray(filter, array) {
	for (let i=0; i < array.length; i++) {
		if (array[i].name == filter) {
			array[i].amount = array[i].amount + 1;
			return array;
		}
	}
	array.push({'name': filter, 'amount': 1});
	return array;
}

function createFilterButtons(filters){
	for(let f=0; f < filters.length; f++){
		const filter_prototype = document.querySelector(".filter.prototype");
		let filter_name = filters[f].name.replaceAll('-', ' ');
		let filter_group = getFilterGroup(filter_name);
		
		if (filter_group != '') {
			filter_name = filter_name.replace(filter_group, '').trim();
			filter_group = ' .filters-group.' + filter_group + ' .filters-container';
		} else {
			filter_group = ' .filters-group.other .filters-container';
		}
		
		let filter_btn = filter_prototype.cloneNode(true);
		filter_btn.querySelector('.amount').innerHTML = filters[f].amount;
		filter_btn.querySelector('.filter-name').innerHTML = filter_name;
		filter_btn.classList.add(filters[f].name);
		filter_btn.addEventListener('click', function( event ){
			const active_filters_element = document.getElementById('active-filters');
			let active_filters = active_filters_element.value;
			if (active_filters == "") {
				active_filters_element.value = filters[f].name;
				document.querySelector('.btn.filter.'+filters[f].name).classList.add('selected');
			} else {
				if (active_filters.includes(filters[f].name)) {
					let active_filters_array = active_filters.split(',');
					let start = active_filters_array.indexOf(filters[f].name);
					active_filters_array.splice(start, 1);
					active_filters_element.value = active_filters_array.toString();
					this.classList.remove('selected');
				} else {
					active_filters_element.value = active_filters_element.value + ',' + filters[f].name;
					this.classList.add('selected');
				}
			}
			refreshFilters();
		});
		filter_btn.classList.remove("prototype");
		document.querySelector(".filter-btns-container"+filter_group).appendChild(filter_btn);
	}
}

function createFilterGroups() {
	for(let fg=0; fg < FILTER_GROUPS.length; fg++){
		const filter_group_prototype = document.querySelector(".filters-group.prototype");
		let filters_group = filter_group_prototype.cloneNode(true);
		filters_group.classList.add(FILTER_GROUPS[fg].key);
		filters_group.querySelector('.group-name').innerHTML = FILTER_GROUPS[fg].txt;
		filters_group.classList.remove("prototype");
		document.querySelector(".filter-btns-container").appendChild(filters_group);
	}
	
	//Other
	const filter_group_prototype = document.querySelector(".filters-group.prototype");
	let filters_group = filter_group_prototype.cloneNode(true);
	filters_group.classList.add('other');
	filters_group.querySelector('.group-name').innerHTML = 'Otros';
	filters_group.classList.remove("prototype");
	document.querySelector(".filter-btns-container").appendChild(filters_group);
}

function getFilterGroup(filter) {
	for(let fg=0; fg < FILTER_GROUPS.length; fg++){
		if (filter.includes(FILTER_GROUPS[fg].key)) return FILTER_GROUPS[fg].key;
	}
	return '';
}


//Themes
function addThemesListeners(){
	const theme_btns = document.querySelectorAll('.theme');
	for(let t=0; t < theme_btns.length; t++){
		theme_btns.item(t).addEventListener('click', function( event ){
			if (!this.classList.contains("selected")) {
				for(let t2=0; t2 < theme_btns.length; t2++){
					theme_btns[t2].classList.remove("selected");
				}
				const theme = this.dataset.theme;
				const body = document.querySelector("body");
				body.classList.remove(...body.classList);
				body.classList.add(theme);
				this.classList.add('selected');
			}
		});	
	}
}

//Sizes
function addSizesListeners(){
	const size_btns = document.querySelectorAll('.size');
	for(let s=0; s < size_btns.length; s++){
		size_btns.item(s).addEventListener('click', function( event ){
			if (!this.classList.contains("selected")) {
				for(let s2=0; s2 < size_btns.length; s2++){
					size_btns[s2].classList.remove("selected");
				}
				const size = this.dataset.size;
				const container = document.getElementById("waifus-container");
				container.classList.remove(...container.classList);
				container.classList.add('container');
				container.classList.add(size);
				this.classList.add('selected');
			}
		});	
	}
}

function paintWaifus (waifus){
	for(let w=0; w < waifus.length; w++){
		const waifu_prototype = document.querySelector(".waifu.prototype");
		let waifu = waifu_prototype.cloneNode(true);
		
		const name = waifus[w].name;
		const age = waifus[w].age;
		const age_text = waifus[w].age_text;
		const show = waifus[w].show;
		const main_image = waifus[w].main_image;
		const other_images = waifus[w].alternative_images;
		const filters = waifus[w].filters;

		if (name) waifu.querySelector('.name').innerHTML = name;
		if (age_text) waifu.querySelector('.age').innerHTML = '(' + age_text + ')';
		else if (age) waifu.querySelector('.age').innerHTML = '(' + age + ')';
		if (show) waifu.querySelector('.show').innerHTML = show;
		if (main_image) waifu.querySelector('.image .main').src = IMAGES_PATH + main_image;
		if (other_images && Array.isArray(other_images)) waifu = addAlternativeImges(waifu,other_images);
		if (filters && Array.isArray(filters)) waifu.classList.add(...filters);
		
		waifu.classList.remove("prototype");
		document.getElementById("waifus-container").appendChild(waifu);
	}
}

//Add waifus
document.addEventListener("DOMContentLoaded", function(event) {
	addWaifusCount();
	paintWaifus(WAIFUS.sort(sortByName));
	addSortListeners();
	addFilters();
	addThemesListeners();
	addSizesListeners();
});