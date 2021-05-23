import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {

  @Output() newPageDecider = new EventEmitter<number>()



  pageSelect(urlNumber: number){
    this.newPageDecider.emit(urlNumber)
  }


}
