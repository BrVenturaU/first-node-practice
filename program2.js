const readline = require("readline");

class Program2{ 
    #interface;
    #number1;
    #number2;
    #op;
    #menu = `
            Seleccione una opción (número):
            1-Sumar.
            2-Restar.
            3-Multiplicar.
            4-Dividir.        
        Respuesta: `;
    constructor(){
        this.#interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.#interface.on("close", () => console.log("Adios!"));
        this.makeQuestionCall("Escriba el primer número: ",(data)=>{
            try {
                this.#number1 = parseInt(data);
            } catch (error) {
                console.log("Debe ser un número (número 1).");
                this.#interface.close();
            }
            this.makeQuestionCall("Escriba el segundo número: ", (data)=>{
                try {
                    this.#number2 = parseInt(data);
                } catch (error) {
                    console.log("Debe ser un número (número 1).");
                    this.#interface.close();
                }
                this.makeQuestionCall(this.#menu, (data) => {
                    try {
                        this.#op = parseInt(data);
                    } catch (error) {
                        console.log("La opcíon debe ser un número.");
                        this.#interface.close();
                    }
                    this.makeResult();                
                    this.#interface.close();
                });
            });
            
        });
    }
    
    makeQuestionCall(question, callbackAnswer){
        //"Escriba lo que desee: "
        this.#interface.question(question, (answer) => callbackAnswer(answer)); 
        
    }

    makeQuestion(question){
        //"Escriba lo que desee: "
        let dataAnswer;
        this.#interface.question(question, (answer) => dataAnswer = answer);        
        return dataAnswer;
    }
    
    makeResult(){
        let resultText = "";
        switch (this.#op) {
            case 1:
                resultText = `La suma es: ${this.#number1+this.#number2}`;
                break;
            case 2:
                resultText = `La resta es: ${this.#number1-this.#number2}`;
                break;

            case 3:
                resultText = `La multiplicación es: ${this.#number1*this.#number2}`;
                break;

            case 4:
                if(this.#number2 == 0){
                    resultText = "No se puede dividir por cero.";
                    break;
                }
                resultText = `La división es: ${this.#number1/this.#number2}`;
                break;
        
            default:
                resultText = "No ha seleccionado una opción válida."
                break;
        }
        console.log(resultText);
    }
}

module.exports = Program2;

