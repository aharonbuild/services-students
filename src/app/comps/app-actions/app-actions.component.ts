import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-actions',
  templateUrl: './app-actions.component.html',
  styleUrls: ['./app-actions.component.css']
})
export class AppActionsComponent implements OnInit {

  constructor(private s:StudentsService) { }

  ngOnInit() {
  }

  resetFrom(){
    this.s.resetFrom.next()
  }
  resetTable(){
    this.s.emptyStudents()
  }
  showGif(){
    this.s.showGif.next(1200)
  }

}
