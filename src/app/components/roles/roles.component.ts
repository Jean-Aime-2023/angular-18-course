import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@Angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // // types of variables
  // // string , number , boolean,date,object,array,null,undefined
  // firstName: string = 'Angular Tutorial';
  // angularVersion = 'Version 18';
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'button';
  // selectedState: string = '';

  // // normal function
  // showWelcomeAlert(){
  //   alert("Welcome Aime")
  // }

  // //function with paramenters
  // showMessage(message:string){
  //    alert(message)
  // }

  roleList: IRole [] = [];
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles(){
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any)=>{
      this.roleList = res.data;
    }) 
  }
}
