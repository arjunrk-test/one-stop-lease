"use client";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { smartphones } from "@/data/electronics/smartphones";
import { laptops } from "@/data/electronics/laptops";
export default function Electronics() {
   return (
      <main className="h-[calc(100vh-112px)] bg-gray text-foreground flex flex-col items-start p-6 px-48">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-background shadow-lg rounded-lg flex items-center justify-center">
               <HiOutlineDevicePhoneMobile className="text-highlight text-3xl" />
            </div>

            <div className="flex flex-col">
               <span className="text-foreground text-lg font-semibold">
                  Electronics on Rent
               </span>
               <p className="text-sm text-muted">
                  Power up your life with gadgets you need, when you need them.
               </p>
            </div>
         </div>

         <Tabs defaultValue="smartphones" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 bg-highlight">
               <TabsTrigger value="smartphones" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Smartphones</TabsTrigger>
               <TabsTrigger value="laptops" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Laptops</TabsTrigger>
            </TabsList>
            <TabsContent value="smartphones" className="max-h-[500px] overflow-y-auto scrollbar-hide">
               <div className="grid grid-cols-3 gap-4 mt-4">
                  {smartphones.map((phone) => (
                     <Card key={phone.id} className="bg-background border shadow-sm">
                        <CardHeader>
                           <img src={phone.imageUrl} alt={phone.name} className=" bg-white rounded-md w-full h-72 object-cover" />
                        </CardHeader>
                        <CardContent>
                           <CardTitle>{phone.brand}&nbsp;{phone.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                           <span className="font-semibold">{phone.price}</span>
                           <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                        </CardFooter>
                     </Card>
                  ))}
               </div>
            </TabsContent>

            <TabsContent value="laptops" className="max-h-[500px] overflow-y-auto scrollbar-hide">
               <div className="grid grid-cols-3 gap-4 mt-4">
                  {laptops.map((lap) => (
                     <Card key={lap.id} className="bg-background border shadow-sm">
                        <CardHeader>
                           <img src={lap.imageUrl} alt={lap.name} className="bg-white rounded-md w-full h-72 object-cover" />
                        </CardHeader>
                        <CardContent>
                           <CardTitle>{lap.brand}&nbsp;{lap.name}</CardTitle>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                           <span className="font-semibold">{lap.price}</span>
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