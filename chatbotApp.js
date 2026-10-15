const readline = require("readline");
const chatbot=require("./chatbot/chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat() {
    rl.question("You: ", (msg) => {

        if (msg.toLowerCase() === "exit") {
            console.log("Bot: Bye!");
            rl.close();
            return;
        }

        console.log("Bot:", chatbot(msg));
        chat(); // Again ask user
    });
}

console.log("Chatbot Started...");
console.log("Type 'exit' to stop.");

chat();