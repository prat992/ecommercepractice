import { Route, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { TestComponent } from './cart/test.component';

const routes: Route[] = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  {path: 'test',component:TestComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
