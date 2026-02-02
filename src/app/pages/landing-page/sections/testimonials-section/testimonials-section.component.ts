import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  testimonials = [
    {
      name: 'Marie L.',
      text: 'Une expérience incroyable ! Les cours sont dynamiques et l\'ambiance est vraiment bienveillante.',
      image: 'https://placehold.co/400',
    },
    {
      name: 'Jean P.',
      text: 'J\'ai découvert une passion que je ne soupçonnais pas. Merci à toute l\'équipe !',
      image: 'https://placehold.co/400',
    },
    {
      name: 'Claire D.',
      text: 'Les professeurs sont passionnés et à l\'écoute. Je recommande à 100% !',
      image: 'https://placehold.co/400',
    },
  ];
}
