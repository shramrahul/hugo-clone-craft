import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Shreeram Chaulagain",
    role: "Senior Software Engineer",
    content: "Working at Avega has been an incredible journey. The culture of innovation and continuous learning keeps me motivated every day.",
    avatar: "/lovable-uploads/photo-1581091226825-jpg",
    image: "/lovable-uploads/photo-1581092795360.jpg"
  },
  {
    id: 2,
    name: "Saroj Lamichhane",
    role: "Product Manager",
    content: "The collaborative environment and opportunities for growth make Avega a truly special place to work.",
    avatar: "/lovable-uploads/photo-1581092795360.jpg",
    image: "/lovable-uploads/photo-1605810230434.jpg"
  },
  {
    id: 3,
    name: "Unika Lamichhane",
    role: "UX Designer",
    content: "I love how Avega empowers us to innovate and make a real impact on our clients' success.",
    avatar: "/lovable-uploads/photo-1486312338219.jpg",
    image: "/lovable-uploads/photo-1519389950473-47ba0277781c"
  }
];

export const Testimonials = () => {
  console.log("Rendering testimonials with images:", testimonials.map(t => t.image));
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Our Team Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => {
            console.log("Rendering testimonial card with image:", testimonial.image);
            return (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-sm border overflow-hidden animate-fade-up">
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt="Work environment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error("Error loading image:", testimonial.image);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                      onError={(e) => {
                        console.error("Error loading avatar:", testimonial.avatar);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div>
                      <h3 className="font-semibold text-sm md:text-base">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">{testimonial.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};