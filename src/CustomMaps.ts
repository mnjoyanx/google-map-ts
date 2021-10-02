import { IMarker } from "./marker";

export class CustomMaps {
  private googleMap: google.maps.Map;

  constructor(public $el: string) {
    this.googleMap = new google.maps.Map(document.getElementById($el), {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(marker: IMarker): void {
    const mark = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng,
      },
    });

    mark.addListener("click", () => {
      const windowInfo = new google.maps.InfoWindow({
        content: marker.from(),
      });

      windowInfo.open(this.googleMap, mark);
    });
  }
}
