export const mergingUrlinMovies = (movie: any, urls: Array<object>) => {
  let item = movie;
  urls.map((url: any) => {
    let lowerCase = url.title.toLowerCase();
    if (lowerCase.includes(movie.title.toLowerCase())) {
      item = { ...movie, ...url };
      return item;
    }
    return null;
  });
  return item;
};
