import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-background-dark-2 text-text-1 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#about"
                    className=" hover:text-highlight-1 inline-flex items-center border-b-2 border-background-dark-2 hover:border-current px-1 pt-1 text-sm font-medium transition ease-in-out duration-500"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className=" hover:text-highlight-1 inline-flex items-center border-b-2 border-background-dark-2 hover:border-current px-1 pt-1 text-sm font-medium transition ease-in-out duration-500"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className=" hover:text-highlight-1 inline-flex items-center border-b-2 border-background-dark-2 hover:border-current px-1 pt-1 text-sm font-medium transition ease-in-out duration-500"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className=" hover:text-highlight-1 inline-flex items-center border-b-2 border-background-dark-2 hover:border-current px-1 pt-1 text-sm font-medium transition ease-in-out duration-500"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="mailto:lxia.daily@gmail.com"
                  className="relative inline-flex items-center rounded-md bg-highlight-1 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-highlight-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-500"
                >
                  <FaceSmileIcon
                    className="-ml-1 mr-2 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#about"
                className="block bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#projects"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#skills"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Skills
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#contact"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
