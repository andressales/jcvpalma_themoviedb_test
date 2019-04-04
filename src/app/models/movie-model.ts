export class MovieModel {
    public vote_count: Number;
    public id: Number;
    public video: Boolean;
    public vote_average: Number;
    public title: string;
    public popularity: Number;
    public poster_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: Array<Number>;
    public backdrop_path: string;
    public adult: Boolean;
    public overview: string;
    public release_date: Date;
}
