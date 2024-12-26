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
      <DialogTrigger asChild>
        <Button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-[#FEF7CD] p-8 rounded-3xl">
        <FormHeader onClose={() => setOpen(false)} />
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFields />
          <div className="flex justify-center mt-8">
            <Button 
              type="submit" 
              className="w-fit bg-black text-white hover:bg-gray-800 rounded-full px-12 py-6 text-lg"
            >
              Get Started Free
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};