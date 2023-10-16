import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtncomponentComponent } from './btncomponent/btncomponent.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    BtncomponentComponent,
    GenericComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
