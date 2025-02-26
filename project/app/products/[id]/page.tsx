'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Product 1',
    price: 99.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    description: 'High-quality premium product with amazing features.',
    details: [
      'Premium quality materials',
      'Advanced technology',
      '1-year warranty',
      'Free shipping',
    ],
  },
  // Add more products as needed
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="container px-4 py-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <div className="aspect-square relative">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </Card>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">
              ${product.price}
            </p>
            <p className="text-muted-foreground mt-4">{product.description}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>Key features and specifications</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 text-center"
              />
              <Button variant="outline" size="icon" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}