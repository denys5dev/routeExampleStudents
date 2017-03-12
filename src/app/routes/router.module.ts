import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import appRoutes from './routes';

// used to map object of imports into array so we can use
// the spread operator in the ngModule definition
const arr = obj => Object.keys(obj).map(name => obj[name]);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });

@NgModule({
    imports: [
        routing
    ],
    declarations: [
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})



export class RoutesModule {

}