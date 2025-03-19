import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentFormComponent } from './student-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentListComponent, StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students';
  students = [
    { name: "Phani", age: 20, branch: "IT" },
    { name: "Karthik", age: 20, branch: "IT" },
    { name: "Jayanth", age: 50, branch: "IT" },
    { name: "Md Khader", age: 21, branch: "IT" },
    { name: "Paarthiv", age: 22, branch: "IT" },
    { name: "Charan", age: 20, branch: "CSE" }
  ];

  addStudent(student: any) {
    this.students.push(student);
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}