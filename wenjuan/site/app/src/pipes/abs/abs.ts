import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AbsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'abs',
})
export class AbsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
        return Math.abs(parseInt(value));
  }
}
