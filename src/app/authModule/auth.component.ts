import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'auth-component',
    template: `<h1>Auth</h1>
    <div>
        <a routerLink="signin">Signin</a>
        <a routerLink="signout">Signout</a>
    </div>
    <router-outlet></router-outlet>`
})
export class AuthComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}