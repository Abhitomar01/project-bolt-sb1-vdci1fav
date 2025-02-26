'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with our team for any inquiries or support
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
            <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">support@premiumstore.com</p>
            <p className="text-muted-foreground">sales@premiumstore.com</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">123 Premium Street</p>
            <p className="text-muted-foreground">New York, NY 10001</p>
          </div>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is your message about?"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
}