// Shared demo data for the Customer Portal. In production this would
// come from the API (offers service, loyalty service, POS, etc.) —
// centralized here so every page shows consistent numbers.

export const summary = {
  loyaltyPoints: 2450,
  loyaltyLevel: 'Gold',
  pointsToNext: 550,
  nextLevel: 'Platinum',
  totalSavings: 1850,
  savingsChangePct: 23,
  offersRedeemed: 18,
  offersChangePct: 28,
  favoriteStores: 4,
  activeOffers: 6,
}

export const nearbyStores = [
  { id: 'freshmart', name: 'FreshMart', category: 'Grocery & Essentials', distance: '120 m', status: 'Open', hours: '8:00 AM – 10:00 PM', offers: 4, rating: 4.5, reviews: 1200 },
  { id: 'dmart', name: 'D-Mart', category: 'Supermarket', distance: '450 m', status: 'Open', hours: '9:00 AM – 9:30 PM', offers: 3, rating: 4.3, reviews: 860 },
  { id: 'valuemart', name: 'ValueMart', category: 'Daily Needs', distance: '800 m', status: 'Open', hours: '8:30 AM – 10:00 PM', offers: 5, rating: 4.1, reviews: 540 },
  { id: 'reliance-fresh', name: 'Reliance Fresh', category: 'Groceries', distance: '1.2 km', status: 'Open', hours: '9:00 AM – 9:00 PM', offers: 2, rating: 4.2, reviews: 410 },
]

export const geoFenceStore = {
  name: 'FreshMart',
  distance: '120 m',
  insideFence: true,
}

export const geoFenceTimeline = [
  { label: 'Location detected', done: true, time: '10:20 AM' },
  { label: 'Store detected', done: true, time: '10:22 AM' },
  { label: 'Entered Geo-Fence', done: true, time: '10:24 AM' },
  { label: 'Offer generated', done: true, time: '10:24 AM' },
  { label: 'Offer redeemed', done: false, time: '10:31 AM' },
  { label: 'Geo-Fence exit', done: false, time: '10:45 AM' },
]

export const offers = [
  {
    id: 'offer-coffee',
    discount: '20% OFF',
    name: 'Premium Coffee Beans',
    store: 'FreshMart',
    distance: '120 m',
    original: 500,
    price: 400,
    expiry: '30 Sep 2026',
    recommended: true,
    reasons: ['Frequently purchased', 'Similar to your previous purchases', 'Available at your nearby store'],
    tag: 'Recommended',
    code: 'GEO20-X82K',
  },
  {
    id: 'offer-milk',
    discount: '15% OFF',
    name: 'Fresh Milk',
    store: 'ValueMart',
    distance: '450 m',
    original: 70,
    price: 60,
    expiry: '28 Sep 2026',
    recommended: false,
    reasons: ['Frequently purchased', 'Restocks every 5 days'],
    tag: 'Frequently purchased',
    code: 'GEO15-M31L',
  },
  {
    id: 'offer-fruits',
    discount: 'Buy 1 Get 1',
    name: 'Fresh Fruits',
    store: 'D-Mart',
    distance: '1.2 km',
    original: 240,
    price: 120,
    expiry: '25 Sep 2026',
    recommended: false,
    reasons: ['Based on your preferences', 'Seasonal pick'],
    tag: 'Based on your preferences',
    code: 'GEOB1G1-F7Q',
  },
  {
    id: 'offer-snacks',
    discount: '25% OFF',
    name: 'Snacks Combo',
    store: 'FreshMart',
    distance: '120 m',
    original: 200,
    price: 150,
    expiry: '27 Sep 2026',
    recommended: false,
    reasons: ['Popular with similar shoppers'],
    tag: 'Trending nearby',
    code: 'GEO25-S91K',
  },
]

export const notifications = [
  { id: 1, type: 'geo-fence', icon: 'MapPin', title: "You're near FreshMart!", desc: '20% OFF on your favorite products.', time: '10 min ago', unread: true },
  { id: 2, type: 'purchase', icon: 'CheckCircle2', title: 'Offer Redeemed Successfully', desc: 'You saved ₹100 on Premium Coffee Beans.', time: '2 hours ago', unread: true },
  { id: 3, type: 'rewards', icon: 'Star', title: 'You earned 50 loyalty points!', desc: 'Keep shopping to reach Platinum.', time: '1 day ago', unread: true },
  { id: 4, type: 'offers', icon: 'Gift', title: 'New Offer Available', desc: '15% OFF on Fresh Milk.', time: '21 Sep', unread: false },
  { id: 5, type: 'offers', icon: 'Clock', title: 'Offer Expiring Soon', desc: 'Your saved offer expires in 2 hours.', time: '21 Sep', unread: false },
]

