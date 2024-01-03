import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrl: './nouvel-utilisateur.component.scss'
})
export class NouvelUtilisateurComponent {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
  });
  }
  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }

}
