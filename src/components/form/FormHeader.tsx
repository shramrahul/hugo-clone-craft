import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface FormHeaderProps {
  onClose: () => void;
}

export const FormHeader = ({ onClose }: FormHeaderProps) => {
  return (
    <>
      <div className="absolute right-4 top-4">
        <button 
          onClick={onClose} 
          className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <DialogHeader>
        <DialogTitle className="text-3xl font-normal text-center mb-8">
          Build Your Dream Team
        </DialogTitle>
      </DialogHeader>
    </>
  );
};