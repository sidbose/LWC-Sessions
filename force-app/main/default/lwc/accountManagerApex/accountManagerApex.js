import { LightningElement, wire, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class AccountManageApex extends LightningElement {

    /*@wire(getAllAccounts)
    accounts;*/
    @track numberOfRecords;
    @track accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberOfAccountsChangeHandler(event) {
        this.numberOfRecords = event.target.value;
    }

    getAccounts() {
        getAllAccounts({numberOfRecords: this.numberOfRecords}).then( response => {
            this.accounts = response;
            const toastEvnt = new ShowToastEvent({
                title: 'Accounts Loaded',
                message: this.numberOfRecords + ' Accounts loaded from the server',
                variant: 'success'
            })
            this.dispatchEvent(toastEvnt);
        }).error( error => {
            console.log('Errror in getting record: ', error.body.message);
            const toastEvnt = new ShowToastEvent({
                title: 'Accounts Loaded',
                message: error.body.message,
                variant: 'error'
            })
            this.dispatchEvent(toastEvnt);
        });
    }

}