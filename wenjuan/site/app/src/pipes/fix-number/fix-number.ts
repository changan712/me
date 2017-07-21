import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the FixNumberPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
    name: 'fixNumber',
})
export class FixNumberPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: string, length: number) {
        let dif = length - value.toString().length;
        
        if (dif > 0) {
            return '0'.repeat(dif) + value;
        } else {
            return value;
        }

    }
}
