import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "grid-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
    jsonOfRegistrations = require("../../../../assets/mock-data/mockRegistrations.json");
    arrayOfRegistrations = [];
    ngOnInit() {
        this.jsonOfRegistrations.map(registrationNumber => {
            this.arrayOfRegistrations.push(
                registrationNumber.Registration.toString()
            );
        });
    }

    listVisible = false;
    onSelection(event) {
        this.registrationNumber = event.target.outerText;
        this.listVisible = false;
    }

    onListClose() {
        this.listVisible = false;
    }

    registrationNumber;
    registration = "";
    filteredArray = [];

    onKey() {
        this.filteredArray = this.arrayOfRegistrations.filter(element => {
            if (element.includes(this.registrationNumber.toUpperCase())) {
                return true;
            } else return false;
        });
        this.listVisible = true;
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
