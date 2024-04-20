function ChuyenBayDuocChon({ directionStr, sanBayDi, sanBayVe, ngay, hanhKhach, soChuyenBay, chuyenDaChon, active }) {
    return (
        <div className={`col-span-1 bg-white p-4 rounded text-sm ${active ? '' : 'opacity-50'}`}>
            <h4 className="text-cyan-400 font-medium">Chiều {directionStr}:</h4>
            <p className="flex justify-start items-center text-base text-gray-900 font-semibold mt-2">
                <i className="flex justify-start items-center mr-2">
                    <span>{sanBayDi}</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </span>
                    <span>{sanBayVe}</span>
                </i>
                <span>:{soChuyenBay} chuyến bay</span>
            </p>
            <p className="flex justify-start items-center text-sm text-gray-400 mt-2">
                <span>{ngay}</span>
                <span className="bg-gray-500 block w-1 h-1 rounded-full mx-2"></span>
                <span>{hanhKhach} hành khách</span>
            </p>
            <p className={`${active ? 'block' : 'hidden'} text-yellow-500 mt-4`}>Đang chọn chiều {directionStr}...</p>
        </div>
    );
}

export default ChuyenBayDuocChon;
