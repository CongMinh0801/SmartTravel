'use client';

import { useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Vietnamese from 'flatpickr/dist/l10n/vn';
import DropdownHanhKhach from './dropdown_hanh_khach';
import ListAirport from './list_airport';

function HomePageSearchForm() {
    const [ngayDi, setNgayDi] = useState(new Date().toISOString().split('T')[0]);
    const [ngayVe, setNgayVe] = useState(new Date().toISOString().split('T')[0]);
    const [sanBayDi, setSanBayDi] = useState('SGN (Hồ Chí Minh)');
    const [sanBayDen, setSanBayDen] = useState('HAN (Hà Nội)');
    const [selectAirport, setSelectAirport] = useState(null);
    const [searchAirport, setSearchAirport] = useState();
    const [ngayVeMessageValidate, setNgayVeMessageValidate] = useState('');
    const [nguoiLon, setNguoiLon] = useState(1);
    const [treEm, setTreEm] = useState(0);
    const [emBe, setEmBe] = useState(0);
    const [khuHoi, setKhuHoi] = useState(false);
    const [openHanhKhach, setOpenHanhKhach] = useState(false);

    const changeKhuHoi = () => {
        setKhuHoi(!khuHoi);
    };

    useEffect(() => {
        const displayObjectNgayDi = {
            enableTime: false,
            dateFormat: 'Y-m-d',
            altInput: true,
            minDate: 'today',
            locale: Vietnamese.vn,
            onChange: function (dateStr) {
                setNgayDi(new Date(dateStr).toISOString().split('T')[0]);
            },
        };
        const displayObjectNgayVe = {
            enableTime: false,
            dateFormat: 'Y-m-d',
            altInput: true,
            minDate: 'today',
            locale: Vietnamese.vn,
            onChange: function (dateStr) {
                setNgayVe(new Date(dateStr).toISOString().split('T')[0]);
            },
        };

        const ngayDiInput = flatpickr('#ngay-di', displayObjectNgayDi);
        document.querySelector('#ngay-di').style.display = 'none';
        const ngayVeInput = flatpickr('#ngay-ve', displayObjectNgayVe);
        document.querySelector('#ngay-ve').style.display = 'none';
    }, []);

    useEffect(() => {
        const dateNgayDi = new Date(ngayDi);
        const dateNgayVe = new Date(ngayVe);
        if (dateNgayDi > dateNgayVe && khuHoi) {
            setNgayVeMessageValidate('Ngày về phải lớn hơn hoặc bằng ngày đi');
        } else {
            setNgayVeMessageValidate('');
        }
    }, [ngayDi, ngayVe, khuHoi]);

    useEffect(() => {
        const ngayVeInput = document.querySelector('#ngay-ve').nextElementSibling;
        ngayVeInput.disabled = !khuHoi;
        ngayVeInput.style.backgroundColor = khuHoi ? 'transparent' : 'rgb(229, 231, 235)';
    }, [khuHoi]);
    return (
        <div className="w-full pt-16 pb-16 rounded-md bg-[url('/plane-background.jpg')] bg-cover p-4 relative">
            <div className="w-full text-gray-600">
                <h2 className="text-lg font-semibold">
                    <i>Tìm chuyến bay</i>
                </h2>
                <div className="w-full text-sm">
                    <div className="w-full grid grid-cols-12 rounded-t-lg overflow-hidden ">
                        <div className=" col-span-7 bg-white rounded-t-lg p-2 flex justify-between items-center border-b">
                            <label className="inline-flex items-center cursor-pointer">
                                <input onChange={changeKhuHoi} type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                    Khứ hồi
                                </span>
                            </label>
                            {/* <div className="text-sm">
                                <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    đ
                                </span>
                                <span className="font-semibold">VND</span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-checkbox"
                                    className="ms-2 text-sm font-medium dark:text-gray-300"
                                >
                                    Tìm giá rẻ nhất
                                </label>
                            </div> */}
                            <div className="p-2 border rounded border-gray-300 flex items-center">
                                Mã khuyến mãi
                                <svg
                                    className="h-4 w-4 text-gray-500 ml-2"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {' '}
                                    <line x1="19" y1="5" x2="5" y2="19" /> <circle cx="6.5" cy="6.5" r="2.5" />{' '}
                                    <circle cx="17.5" cy="17.5" r="2.5" />
                                </svg>
                            </div>
                        </div>
                        <div className=" col-span-5 bg-transparent"></div>
                    </div>
                    <div className="w-full grid grid-cols-12 rounded-b-lg overflow-hidden rounded-tr-lg">
                        <div className="col-span-12 md:col-span-7 bg-white p-2">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="grid-col-1">
                                    <label
                                        htmlFor="san-bay-di"
                                        className="block pl-2 text-xs font-medium text-gray-900 dark:text-white"
                                    >
                                        Từ
                                    </label>
                                    <input
                                        readOnly
                                        value={sanBayDi}
                                        type="text"
                                        id="san-bay-di"
                                        className="p-2 w-full border rounded"
                                        placeholder="SGN (Hồ Chí Minh)"
                                        onClick={() => {
                                            selectAirport != 'Đi' ? setSelectAirport('Đi') : setSelectAirport(false);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="grid-col-1">
                                    <label
                                        htmlFor="san-bay-den"
                                        className="block pl-2 text-xs font-medium text-gray-900 dark:text-white"
                                    >
                                        Đến
                                    </label>
                                    <input
                                        readOnly
                                        value={sanBayDen}
                                        type="text"
                                        id="san-bay-den"
                                        className="p-2 w-full border rounded"
                                        placeholder="HAN (Hà Nội)"
                                        onClick={() => {
                                            selectAirport != 'Về' ? setSelectAirport('Về') : setSelectAirport(false);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="grid-col-1 dropdown-hanh-khach-input">
                                    <label
                                        htmlFor="first_name"
                                        className="block pl-2 text-xs font-medium text-gray-900 dark:text-white"
                                    >
                                        Hành khách
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="p-2 w-full outline-none border rounded"
                                        placeholder="Phổ thông"
                                        required
                                        readOnly
                                        value={nguoiLon + treEm + emBe}
                                        onClick={() => setOpenHanhKhach(!openHanhKhach)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 bg-white">
                            <div className="grid grid-cols-5 gap-x-4 p-2">
                                <div className="col-span-2 box-border">
                                    <label
                                        htmlFor="ngay-di"
                                        className="block text-xs font-medium text-gray-900 dark:text-white"
                                    >
                                        Ngày đi
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="ngay-di"
                                        name="ngay-di"
                                        className="w-full p-2 outline-none border h-[38px] rounded"
                                        readOnly
                                        value={ngayDi}
                                    />
                                </div>
                                <div className="col-span-2 box-border">
                                    <label
                                        htmlFor="ngay-ve"
                                        className="block text-xs font-medium text-gray-900 dark:text-white"
                                    >
                                        Ngày về
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="ngay-ve"
                                        name="ngay-ve"
                                        className="w-full p-2 outline-none border h-[38px] rounded bg-gray-200"
                                        readOnly
                                        value={ngayVe}
                                        disabled={khuHoi ? false : true}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <button className="bg-blue-500 hover:bg-blue-400 h-full w-full rounded-md flex justify-center items-center">
                                        <svg
                                            className="h-5 w-5 text-white"
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
                                            <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="10" cy="10" r="7" />{' '}
                                            <line x1="21" y1="21" x2="15" y2="15" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-red-500 text-xs col-span-5">{ngayVeMessageValidate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DropdownHanhKhach
                nguoiLon={nguoiLon}
                treEm={treEm}
                emBe={emBe}
                openHanhKhach={openHanhKhach}
                setNguoiLon={setNguoiLon}
                setTreEm={setTreEm}
                setEmBe={setEmBe}
                setOpenHanhKhach={setOpenHanhKhach}
            />
            <ListAirport
                setSanBay={selectAirport == 'Đi' ? setSanBayDi : setSanBayDen}
                sanBay={selectAirport}
                searchAirport={searchAirport}
                setSelectAirport={setSelectAirport}
                setSearchAirport={setSearchAirport}
            />
        </div>
    );
}

export default HomePageSearchForm;
