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
          className="rounded-full bg-[#2563EB] p-2.5 hover:bg-[#1E40AF] transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <DialogHeader className="bg-gradient-to-br from-[#F8FAFC] to-[#D3E4FD] px-6 py-4 border-b border-[#D3E4FD]/20">
        <DialogTitle className="text-3xl font-normal text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] shadow-lg"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] shadow-lg"></div>
            </div>
            <h2 className="text-[#1A1F2C] font-semibold">Build Your Dream Team</h2>
            <p className="text-base text-[#64748B] max-w-md">
              Partner with us to transform your business through innovative technology solutions
            </p>
          </div>
        </DialogTitle>
      </DialogHeader>
    </>
  );
};