import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilmService],
    });
    service = TestBed.inject(FilmService);
  });

  it('should be all film', () => {
    expect(service).toBeTruthy();
  });
});
