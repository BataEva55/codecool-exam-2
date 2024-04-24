import data from "./data.js";

const root = document.querySelector("#root");

const section = document.createElement("section");
section.id = "clean-code-principles";

const h1 = document.createElement("h1");
h1.className = "code__h1";
h1.innerText = "Clean Code Principles";

section.append(h1);
root.append(section);

function main() {
  data.forEach((item) => {
    const flatListContainer = document.createElement("div");
    flatListContainer.className = "flat-list";

    const titleBlock = document.createElement("div");
    titleBlock.className = "flat-list__title";

    flatListContainer.appendChild(titleBlock);

    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card__title";
    cardTitle.innerText = item.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card__body";
    cardBody.innerText = item.description;

    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    flatListContainer.appendChild(card);
    section.appendChild(flatListContainer);

    root.appendChild(section);
  });
}

main();
