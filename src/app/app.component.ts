import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  fisrtname: string;
  lastname: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List';
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {}
  
    ngOnInit() {
      this.postsCol = this.afs.collection('contactlist');
      this.posts = this.postsCol.valueChanges();
    }
}
