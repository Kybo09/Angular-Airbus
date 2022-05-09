import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vol} from "../../models/vol.model";
import {IPassager, Passager} from "../../models/passager.model";

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() listeVols?: Vol[];
  @Input() type?: String;
  @Output() vol: EventEmitter<Vol> = new EventEmitter<Vol>();

  public showPassager(vol: Vol){
    this.vol.emit(vol);
  }


}
