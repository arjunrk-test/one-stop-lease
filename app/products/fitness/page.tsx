"use client"
import { CiDumbbell } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { treadmills } from "@/data/fitness/treadmills";
import { crossTrainers } from "@/data/fitness/crosstrainers";
import { exerciseBikes } from "@/data/fitness/exercisebikes";
import { massagers } from "@/data/fitness/massagers";


export default function Fitness(){
   return (
            <main className="h-[calc(100vh-112px)] bg-gray text-foreground flex flex-col items-start p-6 px-48">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-background shadow-lg rounded-lg flex items-center justify-center">
                     <CiDumbbell className="text-highlight text-3xl" />
                  </div>
      
                  <div className="flex flex-col">
                     <span className="text-foreground text-lg font-semibold">
                        Fitness equipments on Rent
                     </span>
                     <p className="text-sm text-muted">
                        Level up your workouts—rent premium fitness gear today!
                     </p>
                  </div>
               </div>
      
               <Tabs defaultValue="treadmills" className="w-full mt-8">
                  <TabsList className="grid w-full grid-cols-4 bg-highlight">
      
                     <TabsTrigger value="treadmills" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Treadmills</TabsTrigger>
      
                     <TabsTrigger value="crossTrainers" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Cross&nbsp;Trainers</TabsTrigger>
      
                     <TabsTrigger value="exerciseBikes" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Exercise&nbsp;Bikes</TabsTrigger>
      
                     <TabsTrigger value="massagers" className="data-[state=active]:bg-foreground data-[state=active]:text-background dark:data-[state=active]:text-background text-black/80">Massagers</TabsTrigger>
      
                  </TabsList>
      
                  <TabsContent value="treadmills" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {treadmills.map((treadmills) => (
                           <Card key={treadmills.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={treadmills.imageUrl} alt={treadmills.name} className=" bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{treadmills.brand}&nbsp;{treadmills.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{treadmills.price}</span>
                                 <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                              </CardFooter>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>
      
                  <TabsContent value="crossTrainers" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {crossTrainers.map((crossTrainers) => (
                           <Card key={crossTrainers.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={crossTrainers.imageUrl} alt={crossTrainers.name} className="bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{crossTrainers.brand}&nbsp;{crossTrainers.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{crossTrainers.price}</span>
                                 <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                              </CardFooter>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>
      
                  <TabsContent value="exerciseBikes" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {exerciseBikes.map((exerciseBikes) => (
                           <Card key={exerciseBikes.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={exerciseBikes.imageUrl} alt={exerciseBikes.name} className="bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{exerciseBikes.brand}&nbsp;{exerciseBikes.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{exerciseBikes.price}</span>
                                 <Button variant="default" className="bg-highlight text-background">Rent Now</Button>
                              </CardFooter>
                           </Card>
                        ))}
                     </div>
                  </TabsContent>
      
                  <TabsContent value="massagers" className="max-h-[500px] overflow-y-auto scrollbar-hide">
                     <div className="grid grid-cols-3 gap-4 mt-4">
                        {massagers.map((massagers) => (
                           <Card key={massagers.id} className="bg-background border shadow-sm">
                              <CardHeader>
                                 <img src={massagers.imageUrl} alt={massagers.name} className="bg-white rounded-md w-full h-72 object-cover" />
                              </CardHeader>
                              <CardContent>
                                 <CardTitle>{massagers.brand}&nbsp;{massagers.name}</CardTitle>
                              </CardContent>
                              <CardFooter className="flex justify-between items-center">
                                 <span className="font-semibold">{massagers.price}</span>
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