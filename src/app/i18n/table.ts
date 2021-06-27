import { Injectable } from '@angular/core'
import { MatPaginatorIntl } from '@angular/material/paginator'

@Injectable()
export class PtBrMatPaginatorIntl extends MatPaginatorIntl {

  itemsPerPageLabel = 'Qtd. por página:'
  nextPageLabel = 'Próximo'
  previousPageLabel = 'Anterior'

  getRangeLabel = function (page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length
    }
    length = Math.max(length, 0)
    const startIndex = page * pageSize
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length
  };
}
