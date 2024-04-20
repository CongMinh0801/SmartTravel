'use client';

import { useState, useEffect } from 'react';

export default function ThongTinLienHe() {
    return (
        <div className="bg-white p-4 rounded-md mt-4">
            <h3 className="mb-2 font-medium">
                <i>Thông tin liên hệ</i>
            </h3>
            <p className="mb-4 text-sm font-medium text-gray-500">
                Mã đặt chỗ sẽ được gửi tới thông tin liên hệ dưới đây
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 w-full border px-2 py-1 rounded">
                    <label htmlFor="" className="text-sm text-gray-500 font-medium">
                        Họ tên
                    </label>
                    <input className="w-full outline-none" type="text" />
                </div>
                <div className="col-span-1 w-full border px-2 py-1 rounded">
                    <label htmlFor="" className="text-sm text-gray-500 font-medium">
                        Số điện thoại
                    </label>
                    <input className="w-full outline-none" type="text" />
                </div>
                <div className="col-span-1 w-full border px-2 py-1 rounded">
                    <label htmlFor="" className="text-sm text-gray-500 font-medium">
                        Email
                    </label>
                    <input className="w-full outline-none" type="text" />
                </div>
                <div className="col-span-1 flex flex-col justify-between">
                    <label htmlFor="" className="text-sm text-gray-500 font-medium">
                        Xưng danh
                    </label>
                    <div className=" flex justify-start items-center">
                        <label>
                            <input className="mr-2" type="radio" value="nam" name="xung-danh-lien-he" />
                            Ông
                        </label>
                        <label className="ml-8">
                            <input className="mr-2" type="radio" value="nu" name="xung-danh-lien-he" />
                            Bà
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
