export interface CustomError {
   statusCode: number;
   message: string;
   body?: string | undefined;
}

export function isCustomError(data: any): data is CustomError {
   return data && typeof data === 'object' && 'propiedadEspecificaCustomError' in data;
}
