import { Component, OnInit } from '@angular/core';
import { MovieDetailModel } from 'src/app/models/movie-detail-model';
import { MovieDatabaseService } from 'src/app/services/movie-database-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetail : MovieDetailModel;
  movieId : string;

  constructor(
    private route: ActivatedRoute,
    private movieDbService: MovieDatabaseService
  ) { 
    
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("id");
    
    this.movieDbService.GetMovieDetail(this.movieId).subscribe( _movie => { this.movieDetail = _movie });

    

  }

}
