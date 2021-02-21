import { Item } from './item';
//
// export interface Data {
//   id: number;
//   title: string;
//   items: Item[];
// }

export class Data {

  id?: number;
  title?: string;
  items?: Item[];

  constructor(
    id?: number,
    title?: string,
    items?: Item[]
  ) {
    this.id = id;
    this.title = title;
    this.items = items;
  }

}
