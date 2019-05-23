import { Component, ViewEncapsulation } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";
import csvData from "../assets/mock-data/mockFlights.json";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["../assets/css/reset.css", "../assets/css/fonts.css"]
})
export class AppComponent {
    newData = {};
    dataObject = [];
    ngOnInit() {
        csvData.map(row => {
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
    // [
    //     {
    //         flightNumber: "dadda",
    //         scheduledDate: new Date(),
    //         originDestination: "Wroclaw",
    //         registration: "sfsf"
    //     },
    //     {
    //         flightNumber: "sd",
    //         scheduledDate: new Date(),
    //         originDestination: "sdw",
    //         registration: "saaaf"
    //     }
    // ];
}
