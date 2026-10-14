// ========== OUTILS DU PANIER (localStorage) ==========

// Lit le panier enregistré (liste vide s'il n'y a rien)
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Enregistre le panier puis met à jour le chiffre sur l'icône
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Affiche sur l'icône du panier le nombre total d'articles
function updateCartCount() {
  const nombreArticlesDifferents = getCart().length;
  const el = document.getElementById("cart-count");
  if (el) {
    el.textContent = nombreArticlesDifferents;
    el.style.display = nombreArticlesDifferents > 0 ? "flex" : "none";
  }
}


// Ajoute un produit (ou +1 s'il est déjà dans le panier)
function addToCart(product) {
  const cart = getCart();
  // String(...) évite tout problème de type entre nombre et texte
  const found = cart.find(i => String(i.id) === String(product.id));
  if (found) {
    found.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
}

// ========== PAGE PANIER (panier.html) ==========

// Transforme un prix en nombre (accepte 25000 ou "25 000 FCFA")
function prixEnNombre(prix) {
  return Number(String(prix).replace(/[^\d.]/g, "")) || 0;
}

function formaterPrix(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

function changerQuantite(id, delta) {
  const cart = getCart();
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;
  item.qty += delta;
  saveCart(cart.filter(i => i.qty > 0));
  afficherPanier();
}

function supprimerProduit(id) {
  saveCart(getCart().filter(i => String(i.id) !== String(id)));
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById("liste-panier");
  if (!liste) return; // on n'est pas sur la page panier

  const totalEl = document.getElementById("total-panier");
  const cart = getCart();

  if (cart.length === 0) {
    liste.innerHTML = '<p class="panier-vide">Votre panier est vide.</p>';
    if (totalEl) totalEl.textContent = "";
    return;
  }

  let total = 0;
  liste.innerHTML = cart.map(item => {
    const sousTotal = prixEnNombre(item.prix) * item.qty;
    total += sousTotal;
    return `
      <div class="ligne-panier">
        <img src="${item.image}" alt="${item.nom}" class="img-panier">
        <div class="infos-panier">
          <h3>${item.nom}</h3>
          <p>${formaterPrix(prixEnNombre(item.prix))}</p>
          <div class="quantite">
            <button onclick="changerQuantite(${JSON.stringify(item.id)}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changerQuantite(${JSON.stringify(item.id)}, 1)">+</button>
          </div>
        </div>
        <div class="droite-panier">
          <strong>${formaterPrix(sousTotal)}</strong>
          <button class="btn-supprimer" onclick="supprimerProduit(${JSON.stringify(item.id)})">Supprimer</button>
        </div>
      </div>`;
  }).join("");

  if (totalEl) totalEl.textContent = "Total : " + formaterPrix(total);
}

// Vide complètement le panier (le compteur retombe à 0)
function viderPanier() {
  localStorage.removeItem("cart");
  updateCartCount();
  afficherPanier();
}

// ========== AU CHARGEMENT DE CHAQUE PAGE ==========
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  afficherPanier();

  // Bouton "Vider le panier" (page panier.html)
  const btnVider = document.getElementById("vider-panier");
  if (btnVider) btnVider.addEventListener("click", viderPanier);

  // Page checkout : le panier est vidé quand on valide la commande
  const btnCommande = document.querySelector(".btn-commande");
  if (btnCommande && btnCommande.closest("form")) {
    btnCommande.closest("form").addEventListener("submit", () => {
      localStorage.removeItem("cart");
    });
  }

  // Le bouton n'existe que sur details.html
  const bouton = document.getElementById("add-to-cart");
  if (bouton) {
    bouton.addEventListener("click", () => {
      // "produit" est le produit affiché sur la page détail
      if (typeof produit === "undefined") {
        console.error("La variable 'produit' est introuvable");
        return;
      }
      addToCart({
        id: produit.id,
        nom: produit.nom,
        prix: produit.prix,
        image: produit.image
      });
    });
  }
});