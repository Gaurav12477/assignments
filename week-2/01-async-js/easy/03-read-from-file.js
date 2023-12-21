

const fs = require("fs");

fs.readFile("/easy/03-read-form-file.md" , 'utf-8', (err,data) => {
    if(err) {
        console.log("something went wrong" + err.message);
    }
    else{
        console,log(data);
    }
})

//expensive task
let counter = 0;
for(let i=0;i<1000000000;i++){
    counter++
}

console.log("All done...")

