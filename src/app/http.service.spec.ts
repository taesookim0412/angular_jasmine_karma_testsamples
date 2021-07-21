import { TestBed } from '@angular/core/testing';

import {HttpService, TriviaResponse} from './http.service';
import {of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  })

  it('should have a valid response code',  () => {

    service.getFromTrivia().subscribe((data) => {
      expect(data.response_code).toBe(0);
    });

  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
