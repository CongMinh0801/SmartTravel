function Footer() {
    return (
        <div className="border-t p-4 flex justify-between text-xs text-gray-500">
            <div className="flex">
                <div className="mr-8">
                    <span className="w-2 h-2 mr-2 inline-block rounded-full bg-gray-200"></span>
                    <span>Chính sách bảo mật</span>
                </div>
                <div>
                    <span className="w-2 h-2 mr-2 inline-block rounded-full bg-gray-200"></span>
                    <span>Điều khoản sử dụng</span>
                </div>
            </div>
            <div>Copy right 2024 @Nice Solution</div>
        </div>
    );
}

export default Footer;
