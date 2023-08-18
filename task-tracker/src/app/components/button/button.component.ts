import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

 @Input() text: string | undefined;
 @Input() color: string | undefined;


 toggleAddTask(){
   console.log("TOOGLE")
  }

}
