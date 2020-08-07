import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  ngOnInit(): void {
    this.data = this.getData();
  }
  title = 'salmon-cookies';

  getData() {
    return [
      {
        "Locations": "Seattle",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },
      {
        "Locations": "Seatac Airport",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },
      {
        "Locations": "Seattle Center",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },
      {
        "Locations": "Capitol Hill",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },
      {
        "Locations": "Alki",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },
      {
        "Locations": "Ballard",
        "6am": " 1",
        "7am": " 2",
        "8am": "3 ",
        "9am": "4",
        "10am": "5",
        "11am": "6",
        "12pm": "7",
        "1pm": "8",
        "2pm": "9",
        "3pm": "10",
        "4pm": "11",
        "5pm": "12",
        "6pm": "13",
        "7pm": "14",
        "LocationTotals": ""
      },

    ]
  }

}
