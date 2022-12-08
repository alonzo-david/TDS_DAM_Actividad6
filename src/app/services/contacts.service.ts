import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';

export interface Contacts {
  idcontacto?: string;
  nombre?: string;
  direccion?: string;
  correo?: string;
  movil?: string;
  casa?: string;
}
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  data: Contacts[] = [];

  constructor(private fireStore: Firestore) {}

  private async setContacts() {
    this.data = [];
    const q = query(collection(this.fireStore, 'contacts'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const filter = doc.data() as Contacts;
      this.data.push(filter);
    });
  }

  getContacts() {
    this.setContacts();
    return this.data;
  }

  getContactByMovil(value: string) {
    return value.trim() === ''
      ? this.data
      : this.data.filter((x) => x.movil === value || x.casa === value);
  }
}
