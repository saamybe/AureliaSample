import {MyInfo} from './my-info';
import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
@inject(DialogService)
export class App {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    myinfo = { firstName: 'Saminathan', lastName: 'Ponnusamy' };
    submit(){
        this.dialogService.open({ viewModel: MyInfo, model: this.myinfo, lock: false }).whenClosed(response => {
            if (!response.wasCancelled) {
            console.log('good - ', response.output);
        } else {
            console.log('bad');
        }
        console.log(response.output);
    });
    }
}