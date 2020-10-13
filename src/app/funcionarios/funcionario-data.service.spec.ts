import { TestBed } from '@angular/core/testing';

import { FuncionarioDataService } from './funcionario-data.service';

describe('FuncionarioDataService', () => {
  let service: FuncionarioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
