import { LightningElement, wire, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'

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
        }).error( error => {
            console.log('Errror in getting record: ', error.body.message);
        });
    }

}