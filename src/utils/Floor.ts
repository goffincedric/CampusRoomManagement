export class Floor {
  public id: number;
  public floorNumber: number;
  public campusId: number;

  constructor(id: number, floorNumber: number, campusId: number) {
    this.id = id;
    this.floorNumber = floorNumber;
    this.campusId = campusId;
  }
}
