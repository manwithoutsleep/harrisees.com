import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  songs: Observable<any[]>;
  title = 'Harrisees';

  constructor(firestore: AngularFirestore) {
    this.songs = firestore.collection('songs').valueChanges();
  }
}
