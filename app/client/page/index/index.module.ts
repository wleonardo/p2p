import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent }   from './index.component.ts';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ IndexComponent ],
  bootstrap:    [ IndexComponent ]
})
export class IndexModule { }