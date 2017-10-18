import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AppCommonModule} from './common/common.module';
import {HomeModule} from './home/home.module';
import {ContactsModule} from './contacts/contacts.module';

import {CreateContactComponent} from './contacts/create-contact/create-contact.component';
import {HomeComponent} from './home/home/home.component';
import {ListContactsComponent} from './contacts/list-contacts/list-contacts.component';
import {EditContactComponent} from './contacts/edit-contact/edit-contact.component';

// import {NavBarComponent} from "./common/nav-bar/nav-bar.component";


// declare app routes (note should not have leading slash)
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create-contact', component: CreateContactComponent},
  {path: 'view-contacts', component: ListContactsComponent},
  {path : 'edit-contact/:id', component : EditContactComponent}
];

@NgModule({
  declarations: [
    AppComponent
    // ,
    // HomeComponent,
    // CreateContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppCommonModule,
    HomeModule,
    ContactsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule
  ]
})
export class AppModule {
}
