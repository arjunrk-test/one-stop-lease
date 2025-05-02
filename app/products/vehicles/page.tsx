"use client"
import { RiEBikeLine } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { scooters } from "@/data/vehicles/scooters";
import { bikes } from "@/data/vehicles/bikes";
import { cars } from "@/data/vehicles/cars";

export default function Vehicles(){
   return (
            <main className="h-[calc(100vh-112px)] bg-gray text-foreground flex flex-col items-start p-6 px-48">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-background shadow-lg rounded-lg flex items-center justify-center">
                     <RiEBikeLine className="text-highlight text-3xl" />
                  </div>
      
                  <div className="flex flex-col">
                     <span className="text-foreground text-lg font-semibold">
                        Vehicles on Rent
                     </span>
                     <p className="text-sm text-muted">
                        Hit the road with ease—rent the perfect ride for any journey!
                     </p>
                  </div>
               </div>
      
               <Tabs defaultValue="scooters" className="w-full mt-8">
                  <TabsList className="grid w-full grid-cols-3 bg-highlight">
      
                     <TabsTrigger value="scooters" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Scooters</TabsTrigger>
      
                     <TabsTrigger value="bikes" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Bikes</TabsTrigger>

                     <TabsTrigger value="cars" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Cars</TabsTrigger>
      
                  </TabsList>
      
                  <TabsContent value="scooters" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {scooters.map((scooters) => (
                           <Card key={scooters.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={scooters.imageUrl} alt={scooters.name} className=" bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{scooters.brand}&nbsp;{scooters.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{scooters.price}</span>
                                 <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                              </CardFooter>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>
      
                  <TabsContent value="bikes" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {bikes.map((bikes) => (
                           <Card key={bikes.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={bikes.imageUrl} alt={bikes.name} className="bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{bikes.brand}&nbsp;{bikes.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{bikes.price}</span>
                                 <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                              </CardFooter>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>

                  <TabsContent value="cars" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {cars.map((cars) => (
                           <Card key={cars.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={cars.imageUrl} alt={cars.name} className="bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{cars.brand}&nbsp;{cars.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{cars.price}</span>
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