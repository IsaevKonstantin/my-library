import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiButtonModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/kit";
import { LibraryCardComponent } from "./components/library-card/library-card.component";
import { LibrarySearchComponent } from "./components/library-search/library-search.component";
import { LibraryService } from "./services/library.service";
import { LibraryRoutingModule } from "./library-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LibrarySearchComponent,
    LibraryCardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    LibraryRoutingModule,
  ],
  providers: [LibraryService],
})
export class LibraryModule { }
