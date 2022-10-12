export class FileModel {

  id: number;
  name: string;
  size: string;
  type: string;

  constructor(id: number, name: string, size: string, type: string) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.type = type;
  }

}