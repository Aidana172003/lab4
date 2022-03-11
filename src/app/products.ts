export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'CeraVe Moistrurizing Cream',
    link: 'https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC/ref=sr_1_3?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-3',
    image:
      'https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL480_FMwebp_QL65_.jpg',
    price: 16.25,
    description:
      'For face and body or can be used as a hand cream for dry skin relief.',
    rating: '4.8 out of 5',
  },
  {
    id: 2,
    name: 'TruSkin Vitamin C Serum ',
    link: 'https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_6?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-6',
    image: 'https://m.media-amazon.com/images/I/61nD93IEBKL._SY355_.jpg',
    price: 19.99,
    description:
      'Vitamin C blends with Botanical Hyaluronic Acid, Vitamin E, Witch Hazel, and Jojoba Oil in an anti aging, skin brightening formula designed to improve wrinkles and dark spots',
    rating: '4.3 out of 5',
  },
  {
    id: 3,
    name: 'Neutrogena Hydro Boost',
    link: 'https://www.amazon.com/Neutrogena-Hydro-Hyaluronic-Hydrating-Moisturizer/dp/B00NR1YQHM/ref=sr_1_10?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-10',
    image:
      'https://m.media-amazon.com/images/I/71Bd6+BQQnL._AC_UL480_FMwebp_QL65_.jpg',
    price: 17.28,
    description:
      'Hydrating water-gel face moisturizer with hyaluronic acid to hydrate dry skin',
    rating: '4.6 out of 5',
  },
  {
    id: 4,
    name: 'Paulas Choice ',
    link: 'https://www.amazon.com/Paulas-Choice-SKIN-PERFECTING-Exfoliant-Facial-Blackheads/dp/B00949CTQQ/ref=sr_1_19?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-19',
    image: 'https://m.media-amazon.com/images/I/61zhzjgd2xL._SY355_.jpg',
    price: 32.0,
    description:
      'Dramatically improves skins texture for radiant youthful even-toned skin.',
    rating: '4.6 out of 5',
  },
  {
    id: 5,
    name: '24K Gold Eye Mask',
    link: 'https://www.amazon.com/Under-Eye-Mask-Patches-Patch/dp/B07N93XF4Z/ref=sr_1_25?qid=1647014998&rnid=16225006011&s=beauty-intl-ship&sr=1-25',
    image: 'https://m.media-amazon.com/images/I/71spgVC+reL._SY355_.jpg',
    price: 19.99,
    description:
      'Look Less Tired and Reduce Wrinkles and Fine Lines Undereye, Revitalize and Refresh Your Skin',
    rating: '4.3 out of 5',
  },
  {
    id: 6,
    name: 'Olaplex No.7 Bonding Oil',
    link: 'https://www.amazon.com/Olaplex-No-7-Bonding-Oil-fl/dp/B07VR1NDSQ/ref=sr_1_44?qid=1647015134&rnid=16225006011&s=beauty-intl-ship&sr=1-44',
    image: 'https://m.media-amazon.com/images/I/61imwfLBx1L._SX466_.jpg',
    price: 28.0,
    description:
      'Repairs damaged and compromised hair. Strengthens and protects hair structure.',
    rating: '4.3 out of 5',
  },
  {
    id: 7,
    name: 'LANEIGE Lip Sleeping Mask',
    link: 'https://www.amazon.com/Laneige-Sleeping-Berry/dp/B07XXPHQZK/ref=sr_1_52?qid=1647015280&rnid=16225006011&s=beauty-intl-ship&sr=1-52',
    image: 'https://m.media-amazon.com/images/I/61cWtcM1VzL._SX466_.jpg',
    price: 22.0,
    description:
      'A leave-on overnight lip mask that soothes and moisturizes for smoother, more supple lips.',
    rating: '4.7 out of 5',
  },
  {
    id: 8,
    name: 'COSMEDIX',
    link: 'https://www.amazon.com/COSMEDIX-Rescue-Intense-Hydrating-Ounce/dp/B07Q6NC9J6?psc=1&pd_rd_w=CcqLl&pf_rd_p=bd5307ce-7a5d-4d8d-b230-892bb061ae28&pf_rd_r=QHRS6YTTS1Y7Q8GC5TSY&pd_rd_r=6bce2032-f0f9-45c7-bd95-42d578c07d13&pd_rd_wg=z4Fpf&ref_=sspa_dk_rhf_search_pt_sub_2&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExR0tQVDRSVUhIMkdLJmVuY3J5cHRlZElkPUEwMDcyODY3M1FRTFZGUVUyTjg2MSZlbmNyeXB0ZWRBZElkPUEwODQwMDIyMzFEWjZQWTRVSkFTQiZ3aWRnZXROYW1lPXNwX3JoZl9zZWFyY2hfcGVyc29uYWxpemVkJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    image: 'https://m.media-amazon.com/images/I/51alvk67HxL._SX466_.jpg',
    price: 59.0,
    description:
      'Gently massage a small amount of Rescue into the skin after cleansing and toning, concentrating on dry areas.',
    rating: '4.7 out of 5',
  },
  {
    id: 9,
    name: 'KENMILER Face Self Tanner',
    link: 'https://www.amazon.com/KENMILER-Buildable-Bronzing-Streak-free-Sun-Kissed/dp/B09QSQLL5Q/ref=sr_1_31_sspa?qid=1647024806&rnid=16225006011&s=beauty-intl-ship&sr=1-31-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE5WUc2SjhPWUdXM1ImZW5jcnlwdGVkSWQ9QTAyNjQzMTVGV0kyUEZYRTlKS1omZW5jcnlwdGVkQWRJZD1BMDcxMTk5NjFMSVQxTVJWUk9JUjYmd2lkZ2V0TmFtZT1zcF9idGZfYnJvd3NlJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    image: 'https://m.media-amazon.com/images/I/61RmBtaEVRL._SY355_.jpg',
    price: 16.99,
    description:
      'KENMILER illuminating self tanning drops is a clear concentrated facial self tanner made for face & neck.',
    rating: 'No customer review',
  },
  {
    id: 10,
    name: 'Honeydew HOT CREAM',
    link: 'https://www.amazon.com/Hot-Cream-Cellulite-Treatment-Antioxidants/dp/B01J8RBRSY/ref=sr_1_52?qid=1647025062&rnid=16225006011&s=beauty-intl-ship&sr=1-52',
    image: 'https://m.media-amazon.com/images/I/61BvZpJjl0L._SY355_.jpg',
    price: 11.95,
    description:
      'Firming Body Lotion for Women and Men and Body Sculpting Cellulite Workout Cream',
    rating: '4.1 out of 5',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
