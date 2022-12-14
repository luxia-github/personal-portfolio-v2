const stats = [
  { name: "JavaScript (ES6+)", status: "learnt" },
  { name: "TypeScript", status: "learnt" },
  { name: "ReactJS", status: "learnt" },
  { name: "TailwindCSS", status: "learnt" },
  { name: "Firebase", status: "learnt" },
  { name: "Github", status: "learnt" },
  { name: "Adobe XD", status: "learnt" },
  { name: "Node.js", status: "learning" },
  { name: "Next.js", status: "learning" },
  { name: "React Native", status: "learning" },
  { name: "Apollo", status: "learning" },
  { name: "Electron", status: "learning" },
];

export default function Skills() {
  return (
    <div>
      <div
        className="relative bg-stroke text-text-1 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 "
        id="skills"
      >
        <div className="relative mx-auto max-w-7xl ">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tools I use
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg md:text-xl text-text-2 sm:mt-4">
              A few technologies I've been working with recently
              <br />
              and the list is growing
            </p>
          </div>

          {/* content */}
          <div>
            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">
            Frontend
          </h3> */}
            <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.name} className="relative">
                  <dt
                    href="#projects"
                    className={`flex w-full items-center justify-center rounded-md px-8 py-3 text-base font-medium border-2 border-highlight-2 ${
                      item.status === "learnt" ? "bg-highlight-2" : ""
                    }
                  } md:py-4 md:px-10 md:text-lg`}
                  >
                    {item.name}
                    <span className="ml-auto">
                      {item.status === "learnt" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      )}
                    </span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          {/* content */}
        </div>
      </div>
    </div>
  );
}
