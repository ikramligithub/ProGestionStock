import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent {
  origin='';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
  });
  }





}
