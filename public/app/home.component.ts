import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'home',
    templateUrl: '/app/home.component.html'
})

export class HomeComponent {
    message: string;
    
}