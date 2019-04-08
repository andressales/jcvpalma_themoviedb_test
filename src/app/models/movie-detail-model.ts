import { GenreModel } from './genre-model';

export class MovieDetailModel {
    
    public id:string;
    public adult:Boolean;
    public backdrop_path:String;
    public belongs_to_collection: Array<object>;
    public budget:string;
    public genres:Array<GenreModel>;
    public imdb_id:string;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: string;
    public poster_path : string;
    public production_companies : Array<object>;
    public production_countries : Array<object>;
    public release_date: string;
    public revenue: string;
    public runtime: string;
    public spoken_languages: Array<object>;
    public status: string;
    public tagline: string;
    public title: string;
    public video: string;
    public vote_average: string;
    public vote_count: string;

}

