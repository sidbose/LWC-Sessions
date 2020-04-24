import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track result;  
    
    firstNumber;
    secondNumber;

    getInputNumberHandler(event) {
        if(event.target.name === 'firstNumber') {
            this.firstNumber = event.target.value;
        }
        else if(event.target.name === 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    addHandler() {
        const a = parseInt(this.firstNumber);
        const b = parseInt(this.secondNumber);
        this.result = 'Result is  ' + (a+b);
    }

    subHandler() {
        const a = parseInt(this.firstNumber);
        const b = parseInt(this.secondNumber);
        this.result = 'Result is  ' + (a-b);
    }

    mulHandler() {
        const a = parseInt(this.firstNumber);
        const b = parseInt(this.secondNumber);
        this.result = 'Result is  ' + (a*b);
    }

    divHandler() {
        const a = parseInt(this.firstNumber);
        const b = parseInt(this.secondNumber);
        this.result = 'Result is  ' + (a/b);
    }
}