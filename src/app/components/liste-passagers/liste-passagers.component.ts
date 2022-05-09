import {Component, Input} from '@angular/core';
import {IPassager} from "../../models/passager.model";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
  @Input() listePassagers?: IPassager[];
  photoShowed: Boolean = false;

  togglePhoto($event: MatSlideToggleChange) {
    this.photoShowed = $event.checked;
  }
}
