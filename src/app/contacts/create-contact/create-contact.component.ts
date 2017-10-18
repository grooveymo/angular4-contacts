import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../models/contact';
import {ContactsService} from '../services/contacts-service.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  public model: Contact = new Contact(null, '', '', '');

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
  }

  onCreate() {
    console.log('creating contact');
    this.contactsService
      .createContact(this.model)
      .subscribe((data: Contact) => {
        console.log('routing to /edit-contact/' + JSON.stringify(data._id));
//        this.router.navigate(['/edit-contact/', data._id]);
      });
  }


}
