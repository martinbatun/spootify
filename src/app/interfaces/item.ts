export class Item {

  id: string;
  name: string;
  img: string;
  artist: string;


  constructor(
    id?: string,
    name?: string,
    img?: string,
    artist?: string
  ) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.artist = artist ? artist : null;
  }

}
