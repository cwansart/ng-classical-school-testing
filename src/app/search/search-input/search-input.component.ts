import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ChangeSearchInput {
  id: string;
  value: string;
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Input()
  type?: string;

  @Input()
  label?: string;

  @Input()
  value?: string;

  @Output()
  valueChange = new EventEmitter<ChangeSearchInput>();

  id = '';

  ngOnInit(): void {
    if (this.label) {
      this.id = this.label.toLowerCase() + '-' + this.type + '-input';
    }
  }

  updateValue(event: any) {
    this.valueChange.emit({
      id: this.id,
      value: event.target.value,
    });
  }
}
