import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'randomize' })
export class RandomizePipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    // Create a copy of the original array to avoid modifying it directly
    const shuffledArray = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Sort the shuffled array based on the given property
    shuffledArray.sort((a, b) => a[property].localeCompare(b[property]));

    return shuffledArray;
  }
}