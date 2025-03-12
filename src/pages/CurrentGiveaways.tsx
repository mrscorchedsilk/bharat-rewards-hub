
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurrentGiveaways = () => {
  // Sample giveaway data
  const giveaways = [
    {
      id: 1,
      title: "iPhone 15 Pro Max Giveaway",
      description: "Win the latest iPhone with ProMotion display and A17 Pro chip",
      endDate: "June 30, 2023",
      participants: 1243,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 2,
      title: "MacBook Air M2 Giveaway",
      description: "Ultra-thin, super fast, and perfect for work and play",
      endDate: "July 15, 2023",
      participants: 987,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 3,
      title: "PlayStation 5 Giveaway",
      description: "Next-gen gaming with lightning-fast loading and stunning graphics",
      endDate: "July 7, 2023",
      participants: 1876,
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 4,
      title: "iPad Pro 12.9-inch Giveaway",
      description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display",
      endDate: "July 22, 2023",
      participants: 651,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-gold-500" />
          Current Giveaways
        </h1>
        <p className="text-gray-600">
          Participate in our ongoing giveaways for a chance to win amazing prizes
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {giveaways.map((giveaway) => (
          <Card key={giveaway.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full relative">
              <img 
                src={giveaway.image} 
                alt={giveaway.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Active
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{giveaway.title}</CardTitle>
              <CardDescription>{giveaway.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  Ends on: {giveaway.endDate}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="mr-1 h-4 w-4" />
                  {giveaway.participants.toLocaleString()} participants
                </div>
              </div>
              <Button className="w-full">Enter Giveaway</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CurrentGiveaways;
