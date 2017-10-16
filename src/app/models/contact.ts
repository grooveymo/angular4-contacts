export class Contact {
  _id : number;
  firstName : string;
  lastName : string;
  email : string;

  constructor(_id, firstName, lastName, email) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
