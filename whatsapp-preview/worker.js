// Fluffy Delights Foods — WhatsApp Rich Link Preview Worker
// Deploy this as a Cloudflare Worker.

const PRODUCTS_URL = "https://treasure-369.github.io/fluffy-delights-foods/products.json";
const SITE_URL = "https://treasure-369.github.io/fluffy-delights-foods/";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function absoluteImageUrl(image) {
  return new URL(image, SITE_URL).href;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/product") {
      return new Response("Fluffy Delights Foods preview endpoint", { status: 200 });
    }

    const id = url.searchParams.get("id");
    if (!id) {
      return new Response("Missing product id", { status: 400 });
    }

    let products;
    try {
      const response = await fetch(PRODUCTS_URL, { cf: { cacheTtl: 300 } });
      if (!response.ok) throw new Error(`products.json returned ${response.status}`);
      products = await response.json();
    } catch (error) {
      return new Response("Product catalog unavailable", { status: 502 });
    }

    const product = products.find((item) => item.id === id);
    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    const title = `${product.name} | Fluffy Delights Foods`;
    const description = `${product.desc} ${product.price ? `Price: ${product.price}.` : ""}`.trim();
    const image = absoluteImageUrl(product.image);
    const canonical = `${url.origin}/product?id=${encodeURIComponent(product.id)}`;

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta property="og:type" content="product">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${escapeHtml(image)}">
  <meta property="og:image:secure_url" content="${escapeHtml(image)}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="${escapeHtml(product.name)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(image)}">
</head>
<body>
  <h1>${escapeHtml(product.name)}</h1>
  <p>${escapeHtml(description)}</p>
  <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" style="max-width:100%;height:auto">
  <p><a href="${escapeHtml(SITE_URL)}">Visit Fluffy Delights Foods</a></p>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "public, max-age=300"
      }
    });
  }
};
