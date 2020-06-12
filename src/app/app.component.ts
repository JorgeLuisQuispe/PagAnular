import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nombre = '';
  nombre1 : String= '';

  HacerAlgo(){
    alert('Bienvenidos');
  }

  HacerAlgo2(){
    alert('Universidad UTP');
  }
  
  ngOnInit():void{
    
  }

}
