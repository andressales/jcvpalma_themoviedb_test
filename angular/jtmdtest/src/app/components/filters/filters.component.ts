import { Component, OnInit } from '@angular/core';
import { GENRES } from '../../commons/genres-list';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  private v_years : Array<string> = new Array();
  private v_genres = GENRES;

  constructor() { 

    var v_ano = new Date();

    for(let i=1900;i<=v_ano.getFullYear();i++){
      this.v_years.push(i.toString());
    }
    this.v_years = this.v_years.reverse();
  }

  ngOnInit() {
  }

}
