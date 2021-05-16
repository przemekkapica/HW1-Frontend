export interface Order {
    id: number;
    movieId?: number;
    date?: string;
    netAmount?: number;
    discount?: number;
    gross?: number;
}