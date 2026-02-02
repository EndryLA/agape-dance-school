import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  variant = input<'primary' | 'dark' | 'neutral'>('primary')
  size = input<'sm' | 'md' | 'lg'>('md')

}
