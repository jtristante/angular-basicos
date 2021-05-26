import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes : string [] = ['Spiderman', 'Sperman' , 'hulky', 'PepePerez', 'juan'];
  heroeBorrado:string  ='';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';

  }


}
