export class Campus {
  public id: string;
  public name: string;
  public slugUrl: string;

  constructor(id: string, name: string, slugUrl: string) {
    this.id = id;
    this.name = name;
    this.slugUrl = slugUrl;
  }
}
