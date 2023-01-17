import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { UserComponent } from './user/user.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NameformatPipe } from './nameformat.pipe';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    UserComponent,
    DirectiveDemoComponent,
    NameformatPipe,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
