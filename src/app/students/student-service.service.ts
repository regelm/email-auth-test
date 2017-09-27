import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Student } from './student';
import { firebase } from '../app.module';

@Injectable()
export class StudentServiceService {

  private basePath: string = '/students';

  students$: FirebaseListObservable<Student[]> = null;
  student: FirebaseObjectObservable<Student> = null;

  constructor(private db: AngularFireDatabase) { }

  // Get a list of students
  getStudentsList(query={}): FirebaseListObservable<Student[]> {
    this.students$ = this.db.list(this.basePath, {
      query: query
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
    this.students$.push(student)
      .catch(error => this.handleError(error))
  }

  handleError(error) {
    console.log(error)
  }

}
