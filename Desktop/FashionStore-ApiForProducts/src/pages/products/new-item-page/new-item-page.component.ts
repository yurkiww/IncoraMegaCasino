import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.scss'],
})
export class NewItemPageComponent implements OnInit {
  newItemForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newItemForm = this.fb.group({
      name: ['', Validators.required],
      brandName: ['', Validators.required],
      price: ['', Validators.required],
      cloth: ['', Validators.required],
      sizes: ['', Validators.required],
      colors: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
    });
  }
  public addItem = () => {
    console.log(this.newItemForm.value);
  };
  isFieldValid = (filedName: string) => {
    return (
      this.newItemForm.get(filedName).invalid &&
      this.newItemForm.get(filedName).touched
    );
  };
}
