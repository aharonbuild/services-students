import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  showGif:Subject<number> = new Subject<number>()
  resetFrom:Subject<null> = new Subject<null>()

  students:Student[]
  newStudent:Student

  constructor() { 
    console.log('constructor StudentsService');
    this.students = []
    this.newStudent = new Student()

    this.resetFrom.subscribe(()=>{
      this.newStudent = new Student()
    })
  }

  addNewStudent(s:Student):boolean{
    //ajax
    this.students.unshift(s)
    this.newStudent = new Student()
    return true
  }

  emptyStudents(){
    this.students = []
  }



}
