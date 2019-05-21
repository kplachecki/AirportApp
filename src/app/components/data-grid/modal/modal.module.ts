import { NgModule } from "@angular/core";

import { ModalComponent } from "./modal.component";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent],
    imports: [CommonModule]
})
export class ModalModule {}
