import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {


    public superheroe:string = "Iron Man";
    public nombre:String = "Tony Stark"
    public edad:number = 35;
    public stateButtonName:boolean = true;
    public stateButtonEdad:boolean = true;
    constructor(){

    }

    cambiarNombre() {
      let text;
      let person = prompt("Porfavor inserta el nuevo nombre:","Nombre del super heroe");

      if (person == null || person == "") {
        text = "El ususario cancelo el registro";
      } else {
        this.nombre = person;
        this.stateButtonName = !this.stateButtonName;
      }
    }


    cambiarEdad() {
      let text;
      let edadNueva = prompt("Porfavor inserta la nueva edad:","Edad del super heroe");

      if (edadNueva == null || edadNueva == "") {
        text = "El ususario cancelo el registro";
      } else {
        this.edad = parseInt(edadNueva);
        this.stateButtonEdad = !this.stateButtonEdad;

      }
    }

      get capitalizarNombre():string{
        return this.nombre.toUpperCase();

      }
}
