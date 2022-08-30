export default function searching(query: string, data: any) {
  let regEx = new RegExp(`${query}`, "i");
  let matches = data.filter((item: any) => {
    if (item.title.match(regEx)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
  return matches;
}
