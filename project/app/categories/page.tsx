'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
    itemCount: 12,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Premium accessories for every occasion',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    itemCount: 8,
  },
  {
    id: 'wearables',
    name: 'Wearables',
    description: 'Smart watches and fitness trackers',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    itemCount: 6,
  },
  {
    id: 'audio',
    name: 'Audio',
    description: 'High-quality audio equipment',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    itemCount: 10,
  },
];

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Product Categories</h1>
          <p className="text-muted-foreground">
            Browse our collection by category
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`}>
            <Card className="group overflow-hidden transition-all duration-200 hover:shadow-lg">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    <span className="text-sm">{category.itemCount} items</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}