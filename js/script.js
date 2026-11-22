const phone = "5551989193776";
// Categorias são sugestões de organização visual: confirme a classificação de cada título com a proprietária.
const books = [
  {
    image: "img/a-baba-do-rancho-monte-sereno.webp",
    title: "A Babá do Rancho Monte Sereno",
    author: "Karol Alves",
    category: "Romance",
    synopsis:
      "Livro 1 da trilogia. Helena chega a um rancho isolado para trabalhar como babá e encontra um patrão reservado, uma criança marcada pela perda e uma casa repleta de silêncios. Ao conquistar espaço naquela família, ela descobre que o passado ainda está longe de descansar.",
    series: "Trilogia Rancho Monte Sereno",
    order: 1,
  },
  {
    image: "img/a-baba-e-os-segredos-do-rancho.webp",
    title: "A Babá e os Segredos do Rancho",
    author: "Karol Alves",
    category: "Romance",
    synopsis:
      "Livro 2 da trilogia. Uma fotografia e uma voz inesperada reabrem feridas que pareciam encerradas. Helena e Gabriel seguem novas pistas sobre Isabela, enquanto o Rancho Monte Sereno revela histórias que alguém fez de tudo para esconder.",
    series: "Trilogia Rancho Monte Sereno",
    order: 2,
  },
  {
    image: "img/a-baba-e-a-ultima-promessa.webp",
    title: "A Babá e a Última Promessa",
    author: "Karol Alves",
    category: "Romance",
    synopsis:
      "Livro 3 da trilogia. No desfecho de Rancho Monte Sereno, vozes do passado, revelações sobre Isabela e promessas ainda não cumpridas colocam Helena e Gabriel diante de escolhas definitivas. Será possível construir um futuro depois de tanta verdade escondida?",
    series: "Trilogia Rancho Monte Sereno",
    order: 3,
  },
  {
    image: "img/a-prisioneira-do-mafioso.webp",
    title: "A Prisioneira do Mafioso",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "Um encontro com um homem perigoso leva a uma proposta cercada por sete cláusulas. Entre uma villa cheia de segredos, identidades ocultas e pistas sobre Helena, uma mulher terá de descobrir em quem confiar antes que as mentiras da máfia decidam seu destino.",
    series: "",
    order: 0,
  },
  {
    image: "img/a-noiva-da-lua-sangrenta.webp",
    title: "A Noiva da Lua Sangrenta",
    author: "Karol Alves",
    category: "Fantasia",
    synopsis:
      "Ao chegar ao Vale das Cinzas para investigar a morte da mãe, Helena Duarte descobre algo impossível: ela já morreu uma vez. Em meio a linhagens de lobisomens e pactos de sangue, sua ligação com o enigmático Adrian Ferraz pode mudar o destino de todos.",
    series: "",
    order: 0,
  },
  {
    image: "img/o-arquivo-dos-coracoes-mortos.webp",
    title: "O Arquivo dos Corações Mortos",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "Uma mulher é encontrada morta sem o coração — e sem qualquer sinal de cirurgia. Quando Valentina Vilar percebe que o corpo traz a data de seu nascimento, uma investigação macabra se transforma em um enigma íntimo sobre sua própria existência.",
    series: "",
    order: 0,
  },
  {
    image: "img/o-homem-que-eu-comprei-por-uma-noite.webp",
    title: "O Homem Que Eu Comprei Por Uma Noite",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "O que deveria ser apenas uma noite com um desconhecido se transforma em uma trama de poder, identidades e segredos. Entre um bilionário misterioso, um envelope ligado aos mortos e o passado de sua família, Camila precisa descobrir o verdadeiro preço daquela escolha.",
    series: "",
    order: 0,
  },
  {
    image: "img/o-museu-das-mulheres-desaparecidas.webp",
    title: "O Museu das Mulheres Desaparecidas",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "Algumas mulheres são esquecidas. Outras são colecionadas. Retratos inquietantes, memórias que não parecem pertencer a quem as vive e um quarto escondido atrás do espelho conduzem uma mulher ao coração de um mistério sobre desaparecimentos e identidades.",
    series: "",
    order: 0,
  },
  {
    image: "img/o-preco-de-ser-dele.webp",
    title: "O Preço de Ser Dele",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "Lorena desperta vestida de noiva, com sangue nas mãos e nenhuma lembrança de como chegou ali. Diante dela está Adrian Montenegro, o homem que transformou sua vida em um labirinto de desejo, manipulação e segredos. A verdade pode custar mais que sua liberdade.",
    series: "",
    order: 0,
  },
  {
    image: "img/possessao-obscura.webp",
    title: "Possessão Obscura",
    author: "Karol Alves",
    category: "Dark Romance",
    synopsis:
      "Um acordo perigoso, uma porta proibida e uma mulher com o mesmo rosto. Entre contratos, identidades roubadas e segredos de família, Isadora mergulha em um jogo de poder no qual desejo e liberdade parecem incompatíveis.",
    series: "",
    order: 0,
  },
];
// Modelo único de link de produto do Mercado Livre. Substitua por links individuais quando disponíveis.
const mercadoLivreProduto =
  "https://produto.mercadolivre.com.br/MLB-8011889670";
