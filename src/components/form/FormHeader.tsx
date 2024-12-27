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
          className="rounded-full bg-[#8B5CF6] p-2.5 hover:bg-[#7C3AED] transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <DialogHeader>
        <DialogTitle className="text-4xl font-normal text-center mb-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] shadow-lg"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E59A5] to-[#1A1F2C] shadow-lg"></div>
            </div>
            <h2 className="text-[#1A1F2C] font-semibold">Build Your Dream Team</h2>
            <p className="text-base text-[#8E9196] max-w-md">
              Partner with us to transform your business through innovative technology solutions
            </p>
          </div>
        </DialogTitle>
      </DialogHeader>
    </>
  );
};