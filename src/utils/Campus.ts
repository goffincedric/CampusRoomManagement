export class Campus {
  public id: string;
  public name: string;
  public slugUrl: string;
  public description: string;

  constructor(id: string, name: string, slugUrl: string, description: string) {
    this.id = id;
    this.name = name;
    this.slugUrl = slugUrl;
    this.description = description;
  }
}
