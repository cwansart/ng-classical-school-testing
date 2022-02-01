import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-detail',
  templateUrl: './overview-detail.component.html',
  styleUrls: ['./overview-detail.component.css'],
})
export class OverviewDetailComponent implements OnInit {
  @Input()
  firstName?: string;

  @Input()
  lastName?: string;

  @Input()
  phoneNumber?: string;

  constructor() {}

  ngOnInit(): void {}
}
