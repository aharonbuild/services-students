import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {


  @ViewChild('name', { static:false }) name:ElementRef
  @ViewChild('age', { static:false }) age:ElementRef
  @ViewChild('gif', { static:false }) gif:ElementRef


  newStudent:Student

  constructor(private svc:StudentsService) { }

  ngOnInit() {
    this.newStudent = new Student()

    this.svc.showGif.subscribe(ms => {
      let g = this.gif.nativeElement as HTMLElement
      g.style.display = 'block'
      setTimeout(()=>g.style.display = 'none',ms)
    })

    this.svc.resetFrom.subscribe(()=>{
      this.newStudent = new Student()
      this.name.nativeElement.value = ''
      this.age.nativeElement.value = ''
    })

  }

  saveStudent(){
    this.svc.addNewStudent(this.newStudent)
    this.newStudent = new Student()
    this.name.nativeElement.value = ''
    this.age.nativeElement.value = ''
  }
}
