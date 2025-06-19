import { TestBed } from '@angular/core/testing';
import { ThaiTeaDataService } from './thaiteadata.service';

describe('ThaiteadataService', () => {
  let service: ThaiTeaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaiTeaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
