
        const state = {
            location: '3C',
            inventory: [],
            goblinAsked: false,
            rooms: {
                '3C': {
                    description: `<span class='title'><br>Party Office, Interior</span>
<span class='description'>The Party office interior is a suffocating maze of steel desks, flickering lights, and faded propaganda, where every shadow seems to hold a secret and every sound carries the weight of silent oppression.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>West : An open door lets in the warm glow of a sunbaked street outside</span>`,
                    exits: {
                        west: '3B',
                    }
                },
                'A1A': {
                    description: `<span class='title'><br>Sprova Paradise Apartments, Apartment 1a</span>
<span class='description'>The door was off its hinges, so you move it aside and enter 1a. Unlike 2a, this unit is unfurnished, with a ladder in the middle of the room below an empty light fixture. A sunbeam shines through the apartment's east-facing window.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>West : Leave 1a the way you came</span>`,
                    exits: {
                        west: '2A2', // Update to a defined room key
                    }
                },
                '1A': {
                    description: `<span class='title'><br>Sprova Paradise Apartments, Interior</span>
<span class='description'>The lobby of this ramshackle apartment complex is soggy and cold.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>South: An old staircase leading up to the units
East : Turn around and return to the street</span>`,
                    exits: {
                        south: '2A2',
                        east: '1B',
                    }
                },
                '2A2': {
                    description: `<span class='title'><br>Sprova Paradise Apartments, 2nd Floor</span>
<span class='description'>The staircase leads to a tight second-floor catwalk. Looking down, the lobby is visible through the floor planks.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>North: Return down the old staircase</span>
<span class='navigation'>East: The catwalk leads to apartment 1a</span>
<span class='navigation'>West : The door for apartment 2a</span>`,
                    exits: {
                        north: '1A',
                        west: 'A2A',
                        east: 'A1A',
                    }
                },
                'A2A': {
                    description: `<span class='title'><br>Sprova Paradise Apartments, Apartment 2a</span>
<span class='description'>The door opens with a mere nudge of the door knob. The apartment within is compact like a camper van or the hold of a sailboat, with a two burner gas range and vinyl 2-in-1 bathtub/toilet. A couch made from blocks of raw foam melts under the magnified heat of a porthole window facing south.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>East : Back out slowly and carefully...</span>`,
                    exits: {
                        east: '2A2',
                    }
                },
                '3B': {
                    description: `<span class='title'><br>The Street - Party office, Exterior</span>
<span class='description'>There are colorful banners draped over the building, and a faint sound of music can be heard from inside.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>North: The street continues. There's a parked taxi in the distance and more shops
East : The double-doors of this building are swung wide open. A darkness yawns within</span>`,
                    goblin: {
                        hasBalloon: true,
                    },
                    exits: {
                        east: '3C',
                        north: '2B',
                    }
                },
                '2B': {
                    description: `<span class='title'><br>The Street - Cigar Shop, Exterior</span>
<span class='description'>The cigar shop's cracked, soot-streaked windows display rows of tightly packed boxes, their gold-embossed labels dulled by years of grime, while a rusted metal sign above the door creaks in the stagnant, smoky air.<br>
There is a conspicuous trash can ("can"), full to bursting, barely holding on to its lid.<br></span>
<span class='title'>Navigation</span>
<span class='navigation'>North: The scene of the crime... The patio outside Spova's cafe
South: The street in front of the Party's local office
East : The Cigar shop's entrance</span>`,
                    exits: {
                        east: '2C',
                        south: '3B',
                        north: '1B',
                    },
                    can: {
                        isOpen: false,
                        contents: ['Colt 45'],
                    }
                },
                '1B': {
                    description: `<span class='title'><br>The Street - Cafe Exterior</span>
<span class='description'>The café exterior is a shabby assortment of mismatched chairs and chipped tables, its faded awning barely shielding patrons from the gray, ash-laden sky, while a faint aroma of burnt coffee mingles with the acridscent of diesel fumes.</span><br>
<span class='title'>Navigation</span>
<span class='navigation'>South: The street in front of the cigar shop.
East : The glass panels of the cafe's sliding doors are cloudy with soot, however the sign reads 'OPEN'
West : An apartment complex called Queen of Spova</span>`,
                    exits: {
                        east: '1C',
                        west: '1A',
                    }
                }
            }
        };

        const output = document.getElementById('output');
        const input = document.getElementById('input');

        function clearOutput() {
            output.innerHTML = '';
        }

        function display(message) {
            output.innerHTML += message + '<br>';
            output.scrollTop = output.scrollHeight;
        }

        function move(direction) {
            const currentRoom = state.rooms[state.location];
            if (currentRoom.exits[direction]) {
                state.location = currentRoom.exits[direction];
                clearOutput();
                display(`You move ${direction}.`);
                describeRoom();
            } else {
                display("You can't go that way.");
            }
        }

        function describeRoom() {
            const currentRoom = state.rooms[state.location];
            display(currentRoom.description);
        }

        function opencan() {
            const currentRoom = state.rooms[state.location];
            if (currentRoom.can) {
                if (currentRoom.can.isOpen) {
                    display("The can is already open.");
                } else {
                    currentRoom.can.isOpen = true;
                    display("You open the can.");
                    if (currentRoom.can.contents.length > 0) {
                        display(`Inside, you find: ${currentRoom.can.contents.join(', ')}.`);
                    } else {
                        display("The can is empty.");
                    }
                }
            } else {
                display("There is no can here.");
            }
        }

        function take(item) {
            const currentRoom = state.rooms[state.location];
            if (currentRoom.can && currentRoom.can.isOpen) {
                const index = currentRoom.can.contents.indexOf(item);
                if (index !== -1) {
                    state.inventory.push(item);
                    currentRoom.can.contents.splice(index, 1);
                    display(`You take the ${item}.`);
                } else {
                    display(`There is no ${item} in the can.`);
                }
            } else {
                display("There is nothing to take here.");
            }
        }

        function buy(item) {
            const currentRoom = state.rooms[state.location];
            if (currentRoom.goblin && item === 'balloon') {
                if (!state.goblinAsked) {
                    display("The goblin looks confused and says, 'What balloon?' Maybe you should ask about it first.");
                    return;
                }
                if (state.inventory.includes('coin')) {
                    if (currentRoom.goblin.hasBalloon) {
                        state.inventory = state.inventory.filter(i => i !== 'coin');
                        display("You give the goblin a coin.");
                        state.inventory.push('balloon');
                        currentRoom.goblin.hasBalloon = false;
                        display("The goblin gives you a balloon in return.");
                    } else {
                        display("The goblin has no more balloons to sell.");
                    }
                } else {
                    display("You don't have a coin to buy the balloon.");
                }
            } else {
                display("There is nothing to buy here.");
            }
        }

        function askAbout(subject) {
            const currentRoom = state.rooms[state.location];
            if (currentRoom.goblin && subject === 'balloon') {
                display("The goblin says, 'I'll sell ye this balloon for a coin!!'");
                state.goblinAsked = true;
            } else {
                display("There's no one to ask about that here.");
            }
        }

        function handleCommand(command) {
            const [action, ...args] = command.split(' ');
            const argument = args.join(' ');

            switch (action.toLowerCase()) {
                case 'go':
                    move(argument);
                    break;
                case 'look':
                    clearOutput();
                    display("You look around.");
                    describeRoom();
                    break;
                case 'open':
                    if (argument === 'can') {
                        opencan();
                    } else {
                        display("You can't open that.");
                    }
                    break;
                case 'take':
                    take(argument);
                    break;
                case 'inventory':
                    display(`You are carrying: ${state.inventory.length > 0 ? state.inventory.join(', ') : 'nothing'}.`);
                    break;
                case 'buy':
                    buy(argument);
                    break;
                case 'ask':
                    if (argument.startsWith('goblin about ')) {
                        askAbout(argument.replace('goblin about ', ''));
                    } else {
                        display("You can't ask about that.");
                    }
                    break;
                default:
                    display("I don't understand that command.");
            }
        }

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = input.value.trim();
                input.value = '';
                display(`<span class='command'><br>  // ${command}</span>`);
                handleCommand(command);
            }
        });

        input.focus();
        display("Welcome to the adventure game! Type 'look' to start.");
