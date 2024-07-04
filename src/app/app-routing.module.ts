import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlateEditorComponent } from './components/slate-editor/slate-editor.component';

const routes: Routes = [
  { path: '', component: SlateEditorComponent, title: 'Editor' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
