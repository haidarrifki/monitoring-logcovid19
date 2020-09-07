import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Monitoring LOGCOVID-19</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="COVID-19 info update with data visualization"></meta>
        <meta name="keywords" content="covid19, corona virus, website, china, covid19 world, covid-19, corona, save earth, data corona, data covid19, ncov19, corona virus spread, virus, logistics, logistic, logistics covid19, logistics covid-19, logistic covid19, logistic covid-19"></meta>
        <meta name="author" content="Muhammad Haidar Rifki"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-full">
        <div className="container mx-auto px-3">
          { children }
        </div>
      </main>
      <footer className="w-full mx-auto container my-6">
        <hr className="border-gray-200" />
        <div className="my-6 flex flex-col items-center md:justify-between justify-center">
          <div className="w-full mx-auto text-center mb-5">
            <div className="text-sm text-gray-500 font-semibold py-1">
              <a className="bg-white hover:bg-gray-100 text-blue-400 shadow-md font-normal h-5 w-5 items-center justify-center align-center rounded-full border border-solid focus:outline-none mr-2 p-3"
                href="https://twitter.com/haidarrifki"
                target="_blank">
                <i className="flex fab fa-twitter"></i>
              </a>
              <a className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full border border-solid outline-none focus:outline-none mr-2 p-3"
                href="https://github.com/haidarrifki"
                target="_blank">
                <i className="flex fab fa-github"></i>
              </a>
              <a className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full border border-solid outline-none focus:outline-none mr-2 p-3"
                href="https://dev.to/haidarrifki"
                target="_blank">
                <i className="flex fab fa-dev"></i>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Made with <i className="fas fa fa-heart text-red-500"></i> by <a
                href="https://haidarrifki.com"
                className="text-gray-600 hover:text-gray-900"
              >
                Haidar Rifki
              </a>.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}