import { NgModule } from "@angular/core";

import { BackdropComponent } from "./backdrop.component";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
    declarations: [BackdropComponent],
    exports: [BackdropComponent],
    imports: [CommonModule]
})
export class BackdropModule {}
