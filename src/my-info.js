import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
@inject(DialogController)
export class MyInfo {
    myinfo = { firstName: '' ,lastName:''};
    constructor(dialogController){
        this.dialogController = dialogController;
    }
    activate(myinfo){
        this.myinfo = myinfo;
    }
}