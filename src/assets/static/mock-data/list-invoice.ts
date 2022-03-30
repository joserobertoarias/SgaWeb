import { sga_invoice } from './../../../app/features/invoice/components/model/sga_invoice';

export const invoices: sga_invoice[] =
[
   {
      id: 1,
      cIDCompany: 'TEGU',
      cSerie: 'A',
      nCorrelative: 1,
      cDocumentType: '12',
      dEmission : new Date(2022,3,29),
      nTotal: 125.50,
      cIDInvoice: 'A1',
   },
   {
      id: 2,
      cIDCompany: 'TEGU',
      cSerie: 'A',
      nCorrelative: 2,
      cDocumentType: '12',
      dEmission : new Date(2022,3,29),
      nTotal: 58.6350,
      cIDInvoice: 'A2'
   }  
]
 