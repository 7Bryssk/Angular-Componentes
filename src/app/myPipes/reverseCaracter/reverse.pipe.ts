import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');

    // string 'abc'
    // split ['a', 'b', 'c']
    // reverse ['c', 'b', 'a']
    // join 'cba'
  }

}
