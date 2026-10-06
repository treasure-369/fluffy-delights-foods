// WhatsApp number (without + or spaces)
const whatsappNumber = "2349078215644";

/* ====== PRODUCT DATA ====== 
Last Updated: August 18, 2026
⚠️ VERIFY ALL PRICES BEFORE DEPLOYMENT ⚠️ */

let products = [];

// Product catalog and rich WhatsApp preview endpoint
const PRODUCTS_DATA_URL = "./products.json";
// Replace this after deploying the Cloudflare Worker.
const PRODUCT_PREVIEW_URL = "https://YOUR-WORKER.workers.dev/product";

;



const productsList = document.getElementById("productsList");
const categoryButtons = document.querySelectorAll(".chip");

// ===== Render Product Cards =====
function renderProducts(list) {
  if (!productsList) return; // SAFE GUARD
  productsList.innerHTML = "";
  if (list.length === 0) {
    productsList.innerHTML = `<p style="text-align:center; color:#888;">No products found</p>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="prod-meta">
        <div class="prod-header">
          <h3>${p.name}</h3>
          ${p.price ? `<span class="price-box">${p.price}</span>` : ""}
        </div>
        <p>${p.desc}</p>
        ${p.note ? `<p class="note">${p.note}</p>` : ""}
      </div>
    `;

    card.onclick = () => {
      const productUrl = `${PRODUCT_PREVIEW_URL}?id=${encodeURIComponent(p.id)}`;
      const message = encodeURIComponent(
        `Hello 🎉\n\n*FLUFFY DELIGHTS FOODS!*\n\nI'm interested in the\n*${p.name}*\n\n*Description:* ${p.desc}\n\n*Price:* ${p.price}\n\n${productUrl}\n\nCan you tell me more or confirm availability?`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    productsList.appendChild(card);
  });
}


// ===== Load Product Catalog + Initial Render =====
async function loadProducts() {
  if (!productsList) return;

  try {
    const response = await fetch(PRODUCTS_DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Product catalog failed: ${response.status}`);

    products = await response.json();

    const savedCategory = localStorage.getItem("selectedCategory") || "all";

    if (savedCategory === "all") {
      renderProducts(products);
    } else {
      const filtered = products.filter(p => p.category === savedCategory);
      renderProducts(filtered);
    }

    categoryButtons.forEach(chip => {
      if (chip.dataset.category === savedCategory) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }

      chip.addEventListener("click", () => {
        document.querySelector(".chip.active")?.classList.remove("active");
        chip.classList.add("active");

        const selectedCategory = chip.dataset.category;
        localStorage.setItem("selectedCategory", selectedCategory);

        if (selectedCategory === "all") {
          renderProducts(products);
        } else {
          const filtered = products.filter(p => p.category === selectedCategory);
          renderProducts(filtered);
        }
      });
    });
  } catch (error) {
    console.error("Unable to load product catalog:", error);
    productsList.innerHTML = `<p style="text-align:center; color:#888;">Unable to load products. Please refresh.</p>`;
  }
}

loadProducts();


// ===== Enhanced Search Filter (Name + Description + Category) =====
function searchProduct() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    // If search is empty, show all products based on active category
    if (query === "") {
        const activeChip = document.querySelector(".chip.active");
        const selectedCategory = activeChip ? activeChip.dataset.category : "all";
        
        if (selectedCategory === "all") {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === selectedCategory);
            renderProducts(filtered);
        }
        return;
    }
    
    // Search across name, description, AND category
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    
    renderProducts(filtered);
}
window.searchProduct = searchProduct;


// ===== Book Event Button (SAFE GUARD ADDED HERE) =====
const bookEventBtn = document.getElementById("bookEventBtn");
if (bookEventBtn) {
  bookEventBtn.addEventListener("click", () => {
    const eventMessage = encodeURIComponent(
      "Hello 🎉 \n\n*FLUFFY DELIGHTS FOODS!* \n\nI’d love to book your services for my event. Can we discuss details?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${eventMessage}`, "_blank");
  });
}


// ===== AUTOMATIC COPYRIGHT YEAR =====
function updateCopyrightYear() {
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ===== SAFE INITIALIZATION ON ALL PAGES =====
document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
});


// ===== SPLASH SCREEN DISMISS =====
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("fade-out");
      splash.setAttribute("aria-hidden", "true");
      setTimeout(() => {
        splash.remove();
      }, 500);
    }, 2000);
  }
});


// ===== HERO AUTOMATIC AD SLIDER =====
function initAdSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const originalSlides = Array.from(slider.children);
  const totalOriginals = originalSlides.length;
  if (totalOriginals === 0) return;

  const firstClone1 = originalSlides[0].cloneNode(true);
  const firstClone2 = originalSlides[1].cloneNode(true);
  const lastClone1 = originalSlides[totalOriginals - 1].cloneNode(true);
  const lastClone2 = originalSlides[totalOriginals - 2].cloneNode(true);

  slider.appendChild(firstClone1);
  slider.appendChild(firstClone2);
  slider.insertBefore(lastClone1, originalSlides[0]);
  slider.insertBefore(lastClone2, lastClone1);

  let currentIndex = 2;
  const slideInterval = 4000;

  function updateSliderPosition(smooth = true) {
    const slide = slider.querySelector(".slide");
    if (!slide) return;

    const slideWidth = slide.getBoundingClientRect().width;
    const gapWidth = 12;
    const step = slideWidth + gapWidth;

    slider.style.transition = smooth ? "transform 0.5s ease-in-out" : "none";
    slider.style.transform = `translateX(-${currentIndex * step}px)`;
  }

  window.addEventListener("resize", () => updateSliderPosition(false));
  setTimeout(() => updateSliderPosition(false), 50);

  setInterval(() => {
    currentIndex++;
    updateSliderPosition(true);

    if (currentIndex >= totalOriginals + 2) {
      setTimeout(() => {
        currentIndex = 2;
        updateSliderPosition(false);
      }, 500);
    }
  }, slideInterval);
}

initAdSlider();


// ===== PREVENT IMAGE SAVING & LONG PRESS =====
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

