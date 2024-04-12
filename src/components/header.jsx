function Header() {
    return (
        <div
            className="w-full bg-white border-b flex justify-between items-center box-border p-4 font-medium text-gray-600"
            style={{ height: '72px' }}
        >
            <h1 className="hidden sm:block">Smart travel - Đặt vé</h1>
            <div className="flex items-center">
                <div className="px-4 cursor-pointer">
                    <div className="flex items-center p-2 hover:bg-gray-200 rounded-full text-sm">
                        VND
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 ml-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div className="px-4 cursor-pointer border-l">
                    <div className="flex items-center p-2 hover:bg-gray-200 rounded-full text-sm">
                        <div className="w-4 h-4 bg-[url('/vietnamicon.png')] bg-cover rounded-full"></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 ml-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div className="px-4 cursor-pointer border-l">
                    <div className="flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                        <span className="absolute -bottom-1 -right-1 border rounded-full w-4 h-4 bg-white border-red-500 text-red-500 text-xs flex justify-center items-center">
                            5
                        </span>
                    </div>
                </div>
                <div className="px-4 cursor-pointer border-l">
                    <div className="flex items-center p-2 rounded-full text-sm relative text-teal-400">
                        <svg
                            className="h-5 w-5"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {' '}
                            <path stroke="none" d="M0 0h24v24H0z" />{' '}
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />{' '}
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                        </svg>
                        1.000.000.000đ
                    </div>
                </div>
                <div className="pl-4 cursor-pointer border-l">
                    <div className="w-8 h-8 rounded-full bg-[url('/user.png')] bg-cover"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
