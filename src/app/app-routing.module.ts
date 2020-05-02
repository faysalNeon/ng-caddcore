import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './empty/empty.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'team', component: TeamComponent},
  {path: '**', component: EmptyComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
