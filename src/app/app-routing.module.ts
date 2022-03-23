import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () => import('./features/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./features/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
