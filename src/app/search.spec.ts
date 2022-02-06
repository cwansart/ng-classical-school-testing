import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { SearchComponent } from './search/search.component';
import { By } from '@angular/platform-browser';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const mockUsers = [
  {
    id: 1,
    firstName: 'Maria',
    lastName: 'Musterfrau',
    phoneNumber: '000000000',
    dateOfBirth: '1990-01-01T00:00:00.000Z',
  },
];

describe('Search', () => {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchInputComponent],
      providers: [
        {
          // TODO: For some reason I had issues with the HttpTestingClient, need to investigate it later.
          provide: HttpClient,
          useValue: {
            get: <T>() => {
              return of(mockUsers);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  describe('html tests', () => {
    /**
     * As a user
     * I want to search for "Maria Musterfrau"
     * In order to get the phone number
     *
     * This test accesses the input fields directly and triggers
     * update events on them.
     */
    it('search for Maria Musterfrau', fakeAsync(() => {
      const firstNameInput: HTMLInputElement = fixture.debugElement.query(
        By.css('#vorname-text-input')
      ).nativeElement;
      firstNameInput.value = 'Maria';

      const lastNameInput: HTMLInputElement = fixture.debugElement.query(
        By.css('#nachname-text-input')
      ).nativeElement;
      lastNameInput.value = 'Musterfrau';

      firstNameInput.dispatchEvent(new Event('blur'));
      lastNameInput.dispatchEvent(new Event('blur'));
      tick();
      fixture.detectChanges();

      const searchButton: HTMLInputElement = fixture.debugElement.query(
        By.css('#search-button')
      ).nativeElement;
      searchButton.dispatchEvent(new Event('click'));
      tick();
      fixture.detectChanges();

      const searchResults = fixture.debugElement.query(
        By.css('#search-results')
      );

      expect(searchResults).not.toBeNull();
      expect(searchResults.nativeElement.innerText).toContain(
        `"phoneNumber": "000000000"`
      );
    }));

    /**
     * As a user
     * I want to search for "Harald Lesch"
     * In order to not get any result
     *
     * This test accesses the input fields directly and triggers
     * update events on them.
     */

    it('search for non-existing Harald Lesch', fakeAsync(() => {
      const firstNameInput: HTMLInputElement = fixture.debugElement.query(
        By.css('#vorname-text-input')
      ).nativeElement;
      firstNameInput.value = 'Harald';

      const lastNameInput: HTMLInputElement = fixture.debugElement.query(
        By.css('#nachname-text-input')
      ).nativeElement;
      lastNameInput.value = 'Lesch';

      firstNameInput.dispatchEvent(new Event('blur'));
      lastNameInput.dispatchEvent(new Event('blur'));
      tick();
      fixture.detectChanges();

      const searchButton: HTMLInputElement = fixture.debugElement.query(
        By.css('#search-button')
      ).nativeElement;
      searchButton.dispatchEvent(new Event('click'));
      tick();
      fixture.detectChanges();

      const searchResults = fixture.debugElement.query(
        By.css('#search-results')
      );

      expect(searchResults).toBeNull();
    }));
  });
});
