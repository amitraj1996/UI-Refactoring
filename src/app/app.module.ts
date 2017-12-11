import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {AppRootComponent } from './app-root.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { MyChannelsComponent } from './my-channels/my-channels.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { InboxComponent } from './inbox/inbox.component';
import { FollowChannelComponent } from './follow-channel/follow-channel.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChannelsComponent } from './channels/channels.component';

// Material imports to be done below
import {
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';






const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'messages/inbox', component: AppComponent},
  {path : "channels", component: FollowChannelComponent },
  {path: "users", component: NewContactComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatAreaComponent,
    MyChannelsComponent,
    MyContactsComponent,
    InboxComponent,
    FollowChannelComponent,
    NewContactComponent,
    ContactsComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
