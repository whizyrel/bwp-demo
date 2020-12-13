import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@blox/material';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRippleModule } from '@angular/material';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MailboxComponent } from './mailbox/mailbox.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { HeaderBackgroundDirective } from './directives/header-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBodyComponent,
    MailboxComponent,
    SocialMediaIconsComponent,
    HeaderBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
