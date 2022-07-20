import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message;
  constructor(private userServ:UserService) { }

  ngOnInit() {
    this.forAdmin();
  }
forAdmin(){
  this.userServ.forAdmin().subscribe(
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
