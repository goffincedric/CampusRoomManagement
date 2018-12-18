export class Floor {
  public id: string;
  public floorNumber: number;
  public campusId: number;

  constructor(id: string, floorNumber: number, campusId: number) {
    this.id = id;
    this.floorNumber = floorNumber;
    this.campusId = campusId;
  }
}
