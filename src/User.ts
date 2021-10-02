import faker from "faker";
import { IMarker } from "./marker";

export class User implements IMarker {
  name: string = "start";
  email: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.email = faker.internet.email();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  from(): string {
    return "from User";
  }
}
