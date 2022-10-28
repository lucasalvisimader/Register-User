import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent {
    title = 'Cadastro de Luquinhas';

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