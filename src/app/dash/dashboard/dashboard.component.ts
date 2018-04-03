import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
declare var googleyolo: any;

enum Status {
  Initial,
  SignedIn,
  Canceled
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public status :Status = Status.Initial;
  public statusText = "Sign-in required!";

  constructor(private loginSvc: LoginService) { }

  ngOnInit() {
    this.signIn();
  }

  signIn(){
    this.status = Status.Initial;
    this.loginSvc.loginUser().then( (credential)=>{
      this.statusText = "Hi " + credential.displayName;
      this.status = Status.SignedIn;
    }, (error)=> {
      if(error && error.type ==="userCanceled"){
        this.status = Status.Canceled;
      }
    });
  }
}