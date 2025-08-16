// Vehicle data for E-Go Cars catalog
export const vehicles = [
  {
    id: 1,
    slug: '2023-toyota-camry-hybrid',
    name: 'Toyota Camry Hybrid',
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 32000000,
    originalPrice: 35000000,
    currency: 'CLP',
    status: 'disponible',
    featured: true,
    mileage: 15000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    engine: '2.5L Híbrido',
    power: '208 HP',
    doors: 4,
    seats: 5,
    color: 'Blanco Perla',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?w=800&q=80'
    ],
    description: 'Sedán híbrido premium con tecnología avanzada y máxima eficiencia en combustible.',
    features: [
      'Sistema de seguridad Toyota Safety Sense 2.0',
      'Pantalla táctil de 9 pulgadas',
      'Cámara de reversa con líneas dinámicas',
      'Climatizador automático dual',
      'Asientos de cuero premium'
    ]
  },
  {
    id: 2,
    slug: '2022-honda-civic-sport',
    name: 'Honda Civic Sport',
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    price: 24500000,
    originalPrice: 26000000,
    currency: 'CLP',
    status: 'disponible',
    featured: true,
    mileage: 22000,
    fuel: 'Gasolina',
    transmission: 'Manual',
    engine: '1.5L Turbo',
    power: '180 HP',
    doors: 4,
    seats: 5,
    color: 'Gris Metálico',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1562141961-395d83efe7b0?w=800&q=80'
    ],
    description: 'Deportivo elegante con motor turbo y diseño agresivo.',
    features: [
      'Honda Sensing - Suite de seguridad',
      'Pantalla táctil de 7 pulgadas',
      'Apple CarPlay y Android Auto',
      'Climatizador automático',
      'Asientos deportivos'
    ]
  },
  {
    id: 3,
    slug: '2023-bmw-x3-xdrive30i',
    name: 'BMW X3 xDrive30i',
    brand: 'BMW',
    model: 'X3',
    year: 2023,
    price: 58000000,
    originalPrice: 62000000,
    currency: 'CLP',
    status: 'disponible',
    featured: true,
    mileage: 8000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    engine: '2.0L TwinPower Turbo',
    power: '248 HP',
    doors: 5,
    seats: 5,
    color: 'Negro Zafiro',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80'
    ],
    description: 'SUV premium con tracción integral y tecnología de vanguardia.',
    features: [
      'Sistema iDrive 7.0 con pantalla de 12.3"',
      'Tracción integral xDrive',
      'Asientos de cuero Vernasca',
      'Climatizador automático de 3 zonas',
      'Techo panorámico'
    ]
  }
];

// Utility functions
export function getVehicleById(id) {
  return vehicles.find(vehicle => vehicle.id === id);
}

export function getVehicleBySlug(slug) {
  return vehicles.find(vehicle => vehicle.slug === slug);
}

export function getFeaturedVehicles() {
  return vehicles.filter(vehicle => vehicle.featured && vehicle.status === 'disponible');
}

export function getAvailableVehicles() {
  return vehicles.filter(vehicle => vehicle.status === 'disponible');
}

export function formatPrice(price, currency = 'CLP') {
  if (currency === 'CLP') {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
  return price.toLocaleString();
}

export function formatMileage(mileage) {
  return `${mileage.toLocaleString()} km`;
}