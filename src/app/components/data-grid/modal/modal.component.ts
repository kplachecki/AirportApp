import { Component, Input } from "@angular/core";

@Component({
    selector: "grid-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
    @Input()
    rowData: {
        flightNumber: string;
        scheduledDate: Date;
        originDestination: string;
        registration: string;
    };
}
