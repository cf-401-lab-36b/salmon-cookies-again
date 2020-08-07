import { Component } from '@angular/core';

import { Store } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  model = new Store(18, 'storename', 33, 22, 11);

  submitted = false;

  onSubmit() { 

    console.log('please work', this.model);

    this.submitted = true; }

  newHero() {
    this.model = new Store(42, '', 0, 0, 0);
  }
}
// input needs to be
// location name
// min cust / hour
// max cust / hour
// avg cookies / sale