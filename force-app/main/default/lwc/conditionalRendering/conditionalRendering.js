import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track displayDiv = false;

    @track cityList = ['Kolkata','Delhi','Jaipur','Bangalore','Pune'];
    
    showDivHandler(event) {
       this.displayDiv = event.target.checked;
    }
}