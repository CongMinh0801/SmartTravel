'use client';

import { useEffect } from 'react';
import Icon from '../icon';
import { faPerson, faChild, faBaby, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function DropdownHanhKhach({ nguoiLon, treEm, emBe, setNguoiLon, setTreEm, setEmBe, openHanhKhach, setOpenHanhKhach }) {
    useEffect(() => {
        const handleClick = (event) => {
            let element = event.target;
            if (
                !(
                    element.closest('.dropdown-hanh-khach') ||
                    element.closest('.dropdown-hanh-khach-input') ||
                    element.classList.contains('dropdown-hanh-khach') ||
                    element.classList.contains('dropdown-hanh-khach-input')
                )
            ) {
                setOpenHanhKhach(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        document.querySelector('.dropdown-hanh-khach').style.display = openHanhKhach ? 'block' : 'none';
    }, [openHanhKhach]);
    return (
        <div
            className={`hidden absolute top-full right-1/2 -translate-y-14 translate-x-32 border rounded shadow-lg z-10 bg-white p-4 dropdown-hanh-khach`}
        >
            <h4 className="">Chọn số lượng đối tượng phù hợp</h4>
            <div className="mt-6 w-full text-gray-600">
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-start items-center pr-16">
                        <div className="bg-gray-200 flex justify-center items-center w-10 h-10 rounded-full mr-2">
                            <Icon icon={faPerson} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Người lớn</p>
                            <p className="text-sm">12 tuổi trở lên</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => {
                                if (nguoiLon > 1 && nguoiLon > emBe) {
                                    setNguoiLon(nguoiLon - 1);
                                }
                            }}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faMinus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                        <input
                            type="text"
                            value={nguoiLon}
                            readOnly
                            className="w-10 outline-none border-b text-center"
                        />
                        <button
                            onClick={() => setNguoiLon(nguoiLon + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faPlus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full text-gray-600">
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-start items-center pr-16">
                        <div className="bg-gray-200 flex justify-center items-center w-10 h-10 rounded-full mr-2">
                            <Icon icon={faChild} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Trẻ em</p>
                            <p className="text-sm">2-11 tuổi</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => {
                                if (treEm > 0) {
                                    setTreEm(treEm - 1);
                                }
                            }}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faMinus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                        <input type="text" value={treEm} readOnly className="w-10 outline-none border-b text-center" />
                        <button
                            onClick={() => setTreEm(treEm + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faPlus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full text-gray-600">
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-start items-center pr-16">
                        <div className="bg-gray-200 flex justify-center items-center w-10 h-10 rounded-full mr-2">
                            <Icon icon={faBaby} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Em bé</p>
                            <p className="text-sm">Dưới 1 tuổi</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            onClick={() => {
                                if (emBe > 0) {
                                    setEmBe(emBe - 1);
                                }
                            }}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faMinus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                        <input type="text" value={emBe} readOnly className="w-10 outline-none border-b text-center" />
                        <button
                            onClick={() => {
                                if (emBe < nguoiLon) {
                                    setEmBe(emBe + 1);
                                }
                            }}
                            className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center hover:bg-gray-100"
                        >
                            <Icon icon={faPlus} style={{ width: '1rem', height: '1rem' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropdownHanhKhach;
