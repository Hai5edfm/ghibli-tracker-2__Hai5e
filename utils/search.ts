export default function searching(query: string, data: any) {
  let regEx = new RegExp(`${query}`, "i");
  data.forEach((item: any) => {
    if (item.title.toLowerCase().includes(query.toLowerCase())) {
      item;
    } else {
      false;
    }
    return item;
  });
}
