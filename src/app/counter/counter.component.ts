import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  template: `<h1>Hola Counter</h1>

<h3>Counter: {{counter}}</h3>
<br>
<button (click)="sumar(1)" style="height: 20px; width: 200px;">Aumentar +1</button>
<br>
<br>
<button (click)="restar(1)" style="height: 20px; width: 200px;">Decremenatar -1</button>
<br>
<br>
<button (click)="restablecer()" style="height: 20px; width: 200px;">Restablecer</button>
`
})


export class CounterComponent {
  public counter: number;

  constructor(){
    this.counter = 10;
  }

 sumar( value: number):void{
   this.counter = this.counter + value;
 }

 restar( value: number):void{
    this.counter = this.counter - value;
 }

 restablecer(
 ):void{
    this.counter = 10;
 }

}
