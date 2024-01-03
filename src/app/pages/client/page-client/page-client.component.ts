import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent {


  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
  }
  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }
}
