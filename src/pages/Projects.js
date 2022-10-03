const posts = [
  {
    title: "Web App 1",
    href: "#",
    category: { name: "Web App", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    tools: ["HTML5", "CSS", "SASS", "JavaScript", "ReactJS", "Firebase"],
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "UI/UX", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    tools: ["HTML5", "CSS", "SASS", "JavaScript", "ReactJS", "Firebase"],
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    tools: ["HTML5", "CSS", "SASS", "JavaScript", "ReactJS", "Firebase"],
  },
];

export default function Projects() {
  return (
    <div
      className="relative bg-background-dark-1 text-text-1 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
      id="projects"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Apps I've done
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-text-2 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-background-dark-2"
            >
              <div className="flex-shrink-0 relative hover:scale-105 transition ease-in-out duration-500">
                <div className="bg-highlight-1/50 hover:bg-highlight-1/0 w-full h-full absolute inset-0 backdrop-grayscale hover:backdrop-filter-none transition ease-in-out duration-500" />
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-highlight-2">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold">{post.title}</p>
                    <p className="mt-3 text-base text-text-2">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap ">
                  {post.tools.map((tool) => (
                    <div className="rounded-md bg-highlight-1 px-4 py-2 mr-2 mb-2 text-sm font-medium text-white shadow-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
