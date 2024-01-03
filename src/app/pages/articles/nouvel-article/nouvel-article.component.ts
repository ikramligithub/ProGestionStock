import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {
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
    this.router.navigate(['articles']);
  }


}
