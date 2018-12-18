import {RoomType} from './RoomType';

export class Room {
  public id: string;
  public name: string;
  public type: RoomType;
  public icon_class: string;
  public capacity: number;
  public hasBeamer: boolean;
  public occupied: boolean;
  public crowdedness: number;

  public floorId: number;

  public x: number;
  public y: number;
  public width: number;
  public height: number;

  constructor(
    id: string,
    name: string,
    type: RoomType,
    icon_class: string,
    capacity: number,
    hasBeamer: boolean,
    occupied: boolean,
    crowdedness: number,
    x: number,
    y: number,
    width: number,
    height: number,
    floorId: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.icon_class = icon_class;
    this.capacity = capacity;
    this.hasBeamer = hasBeamer;
    this.occupied = occupied;
    this.crowdedness = crowdedness;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.floorId = floorId;
  }
}
