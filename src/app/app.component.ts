import { Component, ViewEncapsulation } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["../assets/css/reset.css", "../assets/css/fonts.css"]
})
export class AppComponent {
    newData = {};
    dataObject = [];
    jsonFlights = require("../assets/mock-data/mockFlights.json");

    ngOnInit() {
        this.jsonFlights.map(row => {
            return this.dataObject.push(
                (this.newData = {
                    flightNumber: row.FlightNumber,
                    scheduledDate: row.DateTime,
                    originDestination: row["Origin/Destination"],
                    registration: row.Registration
                })
            );
        });
    }
    public data: Array<IFlight> = this.dataObject;
}
