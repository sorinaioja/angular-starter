import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spongebob'
})
export class SpongebobPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    value = value.toUpperCase();
    return value.toUpperCase();
  }

}
