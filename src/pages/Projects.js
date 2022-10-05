import {
  CodeBracketIcon,
  WrenchIcon,
  NewspaperIcon,
  SwatchIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const webAppProjects = [
  {
    title: "Dojo",
    href: "https://the-dojo-luxia.netlify.app",
    category: { name: "Web App", href: "#" },
    description:
      "Dojo is a task management web app where team members can sign up,sign in and create tasks. I used google Firebase for data storage and authentication.",
    imageUrl: "./assets/projects/dojo.JPG",
    tools: ["HTML5", "CSS", "ReactJS", "Firebase", "FP"],
  },
  {
    title: "Cooking Ninja",
    href: "https://cooking-ninja-luxia.netlify.app",
    category: { name: "Web App", href: "#" },
    description:
      "Cooking Ninja is a simple recipe creation web app for cooking lovers to log down ideas. Also there are light & dark mode and different color themes for users to customize the app appearance to their taste.",
    imageUrl: "./assets/projects/cooking-ninja.JPG",
    tools: ["HTML5", "CSS", "ReactJS", "Firebase", "FP"],
  },
  {
    title: "Magic Memory",
    href: "https://magic-memory-luxia.netlify.app",
    category: { name: "Game", href: "#" },
    description:
      "Magic Memory is a light and fun card matching web game to level up your memory. Flip the cards and match the tiles together in pairs. The one who finishes with the least steps win.",
    imageUrl: "./assets/projects/magic-match.JPG",
    tools: ["HTML5", "SASS", "ReactJS", "FP"],
  },
  {
    title: "Forkify",
    href: "https://forkify-luxia.netlify.app",
    category: { name: "Web App", href: "#" },
    description:
      "Forkify is a recipe search abd upload web app. Forkify API, local storage, object oriented programming, and MVC architecture were used to build this project. ",
    imageUrl: "./assets/projects/forkify.JPG",
    tools: ["HTML5", "SASS", "JavaScript", "Forkify API", "OOP"],
  },
  {
    title: "Mapty",
    href: "https://mapty-luxia.netlify.app",
    category: { name: "Web App", href: "#" },
    description:
      "Mapty is a workout log applicaiton. Leaflet open-source JavaScript library, local storage and object oriented programming were used to build this project ",
    imageUrl: "./assets/projects/mapty.JPG",
    tools: ["HTML5", "CSS", "JavaScript", "Laeflet API", "OOP"],
  },
];
const landingPageProjects = [
  {
    title: "Nexter",
    href: "https://nexter-luxia.netlify.app",
    category: { name: "Landing Page", href: "#" },
    description:
      "Nexter is a real easte website landing page. I mainly utilized CSS Grid and Flexbox to build this project.",
    imageUrl: "./assets/projects/nexter.JPG",
    tools: ["HTML5", "SASS", "CSS Flexbox", "CSS Grid"],
  },
  {
    title: "Trillo",
    href: "https://trillo-luxia.netlify.app",
    category: { name: "Landing Page", href: "#" },
    description:
      "Trillo is a hotel review webpage. I mainly utilized CSS Flexbox and other cool CSS animations to build this project.",
    imageUrl: "./assets/projects/trillo.JPG",
    tools: ["HTML5", "SASS", "CSS Flexbox", "CSS Grid"],
  },
  {
    title: "Bankist Marketing Page",
    href: "https://bankist-marketing-page-luxia.netlify.app",
    category: { name: "Landing Page", href: "#" },
    description:
      "This is one of my earliest coding project where I learned CSS Flexbox and CSS.",
    imageUrl: "./assets/projects/bankist-marketing-page.JPG",
    tools: ["HTML5", "CSS Flexbox", "JavaScript"],
  },
  {
    title: "Natours",
    href: "https://natours-luxia.netlify.app",
    category: { name: "Landing Page", href: "#" },
    description:
      "Natours is a outdoor travel website. I learned the basic HTML and CSS by building this project.",
    imageUrl: "./assets/projects/natours.JPG",
    tools: ["HTML5", "CSS", "SASS"],
  },
];
const uiuxProjects = [
  {
    title: "PillPal",
    href: "https://medium.com/@lu.xia/medical-reminder-app-ux-ui-case-study-9aed5362d063",
    category: { name: "UI/UX", href: "#" },
    description:
      "This project was completed during my study at UX/UI bootcamp at University of California at Irvine. It was a team effort from the outset of the project to the paper-prototyping stage. I individually created low-fidelity and hi-fidelity prototype.",
    imageUrl: "./assets/projects/pillpal.png",
    tools: [],
  },
  {
    title: "NAMI",
    href: "https://medium.com/@lu.xia/mental-illness-non-profit-website-redesign-a-ux-case-study-1c9740875ac8",
    category: { name: "UI/UX", href: "#" },
    description:
      "This project was completed during my study at UX/UI bootcamp at University of California at Irvine. Our team of 3 worked on redesigning this non-profit mental illness website within a 2-week design sprint.",
    imageUrl: "./assets/projects/nami.jpeg",
    tools: [],
  },
];

export default function Projects() {
  return (
    <div>
      {/* divier */}
      <div>
        <svg
          id="visual"
          viewBox="0 0 960 50"
          // width="960"
          // height="50"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 1L53.3 2.2C106.7 3.3 213.3 5.7 320 13C426.7 20.3 533.3 32.7 640 39.2C746.7 45.7 853.3 46.3 906.7 46.7L960 47L960 51L906.7 51C853.3 51 746.7 51 640 51C533.3 51 426.7 51 320 51C213.3 51 106.7 51 53.3 51L0 51Z"
            fill="#242629"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <div
        className="relative bg-background-dark-1 text-text-1 pb-20 pt-24 lg:pb-28 "
        id="projects"
      >
        <div className="relative px-4 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work I've done
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg md:text-xl text-text-2 sm:mt-4">
              These are the course projects I have done while self-studying with
              Udemy courses and UX/UI bootcamp.
            </p>
          </div>
          {/* web app projects */}
          <div className="mb-20">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {/* divier */}
              <div className="flex items-center grid-cols-1 col-span-full pb-10">
                <div className="w-full h-px bg-text-2"></div>
                <h3 className="flex shrink-0 justify-center items-center px-10 text-text-2 text-lg font-medium tracking-tight">
                  <span>WEB APPS</span>
                </h3>
                <div className="w-full h-px bg-text-2"></div>
              </div>

              {webAppProjects.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-background-dark-2"
                >
                  <a href={post.href} className="block">
                    <div className="flex-shrink-0 relative origin-top hover:scale-105 transition ease-in-out duration-500">
                      {/* <div className="bg-highlight-1/50 hover:bg-highlight-1/0 w-full h-full absolute inset-0 backdrop-grayscale hover:backdrop-filter-none transition ease-in-out duration-500" /> */}
                      <img
                        className="h-48 w-full object-cover object-top"
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                  </a>

                  <div className="flex flex-1 flex-col justify-between bg-stroke p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-highlight-2">
                        {post.category.name}
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
                        <div className="rounded-md bg-highlight-1 px-2 py-1 mr-2 mb-2 text-sm font-medium text-white shadow-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* landing page projects */}
          <div className="mb-20">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {/* divier */}
              <div className="flex items-center grid-cols-1 col-span-full pb-10">
                <div className="w-full h-px bg-text-2"></div>
                <h3 className="flex shrink-0 justify-center items-center px-10 text-text-2 text-lg font-medium tracking-tight">
                  <span>LANDING PAGES</span>
                </h3>
                <div className="w-full h-px bg-text-2"></div>
              </div>

              {landingPageProjects.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-background-dark-2"
                >
                  <div className="flex-shrink-0 relative origin-top hover:scale-105 transition ease-in-out duration-500">
                    {/* <div className="bg-highlight-1/50 hover:bg-highlight-1/0 w-full h-full absolute inset-0 backdrop-grayscale hover:backdrop-filter-none transition ease-in-out duration-500" /> */}
                    <img
                      className="h-48 w-full object-cover object-top"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-stroke p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-highlight-2">
                        {post.category.name}
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
                        <div className="rounded-md bg-highlight-1 px-2 py-1 mr-2 mb-2 text-sm font-medium text-white shadow-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* uiux projects */}
          <div className="mb-20">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {/* divier */}
              <div className="flex items-center grid-cols-1 col-span-full pb-10">
                <div className="w-full h-px bg-text-2"></div>
                <h3 className="flex shrink-0 justify-center items-center px-10 text-text-2 text-lg font-medium tracking-tight">
                  <span>UI/UX CASE STUDIES</span>
                </h3>
                <div className="w-full h-px bg-text-2"></div>
              </div>
              {uiuxProjects.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-background-dark-2"
                >
                  <div className="flex-shrink-0 relativ">
                    {/* <div className="bg-highlight-1/50 hover:bg-highlight-1/0 w-full h-full absolute inset-0 backdrop-grayscale hover:backdrop-filter-none transition ease-in-out duration-500" /> */}
                    <img
                      className="h-48 w-full object-cover object-top hover:scale-105 transition ease-in-out duration-500"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-stroke p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-highlight-2">
                        {post.category.name}
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
                        <div className="rounded-md bg-highlight-1 px-2 py-1 mr-2 mb-2 text-sm font-medium text-white shadow-sm">
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
      </div>
      {/* divier */}
      <div>
        <svg
          id="visual"
          viewBox="0 0 960 50"
          // width="960"
          // height="50"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 41L53.3 34.7C106.7 28.3 213.3 15.7 320 12.8C426.7 10 533.3 17 640 23.5C746.7 30 853.3 36 906.7 39L960 42L960 0L906.7 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z"
            fill="#242629"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
    </div>
  );
}
