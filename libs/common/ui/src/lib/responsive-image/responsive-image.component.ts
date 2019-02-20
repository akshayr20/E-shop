import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'ui-responsive-img',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveImageComponent implements OnChanges {
  @Input() imageLink: string;

  public image: SafeStyle;

  constructor(public sanitization: DomSanitizer) {}

  ngOnChanges() {
    this.image = this.sanitization.bypassSecurityTrustStyle(
      `url(${this.imageLink})`
    );
  }
}
