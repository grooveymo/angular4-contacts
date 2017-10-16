import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ContactsService} from "../services/contacts-service.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public model : Contact = new Contact("","","","");

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit() {

    console.log('EditContact : ');

    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(params['id']))
      .subscribe(
        (contact: Contact) => {
          console.log('EditContact : ', contact);

          this.model = contact;
          console.log('EditContact : firstname = ' + contact.firstName);
        }
      );
  }

}
