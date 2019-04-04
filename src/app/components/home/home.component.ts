import { Component, OnInit } from '@angular/core';
import { MovieDatabaseService } from 'src/app/services/movie-database-service';
import { MovieModel } from 'src/app/models/movie-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private moviesList : Array<MovieModel>;

  constructor(
    private movieDbService: MovieDatabaseService
  ) { 
    this.moviesList = new Array<MovieModel>();
  }

  ngOnInit() {
    //loading the movies
    this.movieDbService.GetMovieList().subscribe( _movies => this.moviesList  = _movies );
    console.log(this.moviesList);
  }

}
