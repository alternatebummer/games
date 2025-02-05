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
