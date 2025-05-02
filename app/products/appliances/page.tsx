"use client"
import { LuWashingMachine } from "react-icons/lu";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { livingroom } from "@/data/appliances/livingroom";
import { kitchen } from "@/data/appliances/kitchen";
import { bedroom } from "@/data/appliances/bedroom";
import { washing } from "@/data/appliances/washing";
export default function Appliances(){
   return (
         <main className="h-[calc(100vh-112px)] bg-gray text-foreground flex flex-col items-start p-6 px-48">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-background shadow-lg rounded-lg flex items-center justify-center">
                  <LuWashingMachine className="text-highlight text-3xl" />
               </div>
   
               <div className="flex flex-col">
                  <span className="text-foreground text-lg font-semibold">
                     Appliances on Rent
                  </span>
                  <p className="text-sm text-muted">
                     Upgrade your home hassle-free—rent top-notch appliances today!
                  </p>
               </div>
            </div>
   
            <Tabs defaultValue="livingroom" className="w-full mt-8">
               <TabsList className="grid w-full grid-cols-4 bg-highlight">
   
                  <TabsTrigger value="livingroom" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Living&nbsp;Room</TabsTrigger>
   
                  <TabsTrigger value="kitchen" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Kitchen&nbsp;&&nbsp;Dining</TabsTrigger>
   
                  <TabsTrigger value="bedroom" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Bedroom</TabsTrigger>
   
                  <TabsTrigger value="washing" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Washing&nbsp;Machine</TabsTrigger>
   
               </TabsList>
   
               <TabsContent value="livingroom" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                  <div className="grid grid-cols-3 gap-4 mt-4">
                     {livingroom.map((living) => (
                        <Card key={living.id} className="bg-background border shadow-sm">
                           <CardHeader>
                              <img src={living.imageUrl} alt={living.name} className=" bg-white rounded-md w-full h-72 object-cover" />
                           </CardHeader>
                           <CardContent>
                              <CardTitle>{living.brand}&nbsp;{living.name}</CardTitle>
                           </CardContent>
                           <CardFooter className="flex justify-between items-center">
                              <span className="font-semibold">{living.price}</span>
                              <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                           </CardFooter>
                        </Card>
                     ))}
                  </div>
               </TabsContent>
   
               <TabsContent value="kitchen" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                  <div className="grid grid-cols-3 gap-4 mt-4">
                     {kitchen.map((kitchenItems) => (
                        <Card key={kitchenItems.id} className="bg-background border shadow-sm">
                           <CardHeader>
                              <img src={kitchenItems.imageUrl} alt={kitchenItems.name} className="bg-white rounded-md w-full h-72 object-cover" />
                           </CardHeader>
                           <CardContent>
                              <CardTitle>{kitchenItems.brand}&nbsp;{kitchenItems.name}</CardTitle>
                           </CardContent>
                           <CardFooter className="flex justify-between items-center">
                              <span className="font-semibold">{kitchenItems.price}</span>
                              <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                           </CardFooter>
                        </Card>
                     ))}
                  </div>
               </TabsContent>
   
               <TabsContent value="bedroom" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                  <div className="grid grid-cols-3 gap-4 mt-4">
                     {bedroom.map((bedroomItems) => (
                        <Card key={bedroomItems.id} className="bg-background border shadow-sm">
                           <CardHeader>
                              <img src={bedroomItems.imageUrl} alt={bedroomItems.name} className="bg-white rounded-md w-full h-72 object-cover" />
                           </CardHeader>
                           <CardContent>
                              <CardTitle>{bedroomItems.brand}&nbsp;{bedroomItems.name}</CardTitle>
                           </CardContent>
                           <CardFooter className="flex justify-between items-center">
                              <span className="font-semibold">{bedroomItems.price}</span>
                              <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                           </CardFooter>
                        </Card>
                     ))}
                  </div>
               </TabsContent>
   
               <TabsContent value="washing" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                  <div className="grid grid-cols-3 gap-4 mt-4">
                     {washing.map((washingItems) => (
                        <Card key={washingItems.id} className="bg-background border shadow-sm">
                           <CardHeader>
                              <img src={washingItems.imageUrl} alt={washingItems.name} className="bg-white rounded-md w-full h-72 object-cover" />
                           </CardHeader>
                           <CardContent>
                              <CardTitle>{washingItems.brand}&nbsp;{washingItems.name}</CardTitle>
                           </CardContent>
                           <CardFooter className="flex justify-between items-center">
                              <span className="font-semibold">{washingItems.price}</span>
                              <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                           </CardFooter>
                        </Card>
                     ))}
                  </div>
               </TabsContent>
   
            </Tabs>
         </main>
      );
}