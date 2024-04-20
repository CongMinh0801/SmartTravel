import Image from 'next/image';
import Icon from '../icon';
import { faSuitcase, faPercent, faTicket, faShield, faSlash } from '@fortawesome/free-solid-svg-icons';
function ChuyenBayItem() {
    const showChiTiet = (event) => {
        const button = event.target;
        const element = button.closest('.ticket-item');
        const detail = element.querySelector('.chi-tiet-item');
        detail.style.display = 'grid';
        button.style.display = 'none';
    };

    const hideChiTiet = (event) => {
        const button = event.target;
        const element = button.closest('.ticket-item');
        const detail = element.querySelector('.chi-tiet-item');
        const showBtn = element.querySelector('.show-detail-btn');
        detail.style.display = 'none';
        showBtn.style.display = 'flex';
    };

    return (
        <div className="ticket-item border-2 border-transparent hover:border-sky-400 mb-3 rounded-md">
            <div className="p-4 bg-white rounded-md grid grid-cols-3 cursor-pointer">
                <div className="flex justify-start items-center">
                    <div className='w-[44px] h-[44px] bg-cover bg-[url("/VJ.png")]'></div>
                    <div className="ml-4">
                        <p className="font-medium">
                            <i>Vietjet Air</i>
                        </p>
                        <p className="text-sm text-gray-500">VJ123</p>
                        <button
                            onClick={(event) => showChiTiet(event)}
                            className="show-detail-btn text-xs text-blue-400 font-semibold flex justify-start items-center"
                        >
                            Chi tiết vé
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-3 h-3 ml-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-5 h-full">
                    <div className="col-span-1">
                        <div className="h-1/3 font-semibold">21:15</div>
                        <div className="h-1/3"></div>
                        <div className="h-1/3 text-gray-500 text-sm">SGN</div>
                    </div>
                    <div className="col-span-3">
                        <div className="h-1/3 text-sky-400 text-sm w-full text-center mb-1">2h5p</div>
                        <div className="h-1/3 flex justify-between items-center relative">
                            <div className="w-2 h-2 bg-[url('/Group16.png')] bg-cover"></div>
                            <div className="bg-[url('/Vector1.png')] h-[1px] flex-grow"></div>
                            <div className="w-2 h-2 bg-[url('/Group16.png')] bg-cover"></div>
                            <div className="w-5 h-5 bg-[url('/airplane1.png')] bg-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="h-1/3 text-gray-500 text-xs w-full text-center mt-1">Bay thẳng</div>
                    </div>
                    <div className="col-span-1">
                        <div className="h-1/3 font-semibold">23:20</div>
                        <div className="h-1/3"></div>
                        <div className="h-1/3 text-gray-500 text-sm">HAN</div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <div className="mr-2">
                        <p className="text-md font-semibold text-sky-400 text-end">1.599.000đ</p>
                        <p className="text-xs text-gray-500 text-end">
                            <strike>1.599.000đ</strike>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-sky-400 text-white text-sm font-semibold rounded-md hover:bg-sky-300 py-4 px-6 flex justify-between items-center">
                            <i>Chọn</i>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="chi-tiet-item p-4 bg-white rounded-md grid grid-cols-8 gap-x-20 text-xs font-medium border-t pl-16"
                style={{ display: 'none' }}
            >
                <div className="col-span-5">
                    <p className="mb-4">
                        <i>Thông tin khác</i>
                    </p>
                    <div className="">
                        <p className="mt-2 flex justify-start items-center">
                            <span className="h-full block">
                                <Icon icon={faSuitcase} />
                            </span>
                            <span className="ml-2">Hành lý xách tay 1 x 12kg. Hành lý ký gửi 1 x 23kg</span>
                        </p>
                        <p className="mt-2 flex justify-start items-center">
                            <span className="h-full block">
                                <Icon icon={faPercent} />
                            </span>
                            <span className="ml-2">
                                Phí hoàn vé 500.000VND, miễn phí bỏ chuyến (trừ giai đoạn Tết Nguyên Đán mất phí
                                500.000VND)
                            </span>
                        </p>
                        <p className="mt-2 flex justify-start items-center text-red-500">
                            <span className="h-full block">
                                <Icon icon={faTicket} />
                            </span>
                            <span className="ml-2">Không hoàn vé</span>
                        </p>
                        <p className="mt-2 flex justify-start items-center text-sky-500">
                            <span className="h-full block">
                                <Icon icon={faTicket} />
                            </span>
                            <span className="ml-2">
                                Miễn phí đổi vé chỉ mất phí chênh lệch giá vé (ngoại trừ giai đoạn tết nguyên đán:
                                360.000 VND)
                            </span>
                        </p>
                        <p className="mt-2 flex justify-start items-center">
                            <div className="">
                                <Icon icon={faShield} />
                            </div>
                            <span className="ml-2">
                                Bảo hiểm Deluxe Fight Care (chưa áp dụng cho các chuyến bay do Thai Vietjet khai khác)
                            </span>
                        </p>
                        <p className="mt-2 flex justify-start items-center relative">
                            <div className="">
                                <Icon icon={faTicket} />
                            </div>
                            <span className="absolute top-1/2 -translate-y-1/2 left-0 ">
                                <Icon icon={faSlash} />
                            </span>
                            <span className="ml-2">
                                Hoàn bảo lưu tiền vé tối đa 180 ngày và tính phí theo chính sách hãng, thời hạn 24h so
                                với giờ khỏi hành.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="mb-4">
                        <i>Thông tin vé</i>
                    </div>
                    <div>
                        <p className="mt-2 flex justify-between items-center">
                            <span>Người lớn (1)</span>
                            <span>
                                3.000.000<u>đ</u>
                            </span>
                        </p>
                        <p className="mt-2 flex justify-between items-center">
                            <span>Trẻ em (0)</span>
                            <span>
                                0<u>đ</u>
                            </span>
                        </p>
                        <p className="mt-2 flex justify-between items-center">
                            <span>Em bé (0)</span>
                            <span>
                                0<u>đ</u>
                            </span>
                        </p>
                        <p className="mt-2 flex justify-between items-center">
                            <span>Thuế Phí</span>
                            <span>
                                250.000<u>đ</u>
                            </span>
                        </p>
                        <p className="mt-2 flex justify-between items-center">
                            <span>
                                <i>Tổng tiền</i>
                            </span>
                            <span>
                                <i>
                                    3.250.000<u>đ</u>
                                </i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={(event) => hideChiTiet(event)}
                        className="hide-detail-btn text-xs text-blue-400 font-semibold flex justify-start items-center"
                    >
                        Ẩn
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-3 h-3 ml-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChuyenBayItem;
