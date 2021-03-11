export class Response3 {
  // The number of authors return by this request.
  count: number
  // The total number of authors matching this request.
  totalCount: number
  // The index of the last item returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results. It will be set to `null` if there are no additional results.
  lastItemIndex: number | null
  // The array of authors
  results: Array<{
    // A unique id for this author
    _id: string
    // The authors full name
    name: string
    // The number of quotes by this author
    quoteCount: string
  }>
}
