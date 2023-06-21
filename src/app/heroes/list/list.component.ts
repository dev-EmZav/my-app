import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ['Spider-Man','Wolvering','Ciclope','Bestia','Magneto'];
  public heroeBorrado?:string ='';

  removeLastElement():void{

    this.heroeBorrado = this.heroNames.pop();

  }

  addNewElement():void{
    let text;
    let heroeNew = prompt("Porfavor inserta el nuevo nombre:","Nombre del super heroe");

    if (heroeNew == null || heroeNew == "") {
      text = "El ususario cancelo el registro";
    } else {
      this.heroNames.push(heroeNew);
      this.heroeBorrado = '';
    }


  }
}
