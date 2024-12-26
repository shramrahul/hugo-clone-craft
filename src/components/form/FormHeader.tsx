import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface FormHeaderProps {
  onClose: () => void;
}

export const FormHeader = ({ onClose }: FormHeaderProps) => {
  return (
    <>
      <div className="absolute right-6 top-6">
        <button 
          onClick={onClose} 
          className="rounded-full bg-black p-2 hover:bg-gray-800 transition-colors"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <DialogHeader>
        <DialogTitle className="text-4xl font-normal text-center mb-8 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <img src="/placeholder.svg" alt="" className="w-12 h-12 rounded-full border-4 border-green-400" />
            <img src="/placeholder.svg" alt="" className="w-12 h-12 rounded-full border-4 border-purple-400" />
          </div>
          Build Your Dream Team
          <div className="flex gap-2">
            <img src="/placeholder.svg" alt="" className="w-12 h-12 rounded-full border-4 border-cyan-400" />
            <img src="/placeholder.svg" alt="" className="w-12 h-12 rounded-full border-4 border-orange-400" />
          </div>
        </DialogTitle>
      </DialogHeader>
    </>
  );
};