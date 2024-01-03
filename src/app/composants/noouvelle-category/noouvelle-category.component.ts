import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noouvelle-category',
  templateUrl: './noouvelle-category.component.html',
  styleUrl: './noouvelle-category.component.scss'
})
export class NoouvelleCategoryComponent {
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
    this.router.navigate(['categories']);
  }

}
