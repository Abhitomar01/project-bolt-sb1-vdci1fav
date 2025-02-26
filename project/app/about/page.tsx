'use client';

import { Card } from '@/components/ui/card';
import { Award, Clock, Globe, Shield, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure Shopping',
    description: 'Your security is our top priority with secure payment processing and data protection.',
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly with our efficient shipping partners.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Customer Support',
    description: '24/7 dedicated support team ready to assist you with any queries.',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Quality Products',
    description: 'We ensure all our products meet the highest quality standards.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Reach',
    description: 'Serving customers worldwide with international shipping options.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy for your peace of mind.',
  },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Premium Store</h1>
        <p className="text-xl text-muted-foreground">
          Your destination for premium products and exceptional service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2020, Premium Store has grown from a small startup to a leading
            online destination for high-quality products. We believe in offering our
            customers the very best in premium merchandise, backed by exceptional
            customer service.
          </p>
          <p className="text-muted-foreground">
            Our commitment to quality, innovation, and customer satisfaction has helped
            us build a loyal customer base and establish ourselves as a trusted name
            in online retail.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            We strive to provide our customers with an unparalleled shopping
            experience, offering carefully curated products that meet our high
            standards for quality and value. Our mission is to make premium products
            accessible to everyone while maintaining excellent customer service.
          </p>
          <p className="text-muted-foreground">
            We're constantly evolving and improving our services to better serve our
            customers and meet their changing needs.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-4">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <p className="text-muted-foreground">
          Email us at: <span className="font-medium">support@premiumstore.com</span>
        </p>
      </div>
    </div>
  );
}