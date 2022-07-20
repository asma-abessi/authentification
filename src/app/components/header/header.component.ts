import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthServ:UserAuthService,public userServ:UserService, private router:Router) { }

  ngOnInit() {
  }
public isLoggedIn(){
  return this.userAuthServ.isLoggedIn();
}
public logout(){
   this.userAuthServ.clear();
   this.router.navigate(["/home"]);
}
}
