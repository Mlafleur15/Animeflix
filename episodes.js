// fichier : episodes.js
// Ce fichier contient les données des épisodes de Death Note – Saison 1
// Tu peux ajouter d'autres épisodes dans le tableau "episodes" en copiant la même structure

const episodes = [
  {
    titre: "Épisode 1 - Renaissance",
    description: "Light Yagami découvre le Death Note, un carnet mystérieux permettant de tuer n’importe qui en écrivant son nom.",
    image: "https://i.imgur.com/s1IzpMJ.jpg", // image d’aperçu
    embed: "https://archive.org/embed/deathnote-vf-episode-01" // lien vidéo VF intégré
  },
  {
    titre: "Épisode 2 - Duel",
    description: "Light continue à utiliser le Death Note, pendant que L commence à le traquer.",
    image: "https://i.imgur.com/rB7xJId.jpg",
    embed: "https://archive.org/embed/deathnote-vf-episode-02"
  },
  {
    titre: "Épisode 3 - Affrontement",
    description: "L tend un piège à Kira pour tester ses capacités. Le duel d’intelligence commence.",
    image: "https://i.imgur.com/1f3aTKr.jpg",
    embed: "https://archive.org/embed/deathnote-vf-episode-03"
  },
  {
    titre: "Épisode 4 - Poursuite",
    description: "Light tente de couvrir ses traces pendant que les enquêteurs se rapprochent.",
    image: "https://i.imgur.com/xgQf8wd.jpg",
    embed: "https://archive.org/embed/deathnote-vf-episode-04"
  },
  {
    titre: "Épisode 5 - Déclaration",
    description: "L révèle publiquement sa volonté de capturer Kira. La guerre psychologique est lancée.",
    image: "https://i.imgur.com/cfWZn3b.jpg",
    embed: "https://archive.org/embed/deathnote-vf-episode-05"
  }
];

// Génération du HTML pour chaque épisode avec player intégré
const container = document.getElementById("episodeContainer");
const player = document.getElementById("videoPlayer");

episodes.forEach((ep, index) => {
  const epDiv = document.createElement("div");
  epDiv.className = "episode";
  epDiv.style.display = "flex";
  epDiv.style.marginBottom = "1rem";
  epDiv.style.alignItems = "center";
  epDiv.style.gap = "1rem";

  // Image d’aperçu
  const img = document.createElement("img");
  img.src = ep.image;
  img.alt = ep.titre;
  img.style.width = "120px";
  img.style.height = "80px";
  img.style.objectFit = "cover";

  // Texte descriptif
  const text = document.createElement("div");
  text.innerHTML = `<strong>${ep.titre}</strong><br><small>${ep.description}</small>`;

  epDiv.appendChild(img);
  epDiv.appendChild(text);

  // Quand on clique, la vidéo s'affiche
  epDiv.onclick = () => {
    player.src = ep.embed;
    player.style.display = "block";
    window.scrollTo({ top: player.offsetTop, behavior: "smooth" });
  };

  container.appendChild(epDiv);
});
