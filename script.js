const games = [

    // =========================
    // ACTION
    // =========================

    {
        name: "Hades",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight through the Underworld and escape.",
        recommendation: "Fast combat and challenging runs!"
    },

    {
        name: "Hades II",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Battle through the Underworld using powerful abilities.",
        recommendation: "Great for roguelike action fans!"
    },

    {
        name: "Devil May Cry 5",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight demons using stylish and powerful combat.",
        recommendation: "Perfect for stylish action combat!"
    },

    {
        name: "Elden Ring",
        genre: "Action",
        platform: "PC / Console",
        players: "1-3",
        difficulty: 5,
        goal: "Explore the Lands Between and defeat powerful enemies.",
        recommendation: "Huge world, huge bosses and huge difficulty!"
    },

    {
        name: "Monster Hunter",
        genre: "Action",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Hunt powerful monsters and craft stronger equipment.",
        recommendation: "Great for boss fights and teamwork!"
    },

    {
        name: "Dark Souls",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 5,
        goal: "Explore a dangerous world and defeat powerful enemies.",
        recommendation: "Prepare yourself. This one does not forgive mistakes."
    },

    {
        name: "God of War",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight mythical enemies and uncover an epic story.",
        recommendation: "Great story combined with powerful combat!"
    },

    {
        name: "Sekiro: Shadows Die Twice",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 5,
        goal: "Master sword combat and defeat powerful enemies.",
        recommendation: "Extremely challenging but incredibly rewarding!"
    },

    {
        name: "Metal Gear Rising: Revengeance",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Use powerful sword combat to defeat enemies.",
        recommendation: "Ridiculously stylish action!"
    },

    {
        name: "Bayonetta",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight supernatural enemies using stylish combat.",
        recommendation: "Fast, flashy and full of crazy combos!"
    },


    // =========================
    // RPG
    // =========================

    {
        name: "Pokémon",
        genre: "RPG",
        platform: "Nintendo Switch",
        players: "1-2",
        difficulty: 2,
        goal: "Catch Pokémon, build a team and become the champion.",
        recommendation: "A great choice for a relaxing RPG adventure!"
    },

    {
        name: "Persona 5 Royal",
        genre: "RPG",
        platform: "PC / Console / Switch",
        players: "1",
        difficulty: 3,
        goal: "Live as a student while fighting supernatural enemies.",
        recommendation: "Excellent if you like story-heavy RPGs!"
    },

    {
        name: "Genshin Impact",
        genre: "RPG",
        platform: "PC / Mobile / Console",
        players: "1-4",
        difficulty: 3,
        goal: "Explore Teyvat, collect characters and uncover its mysteries.",
        recommendation: "Great for open-world exploration!"
    },

    {
        name: "Honkai: Star Rail",
        genre: "RPG",
        platform: "PC / Mobile / Console",
        players: "1",
        difficulty: 3,
        goal: "Travel across different worlds and battle enemies.",
        recommendation: "Great if you enjoy turn-based combat!"
    },

    {
        name: "Wuthering Waves",
        genre: "RPG",
        platform: "PC / Mobile / Console",
        players: "1-3",
        difficulty: 4,
        goal: "Explore a ruined world and fight mysterious enemies.",
        recommendation: "Fast combat and beautiful exploration!"
    },

    {
        name: "Final Fantasy",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Experience an epic fantasy adventure.",
        recommendation: "A classic RPG series with huge stories!"
    },

    {
        name: "Digimon Story: Time Stranger",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Explore the Digital World and build a powerful Digimon team.",
        recommendation: "Perfect for Digimon fans!"
    },

    {
        name: "Palworld",
        genre: "RPG",
        platform: "PC / Console",
        players: "1-4+",
        difficulty: 3,
        goal: "Capture creatures, build bases and survive.",
        recommendation: "A chaotic combination of survival and creature collecting!"
    },

    {
        name: "Arknights",
        genre: "RPG",
        platform: "Mobile / PC",
        players: "1",
        difficulty: 4,
        goal: "Deploy operators and defend against dangerous enemies.",
        recommendation: "Great for strategy and character collecting!"
    },

    {
        name: "Aniimon",
        genre: "RPG",
        platform: "PC / Mobile",
        players: "1+",
        difficulty: 3,
        goal: "Explore the world and collect powerful creatures.",
        recommendation: "A fun choice for creature-collecting fans!"
    },

    {
        name: "Limbus Company",
        genre: "RPG",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 5,
        goal: "Lead the Sinners through dangerous missions and uncover mysterious stories.",
        recommendation: "Dark story, unusual combat and lots of lore!"
    },

    {
        name: "Dragon Quest",
        genre: "RPG",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Travel through a fantasy world and defeat powerful enemies.",
        recommendation: "A classic fantasy RPG experience!"
    },

    {
        name: "Kingdom Hearts",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Travel between worlds and fight mysterious enemies.",
        recommendation: "A unique mix of action and fantasy!"
    },

    {
        name: "Baldur's Gate 3",
        genre: "RPG",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Explore a fantasy world and shape your own adventure.",
        recommendation: "Amazing for choices, exploration and party-based RPGs!"
    },


    // =========================
    // SURVIVAL
    // =========================

    {
        name: "Minecraft",
        genre: "Survival",
        platform: "PC / Console / Mobile",
        players: "1-8+",
        difficulty: 3,
        goal: "Survive, explore, build and defeat powerful enemies.",
        recommendation: "Perfect if you want freedom and endless exploration!"
    },

    {
        name: "Terraria",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-8",
        difficulty: 4,
        goal: "Explore, collect resources and defeat powerful bosses.",
        recommendation: "Great for exploration and boss fights!"
    },

    {
        name: "Subnautica",
        genre: "Survival",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Explore an alien ocean and survive on an unknown planet.",
        recommendation: "Perfect for mysterious exploration!"
    },

    {
        name: "Don't Starve",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-6",
        difficulty: 5,
        goal: "Gather resources and survive in a strange dangerous world.",
        recommendation: "A great challenge for survival game fans!"
    },

    {
        name: "PEAK",
        genre: "Survival",
        platform: "PC",
        players: "1-4",
        difficulty: 4,
        goal: "Climb a dangerous mountain while surviving unexpected hazards.",
        recommendation: "Even better when your friends accidentally ruin everything!"
    },

    {
        name: "R.E.P.O.",
        genre: "Survival",
        platform: "PC",
        players: "1-6",
        difficulty: 4,
        goal: "Work together to collect valuable items while surviving dangerous enemies.",
        recommendation: "Chaotic cooperative horror with physics!"
    },

    {
        name: "Grounded",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Survive while exploring a giant backyard.",
        recommendation: "Everything is terrifying when you're tiny!"
    },

    {
        name: "Rust",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-100+",
        difficulty: 5,
        goal: "Gather resources, build a base and survive other players.",
        recommendation: "A brutal survival experience!"
    },

    {
        name: "ARK: Survival Evolved",
        genre: "Survival",
        platform: "PC / Console / Mobile",
        players: "1+",
        difficulty: 5,
        goal: "Survive, build and tame dinosaurs.",
        recommendation: "Perfect if you want survival with dinosaurs!"
    },

    {
        name: "Raft",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 3,
        goal: "Build a raft and survive in the middle of the ocean.",
        recommendation: "Great cooperative survival adventure!"
    },

    {
        name: "Sons of the Forest",
        genre: "Survival",
        platform: "PC",
        players: "1-8",
        difficulty: 5,
        goal: "Explore a mysterious island and survive its dangers.",
        recommendation: "Great for survival horror with friends!"
    },


    // =========================
    // STRATEGY
    // =========================

    {
        name: "Civilization VI",
        genre: "Strategy",
        platform: "PC / Console",
        players: "1-12",
        difficulty: 5,
        goal: "Build an empire and lead your civilization to victory.",
        recommendation: "Perfect for strategic thinkers!"
    },

    {
        name: "League of Legends",
        genre: "Strategy",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Work with your team and destroy the enemy Nexus.",
        recommendation: "Great if you enjoy competitive team games!"
    },

    {
        name: "Dota 2",
        genre: "Strategy",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Work with your team and destroy the enemy Ancient.",
        recommendation: "Deep strategy and an extremely high skill ceiling!"
    },

    {
        name: "Clash Royale",
        genre: "Strategy",
        platform: "Mobile",
        players: "1v1 / 2v2",
        difficulty: 4,
        goal: "Use cards and strategy to destroy enemy towers.",
        recommendation: "Quick matches with lots of strategy!"
    },

    {
        name: "Brawl Stars",
        genre: "Strategy",
        platform: "Mobile",
        players: "1-6",
        difficulty: 3,
        goal: "Choose a Brawler and compete in different game modes.",
        recommendation: "Fast matches and lots of different characters!"
    },

    {
        name: "Among Us",
        genre: "Strategy",
        platform: "PC / Mobile / Console",
        players: "4-15",
        difficulty: 2,
        goal: "Complete tasks while figuring out who the impostors are.",
        recommendation: "Best played with friends and maximum chaos!"
    },

    {
        name: "Plants vs. Zombies",
        genre: "Strategy",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 2,
        goal: "Defend your home using plants against zombies.",
        recommendation: "Simple to learn but surprisingly strategic!"
    },

    {
        name: "Teamfight Tactics",
        genre: "Strategy",
        platform: "PC / Mobile",
        players: "1-8",
        difficulty: 4,
        goal: "Build a powerful team and outlast your opponents.",
        recommendation: "Great for strategy and team-building!"
    },

    {
        name: "Bloons TD 6",
        genre: "Strategy",
        platform: "PC / Mobile",
        players: "1-4",
        difficulty: 3,
        goal: "Build towers and stop waves of balloons.",
        recommendation: "Easy to start and surprisingly deep!"
    },


    // =========================
    // ADVENTURE
    // =========================

    {
        name: "The Legend of Zelda",
        genre: "Adventure",
        platform: "Nintendo Switch",
        players: "1",
        difficulty: 3,
        goal: "Explore a huge world, solve puzzles and defeat enemies.",
        recommendation: "A fantastic choice for exploration!"
    },

    {
        name: "Roblox",
        genre: "Adventure",
        platform: "PC / Mobile / Console",
        players: "1+",
        difficulty: 2,
        goal: "Explore thousands of different user-created games.",
        recommendation: "Perfect when you don't know what you want to play!"
    },

    {
        name: "Grand Theft Auto V",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-30",
        difficulty: 4,
        goal: "Explore Los Santos and experience an open-world story.",
        recommendation: "Huge open world with tons of things to do!"
    },

    {
        name: "Cyberpunk 2077",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Explore Night City and shape your own story.",
        recommendation: "Great for futuristic open-world exploration!"
    },

    {
        name: "Red Dead Redemption 2",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-32",
        difficulty: 4,
        goal: "Explore the Wild West and experience an epic story.",
        recommendation: "Amazing open-world adventure!"
    },

    {
        name: "Metal Gear Solid",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Use stealth and strategy to complete dangerous missions.",
        recommendation: "Perfect for players who enjoy stealth!"
    },

    {
        name: "Mario Kart",
        genre: "Adventure",
        platform: "Nintendo Switch",
        players: "1-4+",
        difficulty: 3,
        goal: "Race against other characters using items and abilities.",
        recommendation: "Great for chaotic multiplayer races!"
    },

    {
        name: "Mario Party",
        genre: "Adventure",
        platform: "Nintendo Switch",
        players: "1-4",
        difficulty: 2,
        goal: "Compete in mini-games and collect the most stars.",
        recommendation: "Perfect for playing with friends!"
    },

    {
        name: "Rocket League",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-8",
        difficulty: 4,
        goal: "Play football using rocket-powered cars.",
        recommendation: "Easy to understand but difficult to master!"
    },

    {
        name: "Minecraft Dungeons",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 3,
        goal: "Explore dungeons, collect equipment and defeat enemies.",
        recommendation: "Great if you like Minecraft and dungeon crawling!"
    },

    {
        name: "How to Fish",
        genre: "Adventure",
        platform: "PC",
        players: "1+",
        difficulty: 2,
        goal: "Fish, explore and discover different catches.",
        recommendation: "A relaxing choice when you want something chill!"
    },

    {
        name: "Chained Together",
        genre: "Adventure",
        platform: "PC",
        players: "1-4",
        difficulty: 4,
        goal: "Work together while climbing through dangerous obstacles.",
        recommendation: "A hilarious cooperative challenge!"
    },

    {
        name: "Stardew Valley",
        genre: "Adventure",
        platform: "PC / Console / Mobile",
        players: "1-4",
        difficulty: 2,
        goal: "Build your farm, meet villagers and explore the valley.",
        recommendation: "A relaxing game when you just want to chill."
    },

    {
        name: "Crossy Road",
        genre: "Adventure",
        platform: "Mobile / PC / Console",
        players: "1+",
        difficulty: 2,
        goal: "Cross roads and rivers without getting hit.",
        recommendation: "Simple, addictive and surprisingly difficult!"
    },

    {
        name: "8-Bit Adventures",
        genre: "Adventure",
        platform: "PC",
        players: "1",
        difficulty: 3,
        goal: "Explore a pixel world and uncover its secrets.",
        recommendation: "Great for classic adventure fans!"
    },


    // =========================
    // HORROR
    // =========================

    {
        name: "Content Warning",
        genre: "Horror",
        platform: "PC",
        players: "1-4",
        difficulty: 3,
        goal: "Explore dangerous locations and record scary footage.",
        recommendation: "Horror becomes much funnier with friends!"
    },

    {
        name: "Phasmophobia",
        genre: "Horror",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Investigate haunted locations and identify ghosts.",
        recommendation: "Perfect for ghost-hunting with friends!"
    },

    {
        name: "Dark Deception",
        genre: "Horror",
        platform: "PC",
        players: "1",
        difficulty: 4,
        goal: "Escape terrifying enemies while completing dangerous challenges.",
        recommendation: "Fast-paced horror with lots of surprises!"
    },

    {
        name: "Doki Doki Literature Club",
        genre: "Horror",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Join a literature club and discover its disturbing secrets.",
        recommendation: "Looks cute... but don't trust appearances."
    },

    {
        name: "Poppy Playtime",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Explore an abandoned toy factory and uncover its secrets.",
        recommendation: "Perfect for creepy puzzles and monsters!"
    },

    {
        name: "Granny",
        genre: "Horror",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Escape the house without getting caught.",
        recommendation: "Stay quiet... Granny is listening."
    },

    {
        name: "Ice Scream",
        genre: "Horror",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Explore the area and rescue your friends.",
        recommendation: "A creepy puzzle adventure!"
    },

    {
        name: "Dead by Daylight",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "4v1",
        difficulty: 4,
        goal: "Survive the killer or hunt down the survivors.",
        recommendation: "Great for multiplayer horror!"
    },

    {
        name: "Resident Evil",
        genre: "Horror",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Survive terrifying enemies and uncover the mystery.",
        recommendation: "Classic survival horror!"
    },

    {
        name: "Five Nights at Freddy's",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Survive the night while monitoring dangerous animatronics.",
        recommendation: "Classic survival horror!"
    },

    {
        name: "Outlast",
        genre: "Horror",
        platform: "PC / Console",
        players: "1",
        difficulty: 5,
        goal: "Investigate a terrifying abandoned facility.",
        recommendation: "Run first. Ask questions later."
    },

    {
        name: "寻找伪人",
        genre: "Horror",
        platform: "PC",
        players: "1",
        difficulty: 4,
        goal: "Observe people carefully and identify who is not human.",
        recommendation: "Perfect if you enjoy observation and psychological horror!"
    },

    {
        name: "The Exit 8",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Find anomalies and escape an endless underground passage.",
        recommendation: "Look carefully. Something is definitely wrong."
    },

    {
        name: "The Closing Shift",
        genre: "Horror",
        platform: "PC",
        players: "1",
        difficulty: 3,
        goal: "Work a late shift while strange events begin happening.",
        recommendation: "A creepy psychological horror experience!"
    },

    {
        name: "Little Nightmares",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Explore a strange world and escape terrifying creatures.",
        recommendation: "Creepy atmosphere and clever puzzles!"
    },


    // =========================
    // GUN-LIKE
    // =========================

    {
        name: "Counter-Strike 2",
        genre: "Gun-Like",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Work with your team and complete objectives.",
        recommendation: "Classic tactical competitive shooting!"
    },

    {
        name: "VALORANT",
        genre: "Gun-Like",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Use weapons and abilities to defeat the enemy team.",
        recommendation: "Great for tactical teamwork and precise aim!"
    },

    {
        name: "Call of Duty",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "1-100+",
        difficulty: 4,
        goal: "Fight through intense multiplayer battles and missions.",
        recommendation: "Fast-paced competitive action!"
    },

    {
        name: "Delta Force",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "Multiplayer",
        difficulty: 4,
        goal: "Complete tactical missions and defeat enemy forces.",
        recommendation: "Great for military-style gameplay!"
    },

    {
        name: "PUBG",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "1-4",
        difficulty: 4,
        goal: "Survive and become the last player or team standing.",
        recommendation: "Classic battle royale gameplay!"
    },

    {
        name: "Overwatch 2",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "5v5",
        difficulty: 4,
        goal: "Work together using unique heroes and abilities.",
        recommendation: "Fast team fights with lots of heroes!"
    },

    {
        name: "Apex Legends",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1-3",
        difficulty: 5,
        goal: "Fight other squads and become the last team standing.",
        recommendation: "Fast movement and intense matches!"
    },

    {
        name: "Rainbow Six Siege",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "5v5",
        difficulty: 5,
        goal: "Attack or defend objectives using tactical teamwork.",
        recommendation: "Perfect for strategic shooters!"
    },

    {
        name: "Helldivers 2",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Fight enemies across dangerous planets.",
        recommendation: "Chaotic cooperative shooting with friends!"
    },

    {
        name: "Battlefield",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "Multiplayer",
        difficulty: 4,
        goal: "Fight across huge battlefields with your team.",
        recommendation: "Great for large-scale battles!"
    },

    {
        name: "War Thunder",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "Multiplayer",
        difficulty: 5,
        goal: "Control military vehicles and compete in large-scale battles.",
        recommendation: "Perfect if you enjoy tanks, aircraft and military vehicles!"
    },


    // =========================
    // FTG
    // =========================

    {
        name: "Street Fighter",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 4,
        goal: "Master fighters and defeat your opponent.",
        recommendation: "A legendary fighting game series!"
    },

    {
        name: "Guilty Gear",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Master unique characters and powerful combos.",
        recommendation: "Amazing visuals and deep fighting mechanics!"
    },

    {
        name: "Marvel Rivals",
        genre: "FTG",
        platform: "PC / Console",
        players: "6v6",
        difficulty: 4,
        goal: "Use Marvel heroes and villains to defeat the opposing team.",
        recommendation: "Great for Marvel fans who love competitive combat!"
    },

    {
        name: "Fatal Fury",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 4,
        goal: "Fight opponents using powerful martial arts techniques.",
        recommendation: "A classic fighting game series!"
    },

    {
        name: "Tekken",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Master combos and defeat powerful fighters.",
        recommendation: "One of the biggest 3D fighting game series!"
    },

    {
        name: "Mortal Kombat",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 4,
        goal: "Fight through intense battles and tournaments.",
        recommendation: "A classic fighting franchise!"
    },

    {
        name: "Super Smash Bros.",
        genre: "FTG",
        platform: "Nintendo Switch",
        players: "1-8",
        difficulty: 4,
        goal: "Knock opponents off the stage using famous characters.",
        recommendation: "Perfect for chaotic multiplayer battles!"
    },

    {
        name: "Dragon Ball FighterZ",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 4,
        goal: "Build a team of Dragon Ball fighters and defeat opponents.",
        recommendation: "Amazing for Dragon Ball fans!"
    },

    {
        name: "The King of Fighters",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Build a team of fighters and defeat your opponents.",
        recommendation: "Great for technical fighting game fans!"
    },


    // =========================
    // MUSIC GAME
    // =========================

    {
        name: "hololive Dreams",
        genre: "Music Game",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Play through songs and enjoy rhythm-based gameplay.",
        recommendation: "Great for hololive and rhythm game fans!"
    },

    {
        name: "Project SEKAI: Colorful Stage",
        genre: "Music Game",
        platform: "Mobile",
        players: "1",
        difficulty: 4,
        goal: "Play rhythm games and experience musical stories.",
        recommendation: "Perfect for Vocaloid and rhythm game fans!"
    },

    {
        name: "Geometry Dash",
        genre: "Music Game",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 5,
        goal: "Navigate through dangerous levels while following the music.",
        recommendation: "Simple controls. Absolutely brutal levels."
    },

    {
        name: "Just Dance",
        genre: "Music Game",
        platform: "PC / Console",
        players: "1-6",
        difficulty: 2,
        goal: "Dance along with songs and score points.",
        recommendation: "Perfect for playing with friends!"
    },

    {
        name: "osu!",
        genre: "Music Game",
        platform: "PC",
        players: "1+",
        difficulty: 5,
        goal: "Hit notes accurately while following the rhythm.",
        recommendation: "Fast hands and good rhythm are essential!"
    },

    {
        name: "Beat Saber",
        genre: "Music Game",
        platform: "PC / Console / VR",
        players: "1",
        difficulty: 4,
        goal: "Slash blocks to the rhythm of music.",
        recommendation: "One of the most fun VR rhythm games!"
    },

    {
        name: "Muse Dash",
        genre: "Music Game",
        platform: "PC / Mobile / Console",
        players: "1",
        difficulty: 3,
        goal: "Defeat enemies and obstacles to the rhythm of music.",
        recommendation: "Cute visuals mixed with fast rhythm gameplay!"
    },

    {
        name: "Taiko no Tatsujin",
        genre: "Music Game",
        platform: "PC / Console / Mobile",
        players: "1-2",
        difficulty: 4,
        goal: "Hit the drum notes in time with the music.",
        recommendation: "Great for rhythm game fans!"
    },

    {
        name: "Friday Night Funkin'",
        genre: "Music Game",
        platform: "PC",
        players: "1",
        difficulty: 4,
        goal: "Hit the correct notes and win musical battles.",
        recommendation: "Great for rhythm and music fans!"
    }


];


