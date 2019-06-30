import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  year: number = new Date().getFullYear();
  inputText: string;

  //Called when input is updated
  onInputChange(eventArgs) {
    this.inputText = eventArgs.val;
  }

}
