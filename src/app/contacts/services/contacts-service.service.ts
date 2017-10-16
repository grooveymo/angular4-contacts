import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contact } from '../../models/contact';


const CONTACTS_REST_API: string = 'http://localhost:9090/api/contacts';


@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  /**
   * Creates a new contact
   * @param body Contact details
   * @returns {Observable<Contact>}
   */
  createContact(body): Observable<Contact> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log('inside service with body : ' + JSON.stringify(body));
    return this.http
      .post(CONTACTS_REST_API, body, options)
      .map((response: Response) => {
        let res = response.json();
        let persistedContact = res.contact;
        console.log('1.) service responds with ' + JSON.stringify(res));
        console.log('2.) service responds with ' + JSON.stringify(persistedContact));
        return persistedContact;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')
      );

  }


  /**
   * Retrieves all Todo lists
   */
  getContacts(): Observable<Contact[]> {
    console.log('about to call ' + CONTACTS_REST_API);
    return this.http
      .get(CONTACTS_REST_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeContact(contactId: string) {
    let path = CONTACTS_REST_API + '/' + contactId;

    return this.http.delete(path)
      .map((response: Response) => {
        console.log('DDT 1 ==> ' + JSON.stringify(response.status));
        console.log('DDT  2==> ' + JSON.stringify(response.json()));
        return response.status;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }

  getContact(contactId: string) {
    let path = CONTACTS_REST_API + '/' + contactId;
    console.log('ContactsService[1] : about to call GET/ ' + path);
    return this.http
      .get(CONTACTS_REST_API)
//      .map((response: Response) => response.json())
      .map(
        (response: Response) => {
          console.log('ContactsService[2] : res =  ', response);
          return response.json()[0];
        })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
