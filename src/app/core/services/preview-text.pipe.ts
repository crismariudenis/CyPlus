import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'previewText'
})
export class PreviewTextPipe implements PipeTransform {

  transform(text: string) {
    return String(text).replace(/<[^>]+>/gm, '')
  }

}
