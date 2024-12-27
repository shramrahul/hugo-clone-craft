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
        <Button className="bg-[#8B5CF6] text-white px-8 py-3 rounded-full hover:bg-[#7C3AED] transition-colors duration-300 shadow-lg hover:shadow-xl">
          Let's Connect
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF] p-8 rounded-3xl border-2 border-[#D6BCFA]/20 shadow-2xl">
        <FormHeader onClose={() => setOpen(false)} />
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormFields />
          <div className="flex justify-center mt-8">
            <Button 
              type="submit" 
              className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};