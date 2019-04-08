import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieModel } from '../models/movie-model';
import { RequestResult } from '../commons/request-result';
import { GenreModel } from '../models/genre-model';
import { RequestGenreResult } from '../commons/request-genre-result';
import { MovieDetailModel } from '../models/movie-detail-model';

@Injectable({
    providedIn: 'root',
})
export class MovieDatabaseService {

    movie_list = new Array<MovieModel>();
    genre_list = new Array<GenreModel>();
    movie_detail:MovieDetailModel;

    constructor(
        private http: HttpClient
    ) {
        this.movie_detail = new MovieDetailModel();
    }


    public GetMovieList(): Observable<Array<MovieModel>> {

        let v_url = environment.URL_TMDB_API + "discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + environment.API_TMDB_KEY;

        this.movie_list = new Array<MovieModel>();

        this.http.get(v_url).subscribe((req: RequestResult) => {
            if (req.results.length > 0) {
                req.results.map( (movies : MovieModel) => {
                    this.movie_list.push(movies);
                })
            }
            return of(this.movie_list);
        });
        return of(this.movie_list);
    }

    public GetMoviesByGenre( id:number ): Observable<Array<MovieModel>> {
        let v_url = environment.URL_TMDB_API + "discover/movie?page=1&with_genres="+id+"&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + environment.API_TMDB_KEY;

        this.movie_list = new Array<MovieModel>();

        this.http.get(v_url).subscribe((req: RequestResult) => {
            if (req.results.length > 0) {
                req.results.map( (movies : MovieModel) => {
                    this.movie_list.push(movies);
                })
            }
            return of(this.movie_list);
        });
        return of(this.movie_list);
    }
    //with_genres

    public async GetMovieDetail( MovieId:string ): Promise<MovieDetailModel> {
        let v_url = environment.URL_TMDB_API + "movie/"+MovieId+"?api_key=" + environment.API_TMDB_KEY;
        return await this.http.get(v_url).toPromise<any>();
        //return of(this.movie_detail);
    }



    public GetGenresMovie(): Observable<Array<GenreModel>> {
        let v_url = environment.URL_TMDB_API + "genre/movie/list?language=en-US&api_key=" + environment.API_TMDB_KEY;

        this.http.get(v_url).subscribe((req: RequestGenreResult) => {
            if (req.genres.length > 0) {
                req.genres.map( (genre : GenreModel) => {
                    this.genre_list.push(genre);
                })
            }
            return of(this.genre_list);
        });
        return of(this.genre_list);

    }
}
