import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './components/cancel/cancel.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'index', component: IndexComponent},
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
