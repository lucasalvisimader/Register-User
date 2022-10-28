import { Component } from "@angular/core";

@Component({
    selector: 'app-register',
    templateUrl: './app-register.component.html',
    styleUrls: ['./app-register.component.css']
})

export class AppRegisterComponent { 
    send(name: string, email: string, state: string, city: string, district: string, gender: string, age: number, link: string) {
        console.log(gender);
    }
}