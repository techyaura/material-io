import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit{

  tabTitle = 'Material.io';
  headerTitle: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {}

  // do singout
  signOut(): void {
    this.router.navigate(['/']);
  }

}
