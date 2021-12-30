  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  import { IonicModule } from '@ionic/angular';

  import { ViewStudentPageRoutingModule } from './view-student-routing.module';

  import { ViewStudentPage } from './view-student.page';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ViewStudentPageRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [ViewStudentPage]
  })
  export class ViewStudentPageModule {}
