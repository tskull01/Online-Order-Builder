import { Component, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-burger-builder',
  templateUrl: './burger-builder.component.html',
  styleUrls: ['./burger-builder.component.css']
})
export class BurgerBuilderComponent {

  @Output() sendList = new EventEmitter(); 
  object:Object; 
  options = [
    ' Mayo ',
    ' Lettuce ',
    ' Pickles ',
    ' Tomatoes ',
    ' Grilled Onions ',
    ' Ketchup ',
    ' Mustard ',
    ' Jalapeno Peppers ',
  ];

  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
 
  finishBurger(){
    this.object = {
      arr:this.done,
      val1: false,
      val2: true,
    } 
    this.sendList.emit(this.object); 
  }
}
