import { Component } from '@angular/core';

@Component({
  selector: 'app-values-section',
  templateUrl: './values-section.component.html',
  styleUrl: './values-section.component.scss',
})
export class ValuesSectionComponent {
  values = [
    {
      title: 'Foi',
      description: 'La danse comme expression de notre foi et de notre gratitude.',
    },
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque mouvement et chaque enseignement.',
    },
    {
      title: 'Communauté',
      description: 'Un espace bienveillant où chacun trouve sa place et s\'épanouit.',
    },
    {
      title: 'Passion',
      description: 'La passion pour la danse est au cœur de tout ce que nous faisons.',
    },
  ];
}
