import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './lst.component.html',
  styleUrls: ['./lst.component.css']
})


export class ListComponent {

  @Input()
  public characterList : Characters[]=[{
    name: 'Trunks',
    power: 100
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();


  OnDeleteCharacter(id?:string):void{

    if (!id) return ;
    this.onDelete.emit(id);
  }

}
