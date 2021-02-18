import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor() { }

  tax = 348.00;
  cat = 15.71;
  desiredAmount = 10000;
  months = 12;
  annualRate = 8.9;
  totalPaid = 0;

  ngOnInit(): void {
  }

  formatLabel(value: number): any {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  formatLabelPercentage(value: number): any {
    return value + '%';
  }

}
