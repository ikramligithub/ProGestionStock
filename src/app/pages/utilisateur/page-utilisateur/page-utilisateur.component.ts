import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  }

  nouvelUtilosateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }

}
