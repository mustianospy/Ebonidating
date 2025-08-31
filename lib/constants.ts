
export const SUBSCRIPTION_PRICES = {
  PREMIUM: 14.99,
  GOLD: 24.99,
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
    superLikes: 0,
    boosts: 0,
    videoCallAccess: false,
    galleryUnlocks: 0,
  },
  PREMIUM: {
    dailyLikes: -1, // unlimited
    superLikes: 10,
    boosts: 3,
    videoCallAccess: false,
    galleryUnlocks: 3,
  },
  GOLD: {
    dailyLikes: -1, // unlimited
    superLikes: -1, // unlimited
    boosts: -1, // unlimited
    videoCallAccess: true,
    galleryUnlocks: -1, // unlimited
  },
} as const
