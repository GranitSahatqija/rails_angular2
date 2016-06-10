import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from './home.component'
import {Component1Component} from './component1.component'

@Component({
    selector: 'app-router',
    template: '<router-outlet></router-outlet><component-1></component-1>',
    directives: [ROUTER_DIRECTIVES, Component1Component],
    styles:[]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent }
])
export class AppRouterComponent {}