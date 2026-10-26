const API_KEY = "57813574-c8977c5d3dcf506f235105762";
const BASE_URL = "https://pixabay.com/api/";

export function getImages(page) {
  const params = new URLSearchParams({
    key: API_KEY,
    editors_choice: "true",
    image_type: "photo",
    safesearch: "true",
    per_page: "12",
    page: page,
  });

  return fetch(`${BASE_URL}?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error("Помилка завантаження зображень");
    }

    return response.json();
  });
}




const listRef = document.querySelector(".list");
const btnRef = document.querySelector(".btn");

let page = 1;
let totalHits = 0;
let total = 0;

function renderImages(arr) {
  const createMarkup = arr
    .map(({ id, tags, previewURL }) => {
      return `<li id="${id}">
        <img src="${previewURL}" alt="${tags}">
      </li>`;
    })
    .join("");

  listRef.insertAdjacentHTML("beforeend", createMarkup);
}

loadImages(page);

btnRef.addEventListener("click", () => {
  page++;
  loadImages(page);
});

function loadImages(page) {
  getImages(page)
    .then((res) => {
      totalHits = res.totalHits;
      total += res.hits.length;

      renderImages(res.hits);

      if (total >= totalHits || res.hits.length === 0) {
        btnRef.style.display = "none";
      }
    })
    .catch((error) => {
      console.error(error);
    });
}