'use client';

import { useState, useEffect } from 'react';

export default function PhuongThucThanhToan() {
    return (
        <div className="bg-white p-4 rounded-md mt-4">
            <h3 className="mb-6 font-medium">
                <i>Phương Thức thanh toán</i>
            </h3>
            <div>
                <div className="flex items-center py-2 border-b">
                    <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="agencycredit"
                    >
                        <input
                            name="type"
                            type="radio"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                            id="agencycredit"
                        />
                        <span className="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </span>
                    </label>
                    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="html">
                        Agency Credit
                    </label>
                </div>
                <div className="flex items-center py-2 border-b">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="giucho">
                        <input
                            name="type"
                            type="radio"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                            id="giucho"
                        />
                        <span className="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                            </svg>
                        </span>
                    </label>
                    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="html">
                        Giữ chỗ
                    </label>
                </div>
            </div>
        </div>
    );
}
