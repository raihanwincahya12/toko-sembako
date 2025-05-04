import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import Card from '../molecules/Card';
import DashboardTemplate from '../templates/DashboardTemplate';
import Spinner from '../atoms/Spinner';
import InputField from '../atoms/InputField';
import Pagination from '../molecules/Pagination';

const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Gagal fetch data!");
    return res.json();
  };

const Users = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const { data: users = [], isLoading, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 5, // cache 5 menit
    });

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const displayedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    return (
        <DashboardTemplate user={{ name: "Raihan" }}>
      <h2 className="text-2xl font-bold mb-4">Daftar Pengguna</h2>

      <div className="mb-6">
        <InputField
          placeholder="Cari nama pengguna..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="min-h-[400px] flex flex-col justify-between">
    {isLoading ? (
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    ) : isError ? (
      <p className="text-red-500">Terjadi kesalahan: {error.message}</p>
    ) : filteredUsers.length === 0 ? (
      <p className="text-gray-500">Tidak ada pengguna ditemukan.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedUsers.map((user) => (
          <Card key={user.id} title={user.name}>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
            <p className="text-sm text-gray-600">📍 {user.address.city}</p>
          </Card>
        ))}
      </div>
    )}

    {/* Pagination Selalu Di Bawah */}
    <div className="mt-6">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  </div>
  </DashboardTemplate>
    )
}

export default Users