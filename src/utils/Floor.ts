export class Floor {
  public id: string;
  public floorNumber: number;
  public campusId: string;

  constructor(id: string, floorNumber: number, campusId: string) {
    this.id = id;
    this.floorNumber = floorNumber;
    this.campusId = campusId;
  }
}
