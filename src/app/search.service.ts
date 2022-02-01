import { Injectable } from '@angular/core';
import { DataService, ResultData } from './data.service';
import { last } from 'rxjs/operators';

export interface SearchResult {
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private users: ResultData[] = [];

  constructor(dataService: DataService) {
    dataService.getAll().subscribe((users) => {
      this.users = users;
      console.log('users', this.users);
    });
  }

  search(lastName: string, firstName: string): SearchResult | undefined {
    const searchResult = this.users.filter(
      (user) => user.lastName === lastName && user.firstName === firstName
    );
    console.log('search for:', firstName, lastName);
    console.log('search result:', searchResult);
    if (searchResult.length > 0) {
      return {
        phoneNumber: searchResult[0].phoneNumber,
      };
    }
    return undefined;
  }
}
