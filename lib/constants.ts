
export const SUBSCRIPTION_PRICES = {
  PLUS: 9.99,
  PRO: 19.99,
  ULTRA: 29.99,
} as const

export const COIN_PACKAGES = {
  SMALL: { coins: 100, price: 4.99 },
  MEDIUM: { coins: 250, price: 9.99 },
  LARGE: { coins: 500, price: 17.99 },
  EXTRA_LARGE: { coins: 1000, price: 29.99 },
} as const

export const BOOST_COSTS = {
  PROFILE_BOOST: 10,
  SUPER_LIKE: 5,
  TRAVEL_MODE: 20,
} as const

export const FEATURE_COSTS = {
  GALLERY_UNLOCK: 15,
  VIDEO_CALL_ACCESS: 25,
} as const

export const TIER_BENEFITS = {
  FREE: {
    dailyLikes: 10,
    superLikes: 1,
    boosts: 0,
    videoCallAccess: false,
    galleryUnlocks: 0,
  },
  STANDARD: {
    dailyLikes: 20,
    superLikes: 5,
    boosts: 1,
    videoCallAccess: false,
    galleryUnlocks: 2,
  },
  PLUS: {
    dailyLikes: 50,
    superLikes: 10,
    boosts: 3,
    videoCallAccess: true,
    galleryUnlocks: 5,
  },
  PRO: {
    dailyLikes: 100,
    superLikes: 20,
    boosts: 5,
    videoCallAccess: true,
    galleryUnlocks: 10,
  },
  ULTRA: {
    dailyLikes: -1, // unlimited
    superLikes: -1, // unlimited
    boosts: 10,
    videoCallAccess: true,
    galleryUnlocks: -1, // unlimited
  },
} as const
