import { Component, OnInit } from '@angular/core';
import { IBottomSection } from 'src/interfaces/product-info';

@Component({
  selector: 'app-item-bottom-section',
  templateUrl: './item-bottom-section.component.html',
  styleUrls: ['./item-bottom-section.component.scss'],
})
export class ItemBottomSectionComponent implements OnInit {
  visible = false;
  bottomSectionInfo: IBottomSection = {
    color: 'Blue',
    closure: 'Zipper, Button',
    fittings: 'cooper, metal',
    decor: 'Logo',
    pockets: 'five pockets',
    modelSize: '32/32',
    modelDimension: 'the size corresponds to the specified',
    brandInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    brandInformationShort:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  };
  constructor() {}
  show = () => {
    this.visible = true;
  };
  hide = () => {
    this.visible = false;
  };
  ngOnInit() {}
}
