export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: 'movie' | 'series' | 'episode'
    Poster: string;
}