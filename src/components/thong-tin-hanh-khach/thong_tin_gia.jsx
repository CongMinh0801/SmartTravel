'use client';

import { useState, useEffect } from 'react';

export default function ThongTinGia() {
    return (
        <div className="bg-white p-4 rounded-md mt-4">
            <h3 className="mb-2 font-medium">
                <i>Thông tin giá</i>
            </h3>
            <div className="text-sm font-medium">
                <p className="text-sky-400">Chiều đi:</p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Người lớn (1)</span>
                    <span>
                        3.000.000<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Trẻ em (0)</span>
                    <span>
                        0<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Em bé (0)</span>
                    <span>
                        0<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Thuế Phí</span>
                    <span>
                        250.000<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 pt-2 border-t border-dashed flex justify-between items-center">
                    <span>
                        <i>Tổng tiền</i>
                    </span>
                    <span className="font-bold">
                        <i>
                            3.250.000<u>đ</u>
                        </i>
                    </span>
                </p>
            </div>
            <div className="text-sm font-medium mt-8 mb-4">
                <p className="text-sky-400">Chiều về:</p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Người lớn (1)</span>
                    <span>
                        3.000.000<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Trẻ em (0)</span>
                    <span>
                        0<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Em bé (0)</span>
                    <span>
                        0<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 flex justify-between items-center">
                    <span className="font-medium text-gray-500">Thuế Phí</span>
                    <span>
                        250.000<u>đ</u>
                    </span>
                </p>
                <p className="mt-2 pt-2 border-t border-dashed flex justify-between items-center">
                    <span>
                        <i>Tổng tiền</i>
                    </span>
                    <span className="font-bold">
                        <i>
                            3.250.000<u>đ</u>
                        </i>
                    </span>
                </p>
            </div>
            <div className="pt-4 border-t border-gray-300 ">
                <div className="flex justify-between items-center">
                    <span>
                        <i>Tổng tiền</i>
                    </span>
                    <span className="font-bold">
                        <i>
                            7.500.000<u>đ</u>
                        </i>
                    </span>
                </div>
                <div className="text-xs font-medium text-gray-500 bg-gray-50 w-fit p-1">Đã bao gồm thuế, phí, VAT</div>
            </div>
        </div>
    );
}
