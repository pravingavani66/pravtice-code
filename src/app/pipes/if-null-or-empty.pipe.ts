import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifNullOrEmpty',
})
export class IfNullOrEmptyPipe implements PipeTransform {
  transform(value: string, defaultString: string = 'N/A') {
    if (!value) {
      return defaultString;
    } else {
      return value;
    }
  }
}
