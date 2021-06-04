import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {
  
  
  nuevo :Personaje = {
    nombre:'Maestro',
    poder: 123
  }

  constructor(){
  }
  
 

  /**
  cambiarNombre(event:any){
    console.log(event.target.value)
  }
  **/

}
