'use client';

import { useEffect, useState, useRouter } from 'react';
import StepItem from './step_item';

function Steps() {
    const router = useRouter();
    const currentUrl = router.asPath;
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        // Lấy URI hiện tại khi component được render
        setCurrentPath(currentUrl);
    }, []);

    return (
        <div className="p-2 flex justify-center items-center">
            <StepItem number={1} title={'Chọn vé'} end={false} active={currentPath.includes('dat-ve/danh-sach-ve')} />
            <StepItem
                number={2}
                title={'Thông tin hành khách'}
                end={false}
                active={currentPath.includes('dat-ve/thong-tin-hanh-khach')}
            />
            <StepItem number={1} title={'Thanh toán'} end={true} active={currentPath.includes('dat-ve/thanh-toan')} />
        </div>
    );
}

export default Steps;
