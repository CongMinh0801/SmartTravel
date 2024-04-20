'use client';

import Breadcrumb from '@/components/breadcrumb';
import ThongTinHanhKhach from '@/components/thanh-toan/thong_tin_hanh_khach';
import Steps from '@/components/danh-sach-ve/steps';
import { useState, useEffect } from 'react';
import ThongTinChuyenBay from '@/components/thong-tin-hanh-khach/thong_tin_chuyen_bay';
import ThongTinGia from '@/components/thong-tin-hanh-khach/thong_tin_gia';
import PhuongThucThanhToan from '@/components/thanh-toan/phuong_thuc_thanh_toan';

export default function ThanhToanPage() {
    const listBreadcrumb = [
        { title: 'Tìm vé', uri: '/' },
        { title: 'Danh sách vé', uri: 'danh-sach-ve' },
        { title: 'Thông tin hành khách', uri: 'thong-tin-hanh-khach' },
        { title: 'Thanh toán', uri: 'thanh-toan' },
    ];
    return (
        <main className="relative">
            <Steps />
            <div className="flex flex-wrap justify-center p-4 min-h-screen bg-gray-100 border shadow">
                <div className={` w-full max-w-[1200px]`}>
                    <Breadcrumb listBreadcrumb={listBreadcrumb} />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <ThongTinHanhKhach />
                            <PhuongThucThanhToan />
                            <button className="bg-sky-500 rounded text-white text-sm font-semibold px-10 py-2 mt-4">
                                Tiếp theo
                            </button>
                        </div>
                        <div className="col-span-1">
                            <ThongTinChuyenBay />
                            <ThongTinGia />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
