import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveModule } from './reactive/reactive.module';

const routes: Routes = [

{
  path: 'template',
  loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)
},

{
  path: 'template',
  loadChildren:()=>import('./reactive/reactive.module').then(m=>m.ReactiveModule)
},

{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
