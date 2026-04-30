import axios from 'axios';

const API = `https://customer-dashboard-hhnd.onrender.com/customers`;
export const getCustomers = () => axios.get(API);
console.log('API URL:', API);

export const addCustomer = (data: any) =>
  axios.post(API, data);

export const deleteCustomer = (id: number) =>
  axios.delete(`${API}/${id}`);