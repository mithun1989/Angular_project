import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() public parentData;
UserName;
Password;
flag=true;
  constructor() { }

  ngOnInit() {
  }
  login(){
    if(this.parentData.Password === this.Password && this.parentData.UserName === this.UserName){
     
    console.log("\n\n\n");
    console.log(this.Password);
    console.log(this.UserName);
    this.flag=false;
    }
    else{
     console.log("not valid")
     this.flag=true;
    }

  }

}