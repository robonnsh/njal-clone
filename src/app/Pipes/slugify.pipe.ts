import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'slugify',
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    return value
      ? value
          .toLowerCase()
          .replace(/[\s_]+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '')
      : '';
  }
}
