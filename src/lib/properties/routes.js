import { NextResponse } from 'next/server';

const properties = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Property ${i + 1}`,
  location: ['Kingston', 'Carbon City', 'University', 'Shared', 'House'][i % 5],
  price: 1000 + i * 100,
  beds: 2 + (i % 3),
  baths: 1 + (i % 2),
  parking: 1 + (i % 2),
  latitude: 33.68 + i * 0.01,
  longitude: 73.04 + i * 0.01,
  image: 'https://via.placeholder.com/300x200',
  type: ['apartment', 'house', 'shared', 'township'][i % 4],
}));

export async function GET() {
  return NextResponse.json(properties);
}
