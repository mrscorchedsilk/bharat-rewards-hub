
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CalendarDays, Trophy, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PastGiveaways = () => {
  // Sample past giveaway data
  const pastGiveaways = [
    {
      id: 1,
      title: "Samsung Galaxy S23 Ultra Giveaway",
      description: "The ultimate Samsung experience with 200MP camera and S Pen",
      endDate: "May 15, 2023",
      participants: 1843,
      winner: "Rahul S.",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Headphones",
      description: "Industry-leading noise cancellation with exceptional sound quality",
      endDate: "April 30, 2023",
      participants: 1021,
      winner: "Priya M.",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 3,
      title: "Nintendo Switch OLED Giveaway",
      description: "Enhanced gaming with vibrant 7-inch OLED screen",
      endDate: "April 10, 2023",
      participants: 1547,
      winner: "Anil K.",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 4,
      title: "DJI Mini 3 Pro Drone",
      description: "Capture stunning aerial footage with this compact drone",
      endDate: "March 25, 2023",
      participants: 892,
      winner: "Deepa R.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Clock className="mr-2 h-6 w-6 text-gray-600" />
          Past Giveaways
        </h1>
        <p className="text-gray-600">
          Check out the completed giveaways and their winners
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pastGiveaways.map((giveaway) => (
          <Card key={giveaway.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full relative">
              <img 
                src={giveaway.image} 
                alt={giveaway.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Completed
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
                  Ended: {giveaway.endDate}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <User className="mr-1 h-4 w-4" />
                  {giveaway.participants.toLocaleString()} participants
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-gold-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">Winner</p>
                    <p className="text-sm text-gray-600">{giveaway.winner}</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-gold-50 text-gold-700 border-gold-200">
                  Announced
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastGiveaways;
