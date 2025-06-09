import Link from "next/link"


function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
            <div className="mt-10"></div>
            <div className="mt-10 text-center">
                <Link href={"/"}
                className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                View All webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars