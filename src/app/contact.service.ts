import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { contact } from '../app/httpObjects/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactCollection: AngularFirestoreCollection<contact>;
  contact: Observable<contact[]>;

  constructor(public afs: AngularFirestore) { 
    this.contactCollection = this.afs.collection('vistordetails');
  }
  addContact(contact: contact) {
    
    this.contactCollection.add(contact);
  }
}
