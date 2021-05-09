const readline = require("readline");

class Program1{
    #interface;
    constructor(){
        this.#interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }   
    
    makeQuestion(question, isClosable=true){
        //"Escriba lo que desee: "
        this.#interface.question(question, (answer) => {
            console.log(`Su texto es: ${answer}`);
            if(isClosable){
                this.#interface.on("close", () => console.log("Adios!"));
                this.#interface.close();
            }
        });        
        
    }
}

module.exports = Program1;

