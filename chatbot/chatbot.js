function reply(msg) {
    msg = msg.toLowerCase();

    if (msg === "hello")
        return "Hi User";

    if (msg === "course")
        return "NodeJS Course";

    if (msg === "fees")
        return "Fees is 5000";

    return "Sorry, I don't understand.";
}

module.exports = reply;