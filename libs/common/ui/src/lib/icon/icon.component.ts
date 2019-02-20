import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  private _path: string;

  @Input()
  public set name(name: string) {
    if (name) {
      this.updateSvgIconPath(name);
    }
  }
  // Optional Inputs
  @Input()
  public set size(size: string) {
    if (size) {
      this.addToOptionalClasses(`size-${size}`);
    }
  }

  private _optionalClasses: string[] = [];

  ngOnInit() {
    if (!this.path) {
      throw new Error('Please pass the name parameter to load appropriate svg');
    }
  }

  get optionalClasses() {
    return this._optionalClasses;
  }

  get path() {
    return this._path;
  }

  private addToOptionalClasses(addClass: string): void {
    this._optionalClasses.push(addClass);
  }

  private updateSvgIconPath(name: string): void {
    this._path = `../assets/svg-sprite/sprite.svg#${name}`;
  }
}
