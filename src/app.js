export class App {


    firstName = 'John';
    lastName = 'Doe';
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
        alert('Hello ' + this.firstName + ' ' + this.lastName + '. Nice to meet you.');
        this.lastName = this.lastName + "" + this.i;
        this.firstName = this.firstName + "" + this.i;
        this.i = this.i + 1;
    }
}
