// WhatsApp number (without + or spaces)
const whatsappNumber = "2349078215644";

/* ====== PRODUCT DATA ====== 
Last Updated: August 18, 2026
⚠️ VERIFY ALL PRICES BEFORE DEPLOYMENT ⚠️ */

const products = [
/* ====== PACKS ====== */
 {
    name: "Mini Chicken Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦2,400",
    category: "small chops packs"
  },
  
 {
    name: "Mini Gizzard Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Gizzard.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦1,900",
    category: "small chops packs"
  },
  
 {
    name: "Mini Sausage Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Sausage.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦1,900",
    category: "small chops packs"
  },
  
 {
    name: "Mini Snail Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Snail.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦2,100",
    category: "small chops packs"
  },
  
 {
    name: "Chicken & Gizzard Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦2,900",
    category: "small chops packs"
  },
  
 {
    name: "Chicken & Sausage Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Sausage.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦2,900",
    category: "small chops packs"
  },
  
 {
    name: "Chicken & Snail Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Snail.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,100",
    category: "small chops packs"
  },
  
 {
    name: "Chicken & Prawn Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Prawn.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,100",
    category: "small chops packs"
  },
  
 {
    name: "Gizzard & Sausage Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Gizzard, 1 Sausage.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,400",
    category: "small chops packs"
  },
  
 {
    name: "Gizzard & Snail Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Gizzard, 1 Snail.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,400",
    category: "small chops packs"
  },
  
 {
    name: "Gizzard & Prawn Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Gizzard, 1 Prawn.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,400",
    category: "small chops packs"
  },
  
 {
    name: "Signature Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard, 1 Sausage.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦3,400",
    category: "small chops packs"
  },
  
 {
    name: "Deluxe Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard, 1 Sausage, 1 Snail.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦4,100",
    category: "small chops packs"
  },
  
 {
    name: "Premium Pack",
    image: "images/small-chops-packs/black-pouch.jpg",
    whatsappImage: "https://postimg.cc/0bMd47QN",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard, 1 Sausage, 1 Snail, 1 Prawn.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦4,800",
    category: "small chops packs"
  },
  
 {
    name: "Ultimate Pack",
    image: "images/small-chops-packs/trensparent-pack.jpg",
    whatsappImage: "https://postimg.cc/YhD22Ztf",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard, 1 Sausage, 1 Snail, 1 Prawn, 1 Moneybag.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦6,500",
    category: "small chops packs"
  },
  
 {
    name: "Full house Pack",
    image: "images/small-chops-packs/trensparent-pack.jpg",
    whatsappImage: "https://postimg.cc/YhD22Ztf",
    desc: "1 Spring roll, 1 Samosa, 6 Puff Puff, 4 Mosa, 1 Chicken, 1 Gizzard, 1 Sausage, 1 Snail, 1 Prawn, 1 Moneybag, 1 Yam ball.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦7,200",
    category: "small chops packs"
  },
  
  
/* ====== PLATTERS ====== */
 {
    name: "Classic Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "3 Spring rolls, 3 Samosa, 20 Puff Puff, 20 Mosa, 3 Chicken.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Savour Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "5 Spring rolls, 5 Samosa, 20 Puff Puff, 20 Mosa, 5 Chicken.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Core Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "3 Spring rolls, 3 Samosa, 20 Puff Puff, 20 Mosa, 3 Chicken, 3 Gizzard or Sausage.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Elite Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "5 Spring rolls, 5 Samosa, 20 Puff Puff, 20 Mosa, 5 Chicken, 5 Gizzard or Sausage.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Essential Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "3 Spring rolls, 3 Samosa, 25 Puff Puff, 25 Mosa, 3 Chicken, 3 Gizzard, 3 Sausage.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Harmony Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "5 Spring rolls, 5 Samosa, 25 Puff Puff, 25 Mosa, 5 Chicken, 5 Gizzard, 5 Sausage.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Medley Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "7 Spring rolls, 7 Samosa, 25 Puff Puff, 25 Mosa, 7 Chicken, 7 Gizzard or Sausage, 7 Snail.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Fusion Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "7 Spring rolls, 7 Samosa, 25 Puff Puff, 25 Mosa, 7 Chicken, 7 Gizzard, 7 Sausage, 7 Snail.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Pinnacle Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "10 Spring rolls, 10 Samosa, 30 Puff Puff, 30 Mosa, 10 Chicken, 7 Gizzard, 7 Sausage, 7 Snail or Prawn.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Grandeur Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "10 Spring rolls, 10 Samosa, 30 Puff Puff, 30 Mosa, 10 Chicken, 7 Gizzard, 7 Sausage, 7 Snail, 7 Prawn.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Treasure Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "10 Spring rolls, 10 Samosa, 30 Puff Puff, 30 Mosa, 10 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Abyss Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "13 Spring rolls, 13 Samosa, 40 Puff Puff, 40 Mosa, 13 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn, 3 Moneybag.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Diamond Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "13 Spring rolls, 13 Samosa, 40 Puff Puff, 40 Mosa, 13 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn, 5 Moneybag.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Royal Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "15 Spring rolls, 15 Samosa, 50 Puff Puff, 50 Mosa, 15 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn, 5 Moneybag, 5 Yam ball.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Wildcard Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "15 Spring rolls, 15 Samosa, 50 Puff Puff, 50 Mosa, 15 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn, 7 Moneybag, 7 Yam ball.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
 {
    name: "Zenith Platter",
    image: "images/small-chops-platters/platters.jpg",
    whatsappImage: "https://postimg.cc/kD9G96YV",
    desc: "15 Spring rolls, 15 Samosa, 50 Puff Puff, 50 Mosa, 15 Chicken, 10 Gizzard, 10 Sausage, 10 Snail, 10 Prawn, 10 Moneybag, 10 Yam ball.",
    price: "₦6,000",
    category: "small chops platters"
  },
  
  
/* ====== GRILLS & FRIES ====== */
 {
    name: "Fried Chicken with Fries",
    image: "images/grills-and-fries/fried_chicken_with_fries.jpg",
    whatsappImage: "",
    desc: "1 Fried Chicken With Fries of your Choice (Yam, Potatoe or Plantain).",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },

 {
    name: "Chicken Lap with Fries",
    image: "images/grills-and-fries/chicken_lap_with_fries.jpg",
    whatsappImage: "",
    desc: "1 Grilled Chicken Lap With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },
  
 {
    name: "Turkey Wing with Fries",
    image: "images/grills-and-fries/turkey_wing_with_fries.jpg",
    whatsappImage: "",
    desc: "1 Grilled Turkey Wing With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },
  
 {
    name: "Croaker Fish with Fries",
    image: "images/grills-and-fries/croaker_fish_with_fries.jpg",
    whatsappImage: "",
    desc: "1 Grilled Croaker Fish With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },
  
 {
    name: "Catfish with Fries",
    image: "images/grills-and-fries/catfish_with_fries.jpg",
    whatsappImage: "",
    desc: "1 Grilled Catfish With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },

 {
    name: "Croaker Fish | Boli with Sauce",
    image: "images/grills-and-fries/croaker_fish_with_boli.jpg",
    whatsappImage: "https://postimg.cc/ZC3VDgcN",
    desc: "2 Boli with sauce and grilled croaker fish",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },

 {
    name: "Catfish | Boli with Sauce",
    image: "images/grills-and-fries/catfish_with_boli.jpg",
    whatsappImage: "https://postimg.cc/QKc10L3r",
    desc: "2 Boli with sauce and grilled Catfish",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },
  
 {
    name: "Full Chicken with Fries",
    image: "images/grills-and-fries/full_grilled_chicken_(spatchcocked).jpg",
    whatsappImage: "",
    desc: "1 Full Grilled Chicken With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },

 {
    name: "Full Turkey with Fries",
    image: "images/grills-and-fries/full_grilled_turkey_(spatchcocked).jpg",
    whatsappImage: "",
    desc: "1 Full Grilled Turkey With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },
  
 {
    name: "Full Guinea Fowl with Fries",
    image: "images/grills-and-fries/full_grilled_guinea_fowl_(spatchcocked).jpg",
    whatsappImage: "",
    desc: "1 Full Grilled Guinea Foul With Fries of your Choice.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "grills and fries"
  },


/* ====== AFRICAN SNACKS ====== */
 {
    name: "Chin Chin Cubes",
    image: "images/african-snacks/chin-chin-cubes.jpg",
    whatsappImage: "https://postimg.cc/HJCqT98n",
    desc: "The classic bite-sized crunch! Perfectly sweet, golden-brown cubes that make the ultimate everyday snack.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },

 {
    name: "Chin Chin Flakes",
    image: "images/african-snacks/chin-chin-flakes.jpg",
    whatsappImage: "https://postimg.cc/186xxjXD",
    desc: "A light and airy twist on a favorite. These thin, crispy flakes offer a delicate crunch that melts in your mouth.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },
  
 {
    name: "Peanut Burger",
    image: "images/african-snacks/peanut-burger.jpg",
    whatsappImage: "https://postimg.cc/kVd07vRb",
    desc: "Nutty, crunchy, and totally addictive. Real peanuts wrapped in a crispy, savory shell for a protein-packed punch.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },

 {
    name: "Peanut Brittle",
    image: "images/african-snacks/peanut-brittle.jpg",
    whatsappImage: "https://postimg.cc/5HMhfSQw",
    desc: "The perfect blend of sweet and salty. Hard, buttery candy packed with roasted peanuts for a satisfying snap.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },

 {
    name: "Plantain Chips",
    image: "images/african-snacks/plantain-chips.jpg",
    whatsappImage: "https://postimg.cc/pm8NN6rz",
    desc: "Thinly sliced and fried to perfection. Enjoy the natural, savory goodness of golden-brown plantains in every crisp bite.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },

 {
    name: "Kuli - Kuli (Groundnut Cake)",
    image: "images/african-snacks/kuli-kuli.jpg",
    whatsappImage: "https://postimg.cc/wtdC9QRv",
    desc: "A traditional spicy treat! Bold, crunchy, and authentically handmade from roasted peanuts and local spices.",
    note: "Enjoy a FREE Berry Blast & FREE Delivery when you order 150+ pieces",
    price: "₦9,000",
    category: "african snacks"
  },


/* ====== PEPPERY ====== */
 {
    name: "Gizdodo",
    image: "images/peppery/gizdodo.jpg",
    whatsappImage: "https://postimg.cc/HrYshGgy",
    desc: "Enjoy our mouthwatering Gizdodo—a flavorful mix of tender chicken gizzards and fried plantain cubes, tossed in a rich, spicy pepper sauce.",
    note: "Minimum order of 10 packs. Price shown is per pack.",
    price: "₦9,000",
    category: "peppery"
  },

 {
    name: "Peppered Chickens",
    image: "images/peppery/peppered_chickens.jpg",
    whatsappImage: "https://postimg.cc/kD97wSR1",
    desc: "Freshly fried and tossed in spicy sauce, made in large trays for your guests.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "peppery"
  },

 {
    name: "Peppered Turkey Wings",
    image: "images/peppery/peppered_turkey_wings.jpg",
    whatsappImage: "https://postimg.cc/0rx9ZSK3",
    desc: "Meaty turkey wings glazed in pepper, perfect for feeding a hungry crowd.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "peppery"
  },

 {
    name: "Peppered Gizzards",
    image: "images/peppery/peppered_gizzards.jpg",
    whatsappImage: "https://postimg.cc/5j1fpzQp",
    desc: "Spicy, bite-sized party favorites prepared in bulk for easy serving.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "peppery"
  },

 {
    name: "Peppered Snails",
    image: "images/peppery/peppered_snails.jpg",
    whatsappImage: "https://postimg.cc/0rx9ZSKX",
    desc: "Large, crunchy snails sautéed in hot peppers for a premium event treat.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "peppery"
  },

 {
    name: "Peppered Prawns",
    image: "images/peppery/peppered_prawns.jpg",
    whatsappImage: "https://postimg.cc/SjqmV9Yg",
    desc: "Sweet and spicy prawns, prepared fresh for your special occasions.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "peppery"
  },


/* ====== ASUN AND SUYA ====== */
{
    name: "Goat Meat Asun",
    image: "images/asun-and-suya/goat_meat_asun.jpg",
    whatsappImage: "https://postimg.cc/Lg9vRn8G",
    desc: "Tender, fiery peppered goat meat tossed with sliced onions and packed with authentic spicy flavor.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "asun and suya"
  },

{
    name: "Cow | Ram Meat Asun",
    image: "images/asun-and-suya/cow_and_ram_asun.jpg",
    whatsappImage: "https://postimg.cc/zHzp5Vfr",
    desc: "Richly seasoned, fire-grilled beef or ram bites tossed in spicy scotch bonnet peppers and onions.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "asun and suya"
  },

{
    name: "Chicken Asun",
    image: "images/asun-and-suya/chicken_asun.jpg",
    whatsappImage: "https://postimg.cc/q6JQ0zv9",
    desc: "Juicy, pepper-crusted chicken bites tossed in a vibrant scotch bonnet sauce for intense spicy heat.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "asun and suya"
  },

{
    name: "Goat Meat Suya",
    image: "images/asun-and-suya/goat_meat_suya.jpg",
    whatsappImage: "https://postimg.cc/gLz4dn00",
    desc: "Thinly sliced goat meat coated in rich yaji spice, fire-grilled and served with fresh onions.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "asun and suya"
  },

{
    name: "Cow | Ram Meat Suya",
    image: "images/asun-and-suya/cow_and_ram_suya.jpg",
    whatsappImage: "https://postimg.cc/N2sbY50t",
    desc: "Tender grilled beef or ram skewers, generously dusted with authentic, spicy and nutty yaji pepper.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "asun and suya"
  },


/* ====== PEPPER SOUP ====== */
 {
    name: "Goat Meat Pepper Soup",
    image: "images/pepper-soup/goat_meat_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/G8xqbVQD",
    desc: "Tender goat meat in a rich, spicy broth made to warm up your event.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Catfish Pepper Soup",
    image: "images/pepper-soup/catfish_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/BL0m94xK",
    desc: "Freshly prepared ''Point and Kill'' style, served in bulk for your guests.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Assorted Meat Pepper Soup",
    image: "images/pepper-soup/assorted_meat_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/JDLpVMbD",
    desc: "A tasty mix of Shaki and Liver in a hot broth, perfect for large parties.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Chicken Pepper Soup",
    image: "images/pepper-soup/chicken_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/ygHL4sFS",
    desc: "Light and spicy chicken soup, made fresh for your event guest list.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Cow or Ram Pepper Soup",
    image: "images/pepper-soup/cow_or_ram_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/mzsmfBQ9",
    desc: "Hearty meat slow-cooked in a bold pepper soup for your celebrations.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Cow Tail Pepper Soup",
    image: "images/pepper-soup/cow_tail_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/R6LXvyR3",
    desc: "Juicy, soft cow tail pieces in a flavorful broth for a luxury party feel.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
  
 {
    name: "Cow Foot Pepper Soup (Bor Kor Tor)",
    image: "images/pepper-soup/cow_foot_pepper_soup.jpg",
    whatsappImage: "https://postimg.cc/47gWkszv",
    desc: "Soft and succulent cow foot, prepared in large batches for your guests.",
    note: "Order Now on WhatsApp",
    price: "Bulk Order",
    category: "pepper soup"
  },
];



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
      const message = encodeURIComponent(
        `Hello 🎉 \n\n*FLUFFY DELIGHTS FOODS!* \n\nI'm interested in the\n*${p.name}* \n\n${p.whatsappImage || p.image}\n\n*Description:* ${p.desc}\n\n*Price:* ${p.price}\n\nCan you tell me more or confirm availability?`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    productsList.appendChild(card);
  });
}


// ===== Initial Render & Category Logic (Only on pages with products) =====
if (productsList) {
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
}


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

