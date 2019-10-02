import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPagination } from 'src/interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  numbers: any;
  selected: any;
  page = 1;

  @Input() size: number;
  @Input() total: number;
  @Output() pageChanged = new EventEmitter<IPagination>();

  constructor() {}

  onNext() {
    if (!this.canNext) { return; }
    this.page++;
    this.pageChanged.emit({
      min: this.min,
      max: this.max,
      page: this.page
    });
  }
  onPrev() {
    if (!this.canPrev) { return; }
    this.page--;
    this.pageChanged.emit({
      min: this.min,
      max: this.max,
      page: this.page
    });
  }

  get min() {
    return (this.page - 1) * this.size + 1;
  }

  get max() {
    return this.page * this.size;
  }

  get canPrev() {
    return this.min > 1;
  }
  get canNext() {
    return this.max < this.total;
  }

  select(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
  ngOnInit() {
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}
