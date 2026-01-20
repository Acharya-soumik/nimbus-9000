import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-3xl font-bold mb-4">City Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We currently don't have a dedicated page for this city or the URL is incorrect. 
        However, we likely still serve your location!
      </p>
      <div className="flex gap-4">
        <Link 
          href="/send-legal-notice"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All Services
        </Link>
        <Link 
          href="/"
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
