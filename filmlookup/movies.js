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
    "reviewDate": "2024-01-11",
    "title": "The Bourne Identity",
    "released": 2002,
    "rating": "4 out of 5 Stars",
    "review": "Man, I love Franka Potente in this. Her and Damon know exactly what this movie is. Everyone's ass is on the line. No one's having a good day. The weather sucks. The system's broken. When communication fails, power is equivalent to force. Prioritizing passion and attraction is equivalent to going rogue. I say, 'Hell yeah' to this film. 'The only thing we had in common was that neither one of us knew who you were. We're past that now.'"
},
{
    "reviewDate": "2024-01-16",
    "title": "Kung Pow: Enter the Fist",
    "released": 2002,
    "rating": "2 out of 5 Stars",
    "review": "Glorious and utterly unique. Oedekerk is like Orson Welles if Welles' passion was the pursuit of extreme stupidity. I can't help myself with this guy, he's an inspiration! And this is a bad movie!"
},
{
    "reviewDate": "2024-01-16",
    "title": "The Nightmare Before Christmas",
    "released": 1993,
    "rating": "5 out of 5 Stars",
    "review": "Sally understands that the plan is, on some level, elementally flawed. We learn this from her in many ways, but early on there is a moment when Sally witnesses Jack lying to the citizens of Halloween Town about Santa Claus, and the look on her face is that of disappointment. Does she know that Jack is lying to them? Does she understand that in this moment he is lying to himself somehow? 'What has become of my dear friend?' The more I rewatch, the more this becomes Sally's movie. The spirit of Christmas, after all, is a stand-in, a symbol. Sally and Jack are two people seeking connection."
},
{
    "reviewDate": "2024-01-17",
    "title": "No Hard Feelings",
    "released": 2023,
    "rating": "2 out of 5 Stars",
    "review": "Andrew Barth Feldman delivers a sensitive, piercing, and strange sex comedy performance. Jennifer Lawrence being a stressed-out Marx Brother. Their comedic/dramatic chemistry… threatens to be quite charming. The movie has within it a kind of emotional complexity, like a bizarre, double-inverted Harold and Maude thing going on, that only the two leads seem to be pursuing. Everyone else is making American Pie."
},
{
    "reviewDate": "2024-01-17",
    "title": "The Mirror Has Two Faces",
    "released": 1996,
    "rating": "3 out of 5 Stars",
    "review": "It's as if this movie takes place in the Seinfeld universe and these are just two people with lives Jerry, George, Elaine, and Kramer aren't destroying. This is a movie about celibacy pushed to the limits of safety. Jeff Bridges does a spit-take. It has like 600 acts. Barbra Streisand is amazing."
},
{
    "reviewDate": "2024-01-18",
    "title": "Inside Man",
    "released": 2006,
    "rating": "3.5 out of 5 Stars",
    "review": "It's a primo bank heist movie with very memorable performances, especially from Denzel Washington. It’s tough, because Dog Day Afternoon is 1975, Heat comes out in '95 and perfects many aspects of cinematic bank heist mechanics. Then, Dark Knight comes out in '08, with Nolan replicating the speed and procedural rigor of Mann, which arguably canonizes or underlines the achievements of Heat. In 2006, Inside Man is building with the same variables as the above. Spike Lee is a master filmmaker, deploying many signature flourishes throughout. It’s in the mix with some extreme heavy-hitters and I suggest that it’s undervalued across the board."
},
{
    "reviewDate": "2024-01-18",
    "title": "Munich",
    "released": 2005,
    "rating": "4 out of 5 Stars",
    "review": "Shockingly nuanced for what it is. I doubt it could be made today. Spielberg at the peak of his power."
},
{
    "reviewDate": "2024-01-19",
    "title": "Zatoichi and the Chest of Gold",
    "released": 1964,
    "rating": "3.5 out of 5 Stars",
    "review": "This is a very uncomplicated entry in the series. Ichi eats shit for 50 minutes as fools step to him and he gets branded as a thief of public funds. Ever a man of service, he stays to figure out who actually stole the money. There's a tragically small C-plot with a sneaky woman, a D-plot with a kid, and a pretty cool villain, but many classic Zatoichi E, F and G plots are conspicuously absent. He doesn't even give a backrub, which is crazy. On the plus side, there's an abundance of fancy editing and sweeping panoramic shots that make Chest of Gold stand out as particularly cinematic. He massacres like 35 men, but that's quite a low count for him. Still, I was entertained throughout."
},
{
    "reviewDate": "2024-01-19",
    "title": "The Spy Who Came In from the Cold",
    "released": 1965,
    "rating": "4 out of 5 Stars",
    "review": "No respect, I tell ya, no respect at all."
},
{
    "reviewDate": "2024-01-19",
    "title": "The Little Drummer Girl",
    "released": 1984,
    "rating": "2.5 out of 5 Stars",
    "review": "We all love it when spies hang out in the same room for a while, and those scenes are working well here. It's when Diane Keaton isn't sharing a scene with Klaus Kinski - that's how and when this movie drains the fun from the intrigue."
},
{
    "reviewDate": "2024-01-21",
    "title": "The Irishman",
    "released": 2019,
    "rating": "4 out of 5 Stars",
    "review": "Imagine a world where everybody tells you, your whole life, that you are a hammer. Everything you see will look like a nail."
},
{
    "reviewDate": "2024-01-24",
    "title": "Night Swim",
    "released": 2024,
    "rating": "2 out of 5 Stars",
    "review": "It's a wet bye-bye man situation with pros and cons. Watch a man get well. Take that doctors - thanks Night Pool."
},
{
    "reviewDate": "2024-01-31",
    "title": "The Insider",
    "released": 1999,
    "rating": "4.5 out of 5 Stars",
    "review": "Al Pacino does a lot of yelling into the air, barking commands, and issuing manic proclamations, equally of loyalty and of contempt, in this movie. How then can it be that he delivers a very layered, subtle, and charismatic performance? Somehow we're made to absorb whole new dimensions of Lowell Bergman's character from unpredictable little raindrops of detail: - Bergman standing knee-deep in the ocean - Bergman needing the somewhat esoteric guidance of his wife - Bergman falling in love with Wigand during the 60 Minutes interview taping - Bergman yelling, 'Don't invert stuff!'"
},
{
    "reviewDate": "2024-01-31",
    "title": "Zatoichi's Pilgrimage",
    "released": 1966,
    "rating": "4 out of 5 Stars",
    "review": "It droops in the middle a bit, but this is one of the best I've seen. Frankly, a horse steals the show. It's also a very stripped-down story compared to other entries in the series, which usually doesn't work as well as this, but it's nice to see Ichi spend so much time with a woman who loves him enthusiastically. It's nice to spend so much time getting to know the ways of a soft, easy village. It wasn't the pilgrimage I was promised, but it's very strong."
},
{
    "reviewDate": "2024-02-01",
    "title": "Predestination",
    "released": 2014,
    "rating": "3.5 out of 5 Stars",
    "review": "Doctor Who, but make it Sophocles."
},
{
    "reviewDate": "2024-02-07",
    "title": "The Marsh King's Daughter",
    "released": 2023,
    "rating": "2 out of 5 Stars",
    "review": "Daisy Ridley goes off grid. Marsh King over-delivers on dramatic thriller performances that the rest of the production can't contain. There's actually quite a bit to discuss here regarding Ridley's performance specifically. We're supposed to walk away having witnessed Helena finally integrate the domestic life she created with the non-binary, intuitive subjectivity she found in the woods as a child. It doesn't quite land, but, as with Star Wars, it wasn't her fault. In many ways, this is a kind of role Ridley is great at: Subtly queer, physically active, charismatically homicidal. She throws a genuinely strange shape compared to her contemporaries. She plays queer. That's my take. Ben Mendelsohn sleepwalks through dramatic thriller projects, but he's a solid 'that guy' and his scenes with Ridley are the heart of the movie. Still, the whole thing felt underwritten and TV-movie cheap."
},
{
    "reviewDate": "2024-02-09",
    "title": "The Beekeeper",
    "released": 2024,
    "rating": "2 out of 5 Stars",
    "review": "So beekeeping is not an analogy or poetic device of any kind in this movie. The characters mostly accept and understand that a man will express state-sanctioned apicultural ideology through use of lethal force among a human population. The viscosity of the honey is all wrong, but Statham and Irons are doing good work here. The Beekeeper looks like it was shot for 100 dollars in an industrial park over 2 days. My expectations were low. I have to admit that for a budget action film it held its head fairly high."
},
{
    "reviewDate": "2024-02-15",
    "title": "Phantom Thread",
    "released": 2017,
    "rating": "5 out of 5 Stars",
    "review": "An obsessively articulated Miyazaki-esque film about love, anger, desire, pride, creation, pity, curses; the immaterial forces that hold us in place... The irreconcilable union of life and death... Phantom Thread is an extraordinarily generous cinematic experience. It obliterated my highest expectations. As Mike Tyson said of Muhammad Ali: 'Every head must bow, every tongue must confess, this is the greatest of all time.'"
},
{
    "reviewDate": "2024-02-17",
    "title": "The Love Witch",
    "released": 2016,
    "rating": "3.5 out of 5 Stars",
    "review": "Say whatever you want, you're gunna love this Elaine!!"
},
{
    "reviewDate": "2024-02-19",
    "title": "Suspiria",
    "released": 2018,
    "rating": "3 out of 5 Stars",
    "review": "This is an awesome, committed performance by Dakota Johnson wrapped in a very vintage-feeling remake."
},
{
    "reviewDate": "2024-02-19",
    "title": "Madame Web",
    "released": 2024,
    "rating": "1 out of 5 Stars",
    "review": "Madame Web is unlike other Marvel films in that it sets very, very low standards for itself and still fails to meet them. Dakota Johnson's performance is fascinating, at least. She's up there on the screen 3D printing this movie's cult status. Alas. No shade on Johnson, but this was an unbearable sitting experience and I could not bear it."
},
{
    "reviewDate": "2024-02-20",
    "title": "Zatoichi's Revenge",
    "released": 1965,
    "rating": "3.5 out of 5 Stars",
    "review": "Huge points for the courage to actually dive into Ichi's backstory, but also, it's a bummer. It had me longing for the moments in other entries when he gets to frolic in a field of flowers. Otherwise a great execution of the tropes of the franchise and a pretty perfect blend of drama, humor, and action."
},
{
    "reviewDate": "2024-02-21",
    "title": "Terminator 3: Rise of the Machines",
    "released": 2003,
    "rating": "2 out of 5 Stars",
    "review": "It would have been cool to get a really wild terminator. And/or T3 would have been a great movie to explore the idea of time travelers spamming certain space/times (because every time traveler would visit earth on the day before judgment day, and so on). No such luck! It's pretty much T2 with a lot of CG and no Linda Hamilton."
},
{
    "reviewDate": "2024-02-24",
    "title": "Goofy and Wilbur",
    "released": 1939,
    "rating": "3.5 out of 5 Stars",
    "review": "Goofy yells and Wilbur spits and dances little jigs. They love each other!"
},
{
    "reviewDate": "2024-02-28",
    "title": "Cold Copy",
    "released": 2023,
    "rating": "3 out of 5 Stars",
    "review": "Bel Powley's moist face is all over this thing, shot in wide angle, looking really tired and unhappy. The rest of this movie can be thrown out and I'll just keep the tired, moist queen. There's even a sauna scene just so we can see Powley's face dripping with sweat in a misty room. Is Cold Copy watchable? Yes, it is. It's in the company of movies like Whiplash and The Devil Wears Prada. It's in the company of movies about news media like The Insider and Venom. It's a bit like The King of Comedy, too. The protagonist is a bit Jokerfied. Good score, good edit, great lead. In my opinion, it's fighting for space among some of the best screenplays ever written. By comparison, Cold Copy feels a bit timid and narrow in scope. Not to say that a story about a professional writing student can't be fascinating and bold, but I'm still waiting."
},
{
    "reviewDate": "2024-02-28",
    "title": "The Post",
    "released": 2017,
    "rating": "3.5 out of 5 Stars",
    "review": "Robert McNamara gets grilled by Katherine Graham in this movie. Bob and David are in this movie. Masterful hands are at work here on every level, but, like other Spielberg, it often provides comfort when, perhaps, something more complex or challenging is warranted. Nonetheless, a feast."
},
{
    "reviewDate": "2024-03-01",
    "title": "Tenet",
    "released": 2020,
    "rating": "4.5 out of 5 Stars",
    "review": "Tenet is very dignified and self-assured, which is one explanation for why it's such a hilariously unserious watch. Christopher Nolan is showing you his train set and you need to just survive the encounter the best you can. So if you laugh through it or think it's super deep and serious, well, whatever gets you through, man. See it enough times and you'll eventually collect the whole set of coping mechanisms. It's Terminator-esque in its mechanics, but instead of teleportation, time travelers have to walk through metal turnstiles and basically squat small industrial spaces and wait for time to pass. As they move back and forth across a temporal cold war timeline, they start filling it in with bootstrap paradox events. The story focuses on arguably the most important of those events: Stalsk-12, the first true 'pincer movement' (a discrete, planned bootstrap operation). Easy. It only took me five to ten watches to really figure this out. John David Washington is so handsome and fun. Clémence Poésy is in this movie. The whole thing just works for me."
},
{
    "reviewDate": "2024-03-03",
    "title": "Dune: Part Two",
    "released": 2024,
    "rating": "4.5 out of 5 Stars",
    "review": "Very satisfying. There are many swings and they all work. Villeneuve does a better job with arguably the more difficult half of a difficult book in terms of adaptation. Rebecca Ferguson gives a really fantastic performance in my opinion. Her and Zendaya carry the film."
},
{
    "reviewDate": "2024-03-11",
    "title": "Les Misérables",
    "released": 2012,
    "rating": "3.5 out of 5 Stars",
    "review": "This gets a major, major 'hell yes' from me. Unfortunately, I can't give it a score equivalent to how deeply it moved me, how much I cried, so on. While I believe this movie conveys what it intends to convey, and transports me so thoroughly while simultaneously grounding me in totally familiar, utterly human affairs, Anne Hathaway is provided an absolutely awful role, unbefitting. 12 years on, the choice to saddle her with such a brutal and brief performance reads like a crime against nature. But this story is beautiful and I am helpless at its feat. I can't believe I waited so long to watch Hooper's Les Mis."
},
{
    "reviewDate": "2024-03-12",
    "title": "Poor Things",
    "released": 2023,
    "rating": "2 out of 5 Stars",
    "review": "Poor Things is descended from an early English prose/fiction tradition I know casually as 'experimental philosophy.' Many have now compared it to Frankenstein, and that is accurate, but it's also quite in line with a work from 1666 called The Burning World, by Margaret Cavendish. Common formal elements shared by Poor Things and The Burning World include a satirical kingdom, travel, an education through encounters and interviews with others, the reformation and/or formation of a utopia, proto-science fictional elements, animal companions, empiricism, lovestruck men, conquest, political criticism, a central woman experimenting with agency, who, through reason, establishes power relations with others that manifest a material fantasy, and on and on. As a piece of experimental philosophy, I suppose Poor Things succeeds. The performances are also great. But, as a contemporary feminist work, I don't believe it's contributing anything."
},
{
    "reviewDate": "2024-03-14",
    "title": "A History of Violence",
    "released": 2005,
    "rating": "3 out of 5 Stars",
    "review": "It has the pounding heart and adrenalized circulatory system of a Michael Mann movie, but it's shot and cut like a life insurance commercial. Almost the feeling of being served boiled beef at a restaurant. The most serious part of History of Violence is probably the story of Tom and Edie's relationship. You're with Edie the whole way as she realizes the grim truth and takes a leap of faith anyway. It's amazing how so much of the chemistry between Mortensen and Bello shines through."
},
{
    "reviewDate": "2024-03-14",
    "title": "Causeway",
    "released": 2022,
    "rating": "3.5 out of 5 Stars",
    "review": "A very collected, tasteful movie about trauma and rehabilitation; more generally, a relaxed inquiry into containment, release, avoidance, maintenance, and time. This is the Jennifer Lawrence energy I've been waiting for. It's among her best. Brian Tyree Henry delivers an unimpeachable supporting lead performance. Special shout-out to Russell Harvard, who absolutely crushes a generous and pivotal scene, all ASL."
},
{
    "reviewDate": "2024-03-16",
    "title": "The 3 Worlds of Gulliver",
    "released": 1960,
    "rating": "2 out of 5 Stars",
    "review": "Gulliver's a bit like The Doctor, innit? This one's got a real 'oh shit' moment about half way through."
},
{
    "reviewDate": "2024-03-17",
    "title": "Talk to Me",
    "released": 2022,
    "rating": "3 out of 5 Stars",
    "review": "Well acted, well directed, conceptually GRIPPING. Involves a bye-bye hand."
},
{
    "reviewDate": "2024-03-17",
    "title": "You've Got Mail",
    "released": 1998,
    "rating": "3 out of 5 Stars",
    "review": "Arthur C. Clarke said, 'Any sufficiently advanced technology is indistinguishable from magic.' This movie is like that but the technology is grace and forgiveness and the magic is polyamory."
},
{
    "reviewDate": "2024-03-18",
    "title": "Nightmare Alley",
    "released": 2021,
    "rating": "2 out of 5 Stars",
    "review": "Dragging some very fine performances through an absolute bummer of a story."
},
{
    "reviewDate": "2024-03-20",
    "title": "Le Samouraï",
    "released": 1967,
    "rating": "4 out of 5 Stars",
    "review": "Totally iconic sour puss cinema."
},
{
    "reviewDate": "2024-02-24",
    "title": "The Art of Skiing",
    "released": 1941,
    "rating": "4 out of 5 Stars",
    "review": "He's too disorganized and unserious to learn on the spot from a disembodied, judgmental voice, but that won't stop him from trying!"
},
{
    "reviewDate": "2024-02-27",
    "title": "Marriage Story",
    "released": 2019,
    "rating": "3.5 out of 5 Stars",
    "review": "Devastating conflict and, occasionally, fragile and sometimes-strange moments of vulnerability and healing. I'm not drawn in by their careers, which seem pretty upwardly mobile, but their precarious and uncertain perceptions of their lives as artists did feel authentic. And the acting is Grade-A from both leads, especially ScarJo."
},
{
    "reviewDate": "2024-01-25",
    "title": "Ferrari",
    "released": 2023,
    "rating": "3.5 out of 5 Stars",
    "review": "Ferrari has style and speed, as it should. It's a racing movie, as in, the general thrust of the plot is, 'get ready for the race,' and then, 'okay, here's the race.' It works! The race is really fun and the whole world of these drivers is like a little mini Heat. Penelope Cruz and Adam Driver deliver pretty insane performances that fit neatly into Mann's cosmos (but otherwise would no doubt take a viewer out of the experience)."
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
    review: "I dunno, buddy; Ant-Man rules and this was great! Best Marvel movie since Ragnarok! 2 messy hours of weird nonsense with no respect at all for scope or scale."
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
    review: "\"Takes out the fire, but leaves the warmth.\""
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
