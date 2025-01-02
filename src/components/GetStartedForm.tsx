import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { FormHeader } from "./form/FormHeader";
import { FormFields } from "./form/FormFields";

export const GetStartedForm = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild data-trigger="contact">
        <Button className="bg-[#2563EB] text-white px-8 py-3 rounded-full hover:bg-[#1E40AF] transition-colors duration-300 shadow-lg hover:shadow-xl">
          Let's Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[90vh] bg-gradient-to-br from-[#F8FAFC] to-[#D3E4FD] rounded-3xl border-2 border-[#D3E4FD]/20 shadow-2xl flex flex-col">
        <FormHeader onClose={() => setOpen(false)} />
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6">
            <FormFields />
          </div>
          <div className="flex justify-center p-6 bg-gradient-to-br from-[#F8FAFC] to-[#D3E4FD] border-t border-[#D3E4FD]/20">
            <Button 
              type="submit" 
              className="bg-[#2563EB] text-white hover:bg-[#1E40AF] rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};