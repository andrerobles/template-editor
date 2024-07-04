import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlateEditorComponent } from './components/slate-editor/slate-editor.component';
import { SlateModule } from 'slate-angular';
import { FormsModule } from '@angular/forms';
import { ViewTypeComponent } from './components/view-type/view-type.component';

@NgModule({
  declarations: [AppComponent, SlateEditorComponent, ViewTypeComponent],
  imports: [BrowserModule, AppRoutingModule, SlateModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
