import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './empty/empty.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { AboutSectionComponent } from './globals/about-section/about-section.component';
import { FeaturesSectionComponent } from './globals/features-section/features-section.component';
import { ServicesSectionComponent } from './globals/services-section/services-section.component';
import { ChooseSectionComponent } from './globals/choose-section/choose-section.component';
import { TabSectionComponent } from './globals/tab-section/tab-section.component';
import { ProjectSectionComponent } from './globals/project-section/project-section.component';
import { TeamSectionComponent } from './globals/team-section/team-section.component';
import { TestimonialSectionComponent } from './globals/testimonial-section/testimonial-section.component';
import { AnalysisSectionComponent } from './globals/analysis-section/analysis-section.component';
import { BlogSectionComponent } from './globals/blog-section/blog-section.component';
import { PartnerSectionComponent } from './globals/partner-section/partner-section.component';
import { ContactComponent } from './contact/contact.component';
import { FaqSectionComponent } from './globals/faq-section/faq-section.component';
import { PricingSectionComponent } from './globals/pricing-section/pricing-section.component';
import { PortfolioSectionComponent } from './globals/portfolio-section/portfolio-section.component';
import { SubscribeSectionComponent } from './globals/subscribe-section/subscribe-section.component';
import { ContactSectionComponent } from './globals/contact-section/contact-section.component';
@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    ServicesSectionComponent,
    ChooseSectionComponent,
    TabSectionComponent,
    ProjectSectionComponent,
    TeamSectionComponent,
    TestimonialSectionComponent,
    AnalysisSectionComponent,
    BlogSectionComponent,
    PartnerSectionComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    FeaturesComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FaqSectionComponent,
    PricingSectionComponent,
    PortfolioSectionComponent,
    SubscribeSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
