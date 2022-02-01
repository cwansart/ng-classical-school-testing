import { Component, OnInit } from '@angular/core';
import { DataService, ResultData } from '../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  results?: ResultData[];

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe((results) => (this.results = results));
  }
}
