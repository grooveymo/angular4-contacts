import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../services/contacts-service.service";
import {Router} from "@angular/router";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {


  public contacts : Contact[];

  constructor(private router: Router, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data
    });
  }

  editContact(id: string) {
    this.router.navigate(['/edit-contact/', id]);
  }

  removeContact(id: string) {
    this.contactsService.removeContact(id)
      .subscribe((data: number) => {
        if(data === 200) {
          this.contacts = this.contacts.filter(function(contact){
            return contact._id != id;
          });
        }
      });
  }

}
