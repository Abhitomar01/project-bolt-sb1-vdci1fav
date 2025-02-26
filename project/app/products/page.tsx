'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Premium Product 1',
    price: 99.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    description: 'High-quality premium product with amazing features.',
  },
  {
    id: 2,
    name: 'Premium Product 2',
    price: 149.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
    description: 'Exclusive premium product for discerning customers.',
  },
  {
    id: 3,
    name: 'Premium Product 3',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    description: 'Top-tier premium product with superior quality.',
  },
  // Add more products as needed
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [category, setCategory] = useState('all');

  const filteredProducts = products.filter((product) =>
    category === 'all' ? true : product.category.toLowerCase() === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <span className="text-sm font-medium text-muted-foreground">
                  {product.category}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <div className="space-x-2">
                  <Button variant="outline">Add to Cart</Button>
                  <Button variant="secondary" asChild>
                    <Link href={`/products/${product.id}`}>Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}