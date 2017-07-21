import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixNumber'
})
export class FixNumberPipe implements PipeTransform {

    transform(value: string, length: number) {
        let dif = length - value.toString().length;

        if (dif > 0) {
            return '0'.repeat(dif) + value;
        } else {
            return value;
        }

    }

}
