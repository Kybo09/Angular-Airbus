import {Directive, ElementRef, Input} from '@angular/core';
import {ClasseVol} from "./models/passager.model";

@Directive({
  selector: '[appClasseVol]'
})
export class ClasseVolDirective {

  constructor(private el: ElementRef) { }

  @Input() appClasseVol?: String;

  ngOnInit(): void{
    this.setClasseColor();
  }

  public setClasseColor(){
    switch(this.appClasseVol){
      case "BUSINESS": this.el.nativeElement.style.color = 'red';break;
      case "PREMIUM": this.el.nativeElement.style.color = 'green';break;
      case "STANDARD": this.el.nativeElement.style.color = 'blue';break;
    }
  }

}
