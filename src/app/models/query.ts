export type QueryParams<T> = {
  docs: T[],
  totalDocs: number,
  offset: number,
  limit: number,
  totalPages: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage: number | null,
  nextPage: number | null
}
