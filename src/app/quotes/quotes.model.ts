export class Response2 {
  // The number of quotes returned by this request
  count: number
  // The total number of quotes matching this request
  totalCount: number
  // The index of the last quote returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results.
  lastItemIndex: number
  // The array of quotes
  results: Array<{
    _id: string
    // The quotation text
    content: string
    // The full name of the author
    author: string
    // The length of quote (number of characters)
    length: number
    // An array of tag names for this quote
    tags: string[]
  }>
}
