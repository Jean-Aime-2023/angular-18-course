import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../model/services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList:IDesignation[]=[]
  isLoader:boolean = true;
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: APIResponseModel) => {
      this.designationList=result.data;
    },error=>{
      alert("API error / Network Down")
    });
  }
}
