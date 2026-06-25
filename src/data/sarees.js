// Expanded Premium Women's Fashion & Lifestyle Dataset for A1 Emporium

export const categories = [
  { id: 'sarees', name: 'Sarees', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80' },
  { id: 'kurtis', name: 'Kurtis', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80' },
  { id: 'dresses', name: 'Dresses', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80' },
  { id: 'tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80' },
  { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80' },
  { id: 'handbags', name: 'Handbags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80' },
  { id: 'jewellery', name: 'Jewellery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80' },
  { id: 'beauty', name: 'Beauty', image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=80' },
  { id: 'cosmetics', name: 'Cosmetics', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80' },
  { id: 'footwear', name: 'Footwear', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80' }
];

export const products = [
  // APPAREL - TRADITIONAL
  {
    id: 'prod-001',
    name: 'Kanchipuram Silk Brocade Bridal Saree',
    brand: 'Royal Threads',
    category: 'Sarees',
    price: 19500,
    originalPrice: 26000,
    rating: 4.9,
    reviewsCount: 215,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Bridal Crimson', hex: '#7A1F3D' },
      { name: 'Antique Gold', hex: '#C9A227' }
    ],
    description: 'An exquisite Kanchipuram wedding saree hand-woven in pure mulberry silk with traditional gold border. Perfect for brides who cherish timeless ethnic royalty.',
    specifications: {
      'Fabric': '100% Pure Silk',
      'Weave Type': 'Kanchipuram Handloom',
      'Occasion': 'Bridal & Wedding',
      'Care': 'Dry Clean Only',
      'Zari': 'Pure Gold Thread'
    },
    collection: 'Wedding',
    isBestSeller: true
  },
  {
    id: 'prod-002',
    name: 'Chikankari Hand-Embroidered Silk Kurti',
    brand: 'Grace Studio',
    category: 'Kurtis',
    price: 4200,
    originalPrice: 5800,
    rating: 4.8,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Soft Cream', hex: '#FFF8F2' },
      { name: 'Blush Pink', hex: '#FFD1DC' }
    ],
    description: 'A beautiful georgette-silk blended kurti showcasing Lucknow’s traditional shadow embroidery. Versatile for office and festive celebrations alike.',
    specifications: {
      'Fabric': 'Georgette Silk Blend',
      'Embroidery': 'Lucknowi Chikankari',
      'Occasion': 'Festive / Office Wear',
      'Care': 'Gentle Hand Wash'
    },
    collection: 'Office Wear',
    isBestSeller: false
  },
  {
    id: 'prod-003',
    name: 'Zardozi Velvet Royal Wedding Lehenga Set',
    brand: 'A1 Signature',
    category: 'Dresses',
    price: 45000,
    originalPrice: 55000,
    rating: 5.0,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'Low Stock',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Deep Burgundy', hex: '#7A1F3D' }
    ],
    description: 'Indulge in royal grandeur with this heavy velvet bridal lehenga set, adorned with gold Zardozi embroidery, dabka beads, and double matching drapes.',
    specifications: {
      'Fabric': 'Micro Velvet',
      'Craft': 'Hand Zardozi',
      'Occasion': 'Wedding Wear',
      'Care': 'Professional Dry Clean Only'
    },
    collection: 'Wedding',
    isBestSeller: true
  },

  // APPAREL - WESTERN & DRESSES
  {
    id: 'prod-004',
    name: 'Floral Print Georgette Maxi Dress',
    brand: 'Bella Femme',
    category: 'Dresses',
    price: 3200,
    originalPrice: 4900,
    rating: 4.6,
    reviewsCount: 88,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Peach', hex: '#FFD3B6' },
      { name: 'Mint Green', hex: '#E8F5E9' }
    ],
    description: 'A breezy georgette tiered maxi dress featuring romantic floral prints and an adjustable waist belt. Ideal for summer lunches and resort outings.',
    specifications: {
      'Fabric': 'Poly Georgette',
      'Length': 'Maxi (54 inches)',
      'Occasion': 'Casual Summer',
      'Care': 'Machine Wash'
    },
    collection: 'Summer Fashion',
    isBestSeller: false
  },
  {
    id: 'prod-005',
    name: 'Elegant Satin A-Line Slip Dress',
    brand: 'Chic Avenue',
    category: 'Dresses',
    price: 4800,
    originalPrice: 6500,
    rating: 4.7,
    reviewsCount: 94,
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Champagne Gold', hex: '#C9A227' },
      { name: 'Classic Black', hex: '#2C2C2C' }
    ],
    description: 'Premium heavy satin slip dress with a cowl neck and side slit. Drapes beautifully to silhouette elegance for evening cocktail parties.',
    specifications: {
      'Fabric': 'Polyester Satin',
      'Neckline': 'Cowl Neck',
      'Occasion': 'Party Wear',
      'Care': 'Dry Clean Recommended'
    },
    collection: 'Western Wear',
    isBestSeller: true
  },
  {
    id: 'prod-006',
    name: 'Lace Embroidered Cotton Top',
    brand: 'Urban Diva',
    category: 'Tops',
    price: 1800,
    originalPrice: 2400,
    rating: 4.5,
    reviewsCount: 61,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Soft Cream', hex: '#FFF8F2' }
    ],
    description: 'A delicate white cotton top featuring fine lace inserts and puff sleeves, adding elegance to your everyday casual outfits.',
    specifications: {
      'Fabric': '100% Cotton',
      'Detailing': 'Lace Applique',
      'Occasion': 'Casual Wear',
      'Care': 'Gentle Hand Wash'
    },
    collection: 'Summer Fashion',
    isBestSeller: false
  },
  {
    id: 'prod-007',
    name: 'Sleek Linen Blazer & Pant Co-ord Set',
    brand: 'Velvet Vogue',
    category: 'Tops',
    price: 6200,
    originalPrice: 8500,
    rating: 4.8,
    reviewsCount: 52,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Soft Sand', hex: '#F5ECE3' }
    ],
    description: 'A tailored two-piece set combining a lightweight linen blazer with high-waist crop trousers. Elevates your executive style with comfort.',
    specifications: {
      'Fabric': '100% Linen',
      'Package Includes': '1 Blazer, 1 Trouser',
      'Occasion': 'Office & Casual Chic',
      'Care': 'Mild Detergent Wash'
    },
    collection: 'Office Wear',
    isBestSeller: false
  },
  {
    id: 'prod-008',
    name: 'High-Rise Slim Fit Denim Jeans',
    brand: 'TrendAura',
    category: 'Jeans',
    price: 2900,
    originalPrice: 3900,
    rating: 4.7,
    reviewsCount: 104,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Classic Blue', hex: '#B26F6F' }
    ],
    description: 'Premium stretch denim high-rise jeans. Slimming silhouette with a comfortable contoured waist that pairs perfectly with tops or blazers.',
    specifications: {
      'Fabric': 'Stretch Denim',
      'Fit': 'Slim Fit',
      'Occasion': 'Casual wear',
      'Care': 'Machine wash cold'
    },
    collection: 'Western Wear',
    isBestSeller: true
  },

  // HANDBAGS & FOOTWEAR
  {
    id: 'prod-009',
    name: 'Gold Metallic Embroidery Potli Clutch',
    brand: 'Royal Threads',
    category: 'Handbags',
    price: 1900,
    originalPrice: 2800,
    rating: 4.7,
    reviewsCount: 110,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['One Size'],
    colors: [
      { name: 'Royal Gold', hex: '#C9A227' }
    ],
    description: 'Handcrafted raw silk potli bag with detailed gold zari zardozi embroidery and pearl tassels. Perfect accessory for wedding ensembles.',
    specifications: {
      'Material': 'Raw Silk & Pearls',
      'Embellishment': 'Zari Handwork',
      'Occasion': 'Bridal & Festivals',
      'Closure': 'Drawstring'
    },
    collection: 'Festive Collection',
    isBestSeller: false
  },
  {
    id: 'prod-010',
    name: 'Saffiano Leather Work Tote Bag',
    brand: 'Urban Diva',
    category: 'Handbags',
    price: 5900,
    originalPrice: 7900,
    rating: 4.8,
    reviewsCount: 86,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['One Size'],
    colors: [
      { name: 'Muted Maroon', hex: '#7A1F3D' }
    ],
    description: 'A spacious saffiano vegan leather tote with gold-plated buckles and a padded laptop compartment. Blends functionality with executive class.',
    specifications: {
      'Material': 'Premium Vegan Leather',
      'Compartments': '3 Pockets + Laptop Sleeve',
      'Occasion': 'Office Wear',
      'Dimensions': '14" W x 11" H x 5" D'
    },
    collection: 'Office Wear',
    isBestSeller: true
  },
  {
    id: 'prod-011',
    name: 'Embellished Block Heel Bridal Sandals',
    brand: 'Velvet Vogue',
    category: 'Footwear',
    price: 3600,
    originalPrice: 4900,
    rating: 4.9,
    reviewsCount: 78,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['36', '37', '38', '39', '40'],
    colors: [
      { name: 'Champagne Gold', hex: '#C9A227' }
    ],
    description: 'Golden block heel sandals featuring premium stone details and padded insoles. Stay comfortable on your feet during festive celebrations.',
    specifications: {
      'Material': 'Synthetic Leather & Crystals',
      'Heel Height': '3 Inches Block',
      'Occasion': 'Wedding / Party',
      'Insole': 'Cushioned memory foam'
    },
    collection: 'Wedding',
    isBestSeller: true
  },
  {
    id: 'prod-012',
    name: 'Casual Flat Leather Slides',
    brand: 'Bella Femme',
    category: 'Footwear',
    price: 1500,
    originalPrice: 2200,
    rating: 4.6,
    reviewsCount: 45,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['36', '37', '38', '39', '40'],
    colors: [
      { name: 'Soft Sand', hex: '#F5ECE3' }
    ],
    description: 'Minimalist flat slides made from soft genuine leather with crossover straps. A perfect blend of style and ease for daily wear.',
    specifications: {
      'Material': '100% Genuine Leather',
      'Sole': 'Flexible rubber sole',
      'Occasion': 'Casual Daily',
      'Care': 'Wipe clean with dry cloth'
    },
    collection: 'Summer Fashion',
    isBestSeller: false
  },

  // JEWELLERY & ACCESSORIES
  {
    id: 'prod-013',
    name: 'Kundan & Green Bead Heritage Choker Set',
    brand: 'Royal Threads',
    category: 'Jewellery',
    price: 8500,
    originalPrice: 11000,
    rating: 4.9,
    reviewsCount: 65,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['Adjustable Size'],
    colors: [
      { name: 'Antique Gold', hex: '#C9A227' }
    ],
    description: 'A heavy Kundan choker set detailed with hand-painted meenakari backing and emerald green drops. Includes matching jhumka earrings.',
    specifications: {
      'Base Metal': 'Brass with 22K Gold Plating',
      'Stone Type': 'Premium Kundan & Faux Emerald',
      'Includes': '1 Choker, 2 Jhumkas',
      'Care': 'Store in zip lock pouches, avoid moisture'
    },
    collection: 'Festive Collection',
    isBestSeller: true
  },
  {
    id: 'prod-014',
    name: 'Classic Rose Gold Mesh Bracelet Watch',
    brand: 'TrendAura',
    category: 'Accessories',
    price: 7200,
    originalPrice: 9800,
    rating: 4.8,
    reviewsCount: 120,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['Adjustable Strap'],
    colors: [
      { name: 'Rose Gold', hex: '#B26F6F' }
    ],
    description: 'Minimalist women’s luxury timepiece in a rose gold plated mesh bracelet and a mother-of-pearl dial. Elegant addition to office wear.',
    specifications: {
      'Movement': 'Quartz Japanese Movement',
      'Water Resistance': '30 Meters (3 ATM)',
      'Dial Type': 'Mother-of-Pearl',
      'Warranty': '2 Year Manufacturer Warranty'
    },
    collection: 'Accessories Collection',
    isBestSeller: false
  },

  // BEAUTY & COSMETICS
  {
    id: 'prod-015',
    name: 'Long-stay Matte Red Liquid Lipstick',
    brand: 'Bella Femme',
    category: 'Cosmetics',
    price: 1200,
    originalPrice: 1600,
    rating: 4.7,
    reviewsCount: 320,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['5 ml'],
    colors: [
      { name: 'Crimson Red', hex: '#7A1F3D' }
    ],
    description: 'A transfer-proof, ultra-matte liquid lipstick that stays for up to 16 hours. Enriched with vitamin E for all-day lip comfort.',
    specifications: {
      'Ingredients': 'Cruelty-Free Synthetic Wax, Vitamin E',
      'Stay': '16 Hours Long Lasting',
      'Finish': 'Velvet Matte Finish',
      'Cruelty Status': '100% Vegan & Cruelty-Free'
    },
    collection: 'Beauty Collection',
    isBestSeller: true
  },
  {
    id: 'prod-016',
    name: 'Jasmine Sambac Luxe Eau de Parfum',
    brand: 'Velvet Vogue',
    category: 'Beauty',
    price: 4500,
    originalPrice: 5900,
    rating: 4.8,
    reviewsCount: 84,
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['100 ml'],
    colors: [
      { name: 'Floral Clear', hex: '#FFFFFF' }
    ],
    description: 'A premium fragrance opening with notes of fresh wild jasmine, layered with sandalwood and warm vanilla undertones. An elegant, sensuous scent.',
    specifications: {
      'Notes': 'Top: Jasmine, Heart: Sandalwood, Base: Vanilla',
      'Concentration': 'Eau de Parfum (EDP)',
      'Volume': '100 ml',
      'Formulation': 'Liquid Spray'
    },
    collection: 'Beauty Collection',
    isBestSeller: false
  },
  {
    id: 'prod-017',
    name: 'Glow Boosting Hyaluronic Acid Serum',
    brand: 'TrendAura',
    category: 'Beauty',
    price: 2400,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 154,
    images: [
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=80'
    ],
    stockStatus: 'In Stock',
    sizes: ['30 ml'],
    colors: [
      { name: 'Clear Serum', hex: '#FFFFFF' }
    ],
    description: 'Enriched with 2% pure hyaluronic acid and rose water. Deeply hydrates, plumps, and restores radiance to dull and tired skin.',
    specifications: {
      'Skin Type': 'All Skin Types (Sensitive Safe)',
      'Key Ingredients': 'Hyaluronic Acid, Vitamin B5, Rose extracts',
      'Volume': '30 ml',
      'Application': 'Day & Night skincare'
    },
    collection: 'Beauty Collection',
    isBestSeller: true
  }
];

