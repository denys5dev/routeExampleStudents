
import { NgModule } from '@angular/core';
import { SharedModule } from "./../sharedModule/shared.module";

import { AuthComponent } from "./auth.component";
import { SigninComponent } from "./singin-component/singin.component";
import { SignoutComponent } from "./signout-component/signout.component";

@NgModule({
    declarations: [
        AuthComponent,
        SigninComponent,
        SignoutComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [
        AuthComponent,
        SigninComponent,
        SignoutComponent
    ]
})
export class AuthModule { }
