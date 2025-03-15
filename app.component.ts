import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
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
    { name: "Paarthiv", age: 22, branch: "IT" }
  ];
  isTrue = false;

  toggle() {
    this.isTrue = !this.isTrue;
  }
}
