import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeMasterComponent } from './04-forms/employee-master/employee-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { CoreModule } from './core/core.module';
import { ApiService } from './core/services/api.service';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './services';
import { GlobalErrorHandlerService } from './core/services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptorService } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMasterComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    ApiService, ProductsService,
    {
      provide: ErrorHandler, useClass: GlobalErrorHandlerService
    },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
