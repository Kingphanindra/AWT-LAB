import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student = { name: '', age: '', branch: '' };
  @Output() addStudent = new EventEmitter<any>();

  onSubmit() {
    this.addStudent.emit(this.student);
    this.student = { name: '', age: '', branch: '' };
  }
}