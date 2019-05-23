import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ModalComponent } from "./modal.component";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent],
    imports: [CommonModule, FormsModule]
})
export class ModalModule {}
