import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { IfNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { LowerCasePipe } from '@angular/common';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ParentComponent } from './parent-component/parent.component';
import { ChildComponent } from './child/child.component';
import { AccordianComponent } from './shared/accordian/accordian.component';
import { TimerComponent } from './timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductProfileGuard } from './services/product-profile.guard';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductResolver } from './services/product-profile.resolver';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'products/new',
    component: AddProductComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductProfileComponent,
    canActivate: [ProductProfileGuard], //true | Observable<true> | Promise<true>
    resolve: {
      productData: ProductResolver,
    },
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponentComponent,
    ProductListComponent,
    IfNullOrEmptyPipe,
    CustomDatePipe,
    SearchProductPipe,
    ProductDetailsComponent,
    ParentComponent,
    ChildComponent,
    AccordianComponent,
    TimerComponent,
    WelcomeComponent,
    ProductProfileComponent,
    AddProductComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [LowerCasePipe, ProductProfileGuard, ProductResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
