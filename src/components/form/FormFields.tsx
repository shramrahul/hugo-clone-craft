import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FormFields = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 max-h-[60vh] overflow-y-auto px-2">
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* First Name</label>
        <Input 
          required 
          placeholder="John"
          className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* Last Name</label>
        <Input 
          required 
          placeholder="Doe"
          className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* Company Name</label>
        <Input 
          required 
          placeholder="Your Company"
          className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">Business Phone</label>
        <Input 
          type="tel" 
          placeholder="+1 (555) 000-0000"
          className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* Business Email</label>
        <Input 
          type="email" 
          required 
          placeholder="john@company.com"
          className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* What services are you looking for?</label>
        <Select>
          <SelectTrigger className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20">
            <SelectValue placeholder="Choose Services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="software-development">Software Development</SelectItem>
            <SelectItem value="cloud-services">Cloud Services</SelectItem>
            <SelectItem value="data-analytics">Data Analytics</SelectItem>
            <SelectItem value="security">Security Solutions</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">* How soon are you looking to get started?</label>
        <Select>
          <SelectTrigger className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20">
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
        <label className="text-sm font-medium text-[#1A1F2C]">* How many team members do you need?</label>
        <Select>
          <SelectTrigger className="bg-white/90 border-[#D3E4FD] rounded-xl h-12 text-base focus:border-[#2563EB] focus:ring-[#2563EB]/20">
            <SelectValue placeholder="Choose One" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-5">1-5 members</SelectItem>
            <SelectItem value="6-10">6-10 members</SelectItem>
            <SelectItem value="11-20">11-20 members</SelectItem>
            <SelectItem value="20+">20+ members</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-[#1A1F2C]">Additional Information</label>
        <Textarea 
          placeholder="Tell us more about your project requirements..." 
          className="min-h-[100px] bg-white/90 border-[#D3E4FD] rounded-xl text-base p-4 resize-none focus:border-[#2563EB] focus:ring-[#2563EB]/20" 
        />
      </div>
    </div>
  );
};