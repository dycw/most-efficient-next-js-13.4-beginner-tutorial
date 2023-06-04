export type UnsplashImage = {
  description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
  };
  width: number;
  height: number;
};

export type UnsplashSearchResponse = {
  results: UnsplashImage[];
};
