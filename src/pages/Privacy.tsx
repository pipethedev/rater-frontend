import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Privacy = () => {
  return (
    <div className="">
      <div className="h-full bg-gradient-to-r from-[#0D1A3C] to-[#112A6B]">
        <Navbar />
        <section className="relative overflow-hidden h-full py-5" >
          <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start mt-16 md::mt-28 mx-5">
              <h2 className="text-5xl md:text-4 lg:text-7xl lg:text-left mb-6 mr-5 md:mr-auto text-white font-bold">Privacy Policy</h2>
              <div className='text-[#B6B8BC]'>Clear up any confusion with our FAQs</div>
            </div>
            {/* <!-- Image --> */}
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              {/* <img className="" src={''} alt="Question" /> */}
            </div>
          </div>
        </section>
      </div>


      {/* select #tabs */}

      <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">Quo et liber recusabo</h2>
            <p className="px-8 my-4">Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu. Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an, et nec discere epicuri</p>
          </div> */}
          <div className="grid grid-cols-5 p-4 md:p-8 my-10">
            <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
              <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Overview</button>
              <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">Your Privacy</button>
              <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Content Sharing </button>
              <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">My Sounds</button>
              <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">My Sounds</button>
              <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">My Sounds</button>
            </div>
            <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">

                <h5 className="text-xl font-semibold">Est facilisis necessitatibus ea</h5>
                <p>Ex audiam inermis elaboraret eam, oratio petentium ne cum, mundi interesset sit no.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">

                <h5 className="text-xl font-semibold">Vim iudico iisque te</h5>
                <p>At cibo possim impetus pro, ius id mutat commodo offendit. Cum inani pertinax definitiones ad.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">

                <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                <p>Et eos atomorum urbanitas accommodare, in suscipit petentium vis. Pro ea nibh praesent postulant.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">

                <h5 className="text-xl font-semibold">Error nihil primis sit ut</h5>
                <p>Eu vis urbanitas scripserit, civibus scripserit pro id. Omnes congue contentiones te eos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Privacy
