import axios from 'axios';

const API = `${process.env.NEXT_PUBLIC_API_URL}/customers`;
export const getCustomers = () => axios.get(API);
console.log('API URL:', API);

export const addCustomer = (data: any) =>
  axios.post(API, data);

export const deleteCustomer = (id: number) =>
  axios.delete(`${API}/${id}`);