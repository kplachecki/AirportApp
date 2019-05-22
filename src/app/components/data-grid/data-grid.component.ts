import { Component, Input } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.css"]
})
export class DataGridComponent {
    rowData = undefined;
    modalVisible = false;

    openModal(data) {
        this.rowData = data;
        this.modalVisible = true;
    }

    closeModal(modalVisible) {
        this.modalVisible = modalVisible;
    }

    @Input() public rows: Array<IFlight>;
    public sampleHeaders = [
        "flight",
        "sch. date",
        "sch.time",
        "o/d",
        "registration"
    ];
}
