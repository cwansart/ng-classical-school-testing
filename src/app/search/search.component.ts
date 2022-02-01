import { Component } from '@angular/core';
import { ChangeSearchInput } from './search-input/search-input.component';
import { SearchResult, SearchService } from '../search.service';

interface SearchFormInput {
  label: string;
  type: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  readonly defaultInputValue = 'foo';

  formInputs: SearchFormInput[] = [
    {
      label: 'Vorname',
      type: 'text',
    },
    {
      label: 'Nachname',
      type: 'text',
    },
  ];

  searchResult?: SearchResult;

  private firstNameInputValue = this.defaultInputValue;

  private lastNameInputValue = this.defaultInputValue;

  constructor(private readonly searchService: SearchService) {}

  valueChange(event: ChangeSearchInput) {
    if (event.id === 'vorname-text-input') {
      this.firstNameInputValue = event.value;
    }

    if (event.id === 'nachname-text-input') {
      this.lastNameInputValue = event.value;
    }
  }

  search() {
    console.log('search button clicked');
    this.searchResult = this.searchService.search(
      this.lastNameInputValue,
      this.firstNameInputValue
    );
  }
}
