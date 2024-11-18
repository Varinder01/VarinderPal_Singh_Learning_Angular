import { Pipe, PipeTransform } from '@angular/core';
import {Watch} from "./Shared/Modules/watch";

@Pipe({
  name: 'regionTypeCombination',
  standalone: true
})
export class RegionTypeCombinationPipe implements PipeTransform {

  transform(watch:Watch): String {
    return `watch is from ${watch.region} area and is of ${watch.type} type`;
  }

}
