export interface FilmResponse {
   titulo: string;
   titulo_original: string;
   anyo: number;
   duracion: string;
   pais: string;
   direccion: string;
   guion: string;
   reparto: string;
   musica: string;
   fotografia: string;
   companias: string;
   genero: string;
   sinopsis: string;
   nota: number;
   votos: number;
   img: string;
}

export function isFilmResponse(data: any): data is FilmResponse {
   return data && typeof data === 'object' && 'propiedadEspecificaFilm' in data;
}