const grid = document.querySelector("#books"),
  search = document.querySelector("#search"),
  empty = document.querySelector("#empty");
const modal = document.querySelector("#book-modal");
function render() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  const list = books.filter((b) =>
    `${b.title} ${b.author} ${b.synopsis}`
      .toLocaleLowerCase("pt-BR")
      .includes(term),
  );
  grid.innerHTML = list
    .map((b) => {
      const i = books.indexOf(b);
      return `<article class="book-card"><div class="cover"><img src="${b.image}" alt="Capa de ${b.title}" loading="lazy"></div><div class="book-info"><small>${b.category.toUpperCase()}${b.order ? " · LIVRO " + b.order + " DA TRILOGIA" : ""}</small><h3>${b.title}</h3><p class="book-author">Por ${b.author}</p><button type="button" class="more-button" data-book="${i}">Saber mais +</button></div></article>`;
    })
    .join("");
  empty.hidden = list.length > 0;
}
function openBook(i) {
  const b = books[i];
  if (!b) return;
  document.querySelector("#modal-cover").src = b.image;
  document.querySelector("#modal-cover").alt = `Capa do livro ${b.title}`;
  document.querySelector("#modal-category").textContent =
    b.category + (b.order ? ` · Livro ${b.order} da trilogia` : "");
  document.querySelector("#modal-title").textContent = b.title;
  document.querySelector("#modal-author").textContent = `Por ${b.author}`;
  document.querySelector("#modal-synopsis").textContent = b.synopsis;
  document.querySelector("#modal-whatsapp").href =
    `https://wa.me/${phone}?text=${encodeURIComponent(`Olá, Kah! Vi o livro "${b.title}" no site e gostaria de comprar com o desconto do WhatsApp. Qual é o valor especial?`)}`;
  document.querySelector("#modal-ml").href = mercadoLivreProduto;
  modal.showModal();
}
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-book]");
  if (btn) openBook(Number(btn.dataset.book));
});
modal
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
search.addEventListener("input", render);
const toggle = document.querySelector(".menu-toggle"),
  menu = document.querySelector("#menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "✕" : "☰";
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }),
);
document.querySelector("#year").textContent = new Date().getFullYear();
render();

// Faixa contínua com as dez capas autorais; texto do banner permanece imóvel.
(function initHeroMarquee() {
  const host = document.querySelector("#hero-slideshow");
  if (!host || !books.length) return;
  const track = document.createElement("div");
  track.className = "hero-cover-track";
  const makeCover = (book) => {
    const frame = document.createElement("div");
    frame.className = "hero-cover-frame";
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = "";
    img.loading = "eager";
    img.decoding = "async";
    frame.appendChild(img);
    return frame;
  };
  // Duas sequências idênticas para um movimento sem saltos.
  for (let repeat = 0; repeat < 2; repeat++)
    books.forEach((book) => track.appendChild(makeCover(book)));
  host.appendChild(track);
})();
