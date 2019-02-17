import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/services';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Product } from 'src/app/models';
import { AppError } from 'src/app/core';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service: ProductsService;

  beforeEach(async(() => {
    service = new ProductsService(null);
    component = new ProductsComponent(service);
  }));

  it('it should set products to property with items returned from server', () => {
    // Arrange
    const products: Product[] = [
      {
        id: 1,
        name: 'p1',
        description: 'p1 description',
        price: 10,
        isAvailable: true
      },
      {
        id: 2,
        name: 'p2',
        description: 'p2 description',
        price: 20,
        isAvailable: false
      },
      {
        id: 3,
        name: 'p3',
        description: 'p3 description',
        price: 30,
        isAvailable: true
      }
    ];

    spyOn(service, 'getProducts').and.callFake(() => {
      return of([products]);
    });
    

    // Act
    component.ngOnInit();

    //debugger;
    // Assert
    expect(component.products[0]).toEqual(products);
  });

  it('should set the error property if server returns an error when getting products', () => {
    const error = new AppError('server error', 500, true);
    spyOn(service, 'getProducts').and.returnValue(throwError(error));

    expect(component.error).not.toBeDefined();

    component.ngOnInit();

    expect(component.error).toBeDefined();
    expect(component.error.errorMsg).toEqual('server error');
    expect(component.error.errorCode).toEqual(500);
    expect(component.error.isHttp).toEqual(true);
  });
});
