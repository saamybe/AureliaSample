export class App {

    firstName = 'ONE-WAY';
    lastName = 'ONE-TIME';
    midName = 'TWO-WAY';
    message = 'Welcome to Aurelia!';
    i = 0;

    constructor() {

        console.log('Constructor Called First ');

    }

    created() {
        console.log('Invoked created after constructor');
    }

    bind() {
        console.log('Invoked bind callback');
    }

    attached() {
        console.log(' Invoked when component is attached to the DOM - only if this callback is implemented');
    }

    detached() {
        console.log(' Invoked when removed from the DOM if detached is implemented');
    }

    unbind() {
        console.log('After a component is detached if you have unbind callback , It will be invoked');
    }

    onButtonClick() {
        this.firstName = this.firstName + "" + this.i;
        this.lastName = this.lastName + "" + this.i;
        this.midName = this.midName + "" + this.i;
        this.i = this.i + 1;
    }
}
