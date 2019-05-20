import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
loadedFeature = 'recipes';

constructor() {
  firebase.initializeApp({
    apiKey: 'AIzaSyCvhsAPcJsx7HlLVC1GCUMopNNZGzr6TkY',
    authDomain: 'ng-recipe-book-acf20.firebaseapp.com'
  });
}

ngOnInit() {

}

}
