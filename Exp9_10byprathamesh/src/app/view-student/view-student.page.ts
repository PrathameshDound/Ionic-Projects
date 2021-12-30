/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StudentService } from './../shared/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {
  updateStudentForm: FormGroup;
  id: any;
  constructor( private stuService: StudentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
    this.stuService.getStudent(this.id).valueChanges().subscribe(res => {
      this.updateStudentForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateStudentForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      class:[''],
      uid:[''],
      course:['']
  })
  console.log(this.updateStudentForm.value)
}
// updateForm() {
//   this.stuService.updateStudent(this.id, this.updateStudentForm.value)
//     .then(() => {
//       this.router.navigate(['/tabs/tab2']);
//     })
//     .catch(error => console.log(error));
// }
}
