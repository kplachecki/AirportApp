import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.css"]
})
export class RowComponent {
    @Output() clicked = new EventEmitter();
    onRegistrationClicked() {
        this.clicked.emit(this.row);
    }
    @Input() row: IFlight;
}
