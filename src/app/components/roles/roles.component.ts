import { Component } from '@angular/core';
import { FormsModule } from '@Angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  // types of variables
  // string , number , boolean,date,object,array,null,undefined
  firstName: string = 'Angular Tutorial';
  angularVersion = 'Version 18';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';
  selectedState: string = '';

  // normal function
  showWelcomeAlert(){
    alert("Welcome Aime")
  }

  //function with paramenters
  showMessage(message:string){
     alert(message)
  }
}
