import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { UserComponent } from './user/user.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NameformatPipe } from './nameformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    UserComponent,
    DirectiveDemoComponent,
    NameformatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
