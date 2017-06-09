/**
 * Created by i706495 on 6/8/17.
 */
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
@inject(EventAggregator)
export class cElement{
    constructor(ea){
        this.ea = ea;

    }

    onClick(){
        this.ea.publish('first-event', {});
    }
}