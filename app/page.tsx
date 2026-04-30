'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CustomerForm from '@/components/CustomerForm';
import CustomerTable from '@/components/CustomerTable';

import {
  getCustomers,
  addCustomer,
  deleteCustomer,
} from '@/services/customerApi';

export default function Home() {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (data: any) => {
    await addCustomer(data);
    fetchData();
  };

  const handleDelete = async (id: number) => {
    await deleteCustomer(id);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <Header />
        <CustomerForm onSubmit={handleAdd} />
        <CustomerTable
          customers={customers}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}