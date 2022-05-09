import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBagagesVol]',
})
export class BagagesVolDirective {

  constructor(private el: ElementRef) { }

  @Input() appBagagesVol?: String;
  @Input() appNombreBagage!: number;

  ngOnInit(): void{
    this.setBackgroundColor();
  }

  public setBackgroundColor(){
    switch(this.appBagagesVol){
      case "BUSINESS":
        if(this.appNombreBagage > 2){
          this.el.nativeElement.style.backgroundColor = '#fec0c0';
        }
        break;
      case "PREMIUM":
        if(this.appNombreBagage > 3){
          this.el.nativeElement.style.backgroundColor = '#fec0c0';
        }
        break;
      case "STANDARD":
        if(this.appNombreBagage > 1){
          this.el.nativeElement.style.backgroundColor = '#fec0c0';
        }
        break;
    }
  }

}
