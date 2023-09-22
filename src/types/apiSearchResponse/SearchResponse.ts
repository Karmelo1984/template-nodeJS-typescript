export interface SearchResponse {
   map(arg0: (pelicula: { titulo: string; link: string; anyo: number }, index: number) => void): unknown;
   id: number;
   titulo: string;
   anyo: number;
   link: string;
}

export function isSearchResponse(data: any): data is SearchResponse {
   return data && typeof data === 'object' && 'propiedadEspecificaSearch' in data;
}
