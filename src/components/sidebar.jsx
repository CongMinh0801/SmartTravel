'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import './sidebar.css';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('tim-chuyen');
    const smallSideBar = (e) => {
        setOpen(false);
    };

    const bigSideBar = (e) => {
        setOpen(true);
    };

    return (
        <div>
            <div className={`${open ? 'w-72' : 'w-16'} bg-white border-r h-full shadow-lg flex-none z-10 relative`}>
                <div className={`${open ? 'w-72' : 'w-16'} border-r fixed left-0 top-0 side-bar`}>
                    <div
                        className={`w-full p-2 flex ${
                            open ? 'justify-between' : 'justify-center'
                        } items-center transition-all`}
                        style={{ height: '72px' }}
                    >
                        <a href="/">
                            <Image
                                src="/logo_brand.png"
                                className={`${open ? 'block' : 'hidden'}`}
                                alt="Ảnh logo"
                                width={72}
                                height={72}
                            />
                        </a>
                        <a href="/">
                            <span className={`text-xl text-sky-400 font-bold ${open ? 'block' : 'hidden'}`}>
                                SmartTravel
                            </span>
                        </a>
                        <button onClick={smallSideBar} className={`text-sky-400 ${open ? 'block' : 'hidden'}`}>
                            <svg
                                className="h-4 w-4"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="11 7 6 12 11 17" />{' '}
                                <polyline points="17 7 12 12 17 17" />
                            </svg>
                        </button>
                        <button onClick={bigSideBar} className={`text-sky-400 ${open ? 'hidden' : 'block'}`}>
                            <svg
                                className="h-4 w-4"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="7 7 12 12 7 17" />{' '}
                                <polyline points="13 7 18 12 13 17" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2">
                        <button
                            onClick={() => setSelected('tim-chuyen')}
                            className={`flex ${
                                open ? 'justify-start' : 'justify-center'
                            } items-center text-gray-500 hover:bg-sky-100 hover:text-sky-400 ${
                                selected == 'tim-chuyen' ? 'bg-sky-100 text-sky-400' : ''
                            } cursor-pointer p-3 w-full text-start`}
                        >
                            <svg
                                className={`h-5 w-5 ${open ? 'mr-2' : 'mr-0'}`}
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
                                <path
                                    d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                                    transform="rotate(-15 12 12) translate(0 -1)"
                                />{' '}
                                <line x1="3" y1="21" x2="21" y2="21" />
                            </svg>
                            <span className={`text-sm font-semibold ${open ? 'block' : 'hidden'}`}>
                                <span>Tìm chuyến bay</span>
                            </span>
                        </button>
                        <div
                            className={`${
                                !open ? 'btn-show-quan-ly-list' : ''
                            } hover:bg-sky-100 hover:text-sky-400 cursor-pointer ${
                                selected == 'quan-ly-dat-cho' || selected == 'quan-ly-ve'
                                    ? 'bg-sky-100 text-sky-400'
                                    : ''
                            } text-gray-500`}
                        >
                            <div className={`flex ${open ? 'justify-start' : 'justify-center'} items-center p-3`}>
                                <svg
                                    className={`h-5 w-5 ${open ? 'mr-2' : 'mr-0'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                    />
                                </svg>
                                <span className={`text-sm font-semibold ${open ? 'flex' : 'hidden'}`}>
                                    Quản lý booking
                                    <svg
                                        className="h-5 w-5 ml-2"
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
                                        <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </div>
                            <div className="hover:bg-white hover:text-gray-500 relative">
                                <div className={`${open ? 'block' : 'hidden'}`}>
                                    <button
                                        onClick={() => setSelected('quan-ly-dat-cho')}
                                        className={`p-2 text-sm block w-full text-start font-medium pl-10 text-gray-400 hover:bg-sky-50 hover:text-sky-400 ${
                                            selected == 'quan-ly-dat-cho' ? 'bg-sky-50 text-sky-400' : 'bg-white'
                                        }`}
                                    >
                                        Quản lý đặt chỗ
                                    </button>
                                    <button
                                        onClick={() => setSelected('quan-ly-ve')}
                                        className={`p-2 text-sm block w-full text-start font-medium pl-10 text-gray-400 hover:bg-sky-50 hover:text-sky-400 ${
                                            selected == 'quan-ly-ve' ? 'bg-sky-50 text-sky-400' : 'bg-white'
                                        }`}
                                    >
                                        Quản lý vé
                                    </button>
                                </div>
                                <div
                                    className={`absolute left-full -top-12 w-[200px] z-10 shadow-xl border show-quan-ly-list`}
                                >
                                    <button
                                        onClick={() => setSelected('quan-ly-dat-cho')}
                                        className={`p-2 text-sm block w-full text-start font-medium text-gray-400 hover:bg-sky-50 hover:text-sky-400 ${
                                            selected == 'quan-ly-dat-cho' ? 'bg-sky-50 text-sky-400' : 'bg-white'
                                        }`}
                                    >
                                        Quản lý đặt chỗ
                                    </button>
                                    <button
                                        onClick={() => setSelected('quan-ly-ve')}
                                        className={`p-2 text-sm block w-full text-start font-medium text-gray-400 hover:bg-sky-50 hover:text-sky-400 ${
                                            selected == 'quan-ly-ve' ? 'bg-sky-50 text-sky-400' : 'bg-white'
                                        }`}
                                    >
                                        Quản lý vé
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
