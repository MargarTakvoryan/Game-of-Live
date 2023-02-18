var fs = require('fs');

function main() {
    var file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
}
main();


var fs = require('fs');
function main() {
    fs.writeFile("hello.txt", "Hello world\n", function (err) {
        console.log("fs.writeFile ended");
    });
    console.log("fs.writeFile");
}
main();