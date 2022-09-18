export function sortingMovies(category: string, order: string, array: []) {
  const categories: any = {
    running_time: "running_time",
    release_date: "release_date",
    rt_score: "rt_score",
  };

  const sortProperty = categories[category];
  const sorted =
    order === "ascendant"
      ? [...array].sort((a, b) => b[sortProperty] - a[sortProperty])
      : [...array].sort((a, b) => a[sortProperty] - b[sortProperty]);

  return sorted;
}
