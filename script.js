const games = [

    // =========================
    // ACTION
    // =========================

    {
        name: "Dead Cells",
        genre: "Action",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Explore dangerous areas, defeat enemies and become stronger through repeated runs.",
        recommendation: "Fast combat and roguelite gameplay make every run exciting!"
    },

    {
        name: "Devil May Cry",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Fight demons using powerful weapons, combos and special abilities.",
        recommendation: "Perfect if you enjoy stylish and fast-paced combat!"
    },

    {
        name: "Monster Hunter",
        genre: "Action",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Hunt powerful monsters, collect materials and create stronger equipment.",
        recommendation: "Great for players who enjoy challenging boss fights!"
    },

    {
        name: "Elden Ring",
        genre: "Action",
        platform: "PC / Console",
        players: "1-3",
        difficulty: 5,
        goal: "Explore a huge fantasy world and defeat powerful enemies and bosses.",
        recommendation: "A massive adventure with incredible freedom and challenge!"
    },

    {
        name: "Metal Gear",
        genre: "Action",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Use stealth, weapons and strategy to complete dangerous missions.",
        recommendation: "Great for players who enjoy stealth and tactical gameplay!"
    },

    {
        name: "Hollow Knight",
        genre: "Action",
        platform: "PC / Console / Switch",
        players: "1",
        difficulty: 4,
        goal: "Explore a mysterious underground kingdom and defeat dangerous creatures.",
        recommendation: "Amazing exploration, atmosphere and challenging combat!"
    },

    {
        name: "Hollow Knight: Silksong",
        genre: "Action",
        platform: "PC / Console / Switch",
        players: "1",
        difficulty: 4,
        goal: "Explore a mysterious kingdom and fight enemies using fast movement and combat.",
        recommendation: "A great choice for Hollow Knight fans!"
    },


    // =========================
    // RPG
    // =========================

    {
        name: "Genshin Impact",
        genre: "RPG",
        platform: "PC / Console / Mobile",
        players: "1-4",
        difficulty: 3,
        goal: "Explore Teyvat, collect characters and uncover the story.",
        recommendation: "Great open-world RPG with exploration and character collecting!"
    },

    {
        name: "Honkai: Star Rail",
        genre: "RPG",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Travel across different worlds and uncover a mysterious story.",
        recommendation: "Excellent turn-based combat and story!"
    },

    {
        name: "Final Fantasy",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Explore fantasy worlds, fight enemies and experience an epic story.",
        recommendation: "One of the most famous RPG series ever made!"
    },

    {
        name: "Persona 3 Reload",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Live as a student while exploring the mysterious Dark Hour.",
        recommendation: "Great combination of dungeon combat, story and social simulation!"
    },

    {
        name: "Persona 4",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Investigate a mysterious series of events in a small Japanese town.",
        recommendation: "A great mystery RPG with memorable characters!"
    },

    {
        name: "Persona 4 Golden",
        genre: "RPG",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Solve a mysterious case while balancing school life and friendships.",
        recommendation: "One of the best choices for a long story-driven RPG!"
    },

    {
        name: "Persona 4 Revival",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Return to Inaba and experience the Persona 4 story again.",
        recommendation: "Perfect for Persona fans who want to revisit Inaba!"
    },

    {
        name: "Deltarune",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Explore a strange world, meet unusual characters and battle enemies.",
        recommendation: "Perfect for Undertale fans and story-focused RPG players!"
    },

    {
        name: "Undertale",
        genre: "RPG",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Explore the Underground and decide how you deal with its inhabitants.",
        recommendation: "A small RPG with a huge amount of personality!"
    },

    {
        name: "Cyberpunk 2077",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Explore Night City, complete missions and shape your character's story.",
        recommendation: "Great open-world RPG with a futuristic setting!"
    },

    {
        name: "Digimon Story: Time Stranger",
        genre: "RPG",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Collect Digimon, battle enemies and explore a time-based adventure.",
        recommendation: "Perfect for Digimon fans who enjoy monster-collecting RPGs!"
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
        goal: "Collect resources, build structures and survive in a procedurally generated world.",
        recommendation: "You can build almost anything you can imagine!"
    },

    {
        name: "Palworld",
        genre: "Survival",
        platform: "PC / Console",
        players: "1-4+",
        difficulty: 4,
        goal: "Survive, capture creatures, build a base and explore the world.",
        recommendation: "A crazy combination of survival, crafting and creature collecting!"
    },

    {
        name: "The Binding of Isaac",
        genre: "Survival",
        platform: "PC / Console / Switch",
        players: "1-2",
        difficulty: 5,
        goal: "Explore randomly generated rooms, defeat enemies and survive each run.",
        recommendation: "Extremely replayable roguelike gameplay!"
    },

    {
        name: "R.E.P.O.",
        genre: "Survival",
        platform: "PC",
        players: "1-6",
        difficulty: 4,
        goal: "Explore dangerous locations, collect valuable objects and survive together.",
        recommendation: "Chaotic multiplayer survival that is hilarious with friends!"
    },

    {
        name: "PEAK",
        genre: "Survival",
        platform: "PC",
        players: "1-4",
        difficulty: 4,
        goal: "Climb a dangerous mountain while managing resources and avoiding hazards.",
        recommendation: "Very fun when you and your friends keep messing up!"
    },

    {
        name: "Chained Together",
        genre: "Survival",
        platform: "PC",
        players: "1-4",
        difficulty: 5,
        goal: "Climb as high as possible while being chained to your teammates.",
        recommendation: "Teamwork is everything... until someone falls!"
    },


    // =========================
    // STRATEGY
    // =========================

    {
        name: "Dota 2",
        genre: "Strategy",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Work with your team to destroy the enemy Ancient.",
        recommendation: "Deep strategy and huge character variety!"
    },

    {
        name: "WorldBox",
        genre: "Strategy",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 2,
        goal: "Create worlds, civilizations and creatures and watch them develop.",
        recommendation: "You basically become the god of your own world!"
    },

    {
        name: "Clash Royale",
        genre: "Strategy",
        platform: "Mobile",
        players: "1v1 / 2v2",
        difficulty: 4,
        goal: "Use cards strategically to destroy your opponent's towers.",
        recommendation: "Simple to learn but surprisingly difficult to master!"
    },

    {
        name: "Arknights",
        genre: "Strategy",
        platform: "Mobile",
        players: "1",
        difficulty: 4,
        goal: "Deploy operators strategically to defend against enemy waves.",
        recommendation: "Excellent tower-defense strategy with a strong story!"
    },


    // =========================
    // ADVENTURE
    // =========================

    {
        name: "Grand Theft Auto V",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1 / Multiplayer",
        difficulty: 3,
        goal: "Explore an open world and experience different characters and missions.",
        recommendation: "Huge open world with tons of things to do!"
    },

    {
        name: "Red Dead Redemption",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1",
        difficulty: 3,
        goal: "Explore the Wild West and experience a dramatic story.",
        recommendation: "Amazing world-building and storytelling!"
    },

    {
        name: "Garry's Mod",
        genre: "Adventure",
        platform: "PC",
        players: "1+",
        difficulty: 2,
        goal: "Create, experiment and play user-made game modes and maps.",
        recommendation: "Your imagination is basically the limit!"
    },

    {
        name: "Mario Kart",
        genre: "Adventure",
        platform: "Console",
        players: "1-4",
        difficulty: 2,
        goal: "Race against other players using items and different tracks.",
        recommendation: "Perfect for chaotic multiplayer races!"
    },

    {
        name: "Mario Party",
        genre: "Adventure",
        platform: "Console",
        players: "1-4",
        difficulty: 2,
        goal: "Compete in board-game adventures and various mini-games.",
        recommendation: "Great party game for friends and family!"
    },

    {
        name: "Rocket League",
        genre: "Adventure",
        platform: "PC / Console",
        players: "1-8",
        difficulty: 4,
        goal: "Use rocket-powered cars to score goals against another team.",
        recommendation: "Easy to understand but incredibly hard to master!"
    },

    {
        name: "Crossy Road",
        genre: "Adventure",
        platform: "Mobile / PC",
        players: "1+",
        difficulty: 2,
        goal: "Cross roads and obstacles without getting hit.",
        recommendation: "Simple, addictive and perfect for quick games!"
    },

    {
        name: "Aniimon",
        genre: "Adventure",
        platform: "Mobile",
        players: "1+",
        difficulty: 3,
        goal: "Explore the world, collect creatures and develop your team.",
        recommendation: "A fun choice for players who enjoy creature collecting!"
    },


    // =========================
    // HORROR
    // =========================

    {
        name: "Content Warning",
        genre: "Horror",
        platform: "PC",
        players: "1-4",
        difficulty: 4,
        goal: "Record scary events with your friends and try to survive.",
        recommendation: "The perfect mixture of horror and chaotic multiplayer!"
    },

    {
        name: "Phasmophobia",
        genre: "Horror",
        platform: "PC / Console",
        players: "1-4",
        difficulty: 4,
        goal: "Investigate haunted locations and identify supernatural activity.",
        recommendation: "Much more fun when everyone is screaming together!"
    },

    {
        name: "Dark Deception",
        genre: "Horror",
        platform: "PC / Console",
        players: "1",
        difficulty: 4,
        goal: "Escape dangerous creatures while completing mysterious challenges.",
        recommendation: "Fast-paced horror with arcade-style gameplay!"
    },

    {
        name: "Doki Doki Literature Club",
        genre: "Horror",
        platform: "PC",
        players: "1",
        difficulty: 3,
        goal: "Join a literature club and uncover its strange secrets.",
        recommendation: "Looks cute at first... but don't trust appearances."
    },

    {
        name: "Poppy Playtime",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Explore an abandoned toy factory and uncover what happened there.",
        recommendation: "Great puzzle-focused horror adventure!"
    },

    {
        name: "Granny",
        genre: "Horror",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Escape from a dangerous house while avoiding Granny.",
        recommendation: "Simple gameplay but surprisingly stressful!"
    },

    {
        name: "Ice Scream",
        genre: "Horror",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Investigate a mysterious ice cream seller and rescue your friends.",
        recommendation: "Fun puzzle-based horror series!"
    },

    {
        name: "No, I'm Not a Human",
        genre: "Horror",
        platform: "PC",
        players: "1",
        difficulty: 4,
        goal: "Survive in a strange world while deciding who you can trust.",
        recommendation: "Perfect for players who enjoy psychological mystery!"
    },

    {
        name: "The Exit 8",
        genre: "Horror",
        platform: "PC / Console / Mobile",
        players: "1",
        difficulty: 3,
        goal: "Find anomalies and escape an endless underground passage.",
        recommendation: "A simple concept that creates a surprisingly creepy atmosphere!"
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
        goal: "Work with your team to complete objectives and defeat the enemy team.",
        recommendation: "Classic competitive FPS gameplay!"
    },

    {
        name: "VALORANT",
        genre: "Gun-Like",
        platform: "PC",
        players: "5v5",
        difficulty: 5,
        goal: "Use weapons and unique abilities to defeat the opposing team.",
        recommendation: "Great combination of shooting and tactical abilities!"
    },

    {
        name: "Call of Duty",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "1+",
        difficulty: 4,
        goal: "Fight through fast-paced missions and multiplayer battles.",
        recommendation: "One of the most famous FPS franchises!"
    },

    {
        name: "Delta Force",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "1+",
        difficulty: 4,
        goal: "Complete military missions and fight opposing forces.",
        recommendation: "Great for players who like military FPS games!"
    },

    {
        name: "PUBG",
        genre: "Gun-Like",
        platform: "PC / Console / Mobile",
        players: "1-4",
        difficulty: 4,
        goal: "Survive against other players and become the last team standing.",
        recommendation: "Classic battle royale gameplay!"
    },

    {
        name: "War Thunder",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1+",
        difficulty: 5,
        goal: "Control military vehicles and compete in large-scale battles.",
        recommendation: "Great if you enjoy realistic military vehicles!"
    },

    {
        name: "Overwatch 2",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "5v5",
        difficulty: 4,
        goal: "Work together using different heroes and abilities to win matches.",
        recommendation: "Fast team-based FPS gameplay with many unique heroes!"
    },

    {
        name: "Apex Legends",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1-3",
        difficulty: 5,
        goal: "Fight other squads and become the last team standing.",
        recommendation: "Fast movement and exciting battle royale combat!"
    },

    {
        name: "Rainbow Six Siege",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "5v5",
        difficulty: 5,
        goal: "Attack or defend objectives using tactical planning and special equipment.",
        recommendation: "Excellent tactical FPS for players who like strategy!"
    },

    {
        name: "Battlefield",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1+",
        difficulty: 4,
        goal: "Fight across large battlefields using infantry, vehicles and teamwork.",
        recommendation: "Great for large-scale multiplayer battles!"
    },

    {
        name: "Titanfall 2",
        genre: "Gun-Like",
        platform: "PC / Console",
        players: "1+",
        difficulty: 4,
        goal: "Fight using advanced weapons, movement and giant Titans.",
        recommendation: "Amazing movement and fast FPS combat!"
    },

    {
        name: "Team Fortress 2",
        genre: "Gun-Like",
        platform: "PC",
        players: "6+",
        difficulty: 4,
        goal: "Work with your team using different character classes.",
        recommendation: "Classic team-based FPS with lots of personality!"
    },


    // =========================
    // FTG
    // =========================

    {
        name: "Street Fighter",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Fight opponents using attacks, combos and special moves.",
        recommendation: "One of the most iconic fighting game series!"
    },

    {
        name: "Guilty Gear",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Battle opponents using unique characters and powerful combos.",
        recommendation: "Amazing anime-style fighting gameplay!"
    },

    {
        name: "Marvel Rivals",
        genre: "FTG",
        platform: "PC / Console",
        players: "6v6",
        difficulty: 4,
        goal: "Work with a team of Marvel heroes and villains to defeat the enemy team.",
        recommendation: "Great choice if you like Marvel characters and team combat!"
    },

    {
        name: "Fatal Fury",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 4,
        goal: "Fight opponents using different characters and special attacks.",
        recommendation: "A classic fighting game series!"
    },

    {
        name: "Tekken",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Defeat your opponent using martial arts and powerful combos.",
        recommendation: "Excellent 3D fighting gameplay!"
    },

    {
        name: "Mortal Kombat",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Defeat opponents using different fighters and special moves.",
        recommendation: "A legendary fighting game franchise!"
    },

    {
        name: "Super Smash Bros.",
        genre: "FTG",
        platform: "Nintendo Switch",
        players: "1-8",
        difficulty: 4,
        goal: "Battle famous characters and knock opponents off the stage.",
        recommendation: "Fantastic multiplayer fighting game!"
    },

    {
        name: "Dragon Ball FighterZ",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Use Dragon Ball characters to battle opponents with powerful combos.",
        recommendation: "Perfect for Dragon Ball fans!"
    },

    {
        name: "The King of Fighters",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Create a team of fighters and defeat opposing teams.",
        recommendation: "Great classic competitive fighting!"
    },

    {
        name: "Guilty Gear Strive",
        genre: "FTG",
        platform: "PC / Console",
        players: "1-2",
        difficulty: 5,
        goal: "Master unique characters and defeat opponents in intense battles.",
        recommendation: "Amazing visuals and deep combat!"
    },

    {
        name: "Brawlhalla",
        genre: "FTG",
        platform: "PC / Console / Mobile",
        players: "1-8",
        difficulty: 3,
        goal: "Knock opponents off the stage using different weapons.",
        recommendation: "Easy to start and very fun with friends!"
    },


    // =========================
    // MUSIC GAME
    // =========================

    {
        name: "hololive Dreams",
        genre: "Music Game",
        platform: "Mobile",
        players: "1+",
        difficulty: 3,
        goal: "Play rhythm-based gameplay while enjoying music and characters.",
        recommendation: "Perfect for hololive fans who enjoy rhythm games!"
    },

    {
        name: "Project Sekai: Colorful Stage",
        genre: "Music Game",
        platform: "Mobile / PC",
        players: "1+",
        difficulty: 4,
        goal: "Play rhythm charts and experience stories with different characters.",
        recommendation: "Great rhythm game with lots of songs and stories!"
    },

    {
        name: "Geometry Dash",
        genre: "Music Game",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 5,
        goal: "Navigate through difficult levels while following the rhythm.",
        recommendation: "Extremely addictive and challenging!"
    },

    {
        name: "Just Dance",
        genre: "Music Game",
        platform: "Console / Mobile",
        players: "1-6",
        difficulty: 3,
        goal: "Follow dance movements and score points along with music.",
        recommendation: "Great party game for friends!"
    },

    {
        name: "osu!",
        genre: "Music Game",
        platform: "PC",
        players: "1+",
        difficulty: 5,
        goal: "Hit notes accurately while following the rhythm.",
        recommendation: "Huge song library and extremely challenging gameplay!"
    },

    {
        name: "Beat Saber",
        genre: "Music Game",
        platform: "VR",
        players: "1",
        difficulty: 4,
        goal: "Slice incoming blocks in time with the music.",
        recommendation: "One of the most famous VR rhythm games!"
    },

    {
        name: "Muse Dash",
        genre: "Music Game",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 4,
        goal: "Defeat enemies and obstacles while following the rhythm.",
        recommendation: "Cute visuals combined with fast rhythm gameplay!"
    },

    {
        name: "Taiko no Tatsujin",
        genre: "Music Game",
        platform: "PC / Console / Mobile",
        players: "1-2",
        difficulty: 4,
        goal: "Hit the drum notes accurately to match the music.",
        recommendation: "A classic rhythm game with lots of fun songs!"
    },

    {
        name: "Friday Night Funkin'",
        genre: "Music Game",
        platform: "PC",
        players: "1",
        difficulty: 4,
        goal: "Hit the correct notes and win musical battles.",
        recommendation: "Simple controls with catchy music!"
    },

    {
        name: "A Dance of Fire and Ice",
        genre: "Music Game",
        platform: "PC / Mobile",
        players: "1",
        difficulty: 5,
        goal: "Control two planets and keep them moving to the rhythm.",
        recommendation: "Looks simple but becomes seriously challenging!"
    }

];


// =========================
// GAME GENERATOR
// =========================

const generateButton = document.getElementById("generateButton");
const genreSelect = document.getElementById("genre");
const result = document.getElementById("result");

generateButton.addEventListener("click", function () {

    const selectedGenre = genreSelect.value;

    let availableGames;

    // Random mode
    if (selectedGenre === "Random") {

        availableGames = games;

    } else {

        // Only select games from the chosen genre
        availableGames = games.filter(function (game) {

            return game.genre === selectedGenre;

        });

    }


    // Check if there are no games
    if (availableGames.length === 0) {

        result.innerHTML = `
            <h2>❌ No Games Found</h2>

            <p>
                There are no games in this category yet.
            </p>
        `;

        return;
    }


    // Choose a random game
    const randomIndex = Math.floor(
        Math.random() * availableGames.length
    );

    const game = availableGames[randomIndex];


    // Create difficulty stars
    const stars = "⭐".repeat(game.difficulty);


    // Display the game
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


        <div
            class="info-box"
            style="margin-top: 12px;"
        >

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
