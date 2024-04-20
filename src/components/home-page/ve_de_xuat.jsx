import VeDeXuatItem from './ve_de_xuat_item';

function VeDeXuat() {
    return (
        <div className="w-full mt-2">
            <h3 className="text-lg font-semibold">
                <i>Chuyến bay giá tốt từ thành phố Hồ Chí Minh</i>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
                <VeDeXuatItem />
            </div>
        </div>
    );
}

export default VeDeXuat;
