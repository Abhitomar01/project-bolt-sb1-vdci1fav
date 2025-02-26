'use client';

import { ShoppingBag, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Product 1',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    description: 'High-quality premium product with amazing features.',
  },
  {
    id: 2,
    name: 'Premium Product 2',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
    description: 'Exclusive premium product for discerning customers.',
  },
  {
    id: 3,
    name: 'Premium Product 3',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    description: 'Top-tier premium product with superior quality.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Premium Store</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our exclusive collection of premium products
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Shop Now <ShoppingBag className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button variant="secondary" asChild>
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}