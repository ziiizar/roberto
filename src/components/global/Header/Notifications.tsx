export default function NotificationButtons() {
    return (
      <div className="flex items-center justify-center gap-4 ">
        {/* Chat Button */}
        <div className="relative flex items-center justify-center size-[44px] bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to rounded-full border border-border-secondary">
          <div className="flex items-center justify-center ">
            <div className="flex gap-[2px]">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
  
        {/* Notification Button */}
        <div className="relative flex items-center justify-center size-[44px] border border-border-secondary bg-gradient-to-br from-secondary-gradient-from to-secondary-gradient-to rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
  
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-[#4361ee] text-white text-sm font-medium rounded-full">
            6
          </div>
        </div>
      </div>
    )
  }
  
  