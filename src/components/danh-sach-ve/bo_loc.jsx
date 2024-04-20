import BoLocTheoHangVe from './bo_loc_theo_hang_ve';
import BoLocTheoKhoangGia from './bo_loc_theo_khoang_gia';
import BoLocTheoDiemDung from './bo_loc_theo_diem_dung';
import BoLocTheoThoiGian from './bo_loc_theo_thoi_gian';

function BoLoc() {
    return (
        <div className="col-span-1 p-4 bg-white rounded-lg">
            <BoLocTheoKhoangGia />
            <BoLocTheoDiemDung />
            <BoLocTheoThoiGian />
            <BoLocTheoHangVe />
        </div>
    );
}

export default BoLoc;
