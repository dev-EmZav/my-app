import { Injectable } from '@angular/core';
import{v4 as uuid} from 'uuid';

import { Characters } from '../../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DBZService {


  public characters: Characters[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 95000

  },{
    id: uuid(),
    name: 'Trunkcs',
    power: 6400

  }];

    addCharacter(character:Characters):void{
      const newCharacter:Characters ={
        id: uuid(),...character
      }
      this.characters.push(character);
      // const newCharacter:Characters ={
      //   id: uuid(),
      //   name: character.name,
      //   power: character.power,
      // }
    }


    deleteCharacterById(id:string){
      this.characters = this.characters.filter(characters => characters.id !== id);

    }
}
