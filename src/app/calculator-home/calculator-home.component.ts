
import { Component, OnInit } from '@angular/core';
//import {commonService} from '../common.service';
import { first } from 'rxjs/operators';
import { User } from 'src/user';

@Component({
  selector: 'app-calculator-home',
  templateUrl: './calculator-home.component.html',
  styleUrls: ['./calculator-home.component.css']
})
export class CalculatorHomeComponent implements OnInit {
  LogedinUser!: User;
  users: User[] = []; 
  constructor()
   {
    this.LogedinUser= JSON.parse(localStorage.getItem('currentUser')||'{}');   

    }

  ngOnInit(): void 
  {
    this.getLogedInUserDetails();
  }

  getLogedInUserDetails()
  {
  //   this.serv.getAll().pipe(first()).subscribe(users => { 
  //     this.users = users; 
      
  // }
  // );

  }

}




