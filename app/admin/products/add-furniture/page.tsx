// "use client"
// import { IoMdAdd } from "react-icons/io";
// import { MdDeleteOutline } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";
// import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// const editButtons = [
//    { name: "add", bgColour: "bg-green-500", tooltipValue: "Add Furniture", icon: <IoMdAdd /> },
//    { name: "delete", bgColour: "bg-red-500", tooltipValue: "Delete Furniture", icon: <MdDeleteOutline /> },
//    { name: "edit", bgColour: "bg-yellow-500", tooltipValue: "Edit details", icon: <CiEdit /> },
// ];

// export default function AddFurniture() {
//    return (
//       <main>
//          <h1 className="text-2xl font-bold text-highlight">Edit Furniture</h1>
//          <div className="flex justify-end gap-4 pr-8">
//             <TooltipProvider>
//                {editButtons.map((buttons) => (
//                   <Tooltip key={buttons.name}>
//                      <TooltipTrigger asChild>
//                         <div className={`${buttons.bgColour} text-background cursor-pointer p-2 rounded-md flex items-center justify-center`}>
//                            <span className="text-xl">{buttons.icon}</span> {/* Shrink icon */}
//                         </div>
//                      </TooltipTrigger>
//                      <TooltipContent className="bg-foreground text-background">
//                         <p>{buttons.tooltipValue}</p>
//                      </TooltipContent>
//                   </Tooltip>
//                ))}
//             </TooltipProvider>
//          </div>

//       </main>
//    );
// }


"use client";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const editButtons = [
  {
    name: "add",
    bgColour: "bg-green-500",
    tooltipValue: "Add Furniture",
    icon: <IoMdAdd />,
  },
  {
    name: "delete",
    bgColour: "bg-red-500",
    tooltipValue: "Delete Furniture",
    icon: <MdDeleteOutline />,
  },
  {
    name: "edit",
    bgColour: "bg-yellow-500",
    tooltipValue: "Edit details",
    icon: <CiEdit />,
  },
];

export default function AddFurniture() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <h1 className="text-2xl font-bold text-highlight">Edit Furniture</h1>
      <div className="flex justify-end gap-4 pr-8">
        <TooltipProvider>
          {editButtons.map((buttons) => (
            <Tooltip key={buttons.name}>
              <TooltipTrigger asChild>
                <div
                  onClick={() => {
                    if (buttons.name === "add") setOpen(true);
                  }}
                  className={`${buttons.bgColour} text-background cursor-pointer p-2 rounded-md flex items-center justify-center`}
                >
                  <span className="text-xl">{buttons.icon}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-foreground text-background">
                <p>{buttons.tooltipValue}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray">
          <DialogHeader>
            <DialogTitle className="text-highlight">Add Furniture</DialogTitle>
            <DialogDescription className="text-foreground">Enter the furniture details below.</DialogDescription>
          </DialogHeader>

          <form className="space-y-4 mt-4">
            <Input placeholder="Brand" required className="bg-foreground placeholder:text-black/50"/>
            <Input placeholder="Name" required className="bg-foreground placeholder:text-black/50"/>
            <Input placeholder="Category (e.g., furniture)" required className="bg-foreground placeholder:text-black/50"/>
            <Input placeholder="Subcategory (e.g., sofa)" required className="bg-foreground placeholder:text-black/50"/>
            <Textarea placeholder="Description" required className="bg-foreground placeholder:text-black/50"/>
            <Input type="number" placeholder="Price per month (₹)" required className="bg-foreground placeholder:text-black/50"/>
            <Input type="file" accept="image/*" required className="bg-highlight placeholder:text-black/50"/>
            <Button type="submit" className="w-full bg-highlight text-foreground" variant="default">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