export const recentPurchases = [
  { id: 1, store: 'FreshMart', product: 'Coffee Beans ×1', date: '23 Sep 2026, 06:15 PM', amount: 400, discount: 100, offerUsed: 'GEO20-X82K' },
  { id: 2, store: 'ValueMart', product: 'Milk ×2, Bread ×1', date: '19 Sep 2026, 01:20 PM', amount: 240, discount: 30, offerUsed: 'GEO15-M31L' },
  { id: 3, store: 'D-Mart', product: 'Fruits ×1, Snacks ×2', date: '16 Sep 2026, 05:40 PM', amount: 320, discount: 90, offerUsed: 'GEOB1G1-F7Q' },
  { id: 4, store: 'FreshMart', product: 'Chips ×1', date: '12 Sep 2026, 07:05 PM', amount: 120, discount: 30, offerUsed: 'GEO25-S91K' },
]

export const loyalty = {
  level: 'Gold',
  points: 2450,
  pointsToNext: 550,
  nextLevel: 'Platinum',
  tiers: ['Bronze', 'Silver', 'Gold', 'Platinum'],
  currentTierIndex: 2,
  earned: 3240,
  redeemed: 790,
  available: 8,
  history: [
    { id: 1, label: 'Coffee Beans purchase', points: 50, sign: '+', date: '23 Sep' },
    { id: 2, label: 'Milk & Bread purchase', points: 30, sign: '+', date: '19 Sep' },
    { id: 3, label: 'Redeemed: Free Coffee', points: 500, sign: '-', date: '12 Sep' },
    { id: 4, label: 'Referral bonus', points: 100, sign: '+', date: '05 Sep' },
  ],
  rewards: [
    { id: 1, label: '₹100 Coupon', cost: 1000 },
    { id: 2, label: 'Free Coffee', cost: 500 },
    { id: 3, label: '10% Discount', cost: 750 },
  ],
}

export const savingsByMonth = [
  { month: 'Jan', savings: 620 },
  { month: 'Feb', savings: 780 },
  { month: 'Mar', savings: 540 },
  { month: 'Apr', savings: 910 },
  { month: 'May', savings: 1120 },
  { month: 'Jun', savings: 1850 },
]

export const savingsStats = {
  totalSaved: 1850,
  offersRedeemed: 18,
  avgDiscount: '15%',
  bestSaving: 320,
  mostUsedOffer: 'GEO20-X82K · Premium Coffee',
}

export const favoriteCategories = [
  { name: 'Snacks', value: 35, color: '#f5385f' },
  { name: 'Beverages', value: 25, color: '#3fd68a' },
  { name: 'Dairy', value: 20, color: '#38bdf8' },
  { name: 'Bakery', value: 20, color: '#a78bfa' },
]

export const topProducts = [
  { name: 'Coffee', purchases: 12 },
  { name: 'Milk', purchases: 10 },
  { name: 'Bread', purchases: 8 },
  { name: 'Snacks', purchases: 6 },
]

export const insights = {
  mostVisitedStore: 'FreshMart',
  mostVisitedCount: 12,
  redemptionRate: 72,
  aiNotes: [
    'You frequently purchase coffee on weekends.',
    'You may be interested in our new coffee + snack bundle.',
    'Your spending on Beverages has grown 15% this month.',
  ],
}

export const favoriteProducts = ['Premium Coffee', 'Fresh Milk', 'Bread']
export const favoriteStoreNames = ['FreshMart', 'D-Mart', 'ValueMart']

export const coupons = {
  active: [
    { code: 'GEO20-X82K', offer: '20% OFF Premium Coffee', store: 'FreshMart', expiry: '30 Sep 2026' },
    { code: 'GEO15-M31L', offer: '15% OFF Fresh Milk', store: 'ValueMart', expiry: '28 Sep 2026' },
  ],
  used: [
    { code: 'GEO25-S91K', offer: '25% OFF Snacks Combo', store: 'FreshMart', expiry: '27 Sep 2026' },
  ],
  expired: [
    { code: 'GEO10-A44P', offer: '10% OFF Bakery Items', store: 'D-Mart', expiry: '10 Sep 2026' },
  ],
}
