import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }

}
