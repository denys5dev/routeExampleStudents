// Це наприклад те шо тоді треба в інших модулях використовувати
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    exports: [
        RouterModule,
        FormsModule,
        HttpModule
    ]
})
export class SharedModule { }
