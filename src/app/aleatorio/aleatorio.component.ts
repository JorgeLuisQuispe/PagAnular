import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent implements OnInit {

aleatorio:number=Math.floor(Math.random()*100)
//variable
color:String='red';

  constructor() { }
  
  ngOnInit(): void {
  }

  //metodos colores
  generrRadon():String{
    return Math.floor(Math.random()*255).toString(16);
  }
colorHexad():string{
  return "#" + this.generrRadon()+this.generrRadon()+this.generrRadon();
}

}
