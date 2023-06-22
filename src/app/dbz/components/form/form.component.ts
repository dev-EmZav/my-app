import { Component, EventEmitter, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class DBZFormComponent {

  @Output()
  public onNewChacter:EventEmitter<Characters> = new EventEmitter();

  public character: Characters={
    name: '',
    power: 0,
  }



  emitCharacter():void{

    if( this.character.name.length === 0) return;
    this.onNewChacter.emit(this.character);

    this.character = { name: '', power: 0 };

  }

}
