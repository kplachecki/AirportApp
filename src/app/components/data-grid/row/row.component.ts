import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.css"]
})
export class RowComponent {
    @Output() rowClicked = new EventEmitter();

    onRegistrationClicked() {
        this.rowClicked.emit(this.row);
    }

    @Input() row: IFlight;
}
