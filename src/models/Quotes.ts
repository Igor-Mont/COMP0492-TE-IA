enum FLAG {
  BRAZIL,
  EUA,
  SPAIN,
}

interface Quote {
  author: string;
  message: string;
  image_url: string;
  english_traduction: string;
  portuguese_traduction: string;
  spanish_traduction: string;
  current_flag: FLAG;
}

export { FLAG, Quote };
