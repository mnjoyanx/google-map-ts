export interface IMarker {
  location: {
    lat: number;
    lng: number;
  };

  from(): string;
}
