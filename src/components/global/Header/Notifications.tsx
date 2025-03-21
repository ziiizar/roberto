export default function NotificationButtons() {
  return (
    <div className="flex items-center justify-center gap-4 max-[380px]:hidden">
      {/* Chat Button */}
      <div className="relative flex items-center justify-center size-[44px] background-secondary border-[1.6px] border-[#3F4655] rounded-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          fill="none"
          viewBox="0 0 18 17"
        >
          <path
            fill="#909298"
            d="M18 7.875c0 4.35-4.03 7.875-9 7.875-.891.001-1.78-.114-2.64-.344-.657.333-2.166.972-4.704 1.388-.225.036-.396-.198-.307-.407.398-.94.758-2.194.866-3.337C.837 11.666 0 9.855 0 7.875 0 3.525 4.03 0 9 0s9 3.526 9 7.875m-12.375 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0m4.5 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0M13.5 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
          ></path>
        </svg>
      </div>

      {/* Notification Button */}
      <div className="relative flex items-center justify-center size-[44px] background-secondary border-[1.6px] border-[#3F4655] rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10.0167 1.80884C7.25841 1.80884 5.01674 4.0505 5.01674 6.80884V9.21717C5.01674 9.72551 4.80007 10.5005 4.54174 10.9338L3.58341 12.5255C2.99174 13.5088 3.40007 14.6005 4.48341 14.9672C8.07507 16.1672 11.9501 16.1672 15.5417 14.9672C16.5501 14.6338 16.9917 13.4422 16.4417 12.5255L15.4834 10.9338C15.2334 10.5005 15.0167 9.72551 15.0167 9.21717V6.80884C15.0167 4.05884 12.7667 1.80884 10.0167 1.80884Z"
            fill="#909298"
            stroke="#909298"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M11.5584 2.05024C11.3001 1.97524 11.0334 1.91691 10.7584 1.88358C9.95843 1.78358 9.19176 1.84191 8.4751 2.05024C8.71676 1.43358 9.31676 1.00024 10.0168 1.00024C10.7168 1.00024 11.3168 1.43358 11.5584 2.05024Z"
            stroke="#909298"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5167 16.0503C12.5167 17.4253 11.3917 18.5503 10.0167 18.5503C9.33339 18.5503 8.70006 18.267 8.25006 17.817C7.80006 17.367 7.51672 16.7336 7.51672 16.0503"
            stroke="#909298"
            stroke-width="1.6"
            stroke-miterlimit="10"
          />
        </svg>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-[#4361ee] text-white text-sm font-medium rounded-full">
          6
        </div>
      </div>
    </div>
  );
}
