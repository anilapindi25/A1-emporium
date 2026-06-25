// Specialized Indian Traditional Emporium Dataset for A1 Emporium
// Specialized exclusively in Brass Items and Sarees

export const categories = [
  { id: 'brass-collection', name: 'Brass Collection', image: '/brass_kamdhenu_cow.png' },
  { id: 'brass-lamps', name: 'Brass Lamps', image: '/brass_samay_lamp.png' },
  { id: 'brass-idols', name: 'Brass Idols', image: '/brass_ganesha_statue.png' },
  { id: 'brass-pooja', name: 'Brass Pooja', image: '/brass_pooja_thali_set.png' },
  { id: 'sarees', name: 'Sarees', image: '/kanchipuram_gold_silk_saree.png' },
  { id: 'silk-sarees', name: 'Silk Sarees', image: '/banarasi_brocade_saree.png' },
  { id: 'cotton-sarees', name: 'Cotton Sarees', image: '/jamdani_cotton_saree.png' },
  { id: 'wedding-sarees', name: 'Wedding Sarees', image: '/bridal_wedding_saree.png' }
];

export const products = [
  {
    id: 'prod-001',
    name: 'Pure Kanchipuram Gold Zari Silk Saree',
    brand: 'Wedding Collection',
    category: 'Silk Sarees',
    price: 24500,
    originalPrice: 32000,
    rating: 4.9,
    reviewsCount: 245,
    images: [
      '/kanchipuram_gold_silk_saree.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Bridal Crimson', hex: '#7A1F3D' },
      { name: 'Antique Gold', hex: '#C5A059' }
    ],
    description: 'An exquisite wedding saree hand-woven in pure mulberry silk with traditional gold border. Perfect for brides who cherish timeless ethnic royalty.',
    specifications: {
      'Fabric': '100% Pure Kanchipuram Silk',
      'Weave Type': 'Handloom Double Warp',
      'Occasion': 'Bridal & Wedding',
      'Care': 'Dry Clean Only',
      'Zari': 'Pure Gold Thread'
    },
    collection: 'Sarees',
    isBestSeller: true
  },
  {
    id: 'prod-002',
    name: 'Handcrafted Royal Brass Peacock Diya Lamp',
    brand: 'Traditional Brass',
    category: 'Brass Lamps',
    price: 3800,
    originalPrice: 4900,
    rating: 4.8,
    reviewsCount: 164,
    images: [
      '/brass_peacock_diya.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Medium', 'Large'],
    colors: [
      { name: 'Brass Yellow', hex: '#C5A059' }
    ],
    description: 'A grand traditional brass oil lamp featuring an intricately detailed peacock figure. Adds sacred warmth and elegant heritage to your pooja mandir.',
    specifications: {
      'Material': 'Solid Brass',
      'Weight': '1.8 kg',
      'Height': '12 inches',
      'Craftsmanship': 'Hand-cast by Indian Artisans'
    },
    collection: 'Brass Collection',
    isBestSeller: true
  },
  {
    id: 'prod-003',
    name: 'Sacred Lord Ganesha Antique Brass Statue',
    brand: 'Brass Collection',
    category: 'Brass Idols',
    price: 8500,
    originalPrice: 11000,
    rating: 5.0,
    reviewsCount: 82,
    images: [
      '/brass_ganesha_statue.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Standard'],
    colors: [
      { name: 'Antique Gold', hex: '#C5A059' }
    ],
    description: 'A heavy brass statue of Lord Ganesha in an antique finish. Represents wisdom, prosperity, and the removal of obstacles for a blessed home.',
    specifications: {
      'Material': 'Premium Brass',
      'Weight': '4.2 kg',
      'Height': '15 inches',
      'Finish': 'Antique Bronze'
    },
    collection: 'Brass Collection',
    isBestSeller: true
  },
  {
    id: 'prod-004',
    name: 'Floral Brass Urli Bowl for Floating Flowers',
    brand: 'Traditional Brass',
    category: 'Brass Pooja',
    price: 2600,
    originalPrice: 3500,
    rating: 4.7,
    reviewsCount: 143,
    images: [
      '/brass_urli_floating.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['12 inch'],
    colors: [
      { name: 'Polished Brass', hex: '#C5A059' }
    ],
    description: 'A traditional Urli bowl with scalloped floral borders. Fill with water and float fresh jasmine flowers and tea lights to welcome guests with traditional warmth.',
    specifications: {
      'Material': 'Polished Brass',
      'Diameter': '12 inches',
      'Occasion': 'Festive / Welcome Decor',
      'Care': 'Clean with pitambari powder occasionally'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-005',
    name: 'Traditional Brass Pooja Thali Set',
    brand: 'Traditional Brass',
    category: 'Brass Pooja',
    price: 3200,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 104,
    images: [
      '/brass_pooja_thali_set.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Full Set'],
    colors: [
      { name: 'Brass Gold', hex: '#C5A059' }
    ],
    description: 'A complete brass pooja thali set including plate, diya, bell, incense holder, and kuber bowls. Crafted for everyday rituals and festive home ceremonies.',
    specifications: {
      'Set Includes': 'Thali, Diya, Bell, Roli bowls, Spoon, Incense Stand',
      'Material': 'Pure Brass',
      'Diameter': '10.5 inches',
      'Care': 'Avoid harsh scrubbers'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-006',
    name: 'Royal Banarasi Brocade Silk Saree',
    brand: 'Silk Collection',
    category: 'Silk Sarees',
    price: 18500,
    originalPrice: 24000,
    rating: 4.8,
    reviewsCount: 112,
    images: [
      '/banarasi_brocade_saree.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Mustard Gold', hex: '#C5A059' },
      { name: 'Maroon Red', hex: '#7A1F3D' }
    ],
    description: 'A classic Banarasi silk saree decorated with gorgeous brocade work and fine silver-gold zari details. Features a heavy traditional pallu.',
    specifications: {
      'Fabric': 'Katan Silk',
      'Weave': 'Banarasi Jacquard',
      'Length': '5.5 meters with blouse',
      'Care': 'Dry Clean Only'
    },
    collection: 'Sarees',
    isBestSeller: true
  },
  {
    id: 'prod-007',
    name: 'Sacred Lakshmi Antique Brass Idol',
    brand: 'Brass Collection',
    category: 'Brass Idols',
    price: 7200,
    originalPrice: 9500,
    rating: 4.9,
    reviewsCount: 63,
    images: [
      '/brass_lakshmi_idol.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Standard'],
    colors: [
      { name: 'Antique Gold', hex: '#C5A059' }
    ],
    description: 'A highly detailed brass idol of Goddess Lakshmi in a seated posture. Perfect for invoking blessings of wealth and prosperity in your home.',
    specifications: {
      'Material': 'Solid Brass',
      'Weight': '2.9 kg',
      'Height': '10 inches'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-008',
    name: 'Royal Brass Hanging Bell with Chain',
    brand: 'Brass Collection',
    category: 'Brass Pooja',
    price: 4500,
    originalPrice: 5800,
    rating: 4.7,
    reviewsCount: 45,
    images: [
      '/brass_hanging_bell.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Standard'],
    colors: [
      { name: 'Gold', hex: '#C5A059' }
    ],
    description: 'Traditional temple hanging bell with chain, hand-cast in pure brass. Produces a loud and clear resonate sound for pooja and entryways.',
    specifications: {
      'Material': 'Solid Brass',
      'Chain Length': '18 inches',
      'Bell Height': '6 inches',
      'Weight': '1.5 kg'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-009',
    name: 'Classic Handloom Cotton Saree',
    brand: 'Premium Sarees',
    category: 'Cotton Sarees',
    price: 3500,
    originalPrice: 4800,
    rating: 4.6,
    reviewsCount: 120,
    images: [
      '/jamdani_cotton_saree.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Warm Cream', hex: '#FFFDF9' }
    ],
    description: 'A breathable, eco-friendly cotton saree hand-woven by local rural weaver communities. Extremely comfortable and lightweight for daily ethnic wear.',
    specifications: {
      'Fabric': '100% Cotton Handloom',
      'Length': '6.2 meters with running blouse',
      'Care': 'Gentle Hand Wash'
    },
    collection: 'Sarees',
    isBestSeller: false
  },
  {
    id: 'prod-010',
    name: 'Handcrafted Brass Kamdhenu Cow Idol',
    brand: 'Brass Collection',
    category: 'Brass Idols',
    price: 5900,
    originalPrice: 7500,
    rating: 4.8,
    reviewsCount: 42,
    images: [
      '/brass_kamdhenu_cow.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Standard'],
    colors: [
      { name: 'Antique Gold', hex: '#C5A059' }
    ],
    description: 'A detailed brass statue of Kamdhenu Cow and Calf, symbolizing pure nurture, motherhood, and wish-fulfillment.',
    specifications: {
      'Material': 'Solid Brass',
      'Weight': '2.2 kg',
      'Dimensions': '8" x 5" x 6.5"'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-011',
    name: 'Heritage Handloom Jamdani Cotton Saree',
    brand: 'Premium Sarees',
    category: 'Cotton Sarees',
    price: 12800,
    originalPrice: 16500,
    rating: 4.9,
    reviewsCount: 88,
    images: [
      '/jamdani_cotton_saree.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Ivory White', hex: '#FFFDF9' },
      { name: 'Traditional Maroon', hex: '#7A1F3D' }
    ],
    description: 'A masterpiece of handloom craft. Featuring intricate floral motifs woven directly on semi-sheer cotton fabric.',
    specifications: {
      'Fabric': 'Cotton Jamdani Blend',
      'Weave': 'Traditional Hand Shuttle Jamdani',
      'Occasion': 'Festivals & Occasions'
    },
    collection: 'Sarees',
    isBestSeller: false
  },
  {
    id: 'prod-012',
    name: 'Traditional Brass Kalash for Pooja',
    brand: 'Traditional Brass',
    category: 'Brass Pooja',
    price: 2100,
    originalPrice: 2800,
    rating: 4.7,
    reviewsCount: 76,
    images: [
      '/brass_pooja_kalash.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Standard'],
    colors: [
      { name: 'Brass Gold', hex: '#C5A059' }
    ],
    description: 'A heavy gauge brass kalash used in traditional temple rituals and home grahapravesham. Finished in a high-gloss polished shine.',
    specifications: {
      'Material': 'High Grade Brass',
      'Volume': '1 liter',
      'Height': '7 inches'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  },
  {
    id: 'prod-013',
    name: 'Royal Brass Samay Oil Lamp (Pair)',
    brand: 'Traditional Brass',
    category: 'Brass Lamps',
    price: 6800,
    originalPrice: 8500,
    rating: 4.9,
    reviewsCount: 54,
    images: [
      '/brass_samay_lamp.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['18 inches'],
    colors: [
      { name: 'Polished Brass', hex: '#C5A059' }
    ],
    description: 'A pair of tall traditional stand lamps (Samay) with 5-wick burners. Cast in premium quality brass for a warm glowing entranceway.',
    specifications: {
      'Material': 'Solid Brass',
      'Set Count': '2 Lamps (Pair)',
      'Height': '18 inches each',
      'Weight': '3.6 kg total'
    },
    collection: 'Brass Collection',
    isBestSeller: true
  },
  {
    id: 'prod-014',
    name: 'Exquisite Bridal Wedding Silk Saree',
    brand: 'Wedding Collection',
    category: 'Wedding Sarees',
    price: 35000,
    originalPrice: 45000,
    rating: 5.0,
    reviewsCount: 38,
    images: [
      '/bridal_wedding_saree.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['Free Size'],
    colors: [
      { name: 'Deep Crimson Gold', hex: '#7A1F3D' }
    ],
    description: 'A premium bridal heritage saree with heavy borders of genuine gold zari. Handwoven across three weeks to represent absolute Indian handloom perfection.',
    specifications: {
      'Fabric': '100% Pure Mulberry Silk',
      'Zari Work': 'Gold Metallic Thread',
      'Occasion': 'Bridal & Wedding Heritage'
    },
    collection: 'Sarees',
    isBestSeller: true
  },
  {
    id: 'prod-015',
    name: 'Traditional Brass Urli Floral Decor Bowl',
    brand: 'Traditional Brass',
    category: 'Brass Pooja',
    price: 4800,
    originalPrice: 6200,
    rating: 4.8,
    reviewsCount: 67,
    images: [
      '/brass_urli_floral.png'
    ],
    stockStatus: 'In Stock',
    sizes: ['14 inch'],
    colors: [
      { name: 'Antique Gold', hex: '#C5A059' }
    ],
    description: 'A wide traditional Urli bowl crafted in heavy brass with elegant side handles. Perfect for festive decorations, flower arrangements, or candle displays.',
    specifications: {
      'Material': 'Thick Gauge Brass',
      'Diameter': '14 inches',
      'Weight': '3.0 kg',
      'Care': 'Polish occasionally with brass cleaning agents'
    },
    collection: 'Brass Collection',
    isBestSeller: false
  }
];

export const reviews = [
  {
    id: 'rev-001',
    name: 'Sneha Reddy',
    location: 'Bangalore, India',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=7A1F3D&color=fff&size=100',
    text: 'A1 Emporium has transformed my home completely! Their peacock brass lamp is heavy and premium, and the Kanchipuram gold saree matches my bridal celebrations beautifully. Highly trust their packaging.'
  },
  {
    id: 'rev-002',
    name: 'Tanvi Shah',
    location: 'Mumbai, India',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Tanvi+Shah&background=C5A059&color=fff&size=100',
    text: 'Impressed by the Pooja collection! The Urli bowl is gorgeous for floating flowers at my entryway. Fast delivery and premium burgundy luxury packaging. Highly recommend A1 Emporium!'
  },
  {
    id: 'rev-003',
    name: 'Ritika Sen',
    location: 'Kolkata, India',
    rating: 5,
    avatar: 'https://ui-avatars.com/api/?name=Ritika+Sen&background=7A1F3D&color=fff&size=100',
    text: 'The bridal wedding saree is a masterpiece! Heavy gold zari and absolute luxury feel. I compared three items using the comparison drawer before buying—best e-commerce feature ever!'
  }
];

export const brandPartners = [
  { name: 'Brass Collection', logo: '❀' },
  { name: 'Traditional Brass', logo: '✦' },
  { name: 'Premium Sarees', logo: '✿' },
  { name: 'Silk Collection', logo: '❂' },
  { name: 'Wedding Collection', logo: '❃' }
];
