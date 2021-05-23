import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageNum: number = 1;

  decidePage(passedNum: any){
    this.pageNum = passedNum;
  }
}
