import { Routes } from "@angular/router";
import { TestComponent } from "./../test.component";
import { AuthComponent } from "./../authModule/auth.component";
import { SigninComponent } from "./../authModule/singin-component/singin.component";
import { SignoutComponent } from "./../authModule/signout-component/signout.component";

const routes: Routes = [
    {
        path: "", children: [
            { path: "", redirectTo: "", pathMatch: "full" },
            { path: "test", component: TestComponent },
            {
                path: 'auth', component: AuthComponent,
                children: [
                    { path: "", redirectTo: "auth", pathMatch: "full" },
                    { path: 'signin', component: SigninComponent },
                    { path: 'signout', component: SignoutComponent }
                ]

            }
        ]
    }
];

export const appRoutingProviders: any[] = [

];

export default routes;