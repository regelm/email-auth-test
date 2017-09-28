import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css'],
  providers: [StudentServiceService]
})
export class StudentComponentComponent implements OnInit {

  public students$: FirebaseListObservable<Student[]>;

  constructor(private studentSvc: StudentServiceService, 
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.students$ = this.studentSvc.getStudentsList({})
    this.printStudents();
  }

  printStudents() {
    console.log(this.students$)
  }

  createStudent() {
    this.router.navigate(['/create-student'])
  }

  logOut() {
    this.authService.signOut();
  }

}
