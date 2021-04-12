import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preparationTime'
})
export class PreparationTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value < hour) {
      return value < 10 ? `0${value} minutes` : `${value} minutes`;
    }
    else {
      let hours = Math.floor(value/hour);
      let minutes = value % hour;
      return `${hours} hours ${minutes} minutes`;
    }
  }

}

export const hour = 60;
