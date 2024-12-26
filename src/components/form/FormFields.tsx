import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FormFields = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-h-[70vh] overflow-y-auto px-2">
      <div className="space-y-2">
        <label className="text-base font-medium">* First Name</label>
        <Input 
          required 
          placeholder="John"
          className="bg-white border-0 rounded-2xl h-12 text-base" 
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-base font-medium">* Last Name</label>
        <Input 
          required 
          placeholder="Doe"
          className="bg-white border-0 rounded-2xl h-12 text-base" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* Company Name</label>
        <Input 
          required 
          placeholder="Your Company"
          className="bg-white border-0 rounded-2xl h-12 text-base" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">Business Phone</label>
        <Input 
          type="tel" 
          placeholder="+1 (555) 000-0000"
          className="bg-white border-0 rounded-2xl h-12 text-base" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* Business Email</label>
        <Input 
          type="email" 
          required 
          placeholder="john@company.com"
          className="bg-white border-0 rounded-2xl h-12 text-base" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* What services are you looking for?</label>
        <Select>
          <SelectTrigger className="bg-white border-0 rounded-2xl h-12 text-base">
            <SelectValue placeholder="Choose Services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="customer-support">Customer Support</SelectItem>
            <SelectItem value="content">Content</SelectItem>
            <SelectItem value="digital-operations">Digital Operations</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* How soon are you looking to get started?</label>
        <Select>
          <SelectTrigger className="bg-white border-0 rounded-2xl h-12 text-base">
            <SelectValue placeholder="Choose One" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediately">Immediately</SelectItem>
            <SelectItem value="1-3-months">1-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* How many new team members do you need?</label>
        <Select>
          <SelectTrigger className="bg-white border-0 rounded-2xl h-12 text-base">
            <SelectValue placeholder="Choose One" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-5">1-5</SelectItem>
            <SelectItem value="6-10">6-10</SelectItem>
            <SelectItem value="11+">11+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">* What best describes your journey in outsourcing?</label>
        <Select>
          <SelectTrigger className="bg-white border-0 rounded-2xl h-12 text-base">
            <SelectValue placeholder="Choose One" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first-time">First time outsourcing</SelectItem>
            <SelectItem value="experienced">Experienced with outsourcing</SelectItem>
            <SelectItem value="switching">Switching providers</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-base font-medium">Anything else you'd like to share before the meeting?</label>
        <Textarea 
          placeholder="I'm looking to..." 
          className="min-h-[150px] bg-white border-0 rounded-2xl text-base p-4 resize-none" 
        />
      </div>
    </div>
  );
};