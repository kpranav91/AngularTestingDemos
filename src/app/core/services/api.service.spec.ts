import { TestBed, getTestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let apiService: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    apiService = injector.get(ApiService);
  });

  it('should create ApiService', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('# all get requests', () => {

    it('should call to get service', () => {
      const dummyUsers = [
        { username: 'John' },
        { username: 'Doe' }
      ];
      apiService.get('/users').subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });

    it('should call to get service and throw error', () => {
      const errorObj = {
        messages: [
          {
            message: 'something went wrong !',
            code: '500'
          }
        ]
      };
      apiService.get('/users').subscribe(responseObj => {
        // catch success reponse
      },
        error => {
          // catch error response
          expect(error.messages).toEqual(errorObj.messages);
        });
      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(errorObj, {
        status: 500,
        statusText: 'Server Error',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      });
    });
  });

  describe('# all put requests', () => {

    it('should call to put service', () => {
      const dummyUser = { userName: 'John' };
      const response = {
        messages: [
          {
            message: 'username updated',
            code: 200
          }
        ]
      };
      apiService.put('/users/1', dummyUser).subscribe(user => {
        expect(user.messages).toEqual(response.messages);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
      expect(req.request.method).toBe('PUT');
      req.flush(response);
    });

    it('should call to put service and throw error', () => {
      const errorObj = {
        messages: [
          {
            message: 'something went wrong !',
            code: '500'
          }
        ]
      };
      apiService.put('/users/1', {}).subscribe(responseObj => {
        // catch success reponse
      },
        error => {
          // catch error response
          expect(error.messages).toEqual(errorObj.messages);
        });
      const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
      expect(req.request.method).toBe('PUT');
      req.flush(errorObj, {
        status: 500,
        statusText: 'Server Error',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      });
    });
  });

  describe('# all post requests', () => {

    it('should call to post service', () => {
      const dummyUser = { userName: 'Atul' };
      const response = {
        messages: [
          {
            message: 'username added',
            code: 200
          }
        ]
      };
      apiService.post('/users', dummyUser).subscribe(user => {
        expect(user.messages).toEqual(response.messages);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe('POST');
      req.flush(response);
    });

    it('should call to post service and throw error', () => {
      const errorObj = {
        messages: [
          {
            message: 'something went wrong !',
            code: '500'
          }
        ]
      };
      apiService.post('/users', {}).subscribe(responseObj => {
        // catch success reponse
      },
        error => {
          // catch error response
          expect(error.messages).toEqual(errorObj.messages);
        });
      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe('POST');
      req.flush(errorObj, {
        status: 500,
        statusText: 'Server Error',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      });
    });
  });

  describe('# all delete requests', () => {

    it('should call to delete service', () => {
      const response = {
        messages: [
          {
            message: 'username deleted',
            code: 200
          }
        ]
      };
      apiService.delete('/users/1').subscribe(user => {
        expect(user.messages).toEqual(response.messages);
      });
      const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
      expect(req.request.method).toBe('DELETE');
      req.flush(response);
    });

    it('should call to delete service and throw error', () => {
      const errorObj = {
        messages: [
          {
            message: 'something went wrong !',
            code: '500'
          }
        ]
      };
      apiService.delete('/users/1').subscribe(responseObj => {
        // catch success reponse
      },
        error => {
          // catch error response
          expect(error.messages).toEqual(errorObj.messages);
        });
      const req = httpMock.expectOne(`${environment.apiUrl}/users/1`);
      expect(req.request.method).toBe('DELETE');
      req.flush(errorObj, {
        status: 500,
        statusText: 'Server Error',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
        })
      });
    });
  });

});
