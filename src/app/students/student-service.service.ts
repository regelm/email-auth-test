import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Student } from './student';
import { firebase } from '../app.module';
import { AuthService } from '../core/auth.service';

@Injectable()
export class StudentServiceService {

  private basePath: string = '/students';

  students$: FirebaseListObservable<Student[]> = null;
  student: FirebaseObjectObservable<Student> = null;

  constructor(private db: AngularFireDatabase,
              private authService: AuthService) { }

  // Get a list of students
  getStudentsList(query={}): FirebaseListObservable<Student[]> {
    this.students$ = this.db.list(this.basePath, {
      query: {
        orderByChild: 'advisorUID',
        equalTo: this.authService.currentUser.uid
      }
    });
    return this.students$
  }

  // Return a single student
  getStudent(key: string): FirebaseObjectObservable<Student> {
    const studentPath = `${this.basePath}/${key}`;
    this.student = this.db.object(studentPath)
    return this.student
  }

  createStudent(student: Student): void {
    this.getStudentsList();
    console.log("Inside createStudent");
    console.log(student.name);
    console.log(student.advisor);
    console.log(student.year);
    this.students$.push(student)
      .catch(error => this.handleError(error))
  }

  handleError(error) {
    console.log(error)
  }

}
