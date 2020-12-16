import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalHabitatComponent } from './components/animal-habitat/animal-habitat.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ScientificNameAndClassComponent } from './components/scientific-name-and-class/scientific-name-and-class.component';
import { DietInformationComponent } from './components/diet-information/diet-information.component';
import { AnimalAnatomyAndBiologyComponent } from './components/animal-anatomy-and-biology/animal-anatomy-and-biology.component';
import { MatingAndReproductiveInfoComponent } from './compnents/mating-and-reproductive-info/mating-and-reproductive-info.component';
import { AnimalBehaviorComponent } from './components/animal-behavior/animal-behavior.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalHabitatComponent,
    ImageGalleryComponent,
    ScientificNameAndClassComponent,
    DietInformationComponent,
    AnimalAnatomyAndBiologyComponent,
    MatingAndReproductiveInfoComponent,
    AnimalBehaviorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
