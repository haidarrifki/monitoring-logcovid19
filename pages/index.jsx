import ReactPaginate from 'react-paginate'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import dateFormat from '../helpers/dateFormat'
import numberFormat from '../helpers/numberFormat'

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/statistics/dashboard`)

  const data = await res.json()

  if (res.status !== 200) {
    console.error(json)
    throw new Error('Failed to fetch API')
  }

  return {
    props: {
      data
    }
  }
}

const Home = ({ data }) => {
  const perPage = 10
  const dataProvince = data.affected.province
  const dataCity = data.affected.city
  const dataLogistics = data.logistics
  // Pagination Provinces
  const [offsetProvince, setOffsetProvince] = useState(0)
  const [currentPageProvince, setCurrentPageProvince] = useState(0)
  const [totalPageProvince, setTotalPageProvince] = useState(
    Math.ceil(dataProvince.length / perPage)
  )
  const [provinces, setProvinces] = useState(
    dataProvince.slice(offsetProvince, offsetProvince + perPage)
  )

  const paginationHandlerProvince = (paginator) => {
    const selectedPage = paginator.selected
    const offset = selectedPage * perPage

    setCurrentPageProvince(selectedPage)
    setOffsetProvince(offset)
    setProvinces(
      dataProvince.slice(offset, offset + perPage)
    )
  }
  // End Pagination Provinces

  // Pagination Cities
  const [offsetCity, setOffsetCity] = useState(0)
  const [currentPageCity, setCurrentPageCity] = useState(0)
  const [totalPageCity, setTotalPageCity] = useState(
    Math.ceil(dataCity.length / perPage)
  )
  const [cities, setCities] = useState(
    dataProvince.slice(offsetCity, offsetCity + perPage)
  )

  const paginationHandlerCity = (paginator) => {
    const selectedPage = paginator.selected
    const offset = selectedPage * perPage

    setCurrentPageCity(selectedPage)
    setOffsetCity(offset)
    setCities(
      dataCity.slice(offset, offset + perPage)
    )
  }
  // End Pagination Cities

  return (
    <Layout>
      <h1 className="text-3xl text-center m-4 h-6 font-bold">Summary</h1>
      <h6 className="text-center h-15">Last Update: { dateFormat(data.created_at) }</h6>
      <div className="flex flex-wrap">
        <Card
          title="Total Faskes Terdampak"
          body={data.total.faskes}
          className="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-5" />
  
        <Card
          title="Total Provinsi Terdampak"
          body={data.total.province}
          className="bg-orange-100 border-b-4 border-orange-500 rounded-lg shadow-lg p-5" />
  
        <Card
          title="Total Kota Terdampak"
          body={data.total.city}
          className="bg-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-lg p-5" />
  
        <Card
          title="Total Donasi"
          body={data.total.donasi}
          className="bg-blue-100 border-b-4 border-blue-500 rounded-lg shadow-lg p-5" />
  
        <Card
          title="Total Donatur"
          body={data.total.donatur}
          className="bg-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-lg p-5" />
  
        <Card
          title="Total Supplier"
          body={data.total.supplier}
          className="bg-red-100 border-b-4 border-red-500 rounded-lg shadow-lg p-5" />
      </div>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <div className="w-full md:w-1/2 xl:w-1/2 p-3">
          <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-200 border-b-1 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Daftar Provinsi Terdampak</h5>
              </div>
              <div className="p-5">
                <table className="w-full p-5 text-gray-700">
                  <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left text-blue-900">Nama Provinsi</th>
                        <th className="text-left text-blue-900">Jumlah Faskes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {provinces.map((province, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-1">{province.name}</td>
                        <td>{province.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="py-2">
                  <nav className="block">
                    <ReactPaginate
                      previousLabel={
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      }
                      nextLabel={
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      }
                      breakLabel={'...'}
                      breakClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      activeLinkClassName={'text-white bg-blue-500 border-blue-500'}
                      containerClassName={'flex pl-0 rounded justify-center list-none flex-wrap'}
                      pageLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      previousLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      nextLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      initialPage={currentPageProvince}
                      pageCount={totalPageProvince}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={paginationHandlerProvince}
                    />
                  </nav>
                </div>
              </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-3">
          <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-200 border-b-1 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Daftar Kota Terdampak</h5>
              </div>
              <div className="p-5">
                <table className="w-full p-5 text-gray-700">
                  <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left text-blue-900">Nama Kota</th>
                        <th className="text-left text-blue-900">Jumlah Faskes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cities.map((city, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-1">{city.name}</td>
                        <td>{city.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="py-2">
                  <nav className="block">
                    <ReactPaginate
                      previousLabel={
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      }
                      nextLabel={
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      }
                      breakLabel={'...'}
                      breakClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      activeLinkClassName={'text-white bg-blue-500 border-blue-500'}
                      containerClassName={'flex pl-0 rounded justify-center list-none flex-wrap'}
                      pageLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      previousLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      nextLinkClassName={'first:ml-0 text-xs font-semibold flex w-6 h-6 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-gray-300 bg-white hover:border-blue-500 hover:text-white hover:bg-blue-500'}
                      initialPage={currentPageCity}
                      pageCount={totalPageCity}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={paginationHandlerCity}
                    />
                  </nav>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <div className="w-full p-3">
          <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-200 border-b-1 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Kebutuhan dan Kekurangan Logistik</h5>
              </div>
              <div className="p-5">
                <table className="w-full p-5 text-gray-700 table-fixed break-words">
                  <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left text-blue-900">Nama Barang</th>
                        <th className="text-left text-blue-900">Kebutuhan</th>
                        <th className="text-left text-blue-900">Kekurangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataLogistics.map((logistic, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-1">{logistic.name}</td>
                        <td>{ numberFormat(logistic.kebutuhan) }</td>
                        <td>{ numberFormat(logistic.kekurangan) }</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home