import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

var config = {
  apiKey: "AIzaSyC25zNygSb6ZOHGwfHjPTd60ggF7E_kKlM",
  authDomain: "firestore-d2033.firebaseapp.com",
  databaseURL: "https://firestore-d2033.firebaseio.com",
  projectId: "firestore-d2033",
  storageBucket: "firestore-d2033.appspot.com",
  messagingSenderId: "960561381620"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
