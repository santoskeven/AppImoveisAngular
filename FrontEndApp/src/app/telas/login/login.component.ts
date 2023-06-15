import { SnackbarService } from './../../services/snackbar.service';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:any = FormGroup;
  responseMessage:any;

  constructor (private formbuider:FormBuilder,
    private route: Router,
    private userService:UserService,
    private snackbarService:SnackbarService,
    private dialogRef:MatDialogRef<LoginComponent>,
    private ngxService:NgxUiLoaderService){}

    ngOnInit(): void{
      this.loginForm = this.formbuider.group({
        name:[null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
        email:[null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
        contactNumber:[null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
        password:[null, [Validators.required]],
      })
    }

    handleSubmit(){
      this.ngxService.start();
      let FormData = this.loginForm.value;
      let data = {
        name: FormData.name,
        email:FormData.email,
        contactNumber:FormData.contactNumber,
        password:FormData.password
      }
      this.userService.signup(data).subscribe((response:any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = response?.message;
        this.snackbarService.openSnackBar(this.responseMessage, '');
        this.route.navigate(['/']);
      }, (error) => {
        this.ngxService.stop();
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }
        else{
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error)
      })
    }

}
