'use client';

import { useState, useEffect } from 'react';

export default function ThongTinHanhKhach() {
    return (
        <div className="bg-white p-4 rounded-md">
            <h3 className="mb-6 font-medium">
                <i>Thông tin hành khách</i>
            </h3>
            <div className="grid grid-cols-3 gap-4 font-medium">
                <div className="col-span-1 text-sm">
                    <p>Người lớn (x1)</p>
                    <div>
                        <p className="flex items-center">
                            <span>Tran Cong Minh</span>
                            <span className="mx-2 h-2 w-2 bg-gray-200 rounded-full"></span>
                            <span>Ông</span>
                        </p>
                    </div>
                </div>
                <div className="col-span-1 text-sm">
                    <p>
                        Trẻ em (x1) <span className="text-sx text-sky-400 ml-2">{'(2-11 tuổi)'}</span>
                    </p>
                    <div>
                        <p className="flex items-center">
                            <span>Tran Cong Minh</span>
                            <span className="mx-2 h-2 w-2 bg-gray-200 rounded-full"></span>
                            <span>Ông</span>
                        </p>
                        <p>Ngày sinh: 20-04-2016</p>
                    </div>
                </div>
                <div className="col-span-1 text-sm">
                    <p>
                        Em bé (x1) <span className="text-sx text-sky-400 ml-2">{'(<2 tuổi)'}</span>
                    </p>
                    <div>
                        <p className="flex items-center">
                            <span>Tran Cong Minh</span>
                            <span className="mx-2 h-2 w-2 bg-gray-200 rounded-full"></span>
                            <span>Ông</span>
                        </p>
                        <p>Ngày sinh: 20-04-2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
