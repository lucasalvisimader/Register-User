import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-show',
    templateUrl: './app-show.component.html',
    styleUrls: ['./app-show.component.css']
})

export class AppShowComponent { 
    listPeople = JSON.parse(localStorage.getItem('data'));
}