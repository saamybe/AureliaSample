export class App {

    firstName = 'ONE-WAY';
    lastName = 'ONE-TIME';
    midName = 'TWO-WAY';
    message = 'Welcome to Aurelia!';
    i = 0;

    constructor() {

        console.log('constructor');

    }

    created() {
        console.log('created');
    }

    bind() {
        console.log('bind');
    }

    attached() {
        console.log('attached');
    }

    detached() {
        console.log('detached');
    }

    unbind() {
        console.log('unbind');
    }

    sayHello() {
        //alert('Hello ' + this.firstName + ' ' + this.lastName + '. Nice to meet you.');

        this.firstName = this.firstName + "" + this.i;
        this.lastName = this.lastName + "" + this.i;
        this.midName = this.midName + "" + this.i;
        this.i = this.i + 1;


    }
}
