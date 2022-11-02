import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-register',
    templateUrl: './app-register.component.html',
    styleUrls: ['./app-register.component.css']
})

export class AppRegisterComponent implements OnInit {

    name = '';
    email = '';
    password = '';
    state = '';
    city = '';
    district = '';
    gender = '';
    age = '';
    link = '';
    listPeople = [];

    ngOnInit() {
        JSON.parse(localStorage.getItem('Pessoa')) || [];
    }

    send() {
        let data:object[] = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : []
        let pessoa = {
            name:this.name, 
            email:this.email, 
            password:this.password, 
            state:this.state, 
            city:this.city, 
            district:this.district, 
            gender:this.gender, 
            age:this.age, 
            link:this.link
        }
        data.push(pessoa)
        localStorage.setItem('data', JSON.stringify(data))
    }
}