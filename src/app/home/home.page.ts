import { Component, OnInit } from '@angular/core';
import { Contacts, ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: Contacts[] = [];
  search: string = '';
  constructor(
    private contactsService: ContactsService,
  ) {}

  ngOnInit() {
    this.data = this.contactsService.getContacts();
  }

  submit(){
    console.log('search ', this.search);
    this.data = this.contactsService.getContactByMovil(this.search);
  }

}
