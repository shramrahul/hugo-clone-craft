const projects = [
  {
    title: "Project One",
    category: "Brand Strategy",
    image: "https://source.unsplash.com/random/800x600?brand",
  },
  {
    title: "Project Two",
    category: "Digital Design",
    image: "https://source.unsplash.com/random/800x600?design",
  },
  {
    title: "Project Three",
    category: "Development",
    image: "https://source.unsplash.com/random/800x600?development",
  },
  {
    title: "Project Four",
    category: "Marketing",
    image: "https://source.unsplash.com/random/800x600?marketing",
  },
];

export const WorkShowcase = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};