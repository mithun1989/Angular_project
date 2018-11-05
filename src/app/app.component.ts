import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
public txtUserName;
public txtName;
public txtPassword;
public parentData;
public address;
public phone;
public confirmPwd;
public flag=true;

submit(){
  if(this.txtPassword.match("(?=.*[a-z])") && this.txtPassword === this.confirmPwd){
  alert("password validated");
  this.flag=false;
  }
  else{
    alert("invalid password");
    this.flag=true;
  }
  console.log("hello");
  console.log(this.txtUserName);
  console.log(this.txtName);
  console.log(this.txtPassword);
  console.log(this.confirmPwd)
 this.parentData ={
   'UserName':this.txtUserName,
   'Name':this.txtName,
   'Password':this.txtPassword,
   'Address':this.address,
   'Phone':this.phone,
   'ConfirmPwd':this.confirmPwd
  };
}
}
