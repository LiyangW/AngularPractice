import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user={remember:false,username:'',password:''};
  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit():void {
  	console.log("User: ",this.user);
  	this.dialogRef.close(); 
  }

}
