export interface IUser {
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
}

export interface IMovieDetails {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  production_companies: IProductionCompany[];
}

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
}
