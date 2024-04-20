import CacNgayKeTiepItem from './cac_ngay_ke_tiep_item';

function CacNgayKeTiep() {
    return (
        <div className="py-2 px-4 bg-white rounded-lg">
            <div className="grid grid-cols-4 gap-2">
                <CacNgayKeTiepItem ngay={'2024-04-14'} active={true} />
                <CacNgayKeTiepItem ngay={'2024-04-15'} active={false} />
                <CacNgayKeTiepItem ngay={'2024-04-16'} active={false} />
                <CacNgayKeTiepItem ngay={'2024-04-17'} active={false} />
            </div>
        </div>
    );
}

export default CacNgayKeTiep;