// =========================
// GENERATOR
// =========================

const generateButton = document.getElementById("generateButton");

const genreSelect = document.getElementById("genre");

const result = document.getElementById("result");


generateButton.addEventListener("click", function () {

    const selectedGenre = genreSelect.value;

    let availableGames;


    // Random = use every game
    if (selectedGenre === "Random") {

        availableGames = games;

    }

    // Selected genre
    else {

        availableGames = games.filter(function (game) {

            return game.genre === selectedGenre;

        });

    }


    // Safety check
    if (availableGames.length === 0) {

        result.innerHTML = `
            <h2>❌ No Games Found</h2>
            <p>There are no games in this category yet.</p>
        `;

        return;

    }


    // Choose random game
    const randomIndex = Math.floor(
        Math.random() * availableGames.length
    );

    const game = availableGames[randomIndex];


    // Difficulty stars
    const stars = "⭐".repeat(game.difficulty);


    // Display result
    result.innerHTML = `

        <h2>🎮 Your Game</h2>

        <div class="game-name">
            ${game.name}
        </div>

        <div class="info">

            <div class="info-box">
                🎯 Genre<br>
                <strong>${game.genre}</strong>
            </div>

            <div class="info-box">
                💻 Platform<br>
                <strong>${game.platform}</strong>
            </div>

            <div class="info-box">
                👥 Players<br>
                <strong>${game.players}</strong>
            </div>

            <div class="info-box">
                🔥 Difficulty<br>
                <strong>${stars}</strong>
            </div>

        </div>

        <div class="info-box" style="margin-top: 12px;">

            🏆 Goal<br>

            <strong>
                ${game.goal}
            </strong>

        </div>

        <div class="recommendation">

            💡 ${game.recommendation}

        </div>

    `;

});