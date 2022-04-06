import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SingleGalleryComponent } from './gallery/single-gallery/single-gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutComponent
  },
  {
  path: 'gallery', children: [
      {
        path: '', component: GalleryComponent
      },
      {
        path: 'view/:id', component: SingleGalleryComponent
      }
    ]
  },
  
  {
    path: 'products', children: [
      {
        path: '', component: ProductsComponent
      },
      {
        path: 'view/:id', component: SingleProductComponent
      }
    ]
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
