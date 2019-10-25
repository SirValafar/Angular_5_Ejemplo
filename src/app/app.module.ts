import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegosComponent} from './Videojuegos/videojuegos.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
