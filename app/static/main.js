let ul = document.getElementById('lista');
let busca = document.getElementById('search');
let select = document.getElementById('category')
let form = document.getElementById('form')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '26a34c9ddamsh92375c91a77ebd2p13f129jsn5944419d32fd',
		'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
	}
};

const games_url =
  "https://gogoanime2.p.rapidapi.com/popular";
const searchCategoryUrl =
  "https://gogoanime2.p.rapidapi.com/search?keyw=";

const getGames = async (url) => {
  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      showGames(data);
    })
    .catch((err) => console.error(err));
};

getGames(games_url);

const showGames = (data) => {
  const lista = document.getElementById("lista");

  data.map((data) => {
    const li = document.createElement("li");

    li.setAttribute("id", data.animeTitle);
    li.innerHTML = `
  
            <div
            class="border rounded-lg shadow-md bg-gray-800 border-gray-700 h-96 w-60 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300"
            >
            <div class="flex justify-center mt-2 px-2">
                <img class="rounded-t-lg w-60 mt-2 h-64" src="${data.animeImg}" alt="${data.animeTitle}" />
            </div>
            <div class="p-5 h-56 ">
              <div class=" w-auto">
                <h5
                class="mb-2 text-xl font-bold tracking-tight text-white truncate"
                id="title"
                >
                ${data.animeTitle}
                </h5>
              </div>
            </div>
            </div>
        `;

    lista.appendChild(li);
  });
};

const searchCategory = () => {
  let category = busca.value.toLowerCase();
  if (category != "") {
    ul.innerText = "";
    getGames(searchCategoryUrl + category);
    console.log(category)
  } else {
    ul.innerText = "";
    getGames(games_url);
    console.log(category)
    
  }
};
form.addEventListener("submit", (e) => {
e.preventDefault();
searchCategory();
})