import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }

}
