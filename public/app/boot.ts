import {bootstrap} from 'angular2/platform/browser'
import {AppRouterComponent} from './components/app_router.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(
    AppRouterComponent,
    [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
);