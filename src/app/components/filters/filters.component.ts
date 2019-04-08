import { Component, OnInit } from '@angular/core';
import { GENRES } from '../../commons/genres-list';
import { Observable } from 'rxjs';
import { GenreModel } from 'src/app/models/genre-model';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  private v_years : Array<string> = new Array();
  private v_genres = GENRES;
  filteredStates: Observable<GenreModel[]>;
  stateCtrl = new FormControl();

  constructor() { 

    //# Ano
    var v_ano = new Date();
    for(let i=1900;i<=v_ano.getFullYear();i++){
      this.v_years.push(i.toString());
    }
    this.v_years = this.v_years.reverse();
    //# Fim Ano

    //Genres Filter
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.v_genres.slice())
      );


  }

  ngOnInit() {
  }


  private _filterStates(value: string): GenreModel[] {
    const filterValue = value.toLowerCase();
    return this.v_genres.filter( genres => genres.name.toLowerCase().indexOf(filterValue) === 0 );
  }

  onSelectGetFilter(event:any){
    
  }
}
