import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
@inject(EventAggregator)
export class App {

    constructor(ea){

    this.ea = ea;
    this.message = 'Welcome to Aurelia!';
  }
  bind(){
      this.ea.subscribe('first-event', ()=> {
          console.info("test");
  });
  }
}
