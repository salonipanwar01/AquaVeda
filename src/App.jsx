import { useState } from "react"
function App() {  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#F5F9FC] text-[#17202A]">

      {/* Navbar */}
      <nav className="relative bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
  AquaVeda
</h1>

<p className="text-[10px] text-[#16B8C4] font-semibold tracking-wide">
  BEST QUALITY • JUSTIFIABLE RATES
</p>

<p className="text-[10px] text-gray-300 tracking-[0.25em]">
  RO SYSTEMS
</p>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
<a href="#home" className="hover:text-[#16B8C4]">Home</a>
<a href="#services" className="hover:text-[#16B8C4]">Services</a>
<a href="#solutions" className="hover:text-[#16B8C4]">Solutions</a>
<a href="#about" className="hover:text-[#16B8C4]">About</a>
<a href="#careers" className="hover:text-[#16B8C4]">Careers</a>

            <button className="bg-[#16B8C4] text-[#0B1F33] px-5 py-2.5 rounded-lg font-semibold">
              Book a Service
            </button>
          </div>
            <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-2xl"
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-[#0B1F33] border-t border-white/10 md:hidden">

    <div className="flex flex-col px-6 py-5 gap-5">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-[#16B8C4]"
      >
        Home
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-[#16B8C4]"
      >
        Services
      </a>

      <a
        href="#solutions"
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-[#16B8C4]"
      >
        Solutions
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-[#16B8C4]"
      >
        About
      </a>

      <a
        href="#careers"
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-[#16B8C4]"
      >
        Careers
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="bg-[#16B8C4] text-[#0B1F33] px-5 py-3 rounded-lg font-semibold text-center"
      >
        Book a Service
      </a>

    </div>

  </div>
)}
        </div>
      </nav>


 {/* HERO */}
<section
  id="home"
  className="relative w-full min-h-[720px] overflow-hidden bg-[#F5F9FC]"
>
  {/* HERO CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
    <p className="text-[#087EA4] font-semibold tracking-wide mb-5">
      INDUSTRIAL WATER TREATMENT • NCR
    </p>

    <h2 className="text-5xl md:text-7xl font-bold text-[#0B1F33] leading-tight">
      Reliable Water.
      <br />
      <span className="text-[#087EA4]">
        Engineered Better.
      </span>
    </h2>

    <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
      Industrial RO systems, water purification solutions,
      installation, maintenance and service for businesses
      across NCR.
    </p>

    <div className="mt-9 flex flex-wrap gap-4">
      <button className="bg-[#087EA4] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#0B1F33] transition">
        Book a Service
      </button>

      <button className="border border-[#0B1F33] text-[#0B1F33] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#0B1F33] hover:text-white transition">
        Request a Quote
      </button>
    </div>
  </div>
</section>

   {/* Solutions Section */}
<section id="solutions" className="bg-[#F5F9FC] py-24">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="max-w-3xl mb-14">

      <p className="text-[#087EA4] font-semibold tracking-[0.12em] text-sm">
        WATER TREATMENT SOLUTIONS
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B1F33] leading-tight">
        Engineered systems for
        <br />
        <span className="text-[#087EA4]">
          demanding water requirements.
        </span>
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
        From purification and filtration to complete industrial
        water-treatment systems, we provide solutions designed
        around capacity, water quality and operational needs.
      </p>

    </div>


   {/* Solution Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Industrial RO */}
  <div className="group bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300 min-h-[260px]">

    <p className="text-[#087EA4] group-hover:text-[#16B8C4] text-sm font-semibold tracking-wider transition-colors">
      01 / PURIFICATION
    </p>

    <h3 className="mt-5 text-2xl md:text-3xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
      Industrial RO Plants
    </h3>

    <p className="mt-4 text-gray-600 group-hover:text-gray-300 leading-relaxed max-w-lg transition-colors">
      High-capacity reverse osmosis systems engineered for
      industrial water purification and process requirements.
    </p>

    <div className="mt-7 text-[#087EA4] group-hover:text-[#16B8C4] font-semibold text-sm transition-colors">
      Explore solution →
    </div>

  </div>


  {/* Commercial RO */}
  <div className="group bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300 min-h-[260px]">

    <p className="text-[#087EA4] group-hover:text-[#16B8C4] text-sm font-semibold tracking-wider transition-colors">
      02 / COMMERCIAL
    </p>

    <h3 className="mt-5 text-2xl md:text-3xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
      Commercial RO Systems
    </h3>

    <p className="mt-4 text-gray-600 group-hover:text-gray-300 leading-relaxed max-w-lg transition-colors">
      Reliable purification systems for offices, institutions,
      hospitality, commercial facilities and businesses.
    </p>

    <div className="mt-7 text-[#087EA4] group-hover:text-[#16B8C4] font-semibold text-sm transition-colors">
      Explore solution →
    </div>

  </div>


  {/* DM / Softener */}
  <div className="group bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300 min-h-[260px]">

    <p className="text-[#087EA4] group-hover:text-[#16B8C4] text-sm font-semibold tracking-wider transition-colors">
      03 / CONDITIONING
    </p>

    <h3 className="mt-5 text-2xl md:text-3xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
      DM & Water Softening
    </h3>

    <p className="mt-4 text-gray-600 group-hover:text-gray-300 leading-relaxed max-w-lg transition-colors">
      Demineralisation and water-conditioning systems for
      applications requiring controlled water quality.
    </p>

    <div className="mt-7 text-[#087EA4] group-hover:text-[#16B8C4] font-semibold text-sm transition-colors">
      Explore solution →
    </div>

  </div>


  {/* UV / UF */}
  <div className="group bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300 min-h-[260px]">

    <p className="text-[#087EA4] group-hover:text-[#16B8C4] text-sm font-semibold tracking-wider transition-colors">
      04 / FILTRATION
    </p>

    <h3 className="mt-5 text-2xl md:text-3xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
      UV & UF Systems
    </h3>

    <p className="mt-4 text-gray-600 group-hover:text-gray-300 leading-relaxed max-w-lg transition-colors">
      Filtration and disinfection systems designed to support
      improved water quality across different applications.
    </p>

    <div className="mt-7 text-[#087EA4] group-hover:text-[#16B8C4] font-semibold text-sm transition-colors">
      Explore solution →
    </div>

  </div>

</div>

  </div>

</section>

      {/* Services Section */}
<section id="services" className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14">

      <p className="text-[#087EA4] font-semibold tracking-[0.12em] text-sm">
        OUR SERVICES
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0B1F33] leading-tight">
        Complete water treatment
        <br />
        <span className="text-[#087EA4]">
          support, from start to service.
        </span>
      </h2>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        From installation and maintenance to annual contracts
        and essential components, we help keep your water
        treatment systems operating reliably.
      </p>

    </div>


    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


      {/* Service 1 */}
      <div className="group p-7 rounded-2xl bg-white border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300">

        <div className="w-12 h-12 rounded-xl bg-[#E8F8FA] group-hover:bg-[#16B8C4] flex items-center justify-center text-[#087EA4] group-hover:text-[#0B1F33] font-bold transition-colors">
          01
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
          Installation
        </h3>

        <p className="mt-3 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
          Professional installation of RO plants and
          water treatment systems.
        </p>

        <div className="mt-6 text-sm font-semibold text-[#087EA4] group-hover:text-[#16B8C4] transition-colors">
          Learn more →
        </div>

      </div>


      {/* Service 2 */}
      <div className="group p-7 rounded-2xl bg-white border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300">

        <div className="w-12 h-12 rounded-xl bg-[#E8F8FA] group-hover:bg-[#16B8C4] flex items-center justify-center text-[#087EA4] group-hover:text-[#0B1F33] font-bold transition-colors">
          02
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
          Maintenance
        </h3>

        <p className="mt-3 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
          Preventive and corrective maintenance to keep
          your plant operating efficiently.
        </p>

        <div className="mt-6 text-sm font-semibold text-[#087EA4] group-hover:text-[#16B8C4] transition-colors">
          Learn more →
        </div>

      </div>


      {/* Service 3 */}
      <div className="group p-7 rounded-2xl bg-white border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300">

        <div className="w-12 h-12 rounded-xl bg-[#E8F8FA] group-hover:bg-[#16B8C4] flex items-center justify-center text-[#087EA4] group-hover:text-[#0B1F33] font-bold transition-colors">
          03
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
          AMC Services
        </h3>

        <p className="mt-3 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
          Annual maintenance contracts for consistent
          system performance and support.
        </p>

        <div className="mt-6 text-sm font-semibold text-[#087EA4] group-hover:text-[#16B8C4] transition-colors">
          Learn more →
        </div>

      </div>


      {/* Service 4 */}
      <div className="group p-7 rounded-2xl bg-white border border-gray-200 hover:bg-[#0B1F33] hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300">

        <div className="w-12 h-12 rounded-xl bg-[#E8F8FA] group-hover:bg-[#16B8C4] flex items-center justify-center text-[#087EA4] group-hover:text-[#0B1F33] font-bold transition-colors">
          04
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B1F33] group-hover:text-white transition-colors">
          Spare Parts
        </h3>

        <p className="mt-3 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
          Filters, membranes, pumps and other essential
          water treatment components.
        </p>

        <div className="mt-6 text-sm font-semibold text-[#087EA4] group-hover:text-[#16B8C4] transition-colors">
          Learn more →
        </div>

      </div>

    </div>

  </div>

</section>
{/* Industries Section */}
<section className="bg-[#0B1F33] py-24 text-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="max-w-3xl mb-14">

      <p className="text-[#16B8C4] font-semibold tracking-[0.12em] text-sm">
        INDUSTRIES WE SERVE
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
        Water solutions for
        <br />
        <span className="text-[#16B8C4]">
          every operation.
        </span>
      </h2>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
        Our water treatment systems can be designed around
        different commercial, institutional and industrial
        requirements.
      </p>

    </div>


    {/* Industry Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


      {/* Manufacturing */}
      <div className="group rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:bg-[#16B8C4] hover:border-[#16B8C4] transition-all duration-300">

        <div className="text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-bold tracking-wider transition-colors">
          01
        </div>

        <h3 className="mt-10 text-xl font-semibold group-hover:text-[#0B1F33] transition-colors">
          Manufacturing
        </h3>

        <p className="mt-3 text-gray-400 group-hover:text-[#0B1F33]/80 leading-relaxed transition-colors">
          Reliable process and utility water solutions for
          manufacturing operations.
        </p>

        <div className="mt-7 text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-semibold transition-colors">
          View solutions →
        </div>

      </div>


      {/* Hotels */}
      <div className="group rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:bg-[#16B8C4] hover:border-[#16B8C4] transition-all duration-300">

        <div className="text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-bold tracking-wider transition-colors">
          02
        </div>

        <h3 className="mt-10 text-xl font-semibold group-hover:text-[#0B1F33] transition-colors">
          Hotels & Hospitality
        </h3>

        <p className="mt-3 text-gray-400 group-hover:text-[#0B1F33]/80 leading-relaxed transition-colors">
          Water purification systems supporting hospitality
          and guest-service operations.
        </p>

        <div className="mt-7 text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-semibold transition-colors">
          View solutions →
        </div>

      </div>


      {/* Healthcare */}
      <div className="group rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:bg-[#16B8C4] hover:border-[#16B8C4] transition-all duration-300">

        <div className="text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-bold tracking-wider transition-colors">
          03
        </div>

        <h3 className="mt-10 text-xl font-semibold group-hover:text-[#0B1F33] transition-colors">
          Hospitals & Healthcare
        </h3>

        <p className="mt-3 text-gray-400 group-hover:text-[#0B1F33]/80 leading-relaxed transition-colors">
          Water treatment systems designed for healthcare
          and critical facility requirements.
        </p>

        <div className="mt-7 text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-semibold transition-colors">
          View solutions →
        </div>

      </div>


      {/* Institutions */}
      <div className="group rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:bg-[#16B8C4] hover:border-[#16B8C4] transition-all duration-300">

        <div className="text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-bold tracking-wider transition-colors">
          04
        </div>

        <h3 className="mt-10 text-xl font-semibold group-hover:text-[#0B1F33] transition-colors">
          Schools & Institutions
        </h3>

        <p className="mt-3 text-gray-400 group-hover:text-[#0B1F33]/80 leading-relaxed transition-colors">
          Purification solutions for educational and
          institutional facilities.
        </p>

        <div className="mt-7 text-[#16B8C4] group-hover:text-[#0B1F33] text-sm font-semibold transition-colors">
          View solutions →
        </div>

      </div>

    </div>

  </div>

</section>

            {/* Why AquaVeda Section */}
      <section className="bg-[#F5F9FC] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <p className="text-[#087EA4] font-semibold tracking-wide">
                WHY AQUAVEDA
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0B1F33] leading-tight">
                More Than Just
                <br />
                <span className="text-[#087EA4]">
                  Water Treatment.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                We focus on dependable water treatment systems,
                professional service and long-term support so
                businesses can operate with confidence.
              </p>

              <button className="mt-8 bg-[#087EA4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B1F33] transition">
                Learn More
              </button>

            </div>


            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  Quality Focus
                </h3>

                <p className="mt-3 text-gray-600">
                  Systems and components selected around
                  application requirements.
                </p>
              </div>


              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  Reliable Service
                </h3>

                <p className="mt-3 text-gray-600">
                  Installation, maintenance and service
                  support when you need it.
                </p>
              </div>


              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  NCR Coverage
                </h3>

                <p className="mt-3 text-gray-600">
                  Serving commercial and industrial
                  requirements across NCR.
                </p>
              </div>


              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0B1F33]">
                  Long-Term Support
                </h3>

                <p className="mt-3 text-gray-600">
                  AMC and maintenance support to help
                  keep systems performing.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

            {/* Projects Section */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>
              <p className="text-[#087EA4] font-semibold tracking-wide">
                OUR PROJECTS
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0B1F33]">
                Solutions Installed.
                <br />
                <span className="text-[#087EA4]">
                  Systems Delivered.
                </span>
              </h2>
            </div>

            <p className="text-gray-600 max-w-md">
              Explore some of the water treatment solutions
              delivered for commercial and industrial requirements.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Project 1 */}
            <div className="group rounded-2xl overflow-hidden border border-gray-200">

              <div className="h-56 bg-[#DDEBF0] flex items-center justify-center">
                <span className="text-[#087EA4] font-semibold">
                  Project Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#087EA4] font-semibold">
                  INDUSTRIAL RO
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0B1F33]">
                  Industrial RO Plant
                </h3>

                <p className="mt-3 text-gray-600">
                  High-capacity water purification solution
                  designed for industrial operations.
                </p>
              </div>

            </div>


            {/* Project 2 */}
            <div className="group rounded-2xl overflow-hidden border border-gray-200">

              <div className="h-56 bg-[#DDEBF0] flex items-center justify-center">
                <span className="text-[#087EA4] font-semibold">
                  Project Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#087EA4] font-semibold">
                  COMMERCIAL
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0B1F33]">
                  Commercial Water System
                </h3>

                <p className="mt-3 text-gray-600">
                  Reliable purification and filtration for
                  commercial applications.
                </p>
              </div>

            </div>


            {/* Project 3 */}
            <div className="group rounded-2xl overflow-hidden border border-gray-200">

              <div className="h-56 bg-[#DDEBF0] flex items-center justify-center">
                <span className="text-[#087EA4] font-semibold">
                  Project Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#087EA4] font-semibold">
                  WATER TREATMENT
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#0B1F33]">
                  Treatment & Filtration
                </h3>

                <p className="mt-3 text-gray-600">
                  Customized treatment solutions based on
                  application and water quality requirements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
{/* About Section */}
<section id="about" className="bg-[#F5F9FC] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div>

        <p className="text-[#087EA4] font-semibold tracking-wide">
          ABOUT AQUAVEDA
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1F33]">
          Water Treatment Built Around
          <span className="text-[#087EA4]"> Your Requirements.</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          AquaVeda RO Systems provides reliable water purification
          and treatment solutions for commercial and industrial
          requirements across NCR.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          From RO plant installation and maintenance to AMC,
          membrane replacement and system upgradation, our focus
          is on dependable solutions and long-term service support.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6">

          <div>
            <p className="text-2xl font-bold text-[#0B1F33]">
              NCR
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Service Coverage
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#0B1F33]">
              End-to-End
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Water Treatment Support
            </p>
          </div>

        </div>

      </div>

      <div className="bg-[#0B1F33] rounded-3xl p-8 md:p-10">

        <p className="text-[#16B8C4] font-semibold tracking-wide">
          OUR APPROACH
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Practical Solutions. Reliable Support.
        </h3>

        <div className="mt-8 space-y-6">

          <div>
            <h4 className="font-semibold text-white">
              Requirement First
            </h4>
            <p className="mt-1 text-gray-300">
              We focus on understanding the application and
              water-treatment requirement before recommending a system.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Installation & Maintenance
            </h4>
            <p className="mt-1 text-gray-300">
              Support across installation, servicing, AMC and
              replacement requirements.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Long-Term Support
            </h4>
            <p className="mt-1 text-gray-300">
              Designed to help businesses maintain dependable
              water-treatment operations.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Trust Section */}
      <section className="bg-white border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold text-[#0B1F33]">
              Industrial Expertise
            </h3>

            <p className="mt-2 text-gray-600">
              Water treatment solutions designed for commercial
              and industrial requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0B1F33]">
              Installation & Service
            </h3>

            <p className="mt-2 text-gray-600">
              From installation to maintenance and AMC support,
              we keep your systems running.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0B1F33]">
              NCR Service
            </h3>

            <p className="mt-2 text-gray-600">
              Professional water purification services for
              businesses across NCR.
            </p>
          </div>

        </div>

      </section>

      {/* Careers Section */}
