import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-a',
    templateUrl: './app-a.component.html',
    styleUrls: ['./app-a.component.css']
})

export class AppAComponent { 
    colored = true;
    color_in(event: HTMLElement) {
        if (this.colored) {
            event.style.backgroundColor = "rgb(248, 94, 38)";
            event.style.color = "rgb(20, 20, 20)";
        } else {
            event.style.backgroundColor = "";
            event.style.color = "";
        }
        this.colored = !this.colored;
    }
}