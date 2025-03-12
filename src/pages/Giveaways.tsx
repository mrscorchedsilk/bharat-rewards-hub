
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Giveaways = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bharat Giveaways</h1>
        <p className="text-gray-600">Participate in exciting giveaways and check past winners</p>
      </header>

      <Tabs defaultValue="current" className="space-y-6">
        <TabsList>
          <TabsTrigger value="current">Current Giveaways</TabsTrigger>
          <TabsTrigger value="past">Past Winners</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example current giveaway cards */}
            <Card>
              <CardHeader>
                <CardTitle>iPhone 15 Pro Max</CardTitle>
                <CardDescription>Ends in 5 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Participate to win the latest iPhone!</p>
              </CardContent>
            </Card>
            {/* Add more current giveaway cards */}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="space-y-6">
            {/* Example past giveaway entries */}
            <Card>
              <CardHeader>
                <CardTitle>MacBook Air M2</CardTitle>
                <CardDescription>Ended December 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Winner: John D.</p>
                <p className="text-gray-600">Total Participants: 1,234</p>
              </CardContent>
            </Card>
            {/* Add more past giveaway entries */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Giveaways;
