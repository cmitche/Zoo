import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietInformationComponent } from './components/diet-information/diet-information.component';
import { HomeComponent } from './components/home/home.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "gallery", component: ImageGalleryComponent},
  {path: "diet", component: DietInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
