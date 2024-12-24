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
      <DialogContent className="sm:max-w-[600px] bg-[#FEF7CD]">
        <FormHeader onClose={() => setOpen(false)} />
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFields />
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={() => setOpen(false)}
          >
            Get Started Free
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};