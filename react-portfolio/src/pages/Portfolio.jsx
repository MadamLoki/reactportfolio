import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description of project 1",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg",
      github: "https://github.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description of project 2",
      image:
        "https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg",
      github: "https://github.com",
    },
  ];

  return (
    <div>
          <h2 class="text-4xl font-bold mb-8 text-center">🚀 Featured Projects</h2>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            {projects.map((project) => {
              return (
                <Project project={project} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
