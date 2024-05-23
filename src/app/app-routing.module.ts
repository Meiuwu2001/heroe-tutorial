import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './view/table/table.component';
import { FormComponent } from './view/form/form.component';

const routes: Routes = [
  {path: 'table', component:TableComponent},
  {path: 'form', component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
