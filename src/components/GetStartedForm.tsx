import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
        <div className="absolute right-4 top-4">
          <button onClick={() => setOpen(false)} className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <DialogHeader>
          <DialogTitle className="text-3xl font-normal text-center mb-8">Build Your Dream Team</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">* First Name</label>
              <Input required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">* Last Name</label>
              <Input required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* Company Name</label>
            <Input required />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Business Phone</label>
            <Input type="tel" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* Business Email</label>
            <Input type="email" required />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* What services are you looking for?</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer-support">Customer Support</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="digital-operations">Digital Operations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* How soon are you looking to get started?</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* How many new team members do you need?</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1-5</SelectItem>
                <SelectItem value="6-10">6-10</SelectItem>
                <SelectItem value="11+">11+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">* What best describes your journey in outsourcing?</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-time">First time outsourcing</SelectItem>
                <SelectItem value="experienced">Experienced with outsourcing</SelectItem>
                <SelectItem value="switching">Switching providers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Anything else you'd like to share before the meeting?</label>
            <Textarea placeholder="I'm looking to..." className="min-h-[100px]" />
          </div>
          
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