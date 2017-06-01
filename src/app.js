import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
@inject(HttpClient)
export class App {
    message = 'Welcome to Aurelia!';

    constructor(http) {
        this.http = http;
    }

    bind() {
        this.friends = [
            'Alice',
            'Bob',
            'Carol',
            'Dana'
        ];
    }

    delegateMethod(e) {
        if (e.target && e.target.nodeName == "LI") {
            // List item found!  Output the ID!
            console.log("delegateMethod List item ", e.target.id.replace("post-", ""), " was clicked!");
        }
    }

    delegateMethod1(e) {
        if (e.target && e.target.nodeName == "LI") {
            // List item found!  Output the ID!
            console.log("delegateMethod1 List item ", e.target.id.replace("post-", ""), " was clicked!");
        }
    }

    httpCall() {
        this.postData(this.myPostData)
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }

    myPostData = [{
        "id": 1,
        "name": "Jayaprakash",
        "email": "abc@gmail.com",
        "phone": "8870852989",
        "password": "123456",
        "gender": "Male",
        "user_id": "U123456",
        "wallet": 1220,
        "dob": "13-10-1992",
        "date": "2017-02-04 12:12:12",
        "status": "Active",
        "fcm": "fcm asdfghjkl",
        "login_logout": "Login"
    }];

    postData(myPostData) {
        this.http.fetch('http://jsonplaceholder.typicode.com/posts', {
                method: "POST", body: JSON.stringify(myPostData)
            })
            .then(response => response.json())
            .then(data => {
                console.log("RESPONSE FORM CP" + JSON.stringify(data));
            });
    }

}
