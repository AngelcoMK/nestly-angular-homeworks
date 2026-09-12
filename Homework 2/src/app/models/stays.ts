import { Stay } from './stay.model';

export const stays: Stay[] = [
  {
    id: 1,
    title: 'Cozy Apartment',
    location: 'Skopje, Macedonia',
    price: 45,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    guests: 4,
    superhost: true,
    description: 'A cozy apartment in the heart of the city.'
  },
  {
    id: 2,
    title: 'Modern Mountain House',
    location: 'Mavrovo, Macedonia',
    price: 80,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
    guests: 6,
    superhost: true,
    description: 'A peaceful mountain house surrounded by nature.'
  },
  {
    id: 3,
    title: 'Lake View Studio',
    location: 'Ohrid, Macedonia',
    price: 60,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    guests: 2,
    superhost: false,
    description: 'A beautiful studio with a relaxing lake view.'
  },
  {
    id: 4,
    title: 'City Center Loft',
    location: 'Bitola, Macedonia',
    price: 55,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    guests: 3,
    superhost: false,
    description: 'A stylish loft close to restaurants and shops.'
  },
  {
    id: 5,
    title: 'Peaceful Villa',
    location: 'Berovo, Macedonia',
    price: 120,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    guests: 8,
    superhost: true,
    description: 'A spacious villa perfect for a relaxing weekend.'
  },
  {
    id: 6,
    title: 'Small Beach House',
    location: 'Ohrid, Macedonia',
    price: 70,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
    guests: 4,
    superhost: false,
    description: 'A small and comfortable house near the lake.'
  }
];