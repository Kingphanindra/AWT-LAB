import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() students: any[] = [];
  @Output() deleteStudent = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteStudent.emit(index);
  }
}