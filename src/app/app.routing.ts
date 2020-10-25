
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { ShopPageComponent } from './component/shop-page/shop-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { LoginComponent } from './component/login/login.component';

const router:Routes=[
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full',
    //     canActivate: []
    //   },

    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'single-product',component:SingleProductComponent},
    {path:'shop-page',component:ShopPageComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent}
];
export const routing = RouterModule.forRoot(router)