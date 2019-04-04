import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieModel } from '../models/movie-model';
import { RequestResult } from '../commons/request-result';

@Injectable({
    providedIn: 'root',
})
export class MovieDatabaseService {

    constructor(
        private http: HttpClient
    ) {

    }


    public GetMovieList(): Observable<Array<MovieModel>> {

        let movie_list = new Array<MovieModel>();

        let v_url = environment.URL_TMDB_API + "discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + environment.API_TMDB_KEY;

        this.http.get(v_url).subscribe((req: RequestResult) => {
            if (req.results.length > 0) {
                req.results.map( (movies : MovieModel) => {
                    movie_list.push(movies);
                })
            }
            return of(movie_list);
        });
        return of(movie_list);
    }

}
