import { TestBed } from '@angular/core/testing';
import { PacService } from './pac.service';

describe('PacService', () => {
    let service: PacService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(PacService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });