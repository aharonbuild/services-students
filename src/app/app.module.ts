import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewStudentComponent } from './comps/new-student/new-student.component';
import { StudentsTableComponent } from './comps/students-table/students-table.component';
import { AppActionsComponent } from './comps/app-actions/app-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStudentComponent,
    StudentsTableComponent,
    AppActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
