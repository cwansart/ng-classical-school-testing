import { Injectable } from '@angular/core';
import { DataService } from './data.service';

export interface SearchResult {
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly dataService: DataService) {}

  search(lastName: string, firstName: string): Promise<SearchResult> {
    return new Promise<SearchResult>((resolve, reject) => {
      this.dataService.getAll().subscribe((users) => {
        const searchResult = users.filter(
          (user) => user.lastName === lastName && user.firstName === firstName
        );
        if (searchResult.length > 0) {
          resolve({
            phoneNumber: searchResult[0].phoneNumber,
          });
        } else {
          reject();
        }
      });
    });
  }
}
