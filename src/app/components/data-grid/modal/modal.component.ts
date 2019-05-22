import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "grid-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
    @Output() modalClosed = new EventEmitter<boolean>();
    modalVisible;
    onModalClose() {
        this.modalVisible = false;
        this.modalClosed.emit(this.modalVisible);
    }

    @Input()
    rowData: {
        flightNumber: string;
        scheduledDate: Date;
        originDestination: string;
        registration: string;
    };
}
