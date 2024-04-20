'use client';

import { useState, useEffect } from 'react';

export default function ThongTinHanhKhach() {
    return (
        <div className="bg-white p-4 rounded-md">
            <h3 className="mb-6 font-medium">
                <i>Thông tin hành khách</i>
            </h3>
            <div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>Hành khách 1</i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-4 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-hanh-khach-1" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-hanh-khach-1" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>Hành khách 2</i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-4 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-hanh-khach-2" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-hanh-khach-2" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>
                            Trẻ em 1 <span>(2-11 tuổi)</span>
                        </i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Ngày sinh
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-tre-em-1" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-tre-em-1" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>
                            Trẻ em 2 <span>(2-11 tuổi)</span>
                        </i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Ngày sinh
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-tre-em-2" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-tre-em-2" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>
                            Em bé 1 <span>{'(<2 tuổi)'}</span>
                        </i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Ngày sinh
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-em-be-1" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-em-be-1" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border px-2 mt-2 py-1 rounded">
                        <label htmlFor="" className="text-sm text-gray-500 font-medium">
                            Chọn người lớn đi cùng
                        </label>
                        <select name="" id="" className="outline-none w-full">
                            <option value="">A</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm text-sky-400 font-medium mb-2">
                        <i>
                            Em bé 2 <span>{'(<2 tuổi)'}</span>
                        </i>
                    </p>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Họ tên
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-2 w-full border px-2 py-1 rounded">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Ngày sinh
                            </label>
                            <input className="w-full outline-none" type="text" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-between">
                            <label htmlFor="" className="text-sm text-gray-500 font-medium">
                                Giới tính
                            </label>
                            <div className=" flex justify-between items-center">
                                <label>
                                    <input className="mr-2" type="radio" value="nam" name="gioi-tinh-em-be-2" />
                                    Nam
                                </label>
                                <label>
                                    <input className="mr-2" type="radio" value="nu" name="gioi-tinh-em-be-2" />
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border px-2 mt-2 py-1 rounded">
                        <label htmlFor="" className="text-sm text-gray-500 font-medium">
                            Chọn người lớn đi cùng
                        </label>
                        <select name="" id="" className="outline-none w-full">
                            <option value="">A</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
