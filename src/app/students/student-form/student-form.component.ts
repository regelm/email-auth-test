import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  providers: [StudentServiceService]
})
export class StudentFormComponent implements OnInit {

  name = '';
  year: number;
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(private studentSvc: StudentServiceService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  createStudent(): void {
    this.clearErrorMessage()

    const tempStudent: Student = {
      name: this.name,
      advisor:  this.authService.currentUser.displayName,
      advisorUID: this.authService.currentUser.uid,
      year: this.year
    }
    
    if(this.validateForm(this.name, this.year)) {
      this.studentSvc.createStudent(tempStudent)
      this.router.navigate(['/students']);
    }
  }

  goBack() {
    this.router.navigate(['/students'])
  }

  validateForm(name: string, year: number) {
    console.log(name);
    console.log(name.length);
    if (name.length === 0) {
      this.errorMessage = 'Please enter the students name!';
      console.log(this.errorMessage);
      return false
    }
    return true
  }

}
