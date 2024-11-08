import { Pipe, PipeTransform } from '@angular/core';
import { Gasolinera } from '../models/gasolinera.interface';

@Pipe({
  name: 'googleMapsRoute'
})
export class GoogleMapsRoutePipe implements PipeTransform {

  transform(gasolinera: Gasolinera, ...args: unknown[]) {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.sanitizeValue(
      gasolinera.latitude
    )},${this.sanitizeValue(gasolinera.longitude)}&travelmode=driving`;
  }

  sanitizeValue(value: string): string {
    return value.replace(',', '.');
  }
}
