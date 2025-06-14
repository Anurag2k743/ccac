document.addEventListener('DOMContentLoaded', () => {
const headerHTML = `
<header class="relative z-20">
  <div class="bg-blue text-white text-base py-2">
    <div class="container mx-auto flex justify-center sm:justify-end  items-center  space-x-4 sm:space-x-5 px-4">
      <div class="flex gap-2">
        <a href="index.html" class="hover:underline text-xs sm:text-base">Home</a>
        <span class="md:block hidden"> | </span>
      </div>
      <div class="flex gap-2">
        <a href="#" class="hover:underline text-xs sm:text-base">Subscribe</a>
        <span class="md:block hidden"> | </span>
      </div>
      <div class="flex gap-2">
        <a href="contact.html" class="hover:underline text-xs sm:text-base">Contact Us</a>
        <span class="md:block hidden"> | </span>
      </div>
      <div class="flex gap-2">
        <a href="#" class="hover:underline text-xs sm:text-base">Francais</a>
        <span class="md:block hidden"> | </span>
      </div>
      <button aria-label="Search">
        <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111 3a7.5 7.5 0 015.65 13.65z" />
        </svg>
      </button>
    </div>
  </div>

  <nav class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-4">
      <div>
        <a href="index.html">
          <img src="./Images/logo.png" alt="Logo" class="lg:max-w-[121.63px] lg:h-[54.09px] h-[35px] py-1" />
        </a>
      </div>

      <div class="xl:hidden">
        <button id="menu-toggle" aria-label="Toggle menu" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg class="w-8 h-8 text-[#246788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div class="hidden xl:flex space-x-6 font-medium text-base">
        <div class="group relative">
          <a href="#" class="flex items-center gap-1 hover:text-[#246788] py-2">
            About
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <!-- Second-Level Dropdown -->
          <div
            class="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">

            <!-- Submenu Item 1 -->
            <div class="relative group/item1">
              <a href="#"
                class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">
                Who We Are
                <svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <!-- Third-Level -->
              <div
                class="absolute top-0 left-full  w-40 bg-white shadow-lg rounded-md hidden group-hover/item1:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">History</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Culture</a>
              </div>
            </div>

            <!-- Submenu Item 2 -->
            <div class="relative group/item2">
              <a href="#" class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white">
                Mission
                <svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <!-- Third-Level -->
              <div
                class="absolute top-0 left-full  w-40 bg-white shadow-lg rounded-md hidden group-hover/item2:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Vision</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Strategy</a>
              </div>
            </div>

            <!-- Submenu Item 3 -->
            <div class="relative group/item3">
              <a href="#"
                class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">
                Team
                <svg class="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <!-- Third-Level -->
              <div
                class="absolute top-0 left-full w-40 bg-white shadow-lg rounded-md hidden group-hover/item3:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Leadership</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Advisors</a>
              </div>
            </div>

          </div>
        </div>


        <div class="group relative">
          <a href="certification.html" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Certification
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div
            class="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Overview</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Apply</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Renewal</a>
          </div>
        </div>

        <div class="group relative">
          <!-- First-Level Menu Link -->
          <a href="policies.html" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Guidelines & Policies
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <!-- Second-Level Dropdown -->
          <div
            class="absolute left-0 top-full w-64 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">

            <!-- Ethical Guidelines -->
            <div class="relative group/ethical">
              <a href="#"
                class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">
                Ethical Guidelines
                <svg class="w-3 h-3 ml-2 transition-transform group-hover/ethical:rotate-180" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <!-- Third-Level -->
              <div
                class="absolute top-0 left-full  w-48 bg-white shadow-lg rounded-md hidden group-hover/ethical:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Research Ethics</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Conflict of Interest</a>
              </div>
            </div>

            <!-- Animal Care Policy -->
            <div class="relative group/animal">
              <a href="#" class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white">
                Animal Care Policy
                <svg class="w-3 h-3 ml-2 transition-transform group-hover/animal:rotate-180" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div
                class="absolute top-0 left-full  w-48 bg-white shadow-lg rounded-md hidden group-hover/animal:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Care Standards</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Usage Reporting</a>
              </div>
            </div>

            <!-- Safety Regulations -->
            <div class="relative group/safety">
              <a href="#"
                class="flex justify-between items-center px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">
                Safety Regulations
                <svg class="w-3 h-3 ml-2 transition-transform group-hover/safety:rotate-180" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div
                class="absolute top-0 left-full  w-48 bg-white shadow-lg rounded-md hidden group-hover/safety:block z-50">
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Lab Protocols</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Emergency Plan</a>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative">
          <a href="#" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Training
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div
            class="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Courses</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Workshops</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Certifications</a>
          </div>
        </div>

        <div class="group relative">
          <a href="#" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Animals Used In Science
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div
            class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Research Guidelines</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Animal Welfare</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Ethics Training</a>
          </div>
        </div>

        <div class="group relative">
          <a href="#" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Three Rs
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div
            class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Research Guidelines</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Animal Welfare</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Ethics Training</a>
          </div>
        </div>
        <div class="group relative">
          <a href="#" class="flex items-center gap-1 hover:text-[#246788] py-2">
            Volunteers & Awards
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div
            class="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md hidden group-hover:block z-50 transition-all duration-300 ease-in-out">
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-t-md">Research Guidelines</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Animal Welfare</a>
            <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white rounded-b-md">Ethics Training</a>
          </div>
        </div>
      </div>
    </div>



    <div id="mobile-menu"
      class="xl:hidden fixed inset-0  sm:left-[50%] bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto">

      <div class="pt-4 pb-2">
        <div class="flex justify-end px-4 mb-4">
          <button id="close-menu" aria-label="Close menu"
            class="focus:outline-none bg-[#246788] rounded focus:ring-2 focus:ring-blue-500">
            <svg class="w-8 h-8 text-[#246788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
                class="text-white" />
            </svg>
          </button>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('about', this)"
            class="group w-full flex items-center justify-between text-left font-semibold py-3 px-4 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="">About</a>
            <svg class="w-5 h-5 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          
          <!-- Second-Level Menu -->
          <div id="submenu-about" class="mx-4 mt-2 px-2 space-y-1 hidden text-gray-700 pb-2">
            <!-- Who We Are with third-level -->
            <div>
              <button onclick="toggleSubmenu('who', this)"
                class="group w-full text-left flex justify-between items-center py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">
                Who We Are
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-who" class="ml-4 mt-1 hidden space-y-1">
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">History</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Culture</a>
              </div>
            </div>

            <!-- Mission with third-level -->
            <div>
              <button onclick="toggleSubmenu('mission', this)"
                class="group w-full text-left flex justify-between items-center py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">
                Mission
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-mission" class="ml-4 mt-1 hidden space-y-1">
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Vision</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Strategy</a>
              </div>
            </div>

            <!-- Team with third-level -->
            <div>
              <button onclick="toggleSubmenu('team', this)"
                class="group w-full text-left flex justify-between items-center py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">
                Team
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-team" class="mt-1 hidden">
                <a href="#"
                  class="block py-1 px-3 text-sm hover:bg-[#246788] hover:text-white rounded-t-md">Leadership</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Advisors</a>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('certification', this)"
            class="group px-4 w-full flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="certification.html">Certification</a>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition transform group-[.active]:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id="submenu-certification" class="mx-4 mt-2 px-2 space-y-1 hidden text-gray-700 pb-2">
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Overview</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Apply</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Renewal</a>
          </div>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('guidelines', this)"
            class="group w-full px-4 flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="policies.html">Guidelines & Policies</a>
            <svg class="w-5 h-5 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Second-level submenu -->
          <div id="submenu-guidelines" class="mx-4 mt-2 space-y-1 px-2 hidden text-gray-700 pb-2">

            <!-- Ethical Guidelines -->
            <div>
              <button onclick="toggleSubmenu('ethical', this)"
                class="group w-full flex justify-between items-center py-2 px-2 text-left hover:bg-[#EE9B24] hover:text-white transition">
                Ethical Guidelines
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-ethical" class="ml-4 mt-1 hidden space-y-1">
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Research
                  Ethics</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Conflict of
                  Interest</a>
              </div>
            </div>

            <!-- Animal Care Policy -->
            <div>
              <button onclick="toggleSubmenu('animal', this)"
                class="group w-full flex justify-between items-center py-2 px-2 text-left hover:bg-[#EE9B24] hover:text-white transition">
                Animal Care Policy
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-animal" class="ml-4 mt-1 hidden space-y-1">
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Care
                  Standards</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Usage
                  Reporting</a>
              </div>
            </div>

            <!-- Safety Regulations -->
            <div>
              <button onclick="toggleSubmenu('safety', this)"
                class="group w-full flex justify-between items-center py-2 px-2 text-left hover:bg-[#EE9B24] hover:text-white transition">
                Safety Regulations
                <svg class="w-4 h-4 text-gray-500 group-[.active]:rotate-180 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="submenu-safety" class="ml-4 mt-1 hidden space-y-1">
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Lab
                  Protocols</a>
                <a href="#" class="block py-1 px-3 text-sm hover:bg-[#EE9B24] hover:text-white transition">Emergency
                  Plan</a>
              </div>
            </div>

          </div>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('training', this)"
            class="group px-4 w-full flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="">Training</a>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition transform group-[.active]:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id="submenu-training" class="mx-4 mt-2 space-y-1 px-2 hidden text-gray-700 pb-2">
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Courses</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Workshops</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Certifications</a>
          </div>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('animals', this)"
            class="group px-4 w-full flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="">Animals Used In Science</a>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition transform group-[.active]:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id="submenu-animals" class="mx-4 mt-2 space-y-1 hidden px-2 text-gray-700 pb-2">
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Research Guidelines</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Animal Welfare</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Ethics Training</a>
          </div>
        </div>

        <div class="border-b border-gray-400">
          <button onclick="toggleSubmenu('three-rs', this)"
            class="group px-4 w-full flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="">Three Rs</a>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition transform group-[.active]:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id="submenu-three-rs" class="mx-4 mt-2 space-y-1 hidden px-2 text-gray-700 pb-2">
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Research Guidelines</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Animal Welfare</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Ethics Training</a>
          </div>
        </div>

        <div class="pb-2">
          <button onclick="toggleSubmenu('volunteers-awards', this)"
            class="group px-4 w-full flex items-center justify-between text-left font-semibold py-3 hover:bg-[#EE9B24] hover:text-white transition">
            <a href="">Volunteers & Awards</a>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white transition transform group-[.active]:rotate-180"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div id="submenu-volunteers-awards" class="mx-4 mt-2 space-y-1 px-2 hidden text-gray-700 pb-2">
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Research Guidelines</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Animal Welfare</a>
            <a href="#" class="block py-2 px-2 hover:bg-[#EE9B24] hover:text-white transition">Ethics Training</a>
          </div>
        </div>
      </div>
    </div>

  </nav>
</header>
`;

const footerHTML = `
<footer class="bg-[url('./Images/footerbg.png')] bg-cover bg-center">
  <section class="container mx-auto">
    <div class=" grid grid-cols-1 md:grid-cols-3 gap-10 py-19 ">
      <div class="space-y-5 text-white">
        <img src="./Images/footericon.svg" alt="CCAC Logo" class=" w-[119px] h-[52px]" />
        <p class=" text-white/80 font-medium">Canadian Council On Animal Care</p>
        <p class=" text-white/80 font-medium">Important Notices<br />Site Map</p>
        <a href="#" class="inline-block bg-[#FFFFFF0D] p-3 rounded" title="LinkedIn">
          <img src="./Images/in.svg" alt="LinkedIn" class="w-6 h-6" />
        </a>
      </div>

      <div class="space-y-7 text-white/80">
        <h3 class="text-2xl font-bold">Quick links</h3>
        <ul class="space-y-4">
          <li><a href="index.html" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Home</a></li>
          <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">About</a></li>
          <li><a href="certification.html"
              class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Certification</a></li>
          <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Training</a>
          </li>
          <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Animal used in
              Science</a></li>
          <li><a href="policies.html" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Guidelines &
              Policies</a></li>
        </ul>
      </div>
      <div class="space-y-7 text-white">
        <h3 class="text-2xl font-bold">Get In Touch</h3>
        <ul class="space-y-4 ">
          <li class="flex items-start gap-3 text-white">
            <img src="./Images/location.svg" alt="location">
            <p class="text-white/80">190 O’Connor St, Suite 800<br>Ottawa, ON, K2P 2R3</p>
          </li>
          <li class="flex items-center gap-3 text-white">
            <img src="./Images/email.svg" alt="location">
            <p class="text-white/80">media@ccac.ca</p>
          </li>
          <li class="flex items-center gap-3 ">
            <img src="./Images/tel.svg" alt="location">
            <p><a href="tel:6132384031" class="text-white/80">613–238–4031</a></p>
          </li>
        </ul>
      </div>

    </div>

  </section>
  <div>
    <hr class="border-t border-gray-600" />
    <p class="text-center text-base text-white/80 py-3">
      © 2005–2025 - Canadian Council On Animal Care - All Rights Reserved
    </p>
  </div>
</footer>
`;


// Get the placeholder elements
const headerPlaceholder = document.getElementById('header-placeholder');
const footerPlaceholder = document.getElementById('footer-placeholder');
const headerContainer = document.getElementById('header-container'); // This might be redundant if using
headerPlaceholder

// Insert the header HTML into the DOM
if (headerPlaceholder) {
headerPlaceholder.innerHTML = headerHTML;
} else if (headerContainer) { // Fallback if you used header-container instead of header-placeholder
headerContainer.innerHTML = headerHTML;
}

// Insert the footer HTML into the DOM
if (footerPlaceholder) {
footerPlaceholder.innerHTML = footerHTML;
}

// Now that the HTML is in the DOM, we can safely get the elements and attach listeners
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Toggle mobile menu visibility and transform
if (menuToggle && mobileMenu) {
menuToggle.addEventListener('click', () => {
mobileMenu.classList.remove('translate-x-full'); // Remove class for sliding from right
mobileMenu.classList.add('translate-x-0'); // Add class for initial position
});
}

// Close mobile menu
if (closeMenu && mobileMenu) {
closeMenu.addEventListener('click', () => {
mobileMenu.classList.remove('translate-x-0'); // Remove class for initial position
mobileMenu.classList.add('translate-x-full'); // Add class for sliding out to the right
});
}

// Global function for toggling submenus
window.toggleSubmenu = function (id, triggerButton) {
  const submenu = document.getElementById(`submenu-${id}`);
  if (submenu) {
    // Get the parent container of the submenu buttons (assumed to be the parent of the triggerButton)
    const parent = triggerButton.parentElement.parentElement;

    // Find all submenu divs inside the parent container
    const siblingSubmenus = parent.querySelectorAll('div[id^="submenu-"]');

    // Find all buttons inside the parent container that toggle submenus
    const siblingButtons = parent.querySelectorAll('button');

    siblingSubmenus.forEach((siblingSubmenu) => {
      if (siblingSubmenu !== submenu) {
        siblingSubmenu.classList.add('hidden');
      }
    });

    siblingButtons.forEach((btn) => {
      if (btn !== triggerButton) {
        btn.classList.remove('active');
      }
    });

    // Toggle the clicked submenu and button active class
    submenu.classList.toggle('hidden');
    triggerButton.classList.toggle('active');
  }
};
});









