import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { StylesSectionComponent } from './sections/styles-section/styles-section.component';
import { CollaborationsSectionComponent } from './sections/collaborations-section/collaborations-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { ValuesSectionComponent } from './sections/values-section/values-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    StylesSectionComponent,
    CollaborationsSectionComponent,
    TestimonialsSectionComponent,
    ValuesSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
