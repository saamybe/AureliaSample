import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject(Router)
export class Home {

    constructor(router){
        this.router = router;
    }

    redirect(){
        this.router.navigate("about");
    }
}