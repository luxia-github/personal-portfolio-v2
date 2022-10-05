const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function About() {
  return (
    <div className="relative overflow-hidden text-text-1 pb-24" id="about">
      <div className="relative pt-6">
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-text-1 sm:text-5xl md:text-6xl">
              <span className="block text-highlight-1 xl:inline">
                Hi I'm Lu
              </span>{" "}
              <span className="block xl:inline">I create for the web</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-text-2 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              I’m a developer, designer and illustrator. I'm currently looking
              for a frontend developer position. My next big goal is to expand
              my skill set and become a full-stack developer.👩‍💻 In my spare
              time, I love doing digital illustrations and hang out with
              friends.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#projects"
                  className="flex w-full items-center justify-center rounded-md border-2 border-highlight-2 text-highlight-2 px-8 py-3 text-base font-medium hover:scale-105 hover:bg-highlight-2 hover:text-text-1 md:py-4 md:px-10 md:text-lg transition-transform ease-in-out duration-500"
                >
                  See my work
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="mailto:lxia.daily@gmail.com"
                  className="flex w-full items-center justify-center rounded-md border-2 border-highlight-1 text-highlight-1 px-8 py-3 text-base font-medium hover:scale-105 hover:bg-highlight-1  hover:text-text-1 md:py-4 md:px-10 md:text-lg transition-transform ease-in-out duration-500"
                >
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
