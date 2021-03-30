import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModalComponent } from './core/user-modal/user-modal.component';
import { UserModalModule } from './core/user-modal/user-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModalModule
  ],
  entryComponents: [UserModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
