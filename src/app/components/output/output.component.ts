import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnChanges {

  @Input() inputText: string;
  private output: string = 'test';

  //Called when recived changes on input
  ngOnChanges() {

    let text = this.inputText as any;

    //If it is not a number, output nothing
    if (isNaN(text) || text == '') {

      this.output = '';

    } else {

      //Do the checks for divisions
      if (text % 15 == 0)
        this.output = 'FooBar';
      else if (text % 5 == 0)
        this.output = 'Bar';
      else if (text % 3 == 0)
        this.output = 'Foo';
      else
        this.output = '';

    }

  }

}