export const reviews = [
  {
    id: 'rev-001',
    name: 'Sneha Reddy',
    location: 'Bangalore, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=100&auto=format&fit=crop&q=80',
    text: 'A1 Emporium has transformed my wardrobe completely! Their satin slip dresses are of AJIO Luxe quality, and the Kundan choker set matches my bridal lehenga beautifully. Highly trust their premium customer care.'
  },
  {
    id: 'rev-002',
    name: 'Tanvi Shah',
    location: 'Mumbai, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&auto=format&fit=crop&q=80',
    text: 'Impressed by the beauty collection! The Jasmine Sambac perfume smells expensive and stays all day. Fast delivery and premium dark maroon luxury packaging. Highly recommend A1 Emporium!'
  },
  {
    id: 'rev-003',
    name: 'Ritika Sen',
    location: 'Kolkata, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&auto=format&fit=crop&q=80',
    text: 'The linen co-ord set I ordered fits perfectly and looks extremely modern. Love the comparison drawer feature on the catalog page—made it so easy to pick the right outfit.'
  }
];

export const brandPartners = [
  { name: 'A1 Signature', logo: '❀' },
  { name: 'TrendAura', logo: '✦' },
  { name: 'Velvet Vogue', logo: '✿' },
  { name: 'Urban Diva', logo: '❄' },
  { name: 'Grace Studio', logo: '❂' },
  { name: 'Bella Femme', logo: '❃' }
];
