// message Comp
const subjects = ['I', 'You', 'He', 'She', 'They'];
const verbs = ['like', 'love', 'enjoy', 'dislike', 'hate'];
const objects = ['pizza', 'coding', 'music', 'hiking', 'reading'];

// create msg
function generateMessage() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    
    return `${randomSubject} ${randomVerb} ${randomObject}.`;
}

// Generate and log a random message
const randomMessage = generateMessage();
console.log(randomMessage);
