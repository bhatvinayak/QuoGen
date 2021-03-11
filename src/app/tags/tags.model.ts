export class Response4 {
  // The number of all tags by this request
  count: number;
  // The array of tags
  results: Array<{
    _id: string;
    name: string;
  }>
}
