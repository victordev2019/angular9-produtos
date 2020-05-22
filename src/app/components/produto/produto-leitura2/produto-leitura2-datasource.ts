import { Produto } from './../produto.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


const EXAMPLE_DATA: Produto[] = [
  {id: 1, nome: 'Hydrogen'},
  {id: 2, nome: 'Helium'},
  {id: 3, nome: 'Lithium'},
  {id: 4, nome: 'Beryllium'},
  {id: 5, nome: 'Boron'},
  {id: 6, nome: 'Carbon'},
  {id: 7, nome: 'Nitrogen'},
  {id: 8, nome: 'Oxygen'},
  {id: 9, nome: 'Fluorine'},
  {id: 10, nome: 'Neon'},
  {id: 11, nome: 'Sodium'},
  {id: 12, nome: 'Magnesium'},
  {id: 13, nome: 'Aluminum'},
  {id: 14, nome: 'Silicon'},
  {id: 15, nome: 'Phosphorus'},
  {id: 16, nome: 'Sulfur'},
  {id: 17, nome: 'Chlorine'},
  {id: 18, nome: 'Argon'},
  {id: 19, nome: 'Potassium'},
  {id: 20, nome: 'Calcium'},
];

/**
 * Data source for the ProdutoLeitura2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProdutoLeitura2DataSource extends DataSource<Produto> {
  data: Produto[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Produto[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Produto[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Produto[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
