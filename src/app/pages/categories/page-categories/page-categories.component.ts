import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategorie']);
  }

}
