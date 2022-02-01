import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search/search.component';
import { By } from '@angular/platform-browser';
import { SearchInputComponent } from './search/search-input/search-input.component';

describe('Search', () => {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchInputComponent],
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
    it('search for Maria Musterfrau', () => {
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

      const searchButton: HTMLInputElement = fixture.debugElement.query(
        By.css('#search-button')
      ).nativeElement;
      searchButton.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      const searchResults: HTMLPreElement = fixture.debugElement.query(
        By.css('#search-results')
      ).nativeElement;

      expect(searchResults.innerText).toContain(`"phoneNumber": "000000000"`);
    });

    /**
     * As a user
     * I want to search for "Harald Lesch"
     * In order to not get any result
     *
     * This test accesses the input fields directly and triggers
     * update events on them.
     */

    it('search for non-existing Harald Lesch', () => {
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

      const searchButton: HTMLInputElement = fixture.debugElement.query(
        By.css('#search-button')
      ).nativeElement;
      searchButton.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      const searchResults = fixture.debugElement.query(
        By.css('#search-results')
      );

      expect(searchResults).toBeNull();
    });
  });

  /**
   *
   */
  xdescribe('component tests', () => {
    it('search for Maria Musterfrau', () => {
      component.valueChange({
        id: 'vorname-text-input',
        value: 'Maria',
      });
      component.valueChange({
        id: 'nachname-text-input',
        value: 'Musterfrau',
      });

      component.search();

      expect(component.searchResult).toEqual({
        phoneNumber: '000000000',
      });
    });

    it('search for non-existing Harald Lesch', () => {
      component.valueChange({
        id: 'vorname-text-input',
        value: 'Harald',
      });
      component.valueChange({
        id: 'nachname-text-input',
        value: 'Lesch',
      });

      component.search();

      expect(component.searchResult).toBeUndefined();
    });
  });
});
