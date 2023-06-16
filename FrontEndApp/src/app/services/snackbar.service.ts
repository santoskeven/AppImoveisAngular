import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(message:string, action:string){
    if(action === 'error'){
      this.snackbar.open(message, '',{
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['black-snackbar']
      })
    }else{
      this.snackbar.open(message, '',{
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['green-snackbar']
      })
    }
  }

}