<section id="careers" className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-3xl">

      <p className="text-[#087EA4] font-semibold tracking-wide">
        CAREERS AT AQUAVEDA
      </p>

      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1F33]">
        Build Your Career With
        <span className="text-[#087EA4]"> Us.</span>
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        We are always looking for people who are interested in
        water treatment, technical services, installation,
        sales and customer support.
      </p>

    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33]">
          Service Technician
        </h3>
        <p className="mt-3 text-gray-600">
          Installation, servicing and maintenance of water
          treatment systems.
        </p>
        <button className="mt-5 text-[#087EA4] font-semibold">
          Apply Now →
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33]">
          Sales Executive
        </h3>
        <p className="mt-3 text-gray-600">
          Help businesses identify suitable water treatment
          solutions for their requirements.
        </p>
        <button className="mt-5 text-[#087EA4] font-semibold">
          Apply Now →
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#0B1F33]">
          Customer Support
        </h3>
        <p className="mt-3 text-gray-600">
          Assist customers with service requests, appointments
          and ongoing support.
        </p>
        <button className="mt-5 text-[#087EA4] font-semibold">
          Apply Now →
        </button>
      </div>

    </div>

  </div>

</section>

      {/* CTA Section */}
      <section className="bg-[#087EA4] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#0B1F33] rounded-3xl px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div className="max-w-2xl">

              <p className="text-[#16B8C4] font-semibold tracking-wide">
                NEED WATER TREATMENT SUPPORT?
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                Let's Build the Right Solution
                <span className="text-[#16B8C4]"> for You.</span>
              </h2>

              <p className="mt-4 text-gray-300 text-lg">
                Talk to AquaVeda about installation, maintenance,
                AMC, spare parts or a customized water treatment
                requirement.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <button className="bg-[#16B8C4] text-[#0B1F33] px-7 py-3.5 rounded-lg font-semibold hover:bg-white transition">
                Book a Service
              </button>

              <button className="border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-[#0B1F33] transition">
                Request a Quote
              </button>

            </div>

          </div>

        </div>

      </section>

            {/* Footer */}
      <footer className="bg-[#0B1F33] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>

              <h2 className="text-2xl font-bold">
                AquaVeda
              </h2>

              <p className="mt-1 text-[10px] text-[#16B8C4] font-semibold tracking-wide">
                BEST QUALITY • JUSTIFIABLE RATES
              </p>

              <p className="mt-1 text-[10px] text-gray-300 tracking-[0.25em]">
                RO SYSTEMS
              </p>

              <p className="mt-5 text-gray-400 leading-relaxed">
                Reliable water purification and treatment
                solutions for commercial and industrial
                requirements across NCR.
              </p>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="text-lg font-semibold">
                Quick Links
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">

                <a href="#home" className="block hover:text-[#16B8C4] transition">
                  Home
                </a>

                <a href="#about" className="block hover:text-[#16B8C4] transition">
                  About
                </a>

                <a href="#solutions" className="block hover:text-[#16B8C4] transition">
                  Solutions
                </a>

                <a href="#services" className="block hover:text-[#16B8C4] transition">
                  Services
                </a>

                <a href="#careers" className="block hover:text-[#16B8C4] transition">
                  Careers
                </a>

              </div>

            </div>

            {/* Services */}
            <div>

              <h3 className="text-lg font-semibold">
                Services
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">

                <p>RO Plant Installation</p>
                <p>RO Plant Maintenance</p>
                <p>AMC Services</p>
                <p>Membrane Replacement</p>
                <p>Water Testing</p>

              </div>

            </div>

            {/* Contact */}
            <div>

              <h3 className="text-lg font-semibold">
                Contact
              </h3>

              <div className="mt-5 space-y-4 text-gray-400">

                <p>
                  <span className="text-white font-medium">
                    Phone
                  </span>
                  <br />
                  7678170707
                </p>

                <p>
                  <span className="text-white font-medium">
                    Email
                  </span>
                  <br />
                  shinchain1003@gmail.com
                </p>

                <p>
                  <span className="text-white font-medium">
                    Service Area
                  </span>
                  <br />
                  Tronica City • NCR
                </p>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

            <p>
              © 2026 AquaVeda RO Systems. All rights reserved.
            </p>

            <p>
              Water Treatment • Installation • Service
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App