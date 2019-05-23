import { Component, Input, Output, EventEmitter } from "@angular/core";
import jsonOfRegistrations from "../../../../assets/mock-data/mockRegistrations.json";

@Component({
    selector: "grid-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
    arrayOfRegistrations = [];
    ngOnInit() {
        jsonOfRegistrations.map(registrationNumber => {
            this.arrayOfRegistrations.push(
                registrationNumber.Registration.toString()
            );
        });
    }
    registrationNumber;
    registrationNumberCreator() {
        this.registrationNumber;
    }

    ngAfterContentInit() {
        this.registrationNumber = this.rowData.registration;
    }
    @Output() modalClosed = new EventEmitter<boolean>();
    modalVisible;

    onModalClose() {
        this.modalVisible = false;
        this.modalClosed.emit(this.modalVisible);
    }
    onSaveChanges() {
        this.rowData.registration = this.registrationNumber.toUpperCase();
        this.onModalClose();
    }

    @Input()
    rowData: {
        flightNumber: string;
        scheduledDate: Date;
        originDestination: string;
        registration: string;
    };
}
