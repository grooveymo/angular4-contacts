import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  //@Input()
  private model : Contact = new Contact(null, '', '', '');

  constructor() { }

  ngOnInit() {
  }

}
