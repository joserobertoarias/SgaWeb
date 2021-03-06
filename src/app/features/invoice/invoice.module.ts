import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';
import { CancelComponent } from './components/cancel/cancel.component';

@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    IndexComponent,
    CancelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InvoiceRoutingModule,
  ],
  exports: [
  ]
})
export class InvoiceModule { }
