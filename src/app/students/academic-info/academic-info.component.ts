import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface Standard {
  value: string;
  viewValue: string;
}

export interface Section {
  value: string;
  viewValue: string;
}

export interface House {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'msa-academic-info',
  templateUrl: './academic-info.component.html',
  styleUrls: ['./academic-info.component.scss']
})
export class AcademicInfoComponent implements OnInit {

  academicInfoForm: any;

  standards: Standard[] = [
    { value: 'LKG', viewValue: 'LKG' },
    { value: 'UKG', viewValue: 'UKG' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11', viewValue: '11' },
    { value: '12', viewValue: '12' }
  ];

  sections: Section[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' }
  ];

  houses: House[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' }
  ];

  constructor(private formbulider: FormBuilder) { }

  ngOnInit() {
    this.academicInfoForm = this .formbulider.group({
      registrationNo:[''],
      rollNo:[''],
      IDCardNo:[''],
      boardRegistrationNo:[''],
      standard:[''],
      section:[''],
      houseName:['']
    });
  }

}
