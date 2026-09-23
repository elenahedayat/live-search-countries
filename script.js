const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Canada", "China", "Colombia",
  "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Italy",
  "Japan", "Kenya", "Mexico", "Netherlands", "Nigeria", "Norway",
  "Pakistan", "Poland", "Portugal", "Russia", "Saudi Arabia",
  "South Africa", "Spain", "Sweden", "Switzerland", "Thailand",
  "Turkey", "Ukraine", "United Kingdom", "United States", "Vietnam"
];

const searchInput = document.getElementById("search");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");

function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function render(items) {
  resultsEl.innerHTML = "";
  if (items.length === 0) {
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;
  items.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    resultsEl.append(li);
  });
}

function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    render(countries);
    return;
  }
  const filtered = countries.filter((c) => c.toLowerCase().includes(q));
  render(filtered);
}

const debouncedSearch = debounce(search, 300);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

render(countries);