import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService],
    });
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
