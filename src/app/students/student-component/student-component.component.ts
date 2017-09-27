import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css'],
  providers: [StudentServiceService]
})
export class StudentComponentComponent implements OnInit {

  public students$: FirebaseListObservable<Student[]>;

  constructor(private studentSvc: StudentServiceService) { }

  student1: Student = {
    name: "Scott Harris",
    advisor: "Scott Thede",
    year: 2020
  }

  ngOnInit() {
    this.students$ = this.studentSvc.getStudentsList({})
    this.studentSvc.createStudent(this.student1);
    this.printStudents();
  }

  printStudents() {
    console.log(this.students$)
  }

}
