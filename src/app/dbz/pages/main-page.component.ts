import { Component } from '@angular/core';
import { Characters } from '../interfaces/character.interface';
import { DBZService } from './services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DGBZComponent {
//public characters: Characters[];

constructor(private dbzService : DBZService){}

  get characters(): Characters[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Characters):void{
    this.dbzService.addCharacter(character);
  }


}
