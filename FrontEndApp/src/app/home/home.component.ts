import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog"
import { LoginComponent } from '../telas/login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog:MatDialog)
  {
  }

  SigNupClient(){
    // console.log('teste ')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '500px',
    // dialogConfig.height = '200px',
    this.dialog.open(LoginComponent, dialogConfig)
  }

  forgotPasswordAction(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '500px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig );
  }

}
