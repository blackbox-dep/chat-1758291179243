"use client";

import { Button } from "/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select";
import {
  Search,
  Menu,
  User,
  Globe,
  Heart,
  Star,
  MapPin,
  Calendar,
  Users,
  Filter,
  Wifi,
  Car,
  Waves,
  Coffee,
  Dumbbell,
  Wind,
} from "lucide-react";
import { useState } from "react";

export default function AirbnbClone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: "all",
    priceRange: "all",
    bedrooms: "all",
  });
  const [favorites, setFavorites] = useState<number[]>([]);

  const propertyTypes = [
    "Entire home",
    "Private room",
    "Shared room",
    "Hotel room",
  ];

  const amenities = [
    { icon: Wifi, label: "Wifi" },
    { icon: Car, label: "Parking" },
    { icon: Waves, label: "Pool" },
    { icon: Coffee, label: "Kitchen" },
    { icon: Dumbbell, label: "Gym" },
    { icon: Wind, label: "AC" },
  ];

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      type: "Entire home",
      location: "New York, NY",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      price: 145,
      rating: 4.9,
      reviews: 127,
      host: "Sarah",
      image: "undefined/400x300?prompt=Modern downtown loft apartment with exposed brick walls, large windows, contemporary furniture and city view&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Wifi", "Kitchen", "AC"],
      superhost: true,
    },
    {
      id: 2,
      title: "Cozy Beach House",
      type: "Entire home",
      location: "Malibu, CA",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 280,
      rating: 4.8,
      reviews: 89,
      host: "Michael",
      image: "undefined/400x300?prompt=Cozy beach house with ocean view, wooden deck, palm trees, and sunset lighting&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Pool", "Wifi", "Parking"],
      superhost: false,
    },
    {
      id: 3,
      title: "Historic Brownstone",
      type: "Private room",
      location: "Boston, MA",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 95,
      rating: 4.7,
      reviews: 203,
      host: "Emma",
      image: "undefined/400x300?prompt=Historic brownstone building with classic architecture, brick facade, and charming entrance with greenery&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Wifi", "Kitchen"],
      superhost: true,
    },
    {
      id: 4,
      title: "Mountain Cabin Retreat",
      type: "Entire home",
      location: "Aspen, CO",
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      price: 320,
      rating: 5.0,
      reviews: 45,
      host: "David",
      image: "undefined/400x300?prompt=Rustic mountain cabin surrounded by pine trees with stone fireplace and cozy interior&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Wifi", "Parking", "Kitchen"],
      superhost: true,
    },
    {
      id: 5,
      title: "Urban Studio Apartment",
      type: "Entire home",
      location: "Seattle, WA",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 85,
      rating: 4.6,
      reviews: 156,
      host: "Jessica",
      image: "undefined/400x300?prompt=Modern urban studio apartment with minimalist design, large windows, and city skyline view&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Wifi", "AC", "Gym"],
      superhost: false,
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      type: "Entire home",
      location: "Miami, FL",
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      price: 450,
      rating: 4.9,
      reviews: 78,
      host: "Carlos",
      image: "undefined/400x300?prompt=Luxury penthouse with panoramic city view, modern furniture, marble floors, and rooftop terrace&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn",
      amenities: ["Pool", "Wifi", "AC", "Gym"],
      superhost: true,
    },
  ];

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Airbnb</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Stays
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Online Experiences
              </a>
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Airbnb your home
              </Button>
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Search Section */}
      <section className="bg-gradient-to-b from-card to-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Find your next stay
            </h1>
            
            {/* Search Bar */}
            <Card className="p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Where</Label>
                  <Input
                    id="location"
                    placeholder="Search destinations"
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check in</Label>
                  <Input
                    id="checkin"
                    type="date"
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout">Check out</Label>
                  <Input
                    id="checkout"
                    type="date"
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Add guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 guest</SelectItem>
                      <SelectItem value="2">2 guests</SelectItem>
                      <SelectItem value="3">3 guests</SelectItem>
                      <SelectItem value="4">4+ guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 overflow-x-auto">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant="ghost"
                  className="whitespace-nowrap text-sm hover:bg-muted"
                >
                  {type}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="ml-4">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Property type</Label>
                  <Select
                    value={selectedFilters.propertyType}
                    onValueChange={(value) =>
                      setSelectedFilters(prev => ({ ...prev, propertyType: value }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="entire">Entire home</SelectItem>
                      <SelectItem value="private">Private room</SelectItem>
                      <SelectItem value="shared">Shared room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Price range</Label>
                  <Select
                    value={selectedFilters.priceRange}
                    onValueChange={(value) =>
                      setSelectedFilters(prev => ({ ...prev, priceRange: value }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any price</SelectItem>
                      <SelectItem value="low">$0 - $100</SelectItem>
                      <SelectItem value="mid">$100 - $200</SelectItem>
                      <SelectItem value="high">$200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Bedrooms</Label>
                  <Select
                    value={selectedFilters.bedrooms}
                    onValueChange={(value) =>
                      setSelectedFilters(prev => ({ ...prev, bedrooms: value }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Amenities</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {amenities.map((amenity) => (
                      <div key={amenity.label} className="flex items-center space-x-2">
                        <input type="checkbox" id={amenity.label} className="rounded" />
                        <Label htmlFor={amenity.label} className="text-sm flex items-center">
                          <amenity.icon className="h-3 w-3 mr-1" />
                          {amenity.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Property Listings */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">300+ stays in your area</p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Property Card 1 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Modern downtown loft apartment with exposed brick walls, large windows, contemporary furniture and city view&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Modern downtown loft apartment with exposed brick walls, large windows, contemporary furniture and city view"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(1)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(1) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">4.9 (127)</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Superhost
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Modern Downtown Loft
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    New York, NY
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    4 guests • 2 bedrooms • 2 bathrooms
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Coffee className="h-3 w-3 text-muted-foreground" />
                      <Wind className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$145</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 2 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Cozy beach house with ocean view, wooden deck, palm trees, and sunset lighting&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Cozy beach house with ocean view, wooden deck, palm trees, and sunset lighting"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(2)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(2) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">4.8 (89)</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Cozy Beach House
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    Malibu, CA
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    6 guests • 3 bedrooms • 2 bathrooms
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Waves className="h-3 w-3 text-muted-foreground" />
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Car className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$280</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 3 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Historic brownstone building with classic architecture, brick facade, and charming entrance with greenery&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Historic brownstone building with classic architecture, brick facade, and charming entrance with greenery"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(3)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(3) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">4.7 (203)</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Superhost
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Historic Brownstone
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    Boston, MA
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    2 guests • 1 bedroom • 1 bathroom
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Coffee className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$95</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 4 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Rustic mountain cabin surrounded by pine trees with stone fireplace and cozy interior&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Rustic mountain cabin surrounded by pine trees with stone fireplace and cozy interior"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(4)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(4) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">5.0 (45)</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Superhost
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Mountain Cabin Retreat
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    Aspen, CO
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    8 guests • 4 bedrooms • 3 bathrooms
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Car className="h-3 w-3 text-muted-foreground" />
                      <Coffee className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$320</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 5 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Modern urban studio apartment with minimalist design, large windows, and city skyline view&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Modern urban studio apartment with minimalist design, large windows, and city skyline view"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(5)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(5) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">4.6 (156)</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Urban Studio Apartment
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    Seattle, WA
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    2 guests • 1 bedroom • 1 bathroom
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Wind className="h-3 w-3 text-muted-foreground" />
                      <Dumbbell className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$85</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 6 */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="relative">
                  <img
                    src="undefined/400x300?prompt=Luxury penthouse with panoramic city view, modern furniture, marble floors, and rooftop terrace&id=1119eb1f-ca53-49f1-8839-945a66b8d85a&customer_id=cus_SJP9N0JqqPvQNn"
                    alt="Luxury penthouse with panoramic city view, modern furniture, marble floors, and rooftop terrace"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(6)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(6) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm font-medium">4.9 (78)</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Superhost
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Luxury Penthouse
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    Miami, FL
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    6 guests • 3 bedrooms • 3 bathrooms
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <Waves className="h-3 w-3 text-muted-foreground" />
                      <Wifi className="h-3 w-3 text-muted-foreground" />
                      <Wind className="h-3 w-3 text-muted-foreground" />
                      <Dumbbell className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-right">
                      <span className="font-bold">$450</span>
                      <span className="text-sm text-muted-foreground"> night</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Show more stays
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">AirCover</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Safety information</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Cancellation options</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Airbnb.org: disaster relief housing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Combating discrimination</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Supporting people with disabilities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Hosting</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Airbnb your home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">AirCover for Hosts</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Hosting resources</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Community forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Airbnb</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Newsroom</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">New features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Airbnb, Inc. All rights reserved
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                English (US)
              </Button>
              <Button variant="ghost" size="sm">$ USD</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
