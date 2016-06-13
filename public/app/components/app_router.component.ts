import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from './home.component'
import {Component1Component} from './component1.component'
import {Component2Component} from "./component2.component";

@Component({
    selector: 'app-router',
    template: `
          <div class="container">
                <a [routerLink]="['/Home']">Home Component</a>
                <a [routerLink]="['/Component2']">Component 2</a>
                <a [routerLink]="['/Component1']">Component 1</a>
                <router-outlet></router-outlet>
          </div> 
          
`,
    directives: [ROUTER_DIRECTIVES, Component1Component, Component2Component],
    styles:['.container {width: 600px; margin: 0 auto; padding: 30px; background: #eaeaea} a {display: inline-block; padding: 5px 0px; margin-bottom: 10px; margin-right: 10px;}']
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/component2', name: 'Component2', component: Component2Component },
    { path: '/component1', name: 'Component1', component: Component1Component }
])
export class AppRouterComponent {}