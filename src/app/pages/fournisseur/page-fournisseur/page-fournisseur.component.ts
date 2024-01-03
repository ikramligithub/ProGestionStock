import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }
}
