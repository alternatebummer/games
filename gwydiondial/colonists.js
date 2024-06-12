class Colonist {
    constructor(name) {
        this.name = name;
    }
}

const generateColonist = () => {
    const names = [
        "John", "Jane", "Alex", "Maria", "Leo", "Sara", "Sam", "Chris", "Pat", "Taylor",
        "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Isabella", "James", "Sophia", "Benjamin",
        "Mia", "Lucas", "Charlotte", "Mason", "Amelia", "Ethan", "Harper", "Logan", "Evelyn", "Alexander",
        "Abigail", "Elijah", "Emily", "Jackson", "Ella", "Aiden", "Madison", "Sebastian", "Avery", "Michael"
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    return new Colonist(name);
}

let colonists = [];
for (let i = 0; i < 10; i++) {
    colonists.push(generateColonist());
}