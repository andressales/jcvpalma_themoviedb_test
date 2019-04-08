import { Component, OnInit } from '@angular/core';
import { MovieDatabaseService } from 'src/app/services/movie-database-service';
import { MovieModel } from 'src/app/models/movie-model';
import { GenreModel } from 'src/app/models/genre-model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private moviesList: Array<MovieModel>;
  private v_years: Array<string> = new Array();
  private v_genres: Array<GenreModel>;
  filteredStates: Observable<GenreModel[]>;
  stateCtrl = new FormControl();


  constructor(
    private movieDbService: MovieDatabaseService
  ) {
    this.moviesList = new Array<MovieModel>();

    //# Ano
    var v_ano = new Date();
    for (let i = 1900; i <= v_ano.getFullYear(); i++) {
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
    //loading the movies
    this.movieDbService.GetMovieList().subscribe(_movies => this.moviesList = _movies);
    //loading genres
    this.movieDbService.GetGenresMovie().subscribe( _genres => this.v_genres = _genres);

  }


  private _filterStates(value: string): GenreModel[] {
    const filterValue = value.toLowerCase();
    return this.v_genres.filter(genres => genres.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectGetFilter(event: any) {

    //limpo o vetor
    this.moviesList = null;
    this.moviesList = new Array<MovieModel>();

    this.movieDbService.GetMovieList().subscribe(_movies => 
      this.moviesList = _movies.filter( (x:MovieModel) => {
      return x.genre_ids.indexOf(this.stateCtrl.value);
    }));
  }

}
