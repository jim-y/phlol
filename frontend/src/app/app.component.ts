import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My First Angular app';

  constructor() {
    const config = {
      apiKey: "AIzaSyDZ3jqIulXdJNNfXG8pgyYZ56h0QES6MV8",
      authDomain: "phlol-a8d1b.firebaseapp.com",
      databaseURL: "https://phlol-a8d1b.firebaseio.com",
      projectId: "phlol-a8d1b",
      storageBucket: "",
      messagingSenderId: "67648856455"
    };
    firebase.initializeApp(config);
  }
}
