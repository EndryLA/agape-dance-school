import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  protected isDesktop = signal(false);
  protected isPlaying = signal(false);
  protected isMuted = signal(true);
  protected isFullscreen = signal(false);
  protected progress = signal(0);
  protected currentTime = signal('0:00');
  protected duration = signal('0:00');

  private videoRef = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');
  private wrapperRef = viewChild<ElementRef<HTMLDivElement>>('videoWrapper');

  ngOnInit() {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    this.isDesktop.set(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      this.isDesktop.set(e.matches);
      this.isPlaying.set(false);
    };
    mediaQuery.addEventListener('change', handler);

    const fullscreenHandler = () => {
      this.isFullscreen.set(this.isInFullscreen());
    };
    document.addEventListener('fullscreenchange', fullscreenHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenHandler);

    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', handler);
      document.removeEventListener('fullscreenchange', fullscreenHandler);
      document.removeEventListener('webkitfullscreenchange', fullscreenHandler);
    });
  }

  protected onLoadedMetadata() {
    const video = this.videoRef()?.nativeElement;
    if (video) {
      this.duration.set(this.formatTime(video.duration));
    }
  }

  protected onTimeUpdate() {
    const video = this.videoRef()?.nativeElement;
    if (video) {
      this.progress.set((video.currentTime / video.duration) * 100);
      this.currentTime.set(this.formatTime(video.currentTime));
    }
  }

  protected onVideoEnded() {
    this.isPlaying.set(false);
  }

  protected togglePlay() {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;

    if (video.paused) {
      video.play();
      this.isPlaying.set(true);
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }

  protected toggleMute() {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;

    video.muted = !video.muted;
    this.isMuted.set(video.muted);
  }

  protected seek(event: MouseEvent) {
    const video = this.videoRef()?.nativeElement;
    const target = event.currentTarget as HTMLElement;
    if (!video || !target) return;

    const rect = target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
  }

  protected toggleFullscreen() {
    const wrapper = this.wrapperRef()?.nativeElement;
    const video = this.videoRef()?.nativeElement;
    if (!wrapper) return;

    if (this.isInFullscreen()) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    } else {
      // Try wrapper first (keeps custom controls), fall back to video for iOS
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if ((wrapper as any).webkitRequestFullscreen) {
        (wrapper as any).webkitRequestFullscreen();
      } else if (video && (video as any).webkitEnterFullscreen) {
        // iOS Safari: only video element supports fullscreen
        (video as any).webkitEnterFullscreen();
      }
    }
  }

  private isInFullscreen(): boolean {
    return !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement
    );
  }

  private formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
