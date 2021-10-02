import faker from "faker";
import { IMarker } from "./marker";

export class Company implements IMarker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  from(): string {
    return "from Company";
  }
}
