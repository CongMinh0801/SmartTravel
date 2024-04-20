'use client';

import Breadcrumb from '@/components/breadcrumb';
import CacNgayKeTiep from '@/components/danh-sach-ve/cac_ngay_ke_tiep';
import BoLoc from '@/components/danh-sach-ve/bo_loc';
import DanhSachChuyenBay from '@/components/danh-sach-ve/danh_sach_chuyen_bay';
import ChuyenBayDuocChon from '@/components/danh-sach-ve/chuyen_bay_duoc_chon';
import Steps from '@/components/danh-sach-ve/steps';
import HomePageSearchForm from '@/components/home-page/search_form';
import { useState, useEffect } from 'react';

export default function DanhSachve() {
    const listBreadcrumb = [
        { title: 'Tìm vé', uri: '/' },
        { title: 'Danh sách vé', uri: 'danh-sach-ve' },
    ];
    return (
        <main className="relative">
            <Steps />
            <div className="flex flex-wrap justify-center p-4 min-h-screen bg-gray-100 border shadow">
                <div className={` w-full max-w-[1200px]`}>
                    <Breadcrumb listBreadcrumb={listBreadcrumb} />
                    <HomePageSearchForm />
                    <div className="grid grid-cols-2 gap-4 mt-4 ">
                        <ChuyenBayDuocChon
                            directionStr={'đi'}
                            sanBayDi={'Hồ Chí Minh (SGN)'}
                            sanBayVe={'Hà Nội (HAN)'}
                            ngay={'2024-04-24'}
                            hanhKhach={1}
                            soChuyenBay={100}
                            chuyenDaChon={null}
                            active={true}
                        />
                        <ChuyenBayDuocChon
                            directionStr={'về'}
                            sanBayDi={'Hà Nội (HAN)'}
                            sanBayVe={'Hồ Chí Minh (SGN)'}
                            ngay={'2024-04-25'}
                            hanhKhach={1}
                            soChuyenBay={100}
                            chuyenDaChon={null}
                            active={false}
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        <BoLoc />
                        <div className="col-span-3">
                            <CacNgayKeTiep />
                            <DanhSachChuyenBay />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
