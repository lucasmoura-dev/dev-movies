const IMAGE_WIDTH = 400;
const BASE_URL = `https://image.tmdb.org/t/p/w${IMAGE_WIDTH}/`;

/**
 * Gera a URI da imagem do pôster que foi obtida pela API do TMDB.
 * @param imagePath nome da imagem no site TMDB (não contém baseUrl)
 * @returns retorna a URI da minha completa
 */
export const getPosterImageUri = (imagePath: string): string => {
  return BASE_URL + imagePath;
};
