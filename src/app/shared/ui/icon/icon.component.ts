import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name = input<'menu' | 'x'>('menu');
  size = input<'sm' | 'md' | 'lg'>('md');

  protected sizeValue = computed(() => {
    const sizeMap = {
      sm: '20',
      md: '24',
      lg: '28'
    };
    return sizeMap[this.size()];
  });
}
