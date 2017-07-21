import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../core/user.service";

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
     currentUser;

    constructor(private  router: Router, private userSv: UserService) {
    }

    ngOnInit() {
        this.currentUser = this.userSv.current;
    }


    logout() {
        this.userSv.logout().then(() => {
            this.router.navigate(['/login'])
        });
    }

}
