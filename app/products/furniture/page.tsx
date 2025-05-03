"use client"
import { IoBedOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { livingroom } from "@/data/furniture/livingroom";
import { kitchen } from "@/data/furniture/kitchen";
import { bedroom } from "@/data/furniture/bedroom";
import { work } from "@/data/furniture/work";
import { baby } from "@/data/furniture/baby";

export default function Furniture() {
   return (
      <main className="h-[calc(100vh-112px)] bg-gray text-foreground flex flex-col items-start p-6 px-48">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-background shadow-lg rounded-lg flex items-center justify-center">
               <IoBedOutline className="text-highlight text-3xl" />
            </div>

            <div className="flex flex-col">
               <span className="text-foreground text-lg font-semibold">
                  Furniture on Rent
               </span>
               <p className="text-sm text-muted">
                  Style your space effortlessly—rent premium furniture today!
               </p>
            </div>
         </div>

         <Tabs defaultValue="livingroom" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-5 bg-highlight">

               <TabsTrigger value="livingroom" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Living&nbsp;Room</TabsTrigger>

               <TabsTrigger value="kitchen" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Kitchen&nbsp;&&nbsp;Dining</TabsTrigger>

               <TabsTrigger value="bedroom" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Bedroom</TabsTrigger>

               <TabsTrigger value="work" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Work</TabsTrigger>

               <TabsTrigger value="baby" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Baby</TabsTrigger>
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

            <TabsContent value="work" className="max-h-[500px] overflow-y-auto scrollbar-hide">
               <div className="grid grid-cols-3 gap-4 mt-4">
                  {work.map((workItems) => (
                     <Card key={workItems.id} className="bg-background border shadow-sm">
                        <CardHeader>
                           <img src={workItems.imageUrl} alt={workItems.name} className="bg-white rounded-md w-full h-72 object-cover" />
                        </CardHeader>
                        <CardContent>
                           <CardTitle>{workItems.brand}&nbsp;{workItems.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                           <span className="font-semibold">{workItems.price}</span>
                           <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                        </CardFooter>
                     </Card>
                  ))}
               </div>
            </TabsContent>

            <TabsContent value="baby" className="max-h-[500px] overflow-y-auto scrollbar-hide">
               <div className="grid grid-cols-3 gap-4 mt-4">
                  {baby.map((babyItems) => (
                     <Card key={babyItems.id} className="bg-background border shadow-sm">
                        <CardHeader>
                           <img src={babyItems.imageUrl} alt={babyItems.name} className="bg-white rounded-md w-full h-72 object-cover" />
                        </CardHeader>
                        <CardContent>
                           <CardTitle>{babyItems.brand}&nbsp;{babyItems.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                           <span className="font-semibold">{babyItems.price}</span>
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