function CacNgayKeTiepItem({ ngay, active }) {
    const date = new Date(ngay);
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const thuTrongTuan = daysOfWeek[date.getDay()];
    const ngayFormat = `${date.getDate()} tháng ${date.getMonth() + 1}, ${date.getFullYear()}`;
    return (
        <div
            className={`col-span-1 p-2 bg-opacity-50 rounded-md text-sm font-semibold cursor-pointer hover:bg-sky-100 hover:text-sky-500
            ${active ? 'bg-sky-200 text-sky-500' : 'bg-gray-200 text-gray-500'}`}
        >
            <p className="w-full text-center">{thuTrongTuan}</p>
            <p className="w-full text-center">{ngayFormat}</p>
        </div>
    );
}

export default CacNgayKeTiepItem;
