import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  numberOfStocks = 10;
  numberOfBonds  = 20;
  maxLength = 2;
  numberOfadjustStocks = 0;
  numberOfadjustBonds: number;

  constructor() {

  }

  ngOnInit(): void {
  }

  adjustStocks(event: Event){
   this.numberOfadjustStocks =  Number((<HTMLInputElement> event.target).value);
  }

  adjustBonds(event: Event){
    this.numberOfadjustBonds =  Number((<HTMLInputElement> event.target).value);
  }

  total(){
    return (this.numberOfadjustStocks > 0 ? this.numberOfadjustStocks : this.numberOfStocks) +
      Number(this.numberOfadjustBonds > 0 ? this.numberOfadjustBonds : this.numberOfBonds);
  }

}
