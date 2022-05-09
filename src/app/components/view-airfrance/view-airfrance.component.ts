import { Component } from '@angular/core';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import {Subscription} from "rxjs";
import {IPassager, Passager} from "../../models/passager.model";
import {PassagerService} from "../../services/passager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {

  vols: Vol[] = [];
  vol?: Vol;
  passagers?: Passager[];
  private _subscription: Subscription = new Subscription();
  public type!: String;

  constructor(
    private _volService: VolService,
    private _passagerService: PassagerService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void{
    const subscription: Subscription = this._activatedRoute.data.subscribe((data$) => {
      this.type = data$['type'] ? data$['type'] : 'decollages';
    });

    this._subscription.add(subscription);
  }

  onFiltresEvent(filtres: IFiltres): void {
    if(this.type == 'decollages'){
      const subscription: Subscription = this._volService.getVolsDepart(filtres.aeroport.icao, filtres.debut.getTime()/1000, filtres.fin.getTime()/1000).subscribe((vol$) =>{
        this.vols = vol$;
      });
      this._subscription.add(subscription);
    }else{
      const subscription: Subscription = this._volService.getVolsArrivee(filtres.aeroport.icao, filtres.debut.getTime()/1000, filtres.fin.getTime()/1000).subscribe((vol$) =>{
        this.vols = vol$;
      });
      this._subscription.add(subscription);
    }
  }

  public updatePassager(vol: Vol){
      this.vol = vol;
      const subscription: Subscription = this._passagerService.getPassagers(vol.icao).subscribe((passagers$) => {
       this.passagers = passagers$;
      });
      this._subscription.add(subscription);
  }

  ngOnDestroy(): void{
    this._subscription.unsubscribe();
  }

}
