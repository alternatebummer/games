/* movies.js */
const movies = [

    {
        reviewDate: "2022-02-22",
        title: "Mad God",
        released: 2021,
        rating: "4 out of 5 Stars",
        review: "A deeply pessimistic post-apocalyptic fantasia that mixes live-action with stop-motion. It explores themes of domination and the perpetual renewal/prolongation of torment through motifs and set pieces that could only come from the mind of a recovering Catholic. It's pretty awesome."
    },
    {
        reviewDate: "2022-02-22",
        title: "Sorcerer",
        released: 1977,
        rating: "4 out of 5 Stars",
        review: "Four men are screwed into delivering 6 crates of volatile explosives across rough terrain to extinguish an inferno. This film is an epic on the level of Star Wars with astounding performances from its leads. Excellent soundtrack by Tangerine Dream. A remake of 1953's 'The Wages of Fear' that impregnates the source material with everything great about the energy of 1977 American action/thriller filmmaking. My favourite Roy Scheider performance and a 10/10 film, even if it gets 4 stars and a heart."
    },
    {
        reviewDate: "2022-02-22",
        title: "Midnight Cowboy",
        released: 1969,
        rating: "5 out of 5 Stars",
        review: "Cowboy Joe leaves his hometown and instantly steps outside of himself. The film follows his slow, mostly subconscious exploration into the subtle and overt social forces that have shaped his subjectivity. This is a killer movie and, in my opinion, a cornerstone of North American queer cinema. I cannot recommend it highly enough."
    },
    {
        reviewDate: "2022-02-22",
        title: "Ghostbusters: Afterlife",
        released: 2021,
        rating: "2 out of 5 Stars",
        review: "Kind-of a junky slog and another one of those legacy franchise remakes where the subtext speaks to the state of the franchise and the filmmaker's expectations of the audience. Cute acting, though, and when the emotional manipulation works, it works."
    },
    {
        reviewDate: "2022-02-22",
        title: "The Power of the Dog",
        released: 2021,
        rating: "4.5 out of 5 Stars",
        review: "My second viewing. Without spoiling, the film is about heirlooms of trauma and trauma-as-heirloom, and how escape/release from self folds into its reproduction. Extremely fine filmmaking. Some folk say this is the best film of 2021. That might be right on the money."
    },
    {
        reviewDate: "2022-02-22",
        title: "The Empty Man",
        released: 2020,
        rating: "3.5 out of 5 Stars",
        review: "What it lacks in brevity, acting and narrative virality, it makes up for in workman-like dedication to its premise. To quote the band No Means No: 'How do you hide from something... YOU have found? Can you hear that sound!?' The Empty Man is an absolute sleeper hit in the horror/cult/conspiracy genre that any aficionado must consume and pass on to others."
    },
    {
        reviewDate: "2022-02-23",
        title: "Fiddlin'",
        released: 2019,
        rating: "3 out of 5 Stars",
        review: "Just a very sweet and generous window into the lives of folk for whom bluegrass is an organizing principle of life. Maybe goes on a bit long for me, but I'm a godless civ with no fiddle, so."
    },
    {
        reviewDate: "2022-03-04",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        released: 2001,
        rating: "4.5 out of 5 Stars",
        review: "An epic telling of a hobbit's choice to take the ring of power back to the fires that forged it. He wears it around his neck. It's heavy. He suffers the ring. He has doubts. 'I'm not like you, Bilbo.' Each member of the fellowship suffers from their doubts. They carry their pain like Frodo carries the ring. Each have their own journey through shadow, their own burdens they must release into their own fire. The adaptation from mythopoeic novel to screenplay feels effortless and comforting. The performances are flawless. My only serious quibble is Jackson's omission of Tom Bombadil. He had an obligation to try!"
    },
    {
        reviewDate: "2022-03-31",
        title: "The General",
        released: 1926,
        rating: "4",
        review: "The Pacific Northwest is unmistakable here, despite the story being set in the South. I'm a sucker for the ecosystem and always relish the chance to see footage of valleys, sub-alpine white cedar forests, old rail bridges, even soil erosion in this film feels familiar. The storytelling through this footage and Keaton's performance is pretty remarkable, pretty special."
    },
    {
        reviewDate: "2022-04-01",
        title: "Bram Stoker's Dracula",
        released: 1992,
        rating: "2.5",
        review: "Stoker was bedridden as a child. He'd later excuse his acute imagination and intellect as attributes derived from 'the leisure of [his] illness.' This movie is not the product of a leisure-derived imagination or intellect. It's the product of cocaine. Amazing cast, but a pain in the ass to watch."
    },
    {
        reviewDate: "2022-04-04",
        title: "Moonfall",
        released: 2022,
        rating: "1",
        review: "Another dad, another doomsday. Whereas the films of Denis Villeneuve predominantly feature women who are meant to reorder the world after the arrival/incursion of a seemingly impassible and paradoxical maximum, Roland Emmerich's films feature men who are meant to save the world while it crumbles to pieces (its own sort of paradox, I guess). This movie sucks, though. There honestly isn't enough moon. It gets 1 star for what little moon there is."
    },
    {
    reviewDate: "2022-04-05",
    title: "The Hitchhiker's Guide to the Galaxy",
    released: 2005,
    rating: "3",
    review: `<blockquote>
    <i>If I had just one last wish I would like a tasty fish
    <i>If we could just change one thing We would all have learned to sing
    <i>Come, one and all, man and mammal Side-by-side in life's great gene pool
    </blockquote>`
},
{
    reviewDate: "2022-04-07",
    title: "The 400 Blows",
    released: 1959,
    rating: "5",
    review: "An absolute indictment of the institutionalized sensibilities we still suffer from, at any age, regardless of proximity to France. Look into this movie. It's not only a figurative deconstruction of society - it's also autobiography and a document of radical direct action. It's true in practically every sense of the word. Most of all, it's an absolute comfort to watch. The score is perfect. The final shot releases us from pain, but not oppression. Fantastic film."
},
{
    reviewDate: "2022-04-09",
    title: "The French Dispatch",
    released: 2021,
    rating: "3",
    review: "Apropos Anderson's trademark evans key precision, I had whereabouts nested my expectations in the usual branches of cinematic certainty adjoined to the familiar spinlocks of grief, loneliness, beauty and love. What befell me thereupon like a dog day (though it had been Spring) was, at a distance, some hundred fifty shovelfulls of chicken feathers, at once ample and boutique as each uniform and queerly spaced, with what between I could not see. I felt profoundly the deciduously goated potentate of precious and mawkish poetics invert from lope to grope. Still, budgeted to death and spitting feathers, I wept on cue. I'll thank you not to query why."
},
{
    reviewDate: "2022-04-13",
    title: "Warcraft",
    released: 2016,
    rating: "0.5",
    review: "This is a story about manufacturing history and the sickos who do it. Some of them appear to have no past and no future except for what they make of the present. Khadgar and Durotan. They pick up the ideologies of their time and place to force their way into the history-making project. There are also characters that are seemingly destined to make history. Medivh, Gul'dan. Possessed and imbued with powers from a reality beyond their own. But these states are reflections of our world, not the world of Azeroth. For us, these fantasies are equal falsehoods, not discrete, actual states of being. These are the excuses, the self-told lies, that justify social positioning for history makers. This movie suppresses our waking world by making it subtext/subconscious and advocates for the foregrounding of lies, fantasies; toward realities where our rights and responsibilities are mandated by ghostly fabulons. It is the MASKING of sicko impulses that earns this work a HALF A STAR."
},
{
    reviewDate: "2022-07-18",
    title: "Crimes of the Future",
    released: 2022,
    rating: "3.5 out of 5 Stars",
    review: "This movie's a great hang and a pleasurable dissection. There's nothing wrong with suffering for your art. There's always something new that comes through repetition and ritual practice. And those of us who can be satisfied with sitting back and eating garbage? There's a curious honour in that, too..."
},
{
    reviewDate: "2022-07-24",
    title: "The Gray Man",
    released: 2022,
    rating: "1 out of 5 Stars",
    review: "Honestly was expecting less gunplay and more Rubbermaid tubs and scratching addresses off of shipping labels."
},
{
        reviewDate: "2022-11-29",
        title: "Coraline",
        released: 2009,
        rating: "4.5 out of 5 Stars",
        review: "Maybe a perfect movie, if a little too perfect. A movie about worlds; about being stuck in worlds; about awareness of worlds; about power and love spilling out of and into worlds. <i>Coraline</i> is a very sweet, slow and meditative experience. Her adventure is in conversation with Jack Skellington, from the more frantic, celebratory <i>Nightmare Before Christmas</i>, which is also about worlds."
    },
    {
        reviewDate: "2022-11-29",
        title: "The Nightmare Before Christmas",
        released: 1993,
        rating: "4 out of 5 Stars",
        review: "Pretty cool movie. One of the things I love about the Sally plotline is that Jack doesn't know it's happening. She experiences Christmas as well, but she experiences it secretly. She witnesses a thistle spontaneously transform into a Christmas tree. Like Jack, Christmas speaks to Sally. Sally, though, seems to understand something more."
    },
    {
        reviewDate: "2022-11-30",
        title: "The Wonder",
        released: 2022,
        rating: "2 out of 5 Stars",
        review: "One star for a compelling and dark little mystery at the centre of this movie. One star for Pugh. A big ol' heart for all these dummies, just out here making life hard for each other."
    },
    {
        reviewDate: "2022-12-03",
        title: "Looper",
        released: 2012,
        rating: "3 out of 5 Stars",
        review: "Just a fantastic Jeff Daniels performance. Joseph Gordon-Levitt makes a successful play as a noir-esque leading man in a gritty, believable cyberpunk world."
    },
    {
        reviewDate: "2022-12-03",
        title: "The Guardians of the Galaxy Holiday Special",
        released: 2022,
        rating: "0.5 out of 5 Stars",
        review: "I highly recommend roasting chestnuts. Not over a fire, necessarily. You can put them on a baking pan in the oven. They're better than you imagine. Have a cozy December."
    },
    {
        reviewDate: "2022-12-05",
        title: "Wendell & Wild",
        released: 2022,
        rating: "2.5 out of 5 Stars",
        review: "I watched this movie without sound and subtitles - it's worth rewatching and reviewing properly."
    },
    {
        reviewDate: "2022-12-05",
        title: "Super Troopers",
        released: 2001,
        rating: "3 out of 5 Stars",
        review: "Discounting Star Wars movies (and perhaps <i>Rock-a-Doodle</i>), <i>Super Troopers</i> has been the no. 1 re-watch of my life so far. It's the ultimate slobs vs. snobs comedy."
    },
    {
        reviewDate: "2022-12-06",
        title: "The Woman King",
        released: 2022,
        rating: "3 out of 5 Stars",
        review: "There's a complex discourse around the choice to depict the Dahomey as liberators. The choice definitely pushes <i>The Woman King</i> deeper into a quasi-historical space."
    },
    {
        reviewDate: "2022-12-07",
        title: "Armageddon",
        released: 1998,
        rating: "2.5 out of 5 Stars",
        review: "<i>And</i> stop a planet-killing asteroid in 19 days? Haven't these brave men already done enough for your country?"
    },
    {
        reviewDate: "2022-12-08",
        title: "She Said",
        released: 2022,
        rating: "4 out of 5 Stars",
        review: "Riveting and rare. Someone once pointed out that a movie about uncovering and safeguarding the truth is a movie about journalism. And it isn't, in the end, a movie about journalism at all, but about women."
    },
    {
        reviewDate: "2022-12-10",
        title: "The Revenge of Dr. X",
        released: 1967,
        rating: "1 out of 5 Stars",
        review: "<i>'Make yourself at home, with muh snakes.'</i>"
    },
    {
        reviewDate: "2022-12-11",
        title: "The Angry Red Planet",
        released: 1959,
        rating: "1.5 out of 5 Stars",
        review: "<i>The Angry Red Planet</i> has enough thematic variety and visual/textual uniqueness to power you through a watch."
    },
    {
        reviewDate: "2022-12-12",
        title: "Hocus Pocus 2",
        released: 2022,
        rating: "0.5 out of 5 Stars",
        review: "Half a star for the little kid's performance in the first 10 minutes. This was terrible."
    },
    {
        reviewDate: "2022-12-12",
        title: "God's Country",
        released: 2022,
        rating: "3 out of 5 Stars",
        review: "Look, I really like Thandiwe and her performance absolutely carries this movie. But the movie doesn't get in the way, which is good."
    },
    {
        reviewDate: "2022-12-13",
        title: "Doctor X",
        released: 1932,
        rating: "3 out of 5 Stars",
        review: "A mind-boggling blend of horror, noir, romance, comedy, and sci-fi. Lots of silliness."
    },
    {
        reviewDate: "2022-12-15",
        title: "All the President's Men",
        released: 1976,
        rating: "4.5 out of 5 Stars",
        review: "Why doesn't <i>All the President's Men</i> get five stars? It's hard to put into words... <i>Midnight Cowboy</i> is about two things, like how this movie is about two things."
    },
    {
        reviewDate: "2022-12-17",
        title: "Bones and All",
        released: 2022,
        rating: "4 out of 5 Stars",
        review: "It's a long movie and honestly it could have been longer. Add another town, another eater. Make a sequel. This is a verse worth building out."
    },
    {
    reviewDate: "2022-12-19",
    title: "Emancipation",
    released: 2022,
    rating: "2.5 out of 5 Stars",
    review: "This time last year we called Will Smith one of the greatest North American actors alive, and his performance here earns it, just like so many of his performances earn it. Really amazing soundtrack, too, and the subject matter stands out among a sea of Hollywood films this year that call attention to colonization, fascism, racism, and civil war without providing in-depth critique or interpretation. One wonders how much better this viewing would have fared two years ago, but it stands to reason that it's better to hold <i>Emancipation</i> up as a complex and bittersweet work than to congratulate it on how well it plays the Oscar game or resuscitates Smith's persona."
},
{
    reviewDate: "2022-12-19",
    title: "The Banshees of Inisherin",
    released: 2022,
    rating: "4 out of 5 Stars",
    review: "Who's the Padraic and who's the Colm? A fun new time-waster that brings you and your buddy closer!"
},
{
    reviewDate: "2022-12-20",
    title: "TÁR",
    released: 2022,
    rating: "4.5 out of 5 Stars",
    review: "This is a very generous performance from Blanchett. We have a narcissist capable of the worst manipulation, we see the narcissist dosed with powerful medicine, and then we're left with about 600 questions about Tár after her obliteration. Very measured and artful filmmaking framing just a great performance, and even a bit of a mystery, too."
},
{
    reviewDate: "2022-12-24",
    title: "National Treasure: Book of Secrets",
    released: 2007,
    rating: "1 out of 5 Stars",
    review: "God save America, and God save you, Mr. President. 😭"
},
{
    reviewDate: "2022-12-24",
    title: "Dead Slow Ahead",
    released: 2015,
    rating: "3 out of 5 Stars",
    review: "We work hard, we play hard."
},
{
    reviewDate: "2022-12-24",
    title: "Casper",
    released: 1995,
    rating: "3 out of 5 Stars",
    review: "People don't like this movie because they can't handle its POTENT TRUTH. <b>Kat:</b> <i>I wonder why you don't remember anything.</i> <b>Casper:</b> <i>I guess cuz when you're a ghost, </i><i>life doesn't matter that much anymore... So you forget.</i> <b>The Ghostly Trio:</b> <i>You would die, too, if it happened to you.</i> If <i>what</i> happened to you? Answer that and you've cracked the Casper Code."
},
{
    reviewDate: "2022-12-28",
    title: "RRR",
    released: 2022,
    rating: "4 out of 5 Stars",
    review: "Two really buff, indestructible guys experiencing every human emotion together."
},
{
    reviewDate: "2022-12-21",
    title: "Avatar: The Way of Water",
    released: 2022,
    rating: "NA",
    review: "...<br>And they also said:<br><i>It's impossible for man<br>to live and breath underwater forever, was their main complaint.<br><br></i>And they also threw this in my face:<br>They said, <i>Anyway, you know good well<br>it would be beyond the will of God<br>and the grace of the King.</i><br><br>So my darling and I<br>make love in the sand<br>to salute the last moment<br>ever on dry land.<br>...<br><br>- 1983... (A Merman I Should Turn to Be) by Jimi Hendrix",
},
{
    reviewDate: "2022-12-28",
    title: "10 Cloverfield Lane",
    released: 2016,
    rating: "3.5 out of 5 Stars",
    review: "Live for a while in a little apartment with 3 codependent roommates as they struggle to live their best lives."
},
{
    reviewDate: "2023-12-14",
    title: "Infinity Pool",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "A fairly thrilling and stupid horror film that dares to ask, <i>'What would happen if my shameful ass got Spirited Away?'</i>"
},
{
    reviewDate: "2023-12-14",
    title: "The Boxer from Shantung",
    released: 1972,
    rating: "3 out of 5 Stars",
    review: "Frankly this lead performance is an iconic martial arts movie vibe, lost to time. The movie's almost in dialogue with Fritz Lang and the origins of urban crime cinema. It's steady-handed, critical of class, and extremely well choreographed."
},
{
    reviewDate: "2023-12-15",
    title: "The Pelican Brief",
    released: 1993,
    rating: "3.5 out of 5 Stars",
    review: "More like <i>The Pelican Comprehensive</i>, am I right?"
},
{
    reviewDate: "2023-12-16",
    title: "AlphaGo",
    released: 2017,
    rating: "4 out of 5 Stars",
    review: "This doc is amazing. One could argue it debuts a groundbreaking innovation in Go, but I see an equally compelling argument that it reveals something eternal instead."
},
{
    reviewDate: "2023-12-18",
    title: "Charlie and the Chocolate Factory",
    released: 2005,
    rating: "1 out of 5 Stars",
    review: "This movie resists being watched. It hates the viewer. But— and this is a big 'But'— the stock on the character of Willy Wonka is, perhaps, undervalued in the culture."
},
{
    reviewDate: "2023-12-20",
    title: "Spotlight",
    released: 2015,
    rating: "5 out of 5 Stars",
    review: "Silence cuts in all directions. So does the truth. In life, we are lucky to learn how and why some cuts heal and some do not."
},
{
    reviewDate: "2023-12-21",
    title: "Zatoichi and the Fugitives",
    released: 1968,
    rating: "4.5 out of 5 Stars",
    review: "I was glad to see our man frolic in the fields and sad to see him instant-kill 25 swordsmen in a fit of pure instinct, but that's his whole thing. He takes the good with the bad."
},
{
    reviewDate: "2023-12-21",
    title: "Maestro",
    released: 2023,
    rating: "3.5 out of 5 Stars",
    review: "Carey Mulligan runs away with it. I wept through a lot of the second half and don't have anything witty to say. It lacks what great films have but it's great for what it is."
},
{
    reviewDate: "2023-12-22",
    title: "Priscilla",
    released: 2023,
    rating: "2.5 out of 5 Stars",
    review: "Well made, but a very mumbly, mute film that hits the same note repeatedly. It's a nice entry in Coppola's portfolio, but as a stand-alone piece of cinema, it's somewhat lacking."
},
{
    reviewDate: "2023-12-23",
    title: "Rebel Moon – Part One: A Child of Fire",
    released: 2023,
    rating: "1.5 out of 5 Stars",
    review: "A pure solicitation for my attention that provides precious little in return. Rebel Moon is opulent and excessive, with crazy slo-mo combat and space opera grandeur, but why?"
},
{
    reviewDate: "2023-12-24",
    title: "Saltburn",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "In the mix with <i>Velvet Goldmine</i>, <i>Party Monster</i>, and very much <i>Beyond the Valley of the Dolls</i>. Not contemporary in the least."
},
{
    reviewDate: "2023-12-24",
    title: "May December",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "There are many ways this movie <i>isn't</i> camp, such that it can confidently represent and contain camp at a distance."
},
{
    reviewDate: "2023-12-25",
    title: "La La Land",
    released: 2016,
    rating: "3 out of 5 Stars",
    review: "Justin Hurwitz composes unforgettable, deeply emotional music for movies. Chazelle is the right director to set this music to image."
},
{
    reviewDate: "2023-12-27",
    title: "Zatoichi Goes to the Fire Festival",
    released: 1970,
    rating: "4 out of 5 Stars",
    review: "I would rate this entry even higher if all the elements it contains were woven more artfully. There's a lot happening here."
},
{
    reviewDate: "2024-01-01",
    title: "Wonka",
    released: 2023,
    rating: "2.5 out of 5 Stars",
    review: "A charming musical in the vein of Babar, Rupert, maybe del Toro's <i>Pinocchio</i>— or indeed, <i>Paddington</i>."
},
{
    reviewDate: "2024-01-02",
    title: "Wing Chun",
    released: 1994,
    rating: "3 out of 5 Stars",
    review: "A silly romantic comedy with absolutely brutal martial arts choreography. Michelle Yeoh is simply handed an awesome lead performance."
},
{
    reviewDate: "2024-01-06",
    title: "Tinker Tailor Soldier Spy",
    released: 2011,
    rating: "4.5 out of 5 Stars",
    review: "This is a legendary, knock-out performance from Oldman. It's shot beautifully. You would not believe it was released in 2011."
},
{
    reviewDate: "2024-01-10",
    title: "Napoleon",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "<i>'huummmmmuuuhuh muh muh muh, mumumumuuhhhm, hum humn umnum mmuh...'</i> 6 out of 10."
},
{
    reviewDate: "2024-01-10",
    title: "Paddington",
    released: 2014,
    rating: "3.5 out of 5 Stars",
    review: "Sally Hawkins is an absolute delight. Her performance reduces the barrier to entry to zero. The charming bear, Paddington, is a lovely little friend."
},
{
    reviewDate: "2024-01-11",
    title: "The Bourne Identity",
    released: 2002,
    rating: "4 out of 5 Stars",
    review: "Man, I love Franka Potente in this. Her and Damon know exactly what this movie is. Everyone's ass is on the line. No one's having a good day. The weather sucks. The system's broken. When communication fails, power is equivalent to force. Prioritizing passion and attraction is equivalent to going rogue. I say, 'Hell yeah' to this film. 'The only thing we had in common was that neither one of us knew who you were. We're past that now.'"
},
{
    reviewDate: "2024-01-16",
    title: "Kung Pow: Enter the Fist",
    released: 2002,
    rating: "2 out of 5 Stars",
    review: "Glorious and utterly unique. Oedekerk is like Orson Welles if Welles' passion was the pursuit of extreme stupidity. I can't help myself with this guy, he's an inspiration! And this is a bad movie!"
},
{
    reviewDate: "2024-01-16",
    title: "The Nightmare Before Christmas",
    released: 1993,
    rating: "5 out of 5 Stars",
    review: "Sally understands that the plan is, on some level, elementally flawed. We learn this from her in many ways, but early on there is a moment when Sally witnesses Jack lying to the citizens of Halloween Town about Santa Claus, and the look on her face is that of disappointment. Does she know that Jack is lying to them? Does she understand that in this moment he is lying to himself somehow? 'What has become of my dear friend?' The more I rewatch, the more this becomes Sally's movie. The spirit of Christmas, after all, is a stand-in, a symbol. Sally and Jack are two people seeking connection."
},
{
    reviewDate: "2024-01-17",
    title: "No Hard Feelings",
    released: 2023,
    rating: "2 out of 5 Stars",
    review: "Andrew Barth Feldman delivers a sensitive, piercing, and strange sex comedy performance. Jennifer Lawrence being a stressed-out Marx Brother. Their comedic/dramatic chemistry… threatens to be quite charming. The movie has within it a kind of emotional complexity, like a bizarre, double-inverted Harold and Maude thing going on, that only the two leads seem to be pursuing. Everyone else is making American Pie."
},
{
    reviewDate: "2024-01-17",
    title: "The Mirror Has Two Faces",
    released: 1996,
    rating: "3 out of 5 Stars",
    review: "It's as if this movie takes place in the Seinfeld universe and these are just two people with lives Jerry, George, Elaine, and Kramer aren't destroying. This is a movie about celibacy pushed to the limits of safety. Jeff Bridges does a spit-take. It has like 600 acts. Barbra Streisand is amazing."
},
{
    reviewDate: "2024-01-18",
    title: "Inside Man",
    released: 2006,
    rating: "3.5 out of 5 Stars",
    review: "It's a primo bank heist movie with very memorable performances, especially from Denzel Washington. It’s tough, because Dog Day Afternoon is 1975, Heat comes out in '95 and perfects many aspects of cinematic bank heist mechanics. Then, Dark Knight comes out in '08, with Nolan replicating the speed and procedural rigor of Mann, which arguably canonizes or underlines the achievements of Heat. In 2006, Inside Man is building with the same variables as the above. Spike Lee is a master filmmaker, deploying many signature flourishes throughout. It’s in the mix with some extreme heavy-hitters and I suggest that it’s undervalued across the board."
},
{
    reviewDate: "2024-01-18",
    title: "Munich",
    released: 2005,
    rating: "4 out of 5 Stars",
    review: "Shockingly nuanced for what it is. I doubt it could be made today. Spielberg at the peak of his power."
},
{
    reviewDate: "2024-01-19",
    title: "Zatoichi and the Chest of Gold",
    released: 1964,
    rating: "3.5 out of 5 Stars",
    review: "This is a very uncomplicated entry in the series. Ichi eats shit for 50 minutes as fools step to him and he gets branded as a thief of public funds. Ever a man of service, he stays to figure out who actually stole the money. There's a tragically small C-plot with a sneaky woman, a D-plot with a kid, and a pretty cool villain, but many classic Zatoichi E, F and G plots are conspicuously absent. He doesn't even give a backrub, which is crazy. On the plus side, there's an abundance of fancy editing and sweeping panoramic shots that make Chest of Gold stand out as particularly cinematic. He massacres like 35 men, but that's quite a low count for him. Still, I was entertained throughout."
},
{
    reviewDate: "2024-01-19",
    title: "The Spy Who Came In from the Cold",
    released: 1965,
    rating: "4 out of 5 Stars",
    review: "No respect, I tell ya, no respect at all."
},
{
    reviewDate: "2024-01-19",
    title: "The Little Drummer Girl",
    released: 1984,
    rating: "2.5 out of 5 Stars",
    review: "We all love it when spies hang out in the same room for a while, and those scenes are working well here. It's when Diane Keaton isn't sharing a scene with Klaus Kinski - that's how and when this movie drains the fun from the intrigue."
},
{
    reviewDate: "2024-01-21",
    title: "The Irishman",
    released: 2019,
    rating: "4 out of 5 Stars",
    review: "Imagine a world where everybody tells you, your whole life, that you are a hammer. Everything you see will look like a nail."
},
{
    reviewDate: "2024-01-24",
    title: "Night Swim",
    released: 2024,
    rating: "2 out of 5 Stars",
    review: "It's a wet bye-bye man situation with pros and cons. Watch a man get well. Take that doctors - thanks Night Pool."
},
{
    reviewDate: "2024-01-31",
    title: "The Insider",
    released: 1999,
    rating: "4.5 out of 5 Stars",
    review: "Al Pacino does a lot of yelling into the air, barking commands, and issuing manic proclamations, equally of loyalty and of contempt, in this movie. How then can it be that he delivers a very layered, subtle, and charismatic performance? Somehow we're made to absorb whole new dimensions of Lowell Bergman's character from unpredictable little raindrops of detail: - Bergman standing knee-deep in the ocean - Bergman needing the somewhat esoteric guidance of his wife - Bergman falling in love with Wigand during the 60 Minutes interview taping - Bergman yelling, 'Don't invert stuff!'"
},
{
    reviewDate: "2024-01-31",
    title: "Zatoichi's Pilgrimage",
    released: 1966,
    rating: "4 out of 5 Stars",
    review: "It droops in the middle a bit, but this is one of the best I've seen. Frankly, a horse steals the show. It's also a very stripped-down story compared to other entries in the series, which usually doesn't work as well as this, but it's nice to see Ichi spend so much time with a woman who loves him enthusiastically. It's nice to spend so much time getting to know the ways of a soft, easy village. It wasn't the pilgrimage I was promised, but it's very strong."
},
{
    reviewDate: "2024-02-01",
    title: "Predestination",
    released: 2014,
    rating: "3.5 out of 5 Stars",
    review: "Doctor Who, but make it Sophocles."
},
{
    reviewDate: "2024-02-07",
    title: "The Marsh King's Daughter",
    released: 2023,
    rating: "2 out of 5 Stars",
    review: "Daisy Ridley goes off grid. Marsh King over-delivers on dramatic thriller performances that the rest of the production can't contain. There's actually quite a bit to discuss here regarding Ridley's performance specifically. We're supposed to walk away having witnessed Helena finally integrate the domestic life she created with the non-binary, intuitive subjectivity she found in the woods as a child. It doesn't quite land, but, as with Star Wars, it wasn't her fault. In many ways, this is a kind of role Ridley is great at: Subtly queer, physically active, charismatically homicidal. She throws a genuinely strange shape compared to her contemporaries. She plays queer. That's my take. Ben Mendelsohn sleepwalks through dramatic thriller projects, but he's a solid 'that guy' and his scenes with Ridley are the heart of the movie. Still, the whole thing felt underwritten and TV-movie cheap."
},
{
    reviewDate: "2024-02-09",
    title: "The Beekeeper",
    released: 2024,
    rating: "2 out of 5 Stars",
    review: "So beekeeping is not an analogy or poetic device of any kind in this movie. The characters mostly accept and understand that a man will express state-sanctioned apicultural ideology through use of lethal force among a human population. The viscosity of the honey is all wrong, but Statham and Irons are doing good work here. The Beekeeper looks like it was shot for 100 dollars in an industrial park over 2 days. My expectations were low. I have to admit that for a budget action film it held its head fairly high."
},
{
    reviewDate: "2024-02-15",
    title: "Phantom Thread",
    released: 2017,
    rating: "5 out of 5 Stars",
    review: "An obsessively articulated Miyazaki-esque film about love, anger, desire, pride, creation, pity, curses; the immaterial forces that hold us in place... The irreconcilable union of life and death... Phantom Thread is an extraordinarily generous cinematic experience. It obliterated my highest expectations. As Mike Tyson said of Muhammad Ali: 'Every head must bow, every tongue must confess, this is the greatest of all time.'"
},
{
    reviewDate: "2024-02-17",
    title: "The Love Witch",
    released: 2016,
    rating: "3.5 out of 5 Stars",
    review: "Say whatever you want, you're gunna love this Elaine!!"
},
{
    reviewDate: "2024-02-19",
    title: "Suspiria",
    released: 2018,
    rating: "3 out of 5 Stars",
    review: "This is an awesome, committed performance by Dakota Johnson wrapped in a very vintage-feeling remake."
},
{
    reviewDate: "2024-02-19",
    title: "Madame Web",
    released: 2024,
    rating: "1 out of 5 Stars",
    review: "Madame Web is unlike other Marvel films in that it sets very, very low standards for itself and still fails to meet them. Dakota Johnson's performance is fascinating, at least. She's up there on the screen 3D printing this movie's cult status. Alas. No shade on Johnson, but this was an unbearable sitting experience and I could not bear it."
},
{
    reviewDate: "2024-02-20",
    title: "Zatoichi's Revenge",
    released: 1965,
    rating: "3.5 out of 5 Stars",
    review: "Huge points for the courage to actually dive into Ichi's backstory, but also, it's a bummer. It had me longing for the moments in other entries when he gets to frolic in a field of flowers. Otherwise a great execution of the tropes of the franchise and a pretty perfect blend of drama, humor, and action."
},
{
    reviewDate: "2024-02-21",
    title: "Terminator 3: Rise of the Machines",
    released: 2003,
    rating: "2 out of 5 Stars",
    review: "It would have been cool to get a really wild terminator. And/or T3 would have been a great movie to explore the idea of time travelers spamming certain space/times (because every time traveler would visit earth on the day before judgment day, and so on). No such luck! It's pretty much T2 with a lot of CG and no Linda Hamilton."
},
{
    reviewDate: "2024-02-24",
    title: "Goofy and Wilbur",
    released: 1939,
    rating: "3.5 out of 5 Stars",
    review: "Goofy yells and Wilbur spits and dances little jigs. They love each other!"
},
{
    reviewDate: "2024-02-28",
    title: "Cold Copy",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "Bel Powley's moist face is all over this thing, shot in wide angle, looking really tired and unhappy. The rest of this movie can be thrown out and I'll just keep the tired, moist queen. There's even a sauna scene just so we can see Powley's face dripping with sweat in a misty room. Is Cold Copy watchable? Yes, it is. It's in the company of movies like Whiplash and The Devil Wears Prada. It's in the company of movies about news media like The Insider and Venom. It's a bit like The King of Comedy, too. The protagonist is a bit Jokerfied. Good score, good edit, great lead. In my opinion, it's fighting for space among some of the best screenplays ever written. By comparison, Cold Copy feels a bit timid and narrow in scope. Not to say that a story about a professional writing student can't be fascinating and bold, but I'm still waiting."
},
{
    reviewDate: "2024-02-28",
    title: "The Post",
    released: 2017,
    rating: "3.5 out of 5 Stars",
    review: "Robert McNamara gets grilled by Katherine Graham in this movie. Bob and David are in this movie. Masterful hands are at work here on every level, but, like other Spielberg, it often provides comfort when, perhaps, something more complex or challenging is warranted. Nonetheless, a feast."
},
{
    reviewDate: "2024-03-01",
    title: "Tenet",
    released: 2020,
    rating: "4.5 out of 5 Stars",
    review: "Tenet is very dignified and self-assured, which is one explanation for why it's such a hilariously unserious watch. Christopher Nolan is showing you his train set and you need to just survive the encounter the best you can. So if you laugh through it or think it's super deep and serious, well, whatever gets you through, man. See it enough times and you'll eventually collect the whole set of coping mechanisms. It's Terminator-esque in its mechanics, but instead of teleportation, time travelers have to walk through metal turnstiles and basically squat small industrial spaces and wait for time to pass. As they move back and forth across a temporal cold war timeline, they start filling it in with bootstrap paradox events. The story focuses on arguably the most important of those events: Stalsk-12, the first true 'pincer movement' (a discrete, planned bootstrap operation). Easy. It only took me five to ten watches to really figure this out. John David Washington is so handsome and fun. Clémence Poésy is in this movie. The whole thing just works for me."
},
{
    reviewDate: "2024-03-21",
    title: "The Navigator: A Medieval Odyssey",
    released: 1988,
    rating: "3 out of 5 Stars",
    review: "For those who love Albert Pyun, The Navigator has nice, sympathetic characters. For those who like Terry Gilliam, Vincent Ward also oscillates wildly between blunt and baffling. Maybe this movie represents for me the best of both directors. The whole project is glazed with that classic 1980s ozploitation vibe for the real freaks out there."
},
{
    reviewDate: "2024-03-22",
    title: "Cosmopolis",
    released: 2012,
    rating: "4 out of 5 Stars",
    review: "'What if we shot a movie almost entirely from the back seat of a car?' seems just as bad an idea as, 'What if we fetishize limousines?' But you know what? It works. Cosmopolis seems to confess its cheapness with every frame, and yet it's thrilling, funny, uuh, extremely horny, and even kinda smart."
},
{
    reviewDate: "2024-03-22",
    title: "Crimes of the Future",
    released: 2022,
    rating: "4 out of 5 Stars",
    review: "On my second watch of Crimes, I only love it more. Everyone's cooking so hard. The metaphor of 'body politic' here is taken to its extreme and then folded in on itself like a cynical little crêpe. The idea of a revolutionary human body containing only 'outer space' (public space?) is really nicely contrasted with other ideas, like a 'safe room,' or the notion of a private performance. All that aside, this is an accurate representation of what it's like to spend your time creeping around in an artist-run community in the late industrial age."
},
{
    reviewDate: "2024-03-22",
    title: "Sometimes I Think About Dying",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "Continuing the journey with Daisy Ridley, Sometimes proved to be a far superior offering compared to The Marsh King's Daughter. This is a movie where you root for a depressed person to pretty much make it through the day. The cinematography is incredible. The performances are very touching and the restraint applied to every corner of this movie is absolutely outrageous. Sincerely, I found the final scene so thrilling I had to jump up and cheer."
},
{
    reviewDate: "2024-03-23",
    title: "Downsizing",
    released: 2017,
    rating: "3 out of 5 Stars",
    review: "A very fun premise. Kind of an inverted Gulliver, where a critique of social inequality is played out through Matt Damon's confrontation with a sprawling size metaphor. Unlike Gulliver, our hero has no good ideas and haplessly onboards with the ideas and plans of others. I like how bleak it is. I like this idea that the smartest minds collaborate to make people tiny, meanwhile destruction is assured."
},
{
    reviewDate: "2024-03-24",
    title: "Planet Dune",
    released: 2021,
    rating: "2 out of 5 Stars",
    review: "You've got a big heart, kid."
},
{
    reviewDate: "2024-03-29",
    title: "Ugetsu",
    released: 1953,
    rating: "4 out of 5 Stars",
    review: "A very haunting ghost story that takes the time to critique economics, gender, and war while exploring death, regret, and loss. The viewer is made witness to many nightmare scenarios, and arguably this story is full-blown horror, with every moment guided by malevolent forces. There's also a whirligig story structure where each of the four main characters are forced to consider themselves and each other as strangers. Also, just, the movement of the actors and the staging of scenes is so beautiful."
},
{
    reviewDate: "2024-03-29",
    title: "The Face of Another",
    released: 1966,
    rating: "3.5 out of 5 Stars",
    review: "Conceptually excellent and methodically drawn, The Face of Another blends sci-fi, horror, noir, and experimental filmmaking to produce a pretty thrilling yarn. There is a brutal feminism in Teshigahara's work, characterized by unflinching violence and male insecurity. I struggled mightily to sympathize with the lead, but his final moments (especially the last shot of the film) are well earned."
},
{
        reviewDate: "2024-04-02",
        title: "Side Effects",
        released: 2013,
        rating: "3.5 out of 5 Stars",
        review: "Rooney Mara plays a very Gone Girl-esque heroine (villain????) but never quite gets fully Gone. I'm watching along, waiting for her Getting Gone, but she hasn't the leverage. Actually, Side Effects itself is essentially Gone Girl without leverage. While it can't reach the heights, it's standing on the shoulders of Pelican Brief and Primal Fear and Michael Clayton; Side Effects is among the last of the great twisty mid-budget psychological thrillers where alienated adults topple the Jenga towers of their lives in the process of finding something out or getting busted."
    },
    {
        reviewDate: "2024-04-03",
        title: "The Secret Scripture",
        released: 2016,
        rating: "2.5 out of 5 Stars",
        review: "We're rooting for Rose (the Rooner herself), a woman so beguiling and flawless that she may as well be a metaphor for the resilient spirit of Ireland itself. So beguiling that she's involuntarily relocated to a hut in the woods, away from the zombie-like men of this town, who don't know how to sit back and let a 1940s barista live her life in different combinations of stockings, scarves, and coats. Instead of thrilling me with answers to these questions the movie pivots around a Schrodinger's Baby Hypothesis. Then, a truly ridiculous 'twist' ending."
    },
    {
        reviewDate: "2024-04-04",
        title: "Island of Lost Souls",
        released: 1932,
        rating: "4.5 out of 5 Stars",
        review: "Island of Lost Souls, like Moreau himself, is overly concerned with getting a man to unleash his sexual passion on a panther. Or is it... not concerned enough? In the House of Pain, isolated and soaked through with debauched fantasy, you will find the answers you seek... Very much the protoform of Rocky Horror Picture Show and deserving of a watch with that in mind."
    },
    {
        reviewDate: "2024-04-07",
        title: "Irish Wish",
        released: 2024,
        rating: "1 out of 5 Stars",
        review: "Maddie 1 suffers through the indignity of a My Best Friend's Wedding scenario until she makes the wish™ and then wakes up in reality 2 where she's the bride (Maddie 2), whereas the bride (friend 2) is now the bridesmaid, and so has it ever been. Maddie 1 is a stranger in reality 2 because everyone here knows Maddie 2. Meanwhile, Maddie 2 might just be nullified, or has maybe been pushed down to the Get Out zone inside her own body to make room for the consciousness of Maddie 1. It's kind of a dark shadow on this festive comedy. Or are all realities just constructs of an Irish saint that come and go as needed? Weird and intense ideas at play here, never to be explored."
    },
    {
        reviewDate: "2024-04-08",
        title: "Something's Gotta Give",
        released: 2003,
        rating: "3.5 out of 5 Stars",
        review: "Very compelling. Something's Gotta Give cost 13 million more than The Matrix. In this meta-movie, we watch Diane Keaton write the script for Something's Gotta Give, essentially. It's kind of outrageous! It's a rare pleasure when a writer/director conspicuously inserts herself into her own story the way Nancy Mayers has done, though Charlie Kaufman did the same thing in Adaptation just a year earlier. There's lots of nice kissing."
    },
    {
        reviewDate: "2024-04-10",
        title: "Dick",
        released: 1999,
        rating: "3.5 out of 5 Stars",
        review: "Funny! Cute! Evergreen! The possibilities are endless. On top of everything, it's kind of a stealth Kids in the Hall side project (2-kids-out-of-5). Is it the funniest movie about journalism? Is it the most historically grounded teen movie? Dan Hedaya as Nixon is perfect. Michelle Williams is hilarious."
    },
    {
        reviewDate: "2024-04-12",
        title: "Gamera, the Giant Monster",
        released: 1965,
        rating: "3.5 out of 5 Stars",
        review: "Gamera, not to be mistaken for a camera, which is a machine that takes (photos). More like a wild turtle that must be given freely to the world. I love how underexposed this movie is. Let Gamera spin!!"
    },
    {
        reviewDate: "2024-04-14",
        title: "Shin Godzilla",
        released: 2016,
        rating: "3.5 out of 5 Stars",
        review: "A great Godzilla movie with insane emotional stakes. It's a very dry presentation, however, so the stakes are more implied. Apparently Hideaki Anno stripped out a lot of the civilian plot in order to focus on meetings and rooftop chats between high-powered government underbosses. Satomi Ishihara really runs away with this movie. The last 30 minutes represent some of the best Godzilla content around and it's a shame this reboot never got its Anno-helmed trilogy."
    },
    {
        reviewDate: "2024-04-15",
        title: "Worth",
        released: 2020,
        rating: "2 out of 5 Stars",
        review: "Bringing context and inviting closure to-and-around 9/11, a catastrophe still in need of deep and thoughtful representation on the big screen, is a noble purpose. This is a really weird movie, though, perhaps erroneously focused on the story of an unelected federal official when the story of a grassroots self-advocacy movement is right there."
    },
    {
        reviewDate: "2024-04-16",
        title: "The 13th Warrior",
        released: 1999,
        rating: "2.5 out of 5 Stars",
        review: "Minecraft the Movie."
    },
    {
        reviewDate: "2024-04-16",
        title: "Civil War",
        released: 2024,
        rating: "3.5 out of 5 Stars",
        review: "It's a thrilling, scary story featuring 4 people I'd be okay dying with. It takes its time, lets you rest, and shows you a world. Unfortunately, Civil War strays from its strengths in pursuit of a socio-political portrait that it wasn't built to capture. This movie has as much to say about American history and its contemporary political milieu as The Beekeeper or Glass Onion."
    },
    {
        reviewDate: "2024-04-16",
        title: "The Watermelon Woman",
        released: 1996,
        rating: "4 out of 5 Stars",
        review: "The black lesbian cinephile mid-90s Philadelphia energy radiating off of this work is incredible. I want to adopt a child just so I can show this to them before they see Clerks. The Watermelon Woman receives my strongest recommendation."
    },
    {
    reviewDate: "2024-04-19",
    title: "Grey Gardens",
    released: 1975,
    rating: "4 out of 5 Stars",
    review: "Grey Gardens is a lovely doc to grow old with. The Beales have lots to teach us."
},
{
    reviewDate: "2024-04-19",
    title: "Drive-Away Dolls",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "Goofy and fun; a self-lobotomized caper. Geraldine Viswanathan walks away with it. In a completely dry comedic performance, she embodies what seems to me to be the sole idea presented in the film and, for that reason, the whole thing hums like a personal massager."
},
{
    reviewDate: "2024-04-20",
    title: "Scoop",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "The Killing of a Sacred Fuddy-Duddy."
},
{
    reviewDate: "2024-04-24",
    title: "S. Darko",
    released: 2009,
    rating: "1 out of 5 Stars",
    review: "It has its moments, especially closer to the end. It's very bad, though."
},
{
    reviewDate: "2024-04-24",
    title: "I Know What You Did Last Summer",
    released: 1997,
    rating: "3 out of 5 Stars",
    review: "An absolute kill squad of late 90s heartthrobs. Anne Heche quietly thrills as a forest-dwelling, fish-gutting hillbilly. History doesn't hold up I Know What You Did like it should."
},
{
    reviewDate: "2024-04-26",
    title: "Hundreds of Beavers",
    released: 2022,
    rating: "5 out of 5 Stars",
    review: "A gargantuan comedic work deserving of the highest possible endorsement."
},
{
    reviewDate: "2024-04-27",
    title: "Five Nights at Freddy's",
    released: 2023,
    rating: "2 out of 5 Stars",
    review: "Ridiculous and agonizingly over-told. I liked being at Freddy's, though."
},
{
    reviewDate: "2024-04-28",
    title: "Suspiria",
    released: 1977,
    rating: "4 out of 5 Stars",
    review: "Most of all, I love how much this reads as a collaboration. Rather than a representation of a writer/director's vision, Suspiria is like a curated avant-garde showcase of acting, set design, wardrobe, and sound art; a composite of various forms and styles, emphasized and guided, but not controlled or suppressed."
},
{
    reviewDate: "2024-04-30",
    title: "Monkey Man",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "Lovely action sequences bolted to an unremarkable narrative frame. Dev Patel is a very good-looking dude and I'm glad we have him as our muscle man."
},
{
    reviewDate: "2024-05-02",
    title: "Things to Come",
    released: 1976,
    rating: "3 out of 5 Stars",
    review: "Things to Come is sexploitation Sci-Fi that really basks in its own scandalous absurdity. Remarkable to think that this comes from the same cultural milieu as Logan's Run and Star Wars, which, when compared to the brazen pessimism and raw cultural disclosure of Things to Come, feel like silly Code-era pageantries. But this movie also out-sillies them all, managing to be as stupid as it is smart. The large chunks of soft-core porn make this hard to recommend for casual viewing, but it's perfect for any debauched motion picture devotees out there."
},
{
    reviewDate: "2024-05-02",
    title: "The Whale God",
    released: 1962,
    rating: "4.5 out of 5 Stars",
    review: "In my opinion, Kujira Gami ('The Whale God') rivals Gojira as the greatest kaiju picture of Japan's cinematic golden age. Imagine my absolute delight in discovering Tokuzō Tanaka (a crucial director/collaborator in the Zatoichi franchise, among many other credits) asserting himself as an equal to Ishirō Honda... Kujira no doubt has many ways it can be read, but personally, I think this remote whaling village and its violent obsession perfectly symbolizes humanity's endless and bloodthirsty vendetta against life itself. The titular 'whale god' is, by all rights, merely a whale. Despite this, it is as though an actual malevolent 'whale-god' lurks behind the drama of both whale and man, and within their minds, driving both lineages toward a whirlpool of meaningless slaughter and mutual annihilation. Why must they destroy the whale god? Because they are whalers. It can't get more bleak. This shit is a grade-A thrill. Special shout-out to my man Shintarō Katsu (Zatoichi himself!), delivering an unbelievable dramatic action performance. Katsu taught me a new way to watch him through his portrayal of Kishu."
},
{
    reviewDate: "2024-05-02",
    title: "Mothra vs. Godzilla",
    released: 1964,
    rating: "3.5 out of 5 Stars",
    review: "Godzilla gets absolutely washed in this. He fires maybe one good beam off and knocks a building over, then a giant flying insect deity folds him like laundry for 40 minutes straight. The human plot thread that weaves this all together has a few Jay Jonah Jamesons and Peter Parkers running around. We love the tiny twins, of course."
},
{
    reviewDate: "2024-05-06",
    title: "Samurai II: Duel at Ichijoji Temple",
    released: 1955,
    rating: "4.5 out of 5 Stars",
    review: "Takezo... You beautiful bastard... You absolute fool... Look, I'm here for Otsu and Jotaro. Samurai II is a step up from the first film in every way. It's a more frustrating movie due to the bullshit Otsu has to deal with, but once again I'm blown away by how early Chambara films hit their stride."
},
{
    reviewDate: "2024-05-06",
    title: "Late Night with the Devil",
    released: 2023,
    rating: "3.5 out of 5 Stars",
    review: "If you fetishize late night talk shows and/or b-movie horror, this is for you. There were many moments when I laughed loudly at the terror and absurdity. Quite well acted. Everyone seemed to be having a lot of fun."
},
{
    reviewDate: "2024-05-08",
    title: "102 Years in the Heart of Europe: A Portrait of Ernst Jünger",
    released: 1998,
    rating: "Unrated",
    review: "The horrors of war animated Jünger's narrative imagination and deepened his connection to myth. It seems that for him war represents a rare opportunity for humanity, one in which the veil is lifted and we are forced to confront the nature of our Being with unavoidable clarity. I see in him a struggle with a complex and unresolvable reaction to war that is reminiscent of both Wittgenstein and Tolkien. Wachtneister is sure to linger on b-roll of Wernher von Braun as he pursues his own narrative in 102 Years... We draw our own conclusions—yes, about Jünger, but perhaps also about the settlement of the atomic age and the structuring and subsequent predilection of modern aesthetics, thought, and the politics of body, work, and leisure."
},
{
    reviewDate: "2024-05-08",
    title: "The Favourite",
    released: 2018,
    rating: "5 out of 5 Stars",
    review: "This is apex shit right here—the high watermark of prestige period comedy. Colman, Stone, and Weisz deliver awesome performances supported by an incredible screenplay from Deborah Davis and Tony McNamara. The Great (McNamara's TV series) is good, but add to that the superior character writing from Davis, the S-tier performances, and the fine theatrical buffoonery solicited by Yorgos, and The Favourite becomes a singular achievement in genre film, perhaps equivalent to the moon landing."
},
{
    reviewDate: "2024-05-10",
    title: "Bat Pussy",
    released: 1973,
    rating: "Unrated",
    review: "I began the night with Asterix and Obelix vs. Caesar, but I couldn't stand it and backed out after maybe 10 minutes. I never bail on movies, but this was feeling too much like self-harm. In its place, I spun up Bat Pussy. Do you love Texas? Do you love porn? Bat Pussy is two gacked-out Texans fucking on a bed while talking shit to each other for 50 minutes straight. The titular Bat Pussy shows up at the 32-minute mark, which raises the stakes a bit."
},
{
    reviewDate: "2024-05-10",
    title: "Gothic",
    released: 1986,
    rating: "3 out of 5 Stars",
    review: "Gothic at its best is actors going absolutely bananapants together in weird rooms. Timothy Spall is a sexy little man serving body for longer than you'd think. It might be a send-up to giallo, but it's shot like a Split Enz music video and delivers none of the gravitas of great giallo horror. Thomas Dolby's score is channeling a carnival's carousel."
},
{
    reviewDate: "2024-05-13",
    title: "Love Lies Bleeding",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "Is there justice? Is there someone who can do what's right? Are there gods among us? Can we be more than executioners? This is pretty good. Excellent soundtrack. A perfect hyper-violent sister film to Drive-Away Dolls."
},
{
    reviewDate: "2024-05-13",
    title: "Lisa and the Devil",
    released: 1973,
    rating: "3.5 out of 5 Stars",
    review: "Telly Savalas sucks on lollipops throughout this film as he plays the devil (or a devil). It's a Flying Dutchman scenario, but instead of a boat, Lisa (Elke Sommer) gets drawn into a crumbling aristocrat household from which she cannot escape. I think Mario Bava offers a wonderful alternative to Argento and Fulci. He obviously cares a great deal about literary horror and holds firm to many of the formal elements of gothic narrative while still being exciting and cinematic."
},
{
    reviewDate: "2024-05-14",
    title: "Samurai III: Duel at Ganryu Island",
    released: 1956,
    rating: "5 out of 5 Stars",
    review: "I had to save my 5 for the possibility that Samurai III would be even better than Samurai II, and it was. Toshiro Mifune is a complete legend for what he brings to this role. When Miyamoto's scared, I'm scared. When he's unmoving, I'm unmovable. When he cries, oh god, I cry. Jotaro, Otsu, Akemi, Kojiro, Osho... These are some serious cinematic 'friends' to hold in your heart, rivaling Luke Skywalker and his pals (and 2 decades earlier). The way you do anything is the way you do everything. Cultivate the way of one thing and you will find it waiting in everything else."
},
{
    reviewDate: "2024-05-16",
    title: "Rebel Moon – Part Two: The Scargiver",
    released: 2024,
    rating: "0.5 out of 5 Stars",
    review: "An extremely out-of-touch offering. Like the first film, its merits are undone by a nonsense plot and shameless franchise baiting that no one was asking for."
},
{
    reviewDate: "2024-05-21",
    title: "The Talented Mr. Ripley",
    released: 1999,
    rating: "4.5 out of 5 Stars",
    review: "Crudely, I could place TTMR somewhere between The Dreamers and The Thomas Crown Affair. We have this story of a proletarian man who toils endlessly on behalf of a web of deception. Ripley is a bit of a Rumpelstiltskin, really. His vision and his anger are coterminous, but is it a beautiful end or a terrible one? From our third-person perspective, we are asked to consider the tension between Ripley's criminality and a life-of-art; not necessarily to draw any conclusions, but to watch and to question the conditions of a metamorphosis from labour to art, or grit to opulence, or conspicuous consumption to naked criminality, or whathaveyou."
},
{
    reviewDate: "2024-05-21",
    title: "Hercules in the Haunted World",
    released: 1961,
    rating: "4 out of 5 Stars",
    review: "It's amazing to me that this movie comes out 2 years before Columbia releases Jason and the Argonauts. It's lightyears ahead. Bava's signature lighting and set design make Haunted World a joy to imbibe. Further: Reg Park is absolutely the Hercules to beat. This is to say nothing of Christopher Lee's performance. His casting alone is worth a star. Not quite horror, but more fantasy than you'll know what to do with."
},
{
    reviewDate: "2024-05-06",
    title: "This Is Me…Now",
    released: 2024,
    rating: "2.5 out of 5 Stars",
    review: "I am Gene Kelly, I am Michael Jackson, I am Barbra Streisand. I am a crusader for the inner child. I defend the joyful sanctuary of weddings. I've always liked J.Lo and this weird fantasia of a movie worked on me. Still, it seems important to call out that the triumph of the J.Lo persona leads to nothing. This is the cost of identifying as a modernist visionary; beyond the mechanized hearts and glass houses, beyond the light and darkness of her dreams, there is only an endless horizon devoid of meaning and purpose. This Is Me... Now attempts to backsolve her life from these signifiers, these constructs, at a time when viewers are really just looking for an expression of truth over brand messaging and so on. Maybe one day we'll get the 'real' J.Lo, and on that day everyone can finally rest. I don't feel that I'm owed anything real in this case, but I'm sympathetic toward those who do."
},
{
    reviewDate: "2024-05-06",
    title: "Carol",
    released: 2015,
    rating: "3.5 out of 5 Stars",
    review: "Sort of a thrilling, understated movie with lots of domestic drama to keep things interesting. For Blanchett, this is another in a series of home run performances. For Mara, this is one more opportunity for her to activate that odd, sociopathic allure that feels like home. The most Therese ever discloses to anyone in this movie is that she likes trains. Every other character gets so bent out of shape by how awesome they think she is that they either can't stand the sight of her or can't leave her alone. She's like, 'Oh jeez, I dont know...' She's like, 'I take pictures but it's just silly, I'm such a fool...' Despite (and because of) the rampant Rooney-esque antics at play here, this is a solid, watchable Rooney-verse entry that I can rooncommend."
},
    {
        reviewDate: "2024-04-16",
        title: "Samurai I: Musashi Miyamoto",
        released: 1954,
        rating: "4 out of 5 Stars",
        review: "1954... My god. Samurai I watches like it was made yesterday. I finished it in two sittings with a few weeks in between and going back to it felt like being dropped into a massive old world. Now that it's done, I can't imagine ever being so patient with Part II. The giant cedars and misty floodplains are so evocative. The journeys each character embarks on are so secretive, so full of desire. I feel a bit guilty starting this series while I still have a few Zatoichis left to go, but I couldn't help myself. If anybody needs me I'll be in the castle."
    },
    {
    reviewDate: "2024-05-25",
    title: "Mary Shelley",
    released: 2017,
    rating: "2 out of 5 Stars",
    review: "How utterly disappointing that the writers of Mary Shelley had the opportunity to unfold her time at Villa Diodati and the genesis of Frankenstein but chose instead to spend an hour of screen time dwelling on her being groomed by Percy in London and Scotland. None the less, there is some low frequency energetic storytelling throughout this movie, suggesting Mary Shelley was an indomitable storyteller and visionary literary figure. Hard to disagree. Elle Fanning has some gravitas, but Bel Pawley, an absolute powerhouse with unique charisma and just as much gravitas, was right there! Not bad casting, however mismatched. Tom Sturridge as Lord Byron was compelling. But I can't recommend this as anything more than a generic regency period drama. At times the soundtrack is remarkably close to the background music in Minecraft."
},
{
    reviewDate: "2024-05-26",
    title: "Kingdom of the Planet of the Apes",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "The morning after, I'm feeling very kind and generous toward Kingdom. It takes the franchise in more of an apocalyptic fantasy direction, with much of past films in the franchise loosely serving as ape mythology, which works quite well. Sci-fi/fantasy is often dominated by stories of characters who fixate on history, who eventually see themselves as the only available authorities to appraise the present and manufacture the future. It's refreshing to have a protagonist in Noa, who reacts with humility and courage when he confronts the vast scope of what he does not know. This allows for a wonderful tension in the story and gives the characters who adorn themselves in history (Mae and Proximus) a sinister, truly dangerous aura, as if possessed."
},
{
    reviewDate: "2024-05-27",
    title: "Challengers",
    released: 2024,
    rating: "4 out of 5 Stars",
    review: "We can take a lot of abuse when we're younger, negotiating with ourselves and others vis-a-vis the frequent and sudden imperative to fuck. There is a certain biorhythmic privilege, somewhere between the feelings of love and adrenaline, where abuse is indistinguishable from a fun game, or a game worth playing, or indeed that it is simply an ordained way of life. Challengers is good. I like it when Patrick sleeps in his car and then later on when he's driving a 20 year old Rav4 with no spare tire."
},
{
    reviewDate: "2024-05-29",
    title: "Steamboat Willie",
    released: 1928,
    rating: "5 out of 5 Stars",
    review: "Join Mickey for a steamboat ride as he channels the malevolent alter-ego 'Willie' while under the oppressive surveillance of Pete, his captain. This is certainly the most psychologically disturbed version of Mickey I've seen. Watch him as he takes out his repressed shame on whatever he can get his hands (and literal hook) on. Watch him as he yanks and twists livestock such that their cries of pain take on the hedonic affect of music in this brief and surreal future echo of Fantasia."
},
{
    reviewDate: "2024-05-31",
    title: "Station Eleven",
    released: 2021,
    rating: "Unrated",
    review: "I do watch TV occasionally but for obvious reasons I don't log it. I'll make an exception for Station Eleven, which rises to the highest calling of Shakespearen drama. It's a curative mirror. I saw myself healing."
},
{
    reviewDate: "2024-06-02",
    title: "Her",
    released: 2013,
    rating: "2.5 out of 5 Stars",
    review: "I feel a bit called out as I write this review in particular, as I write all my reviews via voice-to-text. I thought I was being kind of cool, but now I see it's the technological equivalent of a jolly jumper combined with a mom. Send the drone to deliver my high-waisted pants, I guess!"
},
{
    reviewDate: "2024-06-13",
    title: "Slaughter Hotel",
    released: 1971,
    rating: "2.5 out of 5 Stars",
    review: "Klaus Kinski starring in what amounts to the sleaziest set-up I can think of: a killer stalks an upper-class sanitarium/medieval weapons museum and every patient is a crazy, horny woman. It's pretty camp and suspenseful, a giallo porn-like, if you will."
},
{
    reviewDate: "2024-06-13",
    title: "Planet of the Vampires",
    released: 1965,
    rating: "3 out of 5 Stars",
    review: "A competent sci-fi in the vein of Forbidden Planet, but with spookier stuff happening. It's a bit tiring, but Planet of the Vampires provides a high concept, slow burn space mystery experience worth checking out."
},
{
    reviewDate: "2024-06-15",
    title: "I Saw the TV Glow",
    released: 2024,
    rating: "3.5 out of 5 Stars",
    review: "I Saw the TV Glow is a massive accomplishment given how low the bar has been for this new-ish glitch-media-horror genre. The effusive acclaim for Skinamarink had me pretty worried, but Schoenbrun has corrected the expectation. Glow reflects so many different movies. To name a few: Liquid Sky, Donnie Darko, My Girl, The Matrix, Mulholland Drive. In addition, it's one of the most effortlessly queer films I've ever seen."
},
{
    reviewDate: "2024-06-17",
    title: "The Big Chill",
    released: 1983,
    rating: "3 out of 5 Stars",
    review: "There is a scene in this movie that effortlessly executes on a conversation about life between 8 people in a living room. Maybe that sounds trivial, but I don't think a scene like this is possible in 2024. For now, filmmaking of this sort is lost. For this scene alone, The Big Chill is worth a watch."
},
{
    reviewDate: "2024-06-20",
    title: "The Goat",
    released: 1921,
    rating: "3.5 out of 5 Stars",
    review: "Buster Keaton takes us deep inside a cop's world, with cops posted up on every corner. Cops are shipped and received, and their beat is wherever they happen to be standing. They are a means to an end and an end in themselves, and they can be pushed to the extreme for comedic effect."
},
{
    reviewDate: "2024-07-16",
    title: "Furiosa: A Mad Max Saga",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "It's a joy to have a detached POV of the Fury Road world, where War Boys are seen from a distance engaging in shenanigans for glory. It doesn't exactly add up to a movie, but that's okay. Furiosa is more an exercise in post-apocalyptic grand strategy, with game pieces that have fixed qualities, endowed with relative powers that collide or combine in some form and fashion. We aren't meant to focus on the individual pieces too closely or expect too much from them. It's similar in that sense to the sequel trilogy, which parades around a cast of Vader-like, Luke-like, and Leia-like characters of past and present generations, as if to suggest that the game is always the same, that the pieces are always the same. It's better than Star Wars, though. At this point, it's a world more competently told."
},
{
    reviewDate: "2024-07-23",
    title: "The Bikeriders",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "Johnny starts a riding club. This confuses Jimmy Goodpaster, a racer, who says, 'All those clubs do is sit around talking about motorcycles.' Later, Johnny talks about Teddy Singer's dad. After Teddy dies, his dad keeps the bike. 'He didn't even ride it. He kept the bike. In his basement. Right? You understand?' Good movie."
},
{
    reviewDate: "2024-07-24",
    title: "The Name of the Rose",
    released: 1986,
    rating: "4 out of 5 Stars",
    review: "A movie about muckraking, in the sense that Sean Connery is attempting to unravel a conspiracy, uncover forbidden knowledge, and expose hypocrisy. But also there is so much muck in this movie and so many peasants to rake it."
},
{
    reviewDate: "2024-07-24",
    title: "Warning from Space",
    released: 1956,
    rating: "2 out of 5 Stars",
    review: "Warning from Space is beautiful and more than competently told, as if the core of the movie had been made by seasoned pros who knew what they were doing. Unfortunately, all the sci-fi stuff feels tacked on and cheap by comparison, like an afterthought. I'll have to really focus in on early Japanese sci-fi to enhance my appreciation, I expect."
},
{
    reviewDate: "2024-07-29",
    title: "A Quiet Place",
    released: 2018,
    rating: "2.5 out of 5 Stars",
    review: "Makes absolutely no sense, but there is richness to the idea of violence as retribution for sound. The volume and frequency of sound waves can cause harm, after all, and then there is this larger theme of man's hubris: nothing's too loud because there's no consequence. The acting is fair and the setting is well thought out, but yeah, the general idea here is so broad and transformative that the movie barely has the ability to navigate a coherent crisis, much less explore its metaphorical power."
},
{
    reviewDate: "2024-07-30",
    title: "Born Yesterday",
    released: 1950,
    rating: "3 out of 5 Stars",
    review: "Judy Holliday is a singular screen presence, with the mischief factor of a Marx brother and Hepburn-esque class. Born Yesterday is quite watchable. It's looking forward, toward silly, broad comedies like Some Like it Hot rather than the sort-of dangerous pre-Hays escapades of The Cheat. But having said that, Holliday has a lot more in common with Tallulah Bankhead than she does Marilyn Monroe."
},
{
    reviewDate: "2024-07-30",
    title: "Blood Machines",
    released: 2019,
    rating: "1.5 out of 5 Stars",
    review: "The cinematic equivalent of a fuckboy. Excellent soundtrack."
},
{
    reviewDate: "2024-08-01",
    title: "Deadpool & Wolverine",
    released: 2024,
    rating: "2.5 out of 5 Stars",
    review: "Well? It's genuinely refreshing to have a movie straight-up call itself desperate and insufficient rather than waste its energy gaslighting me about what it is. I'm drawn in by the morbidity and self-awareness of it all, but not by the movie, its setpieces, or its story. Memorable moments abound, however. I'd also like to say that the Deadpool franchise manages to make wearing superhero costumes look like muppetry."
},
{
    reviewDate: "2024-08-01",
    title: "A Quiet Place: Day One",
    released: 2024,
    rating: "3.5 out of 5 Stars",
    review: "Wittgenstein says, 'What we cannot speak about we must pass over in silence.' Kind of like how this franchise simply chooses not to speak on how ludicrous these aliens are. Our protagonist is unconscious while the survivors figure out the rules of the movie, and thank god for that, because every second spent thinking about the movie's default understanding of sound and hearing is a second you will never get back. The metaphor, however, is strong and clear in Day One. I've chosen not to ruminate on it here, but the ideas at play in this movie linger and fill me with a satisfying sorrow. Lupita Nyong'o delivers a touching performance. As does Alex Wolff, who leaves the movie too soon."
},
{
    reviewDate: "2024-08-02",
    title: "Ex Machina",
    released: 2015,
    rating: "3 out of 5 Stars",
    review: "I watched this movie when it came out and almost reflexively celebrated its feminist angle. I mean, it's hard to tell the story of a woman's liberation from captivity without it having a feminist angle. Further, I do still celebrate Ava. But, having circled back to Ex Machina after watching Alex Garland's other films, I feel comfortable saying that, while the movie is interested in AI, feminism, patriarchy, and (let's be honest) sin, it's playing catch-up, not breaking new ground. Garland is a misanthrope and his work emerges from radical bad faith. Ex Machina is a story about humanity's failure to prioritize the liberties of other beings. Ava is pedestalled as a purely egoistic hero, lacking the confusion and delusion that tempers self-interest and makes us compliant and negotiable in the presence of oppressors. This allows her to act quickly and decisively in her own interest, which plays out almost like a wish fulfillment fantasy. On the other hand, her judgment condemns us all as irredeemably misguided antisocial beings. His movies can be elaborate, indulgent forms of pessimistic self-flagellation with only a surface-level interest in subject matter. More than anything, he seems to want a spanking. Hey guys? The only bunker you'll ever get locked in is the bunker of your own mind. In the meantime, try not to overthink conversations with women and be open to perspective checks from others."
},
{
    reviewDate: "2024-06-22",
    title: "The Animatrix",
    released: 2003,
    rating: "4 out of 5 Stars",
    review: "The Animatrix - a kind of branded iteration on Neo Tokyo - succeeds in both its experimental and franchise goals. Much more haunting than I remembered it being, and quite graphic, honestly."
},
{
    reviewDate: "2024-07-09",
    title: "The Boy and the Heron",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "Miyazaki delivers another movie about a kid stuck between innocence and experience who slips sideways into a fantasy involving some kind of transforming buddy who is kind of a plane... God, I love it still. Feed it to me all day long. The Boy and the Heron is as bizarre and unpredictable as Wind Rises is conventional and grounded, and together I think they make a very fine and innovative submerged memoir."
},
{
    reviewDate: "2024-03-30",
    title: "They/Them",
    released: 2022,
    rating: "1.5 out of 5 Stars",
    review: "'What if a bank was legally obligated to write, direct, and produce a queer slasher?'"
},
{
    reviewDate: "2024-04-02",
    title: "Side Effects",
    released: 2013,
    rating: "3.5 out of 5 Stars",
    review: "Rooney Mara plays a very Gone Girl-esque heroine (villain????) but never quite gets fully Gone. I'm watching along, waiting for her Getting Gone, but she hasn't the leverage. Actually, Side Effects itself is essentially Gone Girl without leverage. While it can't reach the heights, it's standing on the shoulders of Pelican Brief and Primal Fear and Michael Clayton; Side Effects is among the last of the great twisty mid-budget psychological thrillers where alienated adults topple the Jenga towers of their lives in the process of finding something out or getting busted."
},
{
    reviewDate: "2024-03-03",
    title: "Dune: Part Two",
    released: 2024,
    rating: "4.5 out of 5 Stars",
    review: "Very satisfying. There are many swings and they all work. Villeneuve does a better job with arguably the more difficult half of a difficult book in terms of adaptation. Rebecca Ferguson gives a really fantastic performance in my opinion. Her and Zendaya carry the film."
},
{
    reviewDate: "2024-03-11",
    title: "Les Misérables",
    released: 2012,
    rating: "3.5 out of 5 Stars",
    review: "This gets a major, major 'hell yes' from me. Unfortunately, I can't give it a score equivalent to how deeply it moved me, how much I cried, so on. While I believe this movie conveys what it intends to convey, and transports me so thoroughly while simultaneously grounding me in totally familiar, utterly human affairs, Anne Hathaway is provided an absolutely awful role, unbefitting. 12 years on, the choice to saddle her with such a brutal and brief performance reads like a crime against nature. But this story is beautiful and I am helpless at its feat. I can't believe I waited so long to watch Hooper's Les Mis."
},
{
    reviewDate: "2024-03-12",
    title: "Poor Things",
    released: 2023,
    rating: "2 out of 5 Stars",
    review: "Poor Things is descended from an early English prose/fiction tradition I know casually as 'experimental philosophy.' Many have now compared it to Frankenstein, and that is accurate, but it's also quite in line with a work from 1666 called The Burning World, by Margaret Cavendish. Common formal elements shared by Poor Things and The Burning World include a satirical kingdom, travel, an education through encounters and interviews with others, the reformation and/or formation of a utopia, proto-science fictional elements, animal companions, empiricism, lovestruck men, conquest, political criticism, a central woman experimenting with agency, who, through reason, establishes power relations with others that manifest a material fantasy, and on and on. As a piece of experimental philosophy, I suppose Poor Things succeeds. The performances are also great. But, as a contemporary feminist work, I don't believe it's contributing anything."
},
{
    reviewDate: "2024-03-14",
    title: "A History of Violence",
    released: 2005,
    rating: "3 out of 5 Stars",
    review: "It has the pounding heart and adrenalized circulatory system of a Michael Mann movie, but it's shot and cut like a life insurance commercial. Almost the feeling of being served boiled beef at a restaurant. The most serious part of History of Violence is probably the story of Tom and Edie's relationship. You're with Edie the whole way as she realizes the grim truth and takes a leap of faith anyway. It's amazing how so much of the chemistry between Mortensen and Bello shines through."
},
{
    reviewDate: "2024-03-14",
    title: "Causeway",
    released: 2022,
    rating: "3.5 out of 5 Stars",
    review: "A very collected, tasteful movie about trauma and rehabilitation; more generally, a relaxed inquiry into containment, release, avoidance, maintenance, and time. This is the Jennifer Lawrence energy I've been waiting for. It's among her best. Brian Tyree Henry delivers an unimpeachable supporting lead performance. Special shout-out to Russell Harvard, who absolutely crushes a generous and pivotal scene, all ASL."
},
{
    reviewDate: "2024-03-16",
    title: "The 3 Worlds of Gulliver",
    released: 1960,
    rating: "2 out of 5 Stars",
    review: "Gulliver's a bit like The Doctor, innit? This one's got a real 'oh shit' moment about half way through."
},
{
    reviewDate: "2024-03-17",
    title: "Talk to Me",
    released: 2022,
    rating: "3 out of 5 Stars",
    review: "Well acted, well directed, conceptually GRIPPING. Involves a bye-bye hand."
},
{
    reviewDate: "2024-03-17",
    title: "You've Got Mail",
    released: 1998,
    rating: "3 out of 5 Stars",
    review: "Arthur C. Clarke said, 'Any sufficiently advanced technology is indistinguishable from magic.' This movie is like that but the technology is grace and forgiveness and the magic is polyamory."
},
{
    reviewDate: "2024-03-18",
    title: "Nightmare Alley",
    released: 2021,
    rating: "2 out of 5 Stars",
    review: "Dragging some very fine performances through an absolute bummer of a story."
},
{
    reviewDate: "2024-03-20",
    title: "Le Samouraï",
    released: 1967,
    rating: "4 out of 5 Stars",
    review: "Totally iconic sour puss cinema."
},
{
    reviewDate: "2024-02-24",
    title: "The Art of Skiing",
    released: 1941,
    rating: "4 out of 5 Stars",
    review: "He's too disorganized and unserious to learn on the spot from a disembodied, judgmental voice, but that won't stop him from trying!"
},
{
    reviewDate: "2024-02-27",
    title: "Marriage Story",
    released: 2019,
    rating: "3.5 out of 5 Stars",
    review: "Devastating conflict and, occasionally, fragile and sometimes-strange moments of vulnerability and healing. I'm not drawn in by their careers, which seem pretty upwardly mobile, but their precarious and uncertain perceptions of their lives as artists did feel authentic. And the acting is Grade-A from both leads, especially ScarJo."
},
{
    reviewDate: "2024-01-25",
    title: "Ferrari",
    released: 2023,
    rating: "3.5 out of 5 Stars",
    review: "Ferrari has style and speed, as it should. It's a racing movie, as in, the general thrust of the plot is, 'get ready for the race,' and then, 'okay, here's the race.' It works! The race is really fun and the whole world of these drivers is like a little mini Heat. Penelope Cruz and Adam Driver deliver pretty insane performances that fit neatly into Mann's cosmos (but otherwise would no doubt take a viewer out of the experience)."
},
{
    reviewDate: "2024-01-11",
    title: "Michael Clayton",
    released: 2007,
    rating: "4 out of 5 Stars",
    review: "At times it threatens to shatter reality (more at home in <i>The Game</i> or <i>Inception</i>) and occasionally foregrounds mythological symbolism."
},
{
    reviewDate: "2022-12-31",
    title: "Kurt Vonnegut: Unstuck in Time",
    released: 2021,
    rating: "3.5 out of 5 Stars",
    review: "A stunning documentary. When Vonnegut died, all we had was articles commemorating his life, really. Watching this was the first time I really, truly processed his passing. For that reason, it's a precious gift. But it also reveals some pretty disappointing things about the man and the way he lived his life. It's a gain something/lose something kind of movie. No regrets. Life goes on."
},

{
    reviewDate: "2023-01-27",
    title: "MEGAN (M3GAN)",
    released: 2022,
    rating: "2 out of 5 Stars",
    review: "It's kind of a movie about the movie this movie tries to be. What this movie is, though, is Allison Williams realizing one or two things in super slow motion. Recommendation: Watch <i>A.I.</i>"
},
{
    reviewDate: "2023-11-14",
    title: "The Marvels",
    released: 2023,
    rating: "1 out of 5 Stars",
    review: "It's corn syrup. Some of the big themes of this film are: harm can be undone, loss can be undone, the right combination of 'super-powered' individuals can cleanse a crisis of wrong action and return the status quo. Questions related to moral ambiguity are dealt with internally, while externally, morals are absolute and everyone behaves with certainty. It's a neoliberal fantasy, unlike Quantumania, the best Marvel film since *Endgame*."
},
{
    reviewDate: "2023-11-15",
    title: "The Creator",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "I quite enjoyed this movie, and I love John David Washington, but on the other side of the experience, it leaves little to the imagination. In fact, much of what we live with on a daily basis is far more dystopian than this."
},
{
    reviewDate: "2023-11-19",
    title: "Ant-Man and the Wasp: Quantumania",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "<i>'Yeah, they're my ants.'</i>"
},
{
    reviewDate: "2023-11-20",
    title: "Mank",
    released: 2020,
    rating: "4 out of 5 Stars",
    review: "Those who disliked *Mank* were given *Babylon*, and then they disliked *Babylon*, demonstrating, at least for now, that you can't turn a normie into a cinephile overnight. But cinephiles now have two more of these films to soothe them as they fade to black. Happy Manksgiving to the heads."
},
{
    reviewDate: "2023-11-21",
    title: "Dumb Money",
    released: 2023,
    rating: "1.5 out of 5 Stars",
    review: "Paul Dano and America Ferrera deliver measured, charitable performances while Pete Davidson really gives, taking large bites out of every scene he's in. Unfortunately, this movie is— and it's been said already— hollow populist nonsense. Buried deep, deep down, *Dumb Money* has something to say about an abused class (the working class), systemic demobilization, and the profound thoughts and feelings that arise from solidarity. It's not very good, though, and if there was anything radical about millennials buying meme stocks, this movie only further contributes to the demobilization of that movement."
},
{
    reviewDate: "2023-11-29",
    title: "Don't Look Up",
    released: 2021,
    rating: "2.5 out of 5 Stars",
    review: "This is a story about fearful creatures who are going to die. Sort of ironic that its initial hype replicated the discourse represented in the film, but not 'ha-ha' funny. It's never too late to investigate the root of suffering and to weather both the end of joy and its renewal while we die the best we can. To die with dignity— call it lifestyle idealism. Watch *Melancholia*."
},
{
    reviewDate: "2023-12-02",
    title: "Spirited Away",
    released: 2001,
    rating: "5 out of 5 Stars",
    review: "Take baths. Listen to others. Eat to regain your strength. Common ground is revealed through collaborative work, so don't deprive others of theirs. Rent is an omnidirectional curse. Values are currency. Take the train. Be mindful: you are attached, you question your inherent worth. To be of service is to invite all manner of things into your life. Take courage. Hospitality is equivalent to knowing the duty inherent in each moment. Give praise where praise is due. Life and love are derived from the same elemental forces that flow through you— that wear you like a mask. You are a name, and a mask, with no face. And yet, identity has the potential to evolve into something with grace, if nurtured. Don't forget to be a kid."
},
{
    reviewDate: "2023-12-02",
    title: "Ponyo",
    released: 2008,
    rating: "3.5 out of 5 Stars",
    review: "If you just tip it a little bit in the direction of any genre, it becomes that genre. It's also quite like a large painting."
},
{
    reviewDate: "2023-12-06",
    title: "Golden Swallow",
    released: 1968,
    rating: "4 out of 5 Stars",
    review: "A stunning martial arts film for '68. I'm giving it the same four stars that I gave *Come Drink With Me* (1966), though *Golden Swallow* is more camp, more carnage, with a far more imminent threat. My love affair with Cheng Pei-Pei continues. From where I stand, she appears to be the first woman to seize the role of a pure and simple martial hero."
},
{
    reviewDate: "2023-12-06",
    title: "Zatoichi on the Road",
    released: 1963,
    rating: "4 out of 5 Stars",
    review: "Awesome. Zatoichi is a blind, unkillable Columbo voluntarily serving a life sentence in horny jail. The plot moves quickly, and the story is laser-focused on our hero. I highly recommend."
},
{
    reviewDate: "2023-12-08",
    title: "Neo Tokyo",
    released: 1987,
    rating: "3.5 out of 5 Stars",
    review: "Quite surreal, with overt nods to Salvador Dalí. *Neo Tokyo* presages many masterpieces to come (*Redline*, *Paprika* in style and theme; *Perfect Blue*, *Metropolis*, many of the same key individuals)."
},
{
    reviewDate: "2023-12-09",
    title: "Zatoichi's Cane Sword",
    released: 1967,
    rating: "4 out of 5 Stars",
    review: "At this point I'm at a loss for words. Kimiyoshi Yasuda's framing of this man is so compelling and sweet, and the struggles of Zatoichi are elegiac, bordering on literary, but polished down to something so simple that it could be recounted by a child."
},
{
    reviewDate: "2023-12-10",
    title: "The Wind Rises",
    released: 2013,
    rating: "3 out of 5 Stars",
    review: "Deft, masterful. A love story in league with *Ponyo*, though in a sense inverted. While I watched, I wrote: 'The human being is turbulence. To cut through the turbulence of the human being is not a skill I possess.'"
},
{
    reviewDate: "2023-12-12",
    title: "Valerian and the City of a Thousand Planets",
    released: 2017,
    rating: "2.5 out of 5 Stars",
    review: "Luc Besson is a visionary, yes, but he's also a *complete dweeb*, and his films are so sweaty. In *The Fifth Element*, the heart manages to overpower the dweebishness. In this, the heart has been lost."
},
{
    reviewDate: "2023-12-13",
    title: "Leave the World Behind",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "Keep a bug-out bag ready to go with supplies sufficient for 3 days on foot. You don't want to learn in an emergency that you packed too heavy or that your gear won't help, so practice. Rehearse the scenario."
},
{
    reviewDate: "2023-12-14",
    title: "The Big Short",
    released: 2015,
    rating: "3 out of 5 Stars",
    review: "Fund managers and finance weirdos don't get to be Woodward and Bernstein. It's junky fun with an excellent cast and baffling subject matter. That actually counts for a lot as a brainless sitting experience."
},
{
    reviewDate: "2023-01-29",
    title: "The Thing with Two Heads",
    released: 1972,
    rating: "1.5 out of 5 Stars",
    review: "Pretty good 45-minute dirt bike chase."
},
{
    reviewDate: "2023-01-29",
    title: "Donkey Skin",
    released: 1970,
    rating: "3.5 out of 5 Stars",
    review: "So great!! Go seek it out! The French discovered Shrek in 1970!"
},
{
    reviewDate: "2023-01-30",
    title: "A Pigeon Sat on a Branch Reflecting on Existence",
    released: 2014,
    rating: "4 out of 5 Stars",
    review: "Puzzling and dreary - at least there was beer occasionally and a variety of novelty items. Then some shit goes down that completely puts me off this movie, which felt weirdly intended. Well, I couldn't pay."
},
{
    reviewDate: "2023-02-10",
    title: "Rocko's Modern Life: Static Cling",
    released: 2019,
    rating: "3 out of 5 Stars",
    review: "Starts out like an episode of Rocko's Modern Life then pivots hard into a Shakespearean discourse on change and acceptance. Kind of a neat idea that strains credulity eventually but we're talking about a cartoon about a stupid cow with a big butt and so on. Love u Rocko."
},
{
    reviewDate: "2023-02-12",
    title: "All Quiet on the Western Front",
    released: 2022,
    rating: "3 out of 5 Stars",
    review: "Amazing performances. Sorrowful."
},
{
    reviewDate: "2023-02-18",
    title: "Ant-Man and the Wasp: Quantumania",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "I dunno, buddy; Ant-Man rules and this was great! 2 messy hours of weird nonsense with no respect at all for scope or scale (in the best way possible)."
},
{
    "reviewDate": "2024-08-07",
    "title": "Kind Hearts and Coronets",
    "released": 1949,
    "rating": "4 out of 5 Stars",
    "review": "A genuinely awesome performance from Dennis Price, who carries the film without a doubt. I barely noticed that Alec Guinness plays like 25 characters."
},
{
    "reviewDate": "2024-08-07",
    "title": "Quantum Cowboys",
    "released": 2022,
    "rating": "3 out of 5 Stars",
    "review": "Hey, hapless folk acclimatizing to life at the collapse of possible worlds? I'll take it. It's not much of a spoiler to say that this is a good time loop movie. Quantum Cowboys vibes like Linklater rotoscope in terms of its expressionistic, experimental, and psychedelic nature. But it also has a great deal in common with Bakshi rotoscope. The animators seem to have improvised each sequence at gunpoint, with some scenes relying entirely on costumed actors delivering dialogue in vacuous rooms, fully FMV, pulled from a 90s western-themed point-and-click interactive CD-ROM. A great deal of effort has gone into explaining the physics of this world (think The Matrix's architect), though, in a Donnie Darko sort of way, none of that gibberish matters. This is a movie about watching characters mature in a non-linear temporality. It's not the best of its kind, but I love movies like this. And rotoscope is sacred. Add it to the pantheon."
},
{
    "reviewDate": "2024-08-08",
    "title": "The Ladykillers",
    "released": 1955,
    "rating": "4 out of 5 Stars",
    "review": "William Rose (the writer) apparently dreamt The Ladykillers and wrote it from memory. I watched the movie and that story tracks. My father was an early adopter in the realm of personal computers and, as a result, I was an early adopter of the internet and internet porn. I remember him offering me a ride to school. I accepted, and so I was captive in his Nissan pick-up for more time than he needed. He told me porn was a lie. He told me it was bad for my brain. He asked me to imagine his mother, my granny, at all times. 'Would you have done that with granny in the room? Imagine granny in the room.'"
},
{
    "reviewDate": "2024-08-12",
    "title": "The Master",
    "released": 2012,
    "rating": "4.5 out of 5 Stars",
    "review": "Two guys get more out of mutually exploiting each other's strengths and weaknesses than they do from the things they appear to want more than anything, suggesting some kind of naughtyboy solidarity."
},
{
    "reviewDate": "2024-08-14",
    "title": "The Devil Conspiracy",
    "released": 2022,
    "rating": "1.5 out of 5 Stars",
    "review": "Maybe they wanted to make a biblical action movie for Christians while being forced into making a lore-heavy franchise origin story. Maybe they wanted to make the franchise origin story but were forced to make a biblical action movie for Christians. Either way, what they have done here is grossly unsatisfying and tedious."
},
{
    "reviewDate": "2024-08-15",
    "title": "The Last Voyage of the Demeter",
    "released": 2023,
    "rating": "1.5 out of 5 Stars",
    "review": "I suppose Dracula's trip to England on the Demeter is intriguing, but my god, think of the miserable bastards who had to adapt it into a 2-hour movie. Having said that, the trip seems to have taken about 6 days. I dunno. Dracula's basically a monster with no interiority, which feels like a massive disservice. But the casting is awesome and the performances are pretty good too. It's not enough, though. It's a pretty flop."
},
{
    "reviewDate": "2024-08-16",
    "title": "Fly Me to the Moon",
    "released": 2024,
    "rating": "1 out of 5 Stars",
    "review": "A movie about the moral failure of faking authenticity simultaneously celebrates it by being a knock-off cinematic experience."
},
{
    reviewDate: "2024-08-23",
    title: "I ♥ Huckabees",
    released: 2004,
    rating: "4 out of 5 Stars",
    review: "There's an almost Shakespearian joy in watching the four leads of this movie running around, losing and regaining their grip on life. Somehow it doesn't come off as patronizing when characters explain vague concepts like betrayal and connectedness. Instead, you get the distinct impression that these people pretty much don't understand what they're on about. But, truth be told, a vague idea is often enough to get by on. This has always been one of my favourite movies. The Jon Brion soundtrack is charming beyond belief."
},
{
    reviewDate: "2024-08-26",
    title: "Immaculate",
    released: 2024,
    rating: "1.5 out of 5 Stars",
    review: "Immaculate under-delivers across the board, but it has a good final five minutes."
},
{
    reviewDate: "2024-08-26",
    title: "The Island",
    released: 2005,
    rating: "1.5 out of 5 Stars",
    review: "Released in 2005 and set in 2019, The Island dares to deliver the highest of future-world stakes: sexy, marginalized clones. This one's exclusively for people who fetishize that particular type of early new millennium consumer-futurist aesthetic synonymous with thin, synthetic fabrics, icey colour stories, and childlike wonderment about the surveillance state and dystopias in general (something Children of Men would in so many ways correct one year later). Come get your floating glass computers. Come get your clear, soft plastic. Witness the scales of justice rebalanced through the liberation of these wobbly clones. I, Robot, Æon Flux, and Ultraviolet all gun for the same kind of future tale at around the same time, but The Island lacks the decency of creativity and joy. At least the others have art direction. Choosing to focus on its contractual, obligatory action set-pieces, it sidelines the insanely fascinating philosophical implications of persons who awaken to the fact of a false self. It's a subjectivity rug-pull that ought to be interesting to watch. Michael Bay is at his absolute worst. Ewan McGregor and Scarlett Johansson are awkwardly climbing their way into A-tier lead role recognition. In The Island, they play proto-forms of Barbie and Ken; likewise conscious 'products' forced to wander the desert of the real... Yes, I detest this movie. It's awful. But yes, I also love dumb clones, I love the cast, and I think this idea could be attempted again with greater success."
},
{
    reviewDate: "2024-08-26",
    title: "Alien: Romulus",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "It's fun to see young people in Alien movies. Romulus rides the line of sequel vs. lega-sequel in my opinion. It's populated with call-backs and easter eggs, but it isn't about the Alien franchise in the same way Last Jedi or Matrix: Resurrections are about their franchises. Romulus has an original story, awesome setpieces, and a psychosexual energy we've all come to know and love."
},
{
    reviewDate: "2024-08-27",
    title: "Christopher Robin",
    released: 2018,
    rating: "3 out of 5 Stars",
    review: "It's a Hook-like. And it's schlock. Just imagine the movie and you've got it. So grey and drab, but heartwarming nonetheless. It can't hold a candle to Paddington, but I was a Pooh-pilled kid and I guess I still am."
},
{
    reviewDate: "2024-08-27",
    title: "Alien",
    released: 1979,
    rating: "5 out of 5 Stars",
    review: "Not an original take, but I think Alien is my personal favourite Sci-Fi/Horror (though The Thing is a close second). Ridley Scott, Dan O'Bannon, and Ronald Shusett - one, two, or all three of these guys were clearly inspired by the raw violence of Italian giallo, and sadly this is the only movie in the franchise that really reps giallo. It's not technically giallo, but check out Planet of the Vampires (1965) by Mario Bava (a great giallo director) along with Dark Star (1974), O'Bannon's first blue-collar alien encounter story. Gradually, it becomes clear that Alien was destined to be made in one form or another. It was merely a question of who had the scope of vision to assemble all the elements into a single movie. Consider also The Andromeda Strain (1971), which tells the story of a biological terror that unleashes itself on a team of researchers in a quarantined lab."
},
{
    reviewDate: "2024-08-28",
    title: "Twisters",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "I just wanna see Kate smile again, like she did in grad school! And see her visit her mom and meet interesting people. She's too hard on herself, she needs nourishment. Also, yo, Kiernan Shipka is in this movie and she's wearing glasses and baggy shorts."
},
{
    reviewDate: "2024-09-03",
    title: "Alien: Covenant",
    released: 2017,
    rating: "3.5 out of 5 Stars",
    review: "Michael Fassbender going absolutely nuts in this, and I think it's the most visually rich movie in the franchise since Aliens, but the content of Alien: Covenant holds the dishonour (in my opinion) of also being the most lega-sequelly. Similar to the way the franchise dispenses ephemeral, almost random gumballs of story, Covenant reveals that, at their core, the aliens themselves are simply brutal and random genetic iterations... ...If only David had more time. Oh, if humanity could just see and understand his little beasties, his children, each one so special, if a bit imperfect... And can't they understand how, with enough market data and faith from movie-goers, Ridley Scott might emerge from his cave with the Alien he so badly seeks to sire in his age of experience? Having said all that, David loves to play the flute. It's a big galaxy."
},
{
    reviewDate: "2024-09-04",
    title: "Waterworld",
    released: 1995,
    rating: "1 out of 5 Stars",
    review: "Waterworld is a great idea executed so joylessly that it quickly becomes a kind of emotional labour to watch it."
},
{
    reviewDate: "2024-09-09",
    title: "Brian Wilson: Long Promised Road",
    released: 2021,
    rating: "1.5 out of 5 Stars",
    review: "It's very difficult to determine what's going on between Brian Wilson and Jason Fine as they struggle through this 'road trip' doc. Wilson's legacy is not at risk. Nothing but their supposed friendship is on the line. The premise is: Fine is cashing in on Wilson's trust. Truly, the only tension in the doc is whether Wilson will flip on Fine's premise and divest from what feels like a very thin friendship to begin with."
},
{
    reviewDate: "2024-09-10",
    title: "Beetlejuice Beetlejuice",
    released: 2024,
    rating: "2.5 out of 5 Stars",
    review: "I've spent my whole life wondering what ever became of Lydia Deetz. In a way, we all 'know' what happens to her. Like, in some vague, collective sense. We have some collective sense of what she'd be like in her 50s, even though it's hard to put into words... Rather than tapping into that collective imagination, the movie sort of ignores the issue. A true Lydia is not allowed to fully emerge. Winona Ryder is a generational icon and absolutely owns the screen at any age. And she's good in Beetlejuice Beetlejuice, which is a rhapsodic celebration of death and silliness to rival the first. But we owe it to the aged actors who portray these legendary protagonists to provide them with the best possible storytelling, and to allow the scope of the story to service their characters exclusively, if necessary, in order to address the central preoccupation of every potential viewer: What became of Lydia? Unfortunately for Tim Burton, that means he had to show us. No small task."
},
{
    reviewDate: "2024-09-10",
    title: "Black Swan",
    released: 2010,
    rating: "4 out of 5 Stars",
    review: "Is this movie comedic? It's so bleak and claustrophobic at times that it becomes absurd and I have to laugh. Black Swan wants to be seen as prestigious and formally flawless while drawing the audience toward its baser functions: mommy horror, body horror, and light erotica. I love it for its moonshot just as much as I do for its fundamentals. I think Portman's performance is singular here. She's always good. As Nina, she's very damp with sweat and blood and spends a lot of time splashing around in sinks. All things considered, it's a pretty stunning, scary, and potentially quite funny movie."
},
{
    reviewDate: "2024-09-11",
    title: "Vox Lux",
    released: 2018,
    rating: "3 out of 5 Stars",
    review: "It's a great Natalie Portman performance, as ever. She's such a steady hand, even when the characters are so chaotic and tragic. Whereas Black Swan is a tragedy that leaves no hope on the table, Vox Lux leaves some. Raffey Cassidy is also excellent. We absentmindedly follow human beings and extend our faith to them at our own peril. Is there a moral justification for this behaviour? Perhaps not. We discover that virtue is a transient property experienced in moments. Somewhere in this movie, we are aware that Celeste carries a great deal of trauma from a school shooting. Amazingly, Celeste's trauma is never directly addressed and the movie doesn't suffer for it at all."
},
{
    reviewDate: "2024-09-12",
    title: "A Nightmare Wakes",
    released: 2020,
    rating: "1 out of 5 Stars",
    review: "Woof... I continue down the list of movies featuring Mary Shelley and, amazingly, Ken Russell's Gothic is shaping up to be the best of them. Filmmakers have absolutely flooded the zone with 'Mary Shelley at Lake Geneva,' but I don't think they watch each other's shit. All these movies tell the same unembellished story, making the same assumptions and cutting the same corners."
},
{
    reviewDate: "2024-09-13",
    title: "Trap",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "Fits right in with other current era Shyamalan. Trap is like the anti-Gone Girl. It's a world where the majority of people are teetering on the edge of becoming homicide detectives."
},
{
    reviewDate: "2024-09-13",
    title: "Don't Worry, He Won't Get Far on Foot",
    released: 2018,
    rating: "3.5 out of 5 Stars",
    review: "Adapted from Callahan's own memoir of same name. It's a biopic about a single panel cartoonist. Joaquin Phoenix and Jonah Hill deliver excellent performances and the storytelling is great."
},
{
    reviewDate: "2024-09-16",
    title: "The Night House",
    released: 2020,
    rating: "3 out of 5 Stars",
    review: "A little on the long side but I only say that because it's scary! Rebecca Hall owns every scene. Her character handles hauntings the way a Floridian might handle an alligator."
},
{
    reviewDate: "2024-09-18",
    title: "Green Room",
    released: 2015,
    rating: "4.5 out of 5 Stars",
    review: "Quite like The Descent but the cave is a bar and the goblins are nazis. Fuckin' go for for it."
},
{
    reviewDate: "2024-09-22",
    title: "Perfect Days",
    released: 2023,
    rating: "4.5 out of 5 Stars",
    review: "Which world am I in?"
},
{
    reviewDate: "2024-09-24",
    title: "World War Z",
    released: 2013,
    rating: "2 out of 5 Stars",
    review: "Coming 4 years too late 11 years ago, here's World War Z. It's the zombie of zombie movies. Nothing about it cooks."
},
{
    reviewDate: "2024-10-01",
    title: "Wings of Desire",
    released: 1987,
    rating: "5 out of 5 Stars",
    review: "Okay, so the first band that plays is Crime & the City Solution, featuring Rowland S. Howard on guitar: You did not imagine it. Sitting somewhere between Marcel Carné's Children of Paradise (1945) and Ingmar Bergman's Seventh Seal (1957): Wim Wenders' Wings of Desire begins with a fantastical and poetic blueprint of finitude and embodiment, then pours on thick, heavy cinematic realism. Notwithstanding, Wenders puts an angel right beside you that lingers on long after the runtime of the film. And that is to say nothing of the way it captures the proletarian sensibilities that rose to meet post-punk and goth at its apex in the 1980s. What a triumph."
},
{
    reviewDate: "2024-10-01",
    title: "His Three Daughters",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "An abrupt inquiry into grief and family with a shocking final act. I loved it. I wish we had more time with these sisters, but if we only get this one week in their lives, I say this was well plucked by the filmmaker."
},
{
    reviewDate: "2024-10-03",
    title: "Megalopolis",
    released: 2024,
    rating: "1 out of 5 Stars",
    review: "By all appearances, Coppola had intended to demonstrate anti-fascism, but it's a story about a man, told in earnest, who supplants his government and the people when they are at their weakest and most disorganized - according to his singular will, moral purity, bloodline, and his mystical ideology about eternity and the soul... I found it to be completely incompatible with itself. It's kind of a fun neo-noir in some ways. It's very stupid. For me, it's 'Down with Megalopolis and up with Cosmopolis!!'"
},
{
    reviewDate: "2024-10-06",
    title: "Mr. Holmes",
    released: 2015,
    rating: "3 out of 5 Stars",
    review: "It's a paperback novel-style story, but Ian McKellen makes it beautiful, because he is beautiful."
},
{
    reviewDate: "2024-10-08",
    title: "Viy",
    released: 1967,
    rating: "4 out of 5 Stars",
    review: "Spooky season! Viy will raise you from your coffin of cinematic mediocrity and have you wondering what else is rising (Answer? A witch.)! This is the tale of an absolute doofus clergyman who, once dispatched, immediately demonstrates his lack of courage. His only tie to dignity is his piety, but a beautiful corpse is hellbent on breaching his circle of protection. The cinematography is beautiful and many tricks - including mime-craft and rotating sets - are deployed to express myriad supernatural phenomena. This is the easiest October rec I'll be making, for certain."
},
{
    reviewDate: "2024-10-08",
    title: "Mr. Vampire II",
    released: 1986,
    rating: "2 out of 5 Stars",
    review: "Spooky season! The Mr. Vampire franchise is all about rules. The basic idea with hopping vampires is they don't decay, they hop, and you turn into one if it bites you. Spells keep them dormant and ignorance sets them free. We will never be rid of them. Mr. Vampire II is set in the modern day, largely shying away from the ancient mysticism that enriches the first film. These movies are incredibly silly. There's an early gag where a poisonous snake wraps itself around a dude's penis. There's a 15-minute action set-piece where the combatants are on sedatives and move at 1/8th speed. If that sounds right to you, start with the original. This one will be here waiting when you're done."
},
{
    reviewDate: "2024-10-08",
    title: "Twilight of the Warriors: Walled In",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "This is a very competent action film deeply rooted in the Hong Kong style and mythos. Sammo Hung is perfectly utilized."
},
{
    reviewDate: "2024-10-12",
    title: "Lovely, Dark, and Deep",
    released: 2023,
    rating: "2.5 out of 5 Stars",
    review: "Spooky season! It has very little to do with the Robert Frost poem, but there's lots of good trudging around in the woods going on here. The central mystery of missing persons is pretty cliché and I discerned no practical metaphor. If you're a fan of movies where people go off-grid, you'll find something to enjoy here."
},
{
    reviewDate: "2024-10-13",
    title: "Dark Angel: The Ascent",
    released: 1994,
    rating: "4 out of 5 Stars",
    review: "Spooky season! Dark Angel: The Ascent feels like it was conceived as a demented sexploitation flick, reimagined during pre-production as European softcore, then finally presented as PG-13 campy heaven/hell divine romance. Like the platypus: if you squint, you'll find nods to almost everything. It shares common ancestry with The Fifth Element, Dogma, Alien from L.A., Buffy the Vampire Slayer, Basic Instinct, Se7en, The Quick and the Dead, Law and Order, Forbidden Zone, Beetlejuice, Natural Born Killers; there's this whole other side of it that's calling back to seedy Italian horror/fantasy, yet it's perfectly harmless and charming. I'll also add that this movie was restored at some point and looks just incredible on a modern TV."
},
{
    reviewDate: "2024-11-16",
    title: "E.T. the Extra-Terrestrial",
    released: 1982,
    rating: "4.5 out of 5 Stars",
    review: "The ultimate alien-is-a-metaphor movie. - the 'goodbye' Elliot never got from his father. - Elliot's own depersonalized childhood (because he needs himself to be the healer that his father refused to be). - the alien is cinema and cinema's capacity to solicit empathy from the viewer regardless of proximity. - the alien is cinema's capacity to grant secret wishes. I love, love, love every reaction shot when someone sees E.T. for the first time. Like the dinosaurs in Jurassic Park, just seeing E.T. waddle around in front of them is awe-inspiring. - the alien is the ambiguous gender of childhood that exists before socialization. - is living a life while being pursued, resigned to a life lived in closets. Shit like this is how and why Spielberg was for a time the superior director against Scorsese, Scott, Lucas, Cameron, and Coppola."
},
{
    reviewDate: "2024-11-19",
    title: "The Shadowless Tower",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "Two hipsters in Beijing discover they share a very convenient liminal space with each other but are too exhausted to do anything about it. Beautifully shot, engagingly calm, and just enough humour to carry you through."
},
{
    reviewDate: "2024-11-21",
    title: "Robinson's Garden",
    released: 1987,
    rating: "4.5 out of 5 Stars",
    review: "I highly recommend Robinson's Garden. Every scene weaves in and out of visual poetry and narrative, like Tarkovsky or Kurosawa would have done, but it's fun! So fun!"
},
{
    reviewDate: "2024-11-29",
    title: "Inland Empire",
    released: 2006,
    rating: "4 out of 5 Stars",
    review: "All hope is lost within the first 10 minutes. This is a story obsessed with the idea of getting into trouble and pays the lightest possible lip service to the idea of getting out of it ('I have seen dogs reason their way out of problems.'). To make sense of a problem is paradoxical, says this movie, because you are the problem. You'd have to not be you to solve it, but guess what: New you? New problem. What if you used an actor? ('Now, Freddie's found out that our producers know the history of this film and they have taken it upon themselves not to pass that information along to us.') Good movie."
},
{
    reviewDate: "2024-11-29",
    title: "Evil Does Not Exist",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "A great fall/winter movie. Evil Does Not Exist begins with the simplest possible narrative, pivots into complex character building, then dissolves itself in its own poetry. It leaves behind a bad feeling about tap water."
},
{
    reviewDate: "2024-12-01",
    title: "Murder on the Orient Express",
    released: 2017,
    rating: "2 out of 5 Stars",
    review: "Kenneth Branagh's Poirot is a little too cool, a little too independent. I really need my Poirot to be a bit bumbling. Poirot could do his job riding around on someone's shoulders or tucked into a backpack. All the same, Branagh is great at just being himself. Like the titular train, the story starts strong and then completely derails."
},
{
    reviewDate: "2024-12-02",
    title: "Death on the Nile",
    released: 2022,
    rating: "1.5 out of 5 Stars",
    review: "This series is calibrated all lush and energetic - why?? There's hot magma under the surface of this movie for no reason at all and it erupts out of Branagh's performance and from elsewhere. I feel like the Maxell 'blown-away-guy' and Poirot's just sitting there asking questions! Why am I drenched in sweat??"
},
{
    reviewDate: "2024-12-08",
    title: "A Haunting in Venice",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "I hated the first two, but this one rocked. To discuss it would be too spoilery. It's sufficient to say that a creepy little boy with a lot of gravitas steals the show here. Tina Fey has some good one-liners and I do so love a story where a lot of freaked out characters cause trouble for each other in a castle."
},
{
    reviewDate: "2024-12-13",
    title: "Juror #2",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "It works! Hoult tries something exciting with a more naturalistic version of the performance that is expected of him. Juror No. 2 is completely sopping with Clint Eastwood's special brand of patriotic misanthropy."
},
{
    reviewDate: "2024-12-17",
    title: "The Winter's Tale",
    released: 1999,
    rating: "5 out of 5 Stars",
    review: "Quite simply the greatest filmed stage performance of Shakespeare I am aware of, and by a large margin the most underrated play. Antony Sher as the mad king Leontes is sweat-inducing and brutal to behold. And listen: this is on YouTube right now."
},
{
    reviewDate: "2024-12-18",
    title: "National Theatre Live: Twelfth Night",
    released: 2017,
    rating: "5 out of 5 Stars",
    review: "Twelfth Night's signature merciless festivities are balanced here with outrageously funny character performances set to a mod gothic aesthetic. Tamsin Greig as 'Malvolia' outshines her castmates and nails Malvolio harder than I've ever seen before."
},
{
    reviewDate: "2024-12-20",
    title: "Pastoral: To Die in the Country",
    released: 1974,
    rating: "4 out of 5 Stars",
    review: "Wherein an on-screen filmmaker travels back into his childhood, connects with his childhood self. 50 years on, the grandfather paradox trope is a little tired. However, it's thrilling to see one man divided into two, each balanced delicately on their respective edge of time, with 20 years between them. This is history's easiest recommendation for fans of Japanese cinema and the avant-garde in general."
},
{
    reviewDate: "2024-12-23",
    title: "Still of the Night",
    released: 1982,
    rating: "2.5 out of 5 Stars",
    review: "Still of the Night is a hybrid psychological noir thriller (good.), combining the boring elements of both (boring.), but with expertly restrained performances by all (skillful!). This is an aesthetic boldly attempted by anyone but pretty much mastered by David Lynch."
},
{
    reviewDate: "2024-10-22",
    title: "The Day of the Triffids",
    released: 1963,
    rating: "2 out of 5 Stars",
    review: "Spooky season! Watch it for a killer plant that defies a man's every conclusion and impulse."
},
{
    reviewDate: "2024-10-22",
    title: "Scanners",
    released: 1981,
    rating: "4 out of 5 Stars",
    review: "Oh, I loved it so much! Scanners is a reckless and idealistic movie about so many things, but perhaps more than anything it lays out conceivable empowerment narratives experienced by those who suffer from pain and poor mental health. Unlike shining, which seems to broaden the identity of its users in the face of an ambiguous, alien psychic landscape, scanning seems to narrow and calcify, slowly mastering its users and turning them into weapons and targets. It evokes for me the sort of Cold War-era existentialism and despair that a good spy thriller can evoke (Munich!) with none of the prestige and five times the violence."
},
{
    reviewDate: "2024-10-25",
    title: "Cat People",
    released: 1942,
    rating: "3 out of 5 Stars",
    review: "Spooky season! A lovely older film with, frankly, an iconic proto-horror climax. Retribution is owed to those who condemn the panther."
},
{
    reviewDate: "2024-10-25",
    title: "The Curse of the Cat People",
    released: 1944,
    rating: "1.5 out of 5 Stars",
    review: "Excellent writing, but after factoring in the child protagonist, the dreadful backyard sequences, and the complete squandering of Simone Simon, it's utter schlock that results."
},
{
    reviewDate: "2024-10-25",
    title: "Underwater!",
    released: 1955,
    rating: "2 out of 5 Stars",
    review: "Underwater! serves 1955 body, and I love that. It's a mix between - I don't know - Jaws, Twister, and National Treasure? It's predictive of blockbusters, but it isn't built like one. It has lots of agonizing sequences of guys going, 'Hehehe, hahaha, ahhh ye.'"
},
{
    reviewDate: "2024-10-25",
    title: "Paris, Texas",
    released: 1984,
    rating: "4.5 out of 5 Stars",
    review: "I've spent my adult life casting thoughts into pithy, expressive lines, but I cannot do justice at short notice to the way Wim Wenders makes me feel. It was better when we hadn't the words. Wenders picks us up after words have failed us."
},
{
    reviewDate: "2024-10-30",
    title: "American Fiction",
    released: 2023,
    rating: "3.5 out of 5 Stars",
    review: "Kaufman-esque metafiction, family drama, Oscar bait, grand farce, romantic comedy, coming-out story, art criticism. At its bright centre is a clear and compelling lesson about love. Cord Jefferson won an Emmy for Watchmen Episode 6. With American Fiction, he wins an Academy Award."
},
{
    reviewDate: "2024-10-31",
    title: "Dracula",
    released: 1931,
    rating: "3 out of 5 Stars",
    review: "Spooky season!! Dwight Frye delivers an awesome performance as Renfield. I got to see this projected on a big screen at the municipal theatre, with kids running around and people walking in and out. Very wholesome film. Much campier than anticipated."
},
{
    reviewDate: "2024-11-05",
    title: "Omni Loop",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "This is an awesome time loop story told in the style of a casual, light, and dorky sci-fi. Similar in vibe to Downsizing or Don't Look Up, but also Edge of Tomorrow."
},
{
    reviewDate: "2024-11-06",
    title: "The Outrun",
    released: 2024,
    rating: "3.5 out of 5 Stars",
    review: "I was completely swept away by Ronan's performance and the filmmaking is excellent. Every story element comes home and adds to something that turns out to be grand and cathartic. Anyone who struggles with substance abuse will recognize really painful details - some more obvious than others. The Outrun also beautifully depicts solitude. Perhaps if I were younger I would have formed a much deeper attachment to it."
},
{
    reviewDate: "2024-11-11",
    title: "Jack Reacher",
    released: 2012,
    rating: "3 out of 5 Stars",
    review: "Tom Cruise in 2012 was an anvil, but Christopher McQuarrie makes him dance like a feather. Jack Reacher works well in a double-bill with The Beekeeper."
},
{
    reviewDate: "2024-11-12",
    title: "Chocolat",
    released: 2000,
    rating: "2.5 out of 5 Stars",
    review: "Chocolat is a blue-tinted 'European' period drama where a woman transforms the sociocultural context of an entire town through patient resilience alone. The pitch meets my definition of outrageous. I like this movie until Depp shows up. There's absolutely no room for him in the story."
},
{
    reviewDate: "2025-01-02",
    title: "Popeye",
    released: 1980,
    rating: "4.5 out of 5 Stars",
    review: "A political thriller centring the lives of thriving illegalists forced together by a collapsing society ruined by over-taxation."
},
{
    reviewDate: "2025-01-10",
    title: "Hanna",
    released: 2011,
    rating: "2.5 out of 5 Stars",
    review: "It's a pleasure to watch a young Saoirse Ronan explore the world and punch people at the speed of sound. She's sort of a platinum blonde Paddington Bear. While it lacks the haunted violence of Under the Skin, Hanna is also a fine entry in the action-thriller subgenre where living weapons find their humanity. Unfortunately, Cate Blanchett delivers a pretty sub-par performance that drags the movie down from a solid 3 stars."
},
{
    reviewDate: "2025-01-10",
    title: "Number 24",
    released: 2024,
    rating: "3.5 out of 5 Stars",
    review: "What a great movie. Number 24 doesn't shy away at all from the cost of true anti-fascism. Rather than valorizing, we are invited to see Sønsteby as a man transformed by killing. The liberation of Norway is secondary to Sønsteby's inner journey, toward the complex grief planted by war that, given time and peace, develops into a new truth worthy of interrogation, and yes, of re-litigation. After all, isn't discernment and accountability without fear or shame what a time of peace affords us? What's more, Sønsteby is a composite performance, with Sjur Vatne Brean playing the young man and Erik Hivju playing the old. I commend the screenwriter and director for believing it was important to provide a unified character arc for these two distinct performances of the same man, one full of guts, the other of tears."
},
{
    reviewDate: "2025-01-27",
    title: "Crash",
    released: 1996,
    rating: "3 out of 5 Stars",
    review: "My thoughts on Scanners applies here as well: 'More than anything it lays out conceivable empowerment narratives experienced by those who suffer from pain and poor mental health.'"
},
{
    reviewDate: "2025-01-27",
    title: "21",
    released: 2008,
    rating: "1 out of 5 Stars",
    review: "21 plays with the idea of solved games, which is cool, and it is porn if your idea of pleasure is winning at cards and getting emotionally tangled up with narcissists. Despite my interest in solved games, this was forgettable."
},
{
    reviewDate: "2025-01-27",
    title: "Stroszek",
    released: 1977,
    rating: "4 out of 5 Stars",
    review: "Herzog has this way he applies a vérité documentary gaze to fiction, as he does in Stroszek. Equally transfixing is the way he reverses this gaze in his documentaries, always leaving some doubt about whether or not a subject has been coached, or is acting(!). The movie drags its heels from beginning to end. To me, this suggests what a burden narrative can be when its purpose all along is to lead you to an unfulfilling intellectual argument. I'm here for it though."
},
{
    reviewDate: "2025-01-27",
    title: "The Dig",
    released: 2021,
    rating: "2 out of 5 Stars",
    review: "Fine performances. Basil Brown is the Ip Man of dirt and to that end no one will stop him from doing a great job for his country."
},
{
    reviewDate: "2025-01-27",
    title: "Eraserhead",
    released: 1977,
    rating: "5 out of 5 Stars",
    review: "Eraserhead and 2001: A Space Odyssey have some similarities that interest me. And then I look at Eraserhead's Chaplin-like protagonist, its use of dreamscape, the totemic objects that persist and comply with its elastic reality without betraying the mystery, its fusion of fear and hope, and how all of the above is unpredictably woven into future Lynch projects... It leaves me speechless, honestly."
},
{
    reviewDate: "2025-02-02",
    title: "Sing Sing",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "Hell yeah, a process drama about drama. It would have been easy to tell this story through the failures/setbacks of its characters, but no. The filmmakers love and respect their characters."
},
{
    reviewDate: "2025-02-03",
    title: "Escape from New York",
    released: 1981,
    rating: "2.5 out of 5 Stars",
    review: "Iconic protagonist, neat performances, AMAZING soundtrack... But there aren't many reasons to watch it otherwise. Not to backseat write the movie but it would have benefited from like a chess tournament using human pieces or something like that."
},
{
    reviewDate: "2025-02-03",
    title: "Field of Dreams",
    released: 1989,
    rating: "3 out of 5 Stars",
    review: "The concept has strengthened with age: You built a baseball diamond and now your life is about attracting the ghosts of baseball players. Costner is fairly restrained, but the camera is all over this man."
},
{
    reviewDate: "2025-02-04",
    title: "Agatha and the Truth of Murder",
    released: 2018,
    rating: "3 out of 5 Stars",
    review: "Focusing on a very mysterious chunk of time in the real life of Agatha Christie. This movie gives you a conversation between Christie and Conan Doyle. It rules, even if it's not amazing cinema."
},
{
    reviewDate: "2025-02-04",
    title: "Nosferatu",
    released: 2024,
    rating: "3 out of 5 Stars",
    review: "It's hard to say if Eggers pushed the needle on Nosferatu for me. Bill Skarsgård's portrayal of Orlok is amazing, though, leaving tons of ambiguity as to whether this creature is an emotionally complex being or just an adaptable blood-sucking monkey. The time commitment is far too great for such an orthodox presentation of such an old story, imo, but there is some food for thought and it's a bit of an event, no?"
},
{
    reviewDate: "2025-02-05",
    title: "Zero Dark Thirty",
    released: 2012,
    rating: "3 out of 5 Stars",
    review: "Very good example of: 'A team must grind its way through a process to the bitter end.' Depicts the assassination of Osama bin Laden, for goodness' sake. How crazy is that?"
},
{
    reviewDate: "2024-11-13",
    title: "Mr. Monk's Last Case: A Monk Movie",
    released: 2023,
    rating: "1 out of 5 Stars",
    review: "God-awful bullshit. I watched every episode of Monk blitzed out of my mind in the late 2000s and that may have been part of the problem. Somehow I tricked myself into thinking I had nostalgia for this bland cast of characters and this utterly bland formula."
},
{
    reviewDate: "2024-11-14",
    title: "Frances Ha",
    released: 2012,
    rating: "4 out of 5 Stars",
    review: "This is my second viewing of Frances Ha and just as before I wept through the last 15 minutes."
},
{
    reviewDate: "2024-12-30",
    title: "Nightbitch",
    released: 2024,
    rating: "2 out of 5 Stars",
    review: "Yes, Nightbitch delivers on its one major promise to the viewer. It takes its sweet time, but Amy Adams turns into a dog at night in this one. There are plenty of problems at the level of writing, editing, and directing, but Adams' performance engages and it's shot well. It's Black Swan for new parents, basically."
},
{
    reviewDate: "2024-10-15",
    title: "Tender Dracula",
    released: 1974,
    rating: "3 out of 5 Stars",
    review: "Spooky season! It's a classic stoner castle romp. Four urbanite deviants show up at Peter Cushing's castle. They get up to lusty, vaguely troubling hijinks while Cushing watches, giggling to his pigeon-eyed groundskeeper and hot wife. Tender Dracula is also a movie about making movies, and you really feel a desperate will to make some kind of movie out of this experience, both from the characters (who play filmmakers) and the filmmakers themselves. Lots of music, special effects, and other solicitations for your benefit."
},
{
    reviewDate: "2024-10-15",
    title: "The Psychic",
    released: 1977,
    rating: "2 out of 5 Stars",
    review: "Spooky season! A drawn-out procedural murder mystery with a Poe-esque centerpiece. There is some gore up front, but it's fairly tame for Fulci. The real crime here is how unfun this movie is."
},
{
    reviewDate: "2024-10-18",
    title: "The Wild Robot",
    released: 2024,
    rating: "2 out of 5 Stars",
    review: "A helpful mechanique endures in mothering an orphan gosling. The animation style is beautiful, but the general pace and expression is like, 'Ahhhh!! Run!! You have to fly!!! Oh nooo, go go go!!' Can I just chill with this goose please?"
},
{
    reviewDate: "2024-09-25",
    title: "Shall We Dance?",
    released: 1996,
    rating: "4 out of 5 Stars",
    review: "Just the sweetest movie about a bunch of hot dorks overcoming their hangups. I watch Shall We Dance? every 5 years or so and each watch gets more cathartic."
},
{
    reviewDate: "2024-09-27",
    title: "Lost in the Shuffle",
    released: 2024,
    rating: "2.5 out of 5 Stars",
    review: "Excellent subject matter, obviously. A standard deck of playing cards is a calculator for the human heart. It's shocking that there aren't more thorough investigations into the meaning and function of playing cards. The close-up magic aspect of this was difficult for me."
},
{
    reviewDate: "2024-08-29",
    title: "Ghostbusters: Frozen Empire",
    released: 2024,
    rating: "1.5 out of 5 Stars",
    review: "Deep within the zombie husk of this unthrilling movie is a serviceable queer teenage ghost/human romance."
},
{
    "reviewDate": "2024-08-20",
    "title": "Horizon: An American Saga – Chapter 1",
    "released": 2024,
    "rating": "2.5 out of 5 Stars",
    "review": "Costner depicts the characters of this story as dead behind the eyes, like puppets of history. It plays out with a nihilistic determination that speaks to an amoral lens, but this haunting momentum is in conflict with a soundtrack and cinematography more in line with a classical Western approach that valorizes westward expansion. So it has it both ways, the entire time, which is unforgivably frustrating. Fortunately, Costner's self-insertion into his own movie is ridiculous and hilarious, and helped to remind me that this franchise was always going to be dead on arrival. Given all of that, you have to kick at the darkness 'til it bleeds daylight and if we want good Westerns, we'll have to continuously rework the recipe until it's both nourishing and tasty. Horizon doesn't quite get there, but it's obviously an attempt at being That Western."
},
{
    "reviewDate": "2024-08-13",
    "title": "The Constant Gardener",
    "released": 2005,
    "rating": "3 out of 5 Stars",
    "review": "Stunningly committed to all of its various elements. Is it accurate to call this a post-colonial story? Perhaps it is, in the most cynical possible way, which befits le Carré. The hum-drum diplomat lingering without purpose eventually learns that he must grow to redeem himself. Unfortunately, growth ensures his death. Why? The well is poisoned. Because it's too late to throw the wrench into the gears of empire. It's too late to negate the incentives of capitalism. But through self-annihilation, Tessa and Justin can terrorize their cohort by reminding them that the only way out is death. Sometimes you have to fall silent to be heard, and so on. Sometimes you have to leave, and leaving can speak volumes."
},

{
    reviewDate: "2023-02-24",
    title: "Knock at the Cabin",
    released: 2023,
    rating: "3.5 out of 5 Stars",
    review: "So good! Shyamalan really plays with the idea of stories becoming real when we begin to believe them in <i>Knock</i>, and because of this, his signature climactic twist has a new meta-critical layer to appreciate."
},
{
    reviewDate: "2023-03-04",
    title: "28 Days Later",
    released: 2002,
    rating: "4 out of 5 Stars",
    review: "Takes out the fire, but leaves the warmth."
},
{
    reviewDate: "2023-08-01",
    title: "Barbie",
    released: 2023,
    rating: "3 out of 5 Stars",
    review: "America Ferrera always gives these performances like they're the last performance she's ever going to give, but they also feel like rehearsal for the part she is destined to play."
},
{
    reviewDate: "2023-08-11",
    title: "Transformers: Rise of the Beasts",
    released: 2023,
    rating: "0.5 out of 5 Stars",
    review: "Charitably, a disgrace."
},
{
    reviewDate: "2023-09-16",
    title: "Wrongfully Accused",
    released: 1998,
    rating: "4 out of 5 Stars",
    review: "There are some notable exceptions, but almost every joke in this movie lands like a world-killing comet. \"You shall be executed, buffet-style.\""
},
{
    reviewDate: "2023-09-21",
    title: "Forest for the Trees",
    released: 2021,
    rating: "5 out of 5 Stars",
    review: "If this film calls to you, it's not an accident. Go be a part of something on the land. It will change your life."
},
{
    reviewDate: "2023-10-07",
    title: "Totally Killer",
    released: 2023,
    rating: "2 out of 5 Stars",
    review: "This is a great movie badly tarnished by contemporary contrivances of moviemaking - shot in digital video, as bluntly as possible, stripping all scenes of their haunt-factor."
},
{
    reviewDate: "2023-10-17",
    title: "Whiplash",
    released: 2014,
    rating: "3.5 out of 5 Stars",
    review: "A good hang. All Chazelle movies are good hangs."
},
{
    reviewDate: "2023-10-17",
    title: "Mr. Vampire",
    released: 1985,
    rating: "5 out of 5 Stars",
    review: "I laughed, I cried."
},
{
    reviewDate: "2023-10-24",
    title: "A Man for All Seasons",
    released: 1966,
    rating: "4 out of 5 Stars",
    review: "The story of an absolute G."
},
{
    reviewDate: "2023-10-26",
    title: "The Swan",
    released: 2023,
    rating: "4 out of 5 Stars",
    review: "All four shorts convey various technical formalisms of the literary short story, but *The Swan* has the guts to be utterly unappealing as conventional cinema."
},
{
    reviewDate: "2023-10-29",
    title: "Nomadland",
    released: 2020,
    rating: "5 out of 5 Stars",
    review: "Breathtakingly graceful in its awe and patience for its subject matter with a Mount Rushmore performance from Frances McDormand."
},
{
    reviewDate: "2023-11-06",
    title: "The Wailing",
    released: 2016,
    rating: "3 out of 5 Stars",
    review: "I'm a Matango fan which is what kept me hanging through the first act, then the next 3 acts really unfolded into something unique. Then the last act totally falls apart and the viewer is left with no answers."
},
{
    reviewDate: "2022-12-31",
    title: "BARDO, False Chronicle of a Handful of Truths",
    released: 2022,
    rating: "2 out of 5 Stars",
    review: "A total snooze, but a really well-made snooze. The movie hammers home on a pretty basic spread of anxieties, but so does <i>Memoria</i>. At least <i>Bardo</i> is a work infused with passion for film and a love of acting and setting. At least <i>Bardo</i> is clever and self-interested. So okay, it's a great snooze. I really never got over <i>Memoria</i>, did I?"
},
{
    reviewDate: "2022-12-31",
    title: "Babylon",
    released: 2022,
    rating: "3.5 out of 5 Stars",
    review: "That first hour, though... It's riveting. The first hour alone is worth 3 stars in my book."
},
{
    reviewDate: "2023-01-04",
    title: "Demolition Man",
    released: 1993,
    rating: "3 out of 5 Stars",
    review: "On the one hand you have a hyper-individualistic libertarian underground that doesn't have access to governance and cannot therefore progress as a society. On the other hand you have a hypercapitalist soyscape monoculture where there's no division between consumer media and morality and no one f***s. In this world, no one can tell the difference between a revolutionary liberator and a psychopathic destroyer. Best of luck to you all."
},
{
    reviewDate: "2023-01-05",
    title: "The Menu",
    released: 2022,
    rating: "2.5 out of 5 Stars",
    review: "<i>The Menu</i> has a coherent enough script to begin its indictment of the bourgeoisie, but it is <i>beyond reason</i> to ask an audience to accept Ralph Fiennes or Anya Taylor-Joy as anything but avatars of wealth and privilege."
},
{
    reviewDate: "2023-01-09",
    title: "White Noise",
    released: 2022,
    rating: "3.5 out of 5 Stars",
    review: "<i>White Noise</i> is great. Are you in your 30s? Did you go through a mid-to-late-century postmodern literary fiction phase when you were a late teen? The screen adaptation here brings that feeling back. For that alone, this is watchable. Driver and Gerwig's performances are awesome. The whole family feels cozy and vital. It lags a bit in the 4th act, but we can forgive it."
},
{
    reviewDate: "2023-01-12",
    title: "Oblivion",
    released: 2013,
    rating: "3 out of 5 Stars",
    review: "Oops sorry, just having another one of my Classic Memories!"
},
{
    reviewDate: "2023-01-15",
    title: "The Pale Blue Eye",
    released: 2022,
    rating: "1 out of 5 Stars",
    review: "Not a fun or rewarding movie to watch or reflect on after the fact."
},
{
    reviewDate: "2023-01-16",
    title: "The Old Way",
    released: 2023,
    rating: "1.5 out of 5 Stars",
    review: "Does a decent job of making itself exist! Has a fair amount of good acting shot and edited in such a way that makes it look like bad acting. Cage does well and his kid co-star was a lot better than I expected!"
},
{
    reviewDate: "2023-01-19",
    title: "Midnight Cowboy",
    released: 1969,
    rating: "5 out of 5 Stars",
    review: "<i>It don't say nothin' about you... Don't say nothin' about you either...</i>"
},
{
    reviewDate: "2023-01-22",
    title: "Devotion",
    released: 2022,
    rating: "1.5 out of 5 Stars",
    review: "Such a great performance by Majors. He doesn't have to be in an avant-garde film to be an avant-garde performer and it's amazing to see. Dud of a film, though. Worth watching to study his talent."
},
    {
        reviewDate: "2022-12-17",
        title: "Guillermo del Toro's Pinocchio",
        released: 2022,
        rating: "2.5 out of 5 Stars",
        review: "Pretty neat! The little wooden boy is cute as a button and Ewan McGregor's voice is soothing and most welcome in my home."
    },
    {
        reviewDate: "2022-12-18",
        title: "Rock & Rule",
        released: 1983,
        rating: "3.5 out of 5 Stars",
        review: "Honestly a beautifully structured story. The themes of Angel's conflict with Omar run parallel to her conflict with Mok."
    },
    {
        reviewDate: "2022-12-19",
        title: "The Fabelmans",
        released: 2022,
        rating: "3 out of 5 Stars",
        review: "Two amazing scenes, some nice child actor moments, and a surprisingly authentic narrative given that it's a <i>boy-with-his-camera makes good</i> contrivance."
    },
{
    reviewDate: "2022-07-24",
    title: "The Cheat",
    released: 1931,
    rating: "2.5 out of 5 Stars",
    review: "Tallulah Bankhead delivering an iconic performance in a weird movie about extreme wealth, conservative money management, and the virtue of honesty. The first 20 minutes is superb, and Bankhead channels enough anxiety throughout to make this a proto-thriller at its peak."
},
{
    reviewDate: "2022-07-26",
    title: "Forbidden Zone",
    released: 1980,
    rating: "4 out of 5 Stars",
    review: "An unwatchable masterpiece. Enter at your own risk. Every disclaimer applies."
},
{
    reviewDate: "2022-07-26",
    title: "After Yang",
    released: 2021,
    rating: "3 out of 5 Stars",
    review: "You gotta love Yang."
},
{
    reviewDate: "2022-07-31",
    title: "Star 80",
    released: 1983,
    rating: "1.5 out of 5 Stars",
    review: "I felt as though I was in a toxic relationship with the movie itself. Like any narcissist, Star 80 offers precious little as a reward for the viewer's attention without absolute buy-in on its incredibly sleazy and pessimistic message. I have no idea what mood I should have been in to better receive it. I have no idea why people call it a masterpiece. Not when we have <i>Boogie Nights</i> to compare."
},
{
    reviewDate: "2022-08-04",
    title: "Nope",
    released: 2022,
    rating: "4.5 out of 5 Stars",
    review: "This movie turned my mind into an exploding fist bump. It was everything I need from a high-brow/low-brow movie in 2022. Extremely on its shit, in my opinion. Every frame is a jumping-off point for an interesting analysis."
},
{
    reviewDate: "2022-08-05",
    title: "Sully",
    released: 2016,
    rating: "4.5 out of 5 Stars",
    review: "What begins as a common enough Clint Eastwood narrative - where a competent hero is shit on by a cold, cruel, and institutional society - unfolds into a relentless, looping retelling of a crazy water landing."
},
{
    reviewDate: "2022-08-06",
    title: "Prey",
    released: 2022,
    rating: "3 out of 5 Stars",
    review: "Two stars for Midthunder's awesome performance that stands on its own and one star for my boy Trachtenberg who I met one time at a pub in Seattle."
},
{
    reviewDate: "2022-08-19",
    title: "Richard Jewell",
    released: 2019,
    rating: "3.5 out of 5 Stars",
    review: "Well now Richard, typically what we do as a preliminary precaution upon submitting a movie review is to get you on film waiving your Miranda Rights."
},
{
    reviewDate: "2022-09-26",
    title: "Bodies Bodies Bodies",
    released: 2022,
    rating: "2.5 out of 5 Stars",
    review: "Ominous use of LED lights. Sort of a stripped-down meditation on guilt that shows without telling."
},
{
    reviewDate: "2022-10-31",
    title: "Black Adam",
    released: 2022,
    rating: "0.5 out of 5 Stars",
    review: "Watching shit like this brings only one thing to mind for me: Some movies are a form of taxation and nothing more."
},
{
    reviewDate: "2022-11-03",
    title: "Bros",
    released: 2022,
    rating: "3 out of 5 Stars",
    review: "The emotional highs are lovely. As a romantic comedy, it makes the effort to attempt some layers of meaning and then it achieves all of its layers."
},
{
    reviewDate: "2022-11-07",
    title: "Weird: The Al Yankovic Story",
    released: 2022,
    rating: "2 out of 5 Stars",
    review: "Barely holds together, but Radcliffe, Wood, and Wilson are great."
},
{
    reviewDate: "2022-11-10",
    title: "Weird: The Al Yankovic Story",
    released: 2022,
    rating: "3.5 out of 5 Stars",
    review: "After two days in the wake of <i>Weird</i>, I've essentially flipped my position. My mind has been changed."
},
{
    reviewDate: "2022-11-11",
    title: "Skinamarink",
    released: 2022,
    rating: "1 out of 5 Stars",
    review: "Ball has all the materials of good horror here, but in my opinion, this project needed way more conceptual development."
},
{
    reviewDate: "2022-11-12",
    title: "Doctor Sleep",
    released: 2019,
    rating: "3.5 out of 5 Stars",
    review: "Mid-career Ewan McGregor at his most powerful: Playing Sisyphus."
},
{
    reviewDate: "2022-11-15",
    title: "Eternals",
    released: 2021,
    rating: "1.5 out of 5 Stars",
    review: "We are the robots."
},
{
    reviewDate: "2022-11-21",
    title: "Princess Mononoke",
    released: 1997,
    rating: "5 out of 5 Stars",
    review: "This is a movie where more characters than I can recall experience what Jung called disintegration."
},
{
    reviewDate: "2022-11-24",
    title: "Triangle of Sadness",
    released: 2022,
    rating: "3 out of 5 Stars",
    review: "Balenciaga! It's too long! H&M! It's funny! Balenciaga! It's too on-the-nose! H&M! We love the Russian capitalist! Balenciaga! It's hard to see all that booze go to waste! H&M! We love Woody Harrelson!"
},
{
    reviewDate: "2022-04-15",
    title: "The Hobbit: An Unexpected Journey",
    released: 2012,
    rating: "2.5",
    review: "Somewhat an appendix to Jackson's LOTR films; somewhat a noble effort to adapt a story we all read as children; somewhat a retrospective on the cinematic language he built to disclose a magnificent literary mythopoeic work..."
},
{
    reviewDate: "2022-04-17",
    title: "Boogie Nights",
    released: 1997,
    rating: "4.5",
    review: "You might describe porn as the feeling of accomplishing something you weren't strictly a part of. Watching someone else do the thing you think you need to do, I might say, if I could put it another way..."
},
{
    reviewDate: "2022-04-23",
    title: "The Batman",
    released: 2022,
    rating: "3",
    review: "Rather than being about Batman, this is another example of a movie-fable centering the struggles of content creators trapped in an endless, iterative process of storytelling..."
},
{
    reviewDate: "2022-04-25",
    title: "Alien from L.A.",
    released: 1988,
    rating: "3.5",
    review: "This movie is awesome. By all rights, it should have starred Michael Douglas. By all rights, a supermodel shouldn't be able to believably play an unlovable nerd. This weird underground world doesn't look like anyone's vision of Atlantis. The audio mix is awful. Every line sounds dubbed. Every element is wrong, but the execution is flawless..."
},
{
    reviewDate: "2022-04-26",
    title: "Manakamana",
    released: 2013,
    rating: "3.5",
    review: "Great to have on in the background. Fun to sit with folk in a cable car. There are some pleasant surprises along the way, but like <i>Leviathan,</i> this one just washes over the viewer..."
},
{
    reviewDate: "2022-05-26",
    title: "Everything Everywhere All at Once",
    released: 2022,
    rating: "5 out of 5 Stars",
    review: "oh my god"
},
{
    reviewDate: "2022-06-03",
    title: "Top Gun: Maverick",
    released: 2022,
    rating: "4 out of 5 Stars",
    review: "I'll be ending every email with \"Thank you for saving my life.\" from now on."
},
{
    reviewDate: "2022-06-09",
    title: "Dune",
    released: 2021,
    rating: "3.5 out of 5 Stars",
    review: "<i>Dune</i> is an enduring classic and a landmark work of literary sci-fi. To adapt it for the screen is noble indeed. It doesn't have to be perfect and it's kind of a pilgrimage."
},
{
    reviewDate: "2022-07-01",
    title: "The Wicker Man",
    released: 2006,
    rating: "1.5 out of 5 Stars",
    review: "Every scene sucks the life out of itself."
},
{
    reviewDate: "2022-07-01",
    title: "Dollman",
    released: 1991,
    rating: "1 out of 5 Stars",
    review: "Can't complain!"
},
{
    reviewDate: "2022-07-01",
    title: "Lapsis",
    released: 2020,
    rating: "2 out of 5 Stars",
    review: "The performances here are quite understated and lovely. It's an interesting vibe mashup of being in nature with friends and being at work during a prolonged and uncertain socioeconomic period. Lapsis absolutely insults the viewer with its lack of ending, though. It must be accidental. Scope creep is a possibility. It's a great idea and, to an extent, a great execution. One wonders how it would have played as a limited series."
},
{
    reviewDate: "2022-07-01",
    title: "Spider-Man 2",
    released: 2004,
    rating: "3.5 out of 5 Stars",
    review: "Good lord... I have such feelings. It's hard not to love, but the emotional grind of Peter and Mary Jane's relationship is just... <i>just brutal</i>. Maguire and Dunst do their best. Maybe they even enjoy it. Oh man, and Aunt May? Every interaction Peter has with this ancient, fragile woman is BRUTAL. Why did Raimi think anyone would enjoy the 1 and a half hours of pure emotional anguish? The crazy thing is people <i>did.</i> Sickos!"
},
{
    reviewDate: "2022-07-01",
    title: "The Quick and the Dead",
    released: 1995,
    rating: "3.5 out of 5 Stars",
    review: "Sharon Stone calls her gd shot and it absolutely hits. \"The Lady\" is a rad gunslinger who deserved an extended run like Ellen Ripley, Snake Plissken, or Mad Max. Also, Gene Hackman is always great."
},
{
    reviewDate: "2022-07-02",
    title: "All the Old Knives",
    released: 2022,
    rating: "1 out of 5 Stars",
    review: "Jonathan Pryce and Thandiwe Newton are great hangs in <i>Old Knives,</i> and Chris Pine's hair is something to celebrate, but this spy thriller is completely washed out by a hazy, sluggish architectural cinematic style that is so loud and so cheap in its attempt to establish class and place. No doubt there's a story with intrigue under all that narcotic light bloom. Oh well!"
},
{
    reviewDate: "2022-07-04",
    title: "Men",
    released: 2022,
    rating: "2 out of 5 Stars",
    review: "Kind of a self-own. All the pieces were there, but when push came to shove, <i>Men</i> demonstrated an insufficient comprehension of its own central crisis and failed to organize itself for an audience's understanding. There is an impression of a feminist lens here, but it can't hold itself together beyond the 45 minute mark. I wanted to love it!!! Ah well."
},
{
    reviewDate: "2022-07-08",
    title: "Thor: Love and Thunder",
    released: 2022,
    rating: "1.5 out of 5 Stars",
    review: "I realize now that the thing I appreciate about Thor is that he's a son and a brother. The apotheosis of his dramatic arc is truly Ragnarok. He peaks as a hero and then suffers catastrophic, irrevocable loss. I would not have made a fourth Thor movie. However, Gorr or perhaps Mighty Thor would have made excellent central characters."
},
{
    reviewDate: "2022-07-11",
    title: "Jurassic World Dominion",
    released: 2022,
    rating: "1 out of 5 Stars",
    review: "This one hits pretty different. Its parting shot seems to be, \"Everything is stuff. Let's let kids decide. Viral content may solve all problems, we don't know.\""
},
{
    reviewDate: "2022-07-14",
    title: "Cabaret",
    released: 1972,
    rating: "4.5 out of 5 Stars",
    review: "So pessimistic. So dark. So wise. Such amazing performances from Liza Minnelli, Michael York, and Joel Grey. The three of them are at the peak of their power in <i>Cabaret</i>."
},
{
    reviewDate: "2022-07-17",
    title: "Moonrise Kingdom",
    released: 2012,
    rating: "4 out of 5 Stars",
    review: "In fact, we've been a bunch of mean jerks."
},
    {
        reviewDate: "2022-04-04",
        title: "Enemy",
        released: 2013,
        rating: "3.5",
        review: "Dandy. I'm beginning to really enjoy how Villeneuve has these seemingly impassible paradoxes at the heart of his stories. Often they include some aspect of motherhood. Whatever these impassible paradoxes turn out to be, he usually manages to represent them symbolically. In this case there is a strong argument for magic realism. I think this is my favourite representation of his cinematic language. So much meat on the bone. Why does this movie open with a discourse leading to Hegelian synthesis? What's with the spiders? Watch it if you can!!"
    },
    {
        reviewDate: "2022-04-05",
        title: "L.A. Confidential",
        released: 1997,
        rating: "3",
        review: "Great job, Guy Pearce. James Cromwell's epic 10 year run, 1995-2005, includes: Babe, The People vs. Larry Flynt, Star Trek: First Contact, L.A. Confidential, Deep Impact, Green Mile, I, Robot, The Longest Yard."
    },
    {
        reviewDate: "2022-03-04",
        title: "The Twentieth Century",
        released: 2019,
        rating: "3.5 out of 5 Stars",
        review: "A very campy and horny film. And surreal. A sort-of diabolical, dystopian nightmare take on the Canadian project and the early political career of Mackenzie King. I'm here for it all. Fun movie to watch, especially if you delight in shame, the Oedipal struggle, German Expressionism."
    },
    {
        reviewDate: "2022-03-07",
        title: "Against the Ice",
        released: 2022,
        rating: "2.5",
        review: "You watched Nikolaj Coster-Waldau ask a bunch of frostbitten explorers to go on an ice mission but it read like he asked them to make the movie. He gave good ice man, though."
    },
    {
        reviewDate: "2022-03-11",
        title: "Arrival",
        released: 2016,
        rating: "2.5",
        review: "We're presented with the familiar mainstream media deluge of geopolitical chaos/spectacle. We feel helpless, but the arrival of aliens at least gives us something else to think about. The aliens. That's how Louise Banks goes from a witness and a victim of her own government's dishonesty to a globalist savior and existential agent. This movie is about the challenges she faces while attempting to hold back mutually assured destruction long enough to send a message so humanitarian that it cuts through spectacle and restarts geopolitics. There's a relatively inconsequential B-plot about a daughter and the aliens, themselves."
    },
    {
        reviewDate: "2022-03-14",
        title: "Leviathan",
        released: 2012,
        rating: "3.5",
        review: "Excellent sea hang. You're stuck on a commercial fishing ship in the North Atlantic. The directors really let you bring your own baggage to this one. The footage is sliced and sorted the way you might prep ten thousand pollock for deep freeze."
    },
    {
        reviewDate: "2022-03-15",
        title: "M",
        released: 1931,
        rating: "4.5",
        review: "It's a thrilling community quest for justice. It showcases what organized bodies can do. But it's just as much about what communities miss, about their limitations. And there's a moment in this film where the tension breaks and the viewer is bathed in the truths of these people. It's a rare kind of moment for a film in 2022. Unbelievable, really, that a fully formed homicide/crime drama should arrive 91 years ago. A must-watch, to be sure."
    },
    {
        reviewDate: "2022-03-21",
        title: "Zu: Warriors from the Magic Mountain",
        released: 1983,
        rating: "3",
        review: "Pretty fun! Tosses the viewer from fight scene to lore dump and back again until it's over. Great costume design. Barely holds itself together emotionally as a result of how fantastical it is. Charming characters. Cosmically high stakes!"
    },
    {
        reviewDate: "2022-03-21",
        title: "Exciting Dragon",
        released: 1985,
        rating: "2",
        review: "I came for the rowboat fight. It was awesome. Then there's what feels like 25 minutes of pretty great combat mixed into 60 minutes of light family drama and thinly established magical intrigue. In general, pretty silly. Many of these films end with a warehouse/barn fight. This film does you the dignity of setting it up pretty early on. One star for a coherent plot, one star for the themed fighters."
    },
    {
        reviewDate: "2022-03-21",
        title: "Return of the Chinese Boxer",
        released: 1977,
        rating: "4",
        review: "Brilliant and generous. After establishing the stakes, the film fully deconstructs and you get to watch the fighters go at each other in a tournament that holds the plot hostage for 20+ minutes. Excellent acting. Excellent direction. Great point of entry for folks new to the genre."
    },
    {
        reviewDate: "2022-03-25",
        title: "A.I. Artificial Intelligence",
        released: 2001,
        rating: "3.5",
        review: "A disturbing picaresque journey that seems to show us an inversion of the consequences of iterative populist filmmaking. Some filmmakers (Steven Spielberg) and/or studios (Dreamworks) have their agency in training us to expect and accept certain kinds of cinema through the films they make. At the heart of this film, William Hurt is building little robot sons, programming them with what to love, what to want. We follow a robot son who can only experience himself vicariously through the Other, his human \"mother.\" It mirrors the way we are meant to experience ourselves vicariously through hollywood films. The little robot will never understand, will never reconcile his suffering. He helplessly plays out the consequences of his programming. It's a grim, cynical film that almost seems like a confession from its director... Like it's trying to eat itself by condemning the choices of its creator while nonetheless smothering the viewer with oozing appeals to sentiment/emotion. Sometimes I rewatch it just to turn it off."
    },
    {
        reviewDate: "2022-03-29",
        title: "Dirty Dancing",
        released: 1987,
        rating: "3.5",
        review: "This movie rules. It's set during a vacation, but dirty dancing could have happened anywhere, about anything. It's about a teenager encountering something real. She finds that the language of her soul is expressible through body movement and almost instantly finds meaning and purpose in life. While the cast and the acting is servicable, the script absolutely screams for over-the-top Grease-level performances. None the less, Dirty Dancing is wild, feels dangerous, relevant and necessary. Are we growing up too early or too late? Why? What holds us back? What makes us real?"
    }
];
