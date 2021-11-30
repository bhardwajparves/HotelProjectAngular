import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { FooterComponent } from './footer/footer.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { ResturantComponent } from './food-and-beverage/resturant/resturant.component';

const routes: Routes = [
  {path:'accomodation', component: AccomodationComponent},
  {path:'celebrations', component: CelebrationsComponent},
  {path:'foodandbeverage', component: FoodAndBeverageComponent},
  {path:'lifestyle',component:LifestyleComponent},
  {path:'weddings',component:WeddingsComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'booknow', component:BooknowComponent},
  {path:'bars', component:BarsComponent},
  {path:'resturant', component:ResturantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
