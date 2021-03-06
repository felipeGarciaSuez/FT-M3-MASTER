const commands = require("./commands")

const print = function(output){
    process.stdout.write(output)
    process.stdout.write("\nprompt> ")
}
process.stdout.write("prompt> ")
;

process.stdin.on("data", function(data){
    var args = data.toString().trim().split(" ");
    let cmd = args.shift()

    if(commands[cmd]){
        commands[cmd](args, print)
    }else
    print("cmd not found");
})