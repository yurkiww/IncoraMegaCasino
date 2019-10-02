import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}
  signOut() {
    this.storageService.deleteToken();
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {}
}
