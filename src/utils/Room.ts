import {RoomType} from './RoomType';

export class Room {
  public id: string;
  public name: string;
  public additionalName: string;
  public type: RoomType;
  public capacity: number;
  public hasBeamer: boolean;
  public occupied: boolean;
  public crowdedness: number;
  public reservedUntil: string;

  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public floorId: string;

  public icon_class: String;

  constructor(
    id: string,
    name: string,
    additionalName: string,
    type: RoomType,
    capacity: number,
    hasBeamer: boolean,
    occupied: boolean,
    crowdedness: number,
    reservedUntil: string,
    x: number,
    y: number,
    width: number,
    height: number,
    floorId: string) {
    this.id = id;
    this.name = name;
    this.additionalName = additionalName;
    this.type = type;
    this.capacity = capacity;
    this.hasBeamer = hasBeamer;
    this.occupied = occupied;
    this.crowdedness = crowdedness;
    this.reservedUntil = reservedUntil;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.floorId = floorId;
  }
}
