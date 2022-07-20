import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
message;
  constructor(private userServ:UserService) { }

  ngOnInit() {
    this.forUser();
  }
forUser(){
  this.userServ.forUser().subscribe(
    (res)=>{
      console.log(res)
      this.message = res;
    },
    (error)=>{
      console.log(error);
    }
  )
}
}
