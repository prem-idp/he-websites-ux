export default function Loading(){
    return(
        <div className="space-y-4 p-6 max-w-4xl mx-auto animate-pulse">
        <div className="flex space-x-2">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>

        </div>
        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-32"></div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="h-64 bg-gray-300 rounded"></div>
      </div>
    )
}