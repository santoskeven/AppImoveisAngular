import { SnackbarService } from './../services/snackbar.service';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm:any = FormGroup;
  responseMessage:any;

  constructor(private formBuilder: FormBuilder,
    private userService:UserService,
    private dialogRef:MatDialogRef<ForgotPasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService) {}

    ngOnInit(): void{
      this.forgotPasswordForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]]
      })
    }

    handleSubmit(){
      this.ngxService.start();
      let formData = this.forgotPasswordForm.value;
      let data = {
        email: formData.email
      }
      this.userService.forgotPassword(data).subscribe((response:any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.dialogRef.close();
        this.snackBarService.openSnackBar(this.responseMessage, "");
      }, (error) => {
        this.ngxService.stop();
        if(error.error?.message){
          this.responseMessage = error.error?.message;
        }
        else{
          this.responseMessage = GlobalConstants.genericError; 
        }
        this.snackBarService.openSnackBar(this.responseMessage, GlobalConstants.error);
      })
    }

}
