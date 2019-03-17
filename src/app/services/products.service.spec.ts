import { TestBed, getTestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { ApiService } from '../core/services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ProdutsService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let productService: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    productService = injector.get(ProductsService);
  });

  it('should create products service', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should fetch all products as observable', () => {
    const mockProducts = [
      {
        id: 1,
        name: 'Marathi Songs 2018 Superhit DVD',
        description: 'Marathi Songs 2018 Collection',
        price: 1000,
        isAvailable: true
      }
    ];
    productService.getProducts().subscribe(products => {
      expect(products.length).toEqual(1);
      expect(mockProducts).toEqual(products);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should fetch all products as promise', () => {
    const errorMock = { message: 'something went wrong!', code: 500 };
    const mockProducts = [
      {
        id: 1,
        name: 'Marathi Songs 2018 Superhit DVD',
        description: 'Marathi Songs 2018 Collection',
        price: 1000,
        isAvailable: true
      }
    ];
    productService.getProductsPromise().then(products => {
      expect(products.length).toEqual(1);
      expect(mockProducts).toEqual(products);
    }, error => {
      expect(errorMock).toEqual(error);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
    // req.flush(errorMock, {status: 500, statusText: 'server error'});

  });
});
