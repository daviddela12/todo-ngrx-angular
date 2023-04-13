import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from "@angular/forms";
import {TodoModule} from "./store/todo/todo.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        TodoModule,
        StoreModule.forRoot({}, {}),
        FormsModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }