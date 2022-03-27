import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBaseComponent } from 'src/app/shared/components/dialog-base/dialog-base.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  progressBarMode: ProgressBarMode = 'determinate';
  isEditing: boolean = true;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;



  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Save(): void{

  

      this.isEditing = false;
      this.progressBarMode = 'indeterminate';
      setInterval(() => {
        this.progressBarMode = 'determinate';
        this.router.navigate(['/invoice']);
  
      },10000);
  
    

  }

 openDialog() {

   let dialogRef = 
   this.dialog.open(DialogBaseComponent, 
    {data: {
      content: 'nombre de algo',
      title: 'titulo de algo',
      btnOk: 'Ok',
      btnCancel: 'Cancel'
    }});

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
     if (result == 'true'){
      this.Save();
     }
   })


 }

}


