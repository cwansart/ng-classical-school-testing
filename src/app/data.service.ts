import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ResultData {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
}

const mockResultData: ResultData[] = [
  {
    id: 1,
    firstName: 'Maria',
    lastName: 'Musterfrau',
    phoneNumber: '000000000',
    dateOfBirth: new Date('1990-01-01'),
  },
  {
    id: 2,
    firstName: 'Max',
    lastName: 'Mustermann',
    phoneNumber: '11111111',
    dateOfBirth: new Date('1989-01-01'),
  },
  {
    id: 3,
    firstName: 'foo',
    lastName: 'foo',
    phoneNumber: '123123123',
    dateOfBirth: new Date('1960-01-01'),
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getAll(): Observable<ResultData[]> {
    return of([...mockResultData]);
  }
}
