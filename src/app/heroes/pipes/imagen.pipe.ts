import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure en false hace que cualquier cambio de angular recargue en el pipe, y por lo tanto se refresque la imagne, pero sobrecarga la aplicación
  /* pure: false, */
})
export class ImagenPipe implements PipeTransform {
  /* urlHeroes: string = "assets/heroes/" */

  transform(heroe: Heroe): string {
    /* return (this.urlHeroes+value.id+'.jpg') */

    if (!heroe.id && !heroe.alt_img) {
      return `assets/no-image.png`;
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    }
    return `assets/heroes/${heroe.id}.jpg`;
  }
}
