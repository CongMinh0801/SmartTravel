import './scrollbar.css';

function ListAirport({ setSanBay, sanBay, searchAirport, setSearchAirport, setSelectAirport }) {
    return (
        <div
            className={`absolute w-2/3 lg:w-1/3 top-full left-0 -translate-y-14 ${
                sanBay == 'Đi' ? 'translate-x-4 block' : sanBay == 'Về' ? 'translate-x-24 block' : 'hidden'
            } border rounded shadow-lg z-10 bg-white`}
        >
            <div className="p-2">
                <input
                    type="text"
                    value={searchAirport}
                    onChange={(event) => setSearchAirport(event.target.value)}
                    className="outline-none border py-2 px-4 w-full rounded"
                />
            </div>
            <div className="pr-2 pb-2">
                <ul className="max-h-[400px] overflow-y-auto" id="scrollbar">
                    <li
                        onClick={() => {
                            setSanBay('A1');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay 1
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A2');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay 2
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A3');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay 3
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A4');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay 4
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A5');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay 5
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                    <li
                        onClick={() => {
                            setSanBay('A');
                            setSelectAirport('Không');
                        }}
                        className="p-2 pl-4 border-b border-gray-50 hover:bg-gray-200"
                    >
                        Sân bay
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ListAirport;
