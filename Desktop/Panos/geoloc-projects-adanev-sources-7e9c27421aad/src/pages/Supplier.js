import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart} from 'react-icons/fi';
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import {
  Button,
    Table,  
} from "@windmill/react-ui";
import { listSuppliers } from '../graphql/queries';
import { randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";
import { useHistory } from 'react-router-dom';
import { API,graphqlOperation } from 'aws-amplify'
import { Link } from 'react-router-dom';
import { MdAddTask, MdCreate,MdDeleteOutline,MdDelete } from 'react-icons/md';
import { deleteSuppliers } from '../graphql/mutations';
const Supplier = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const { toggleDrawer } =  useContext(SidebarContext);
    const [supplier, setSupplier] = useState([])
    async function fetchSupplier() {
    try { 
      const apiData = await API.graphql({ query: listSuppliers })
      const supplierData = apiData.data.listSuppliers.items
      setSupplier(supplierData)
      console.log('Supplier:', supplierData)
    } catch (err) {
      console.log('error fetching Supplier', err)
    }
  }
    const spin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    
  const toggleForm = (item) => {
    setItem(item);
    toggleDrawer();
    }
  useEffect(() => {
    fetchSupplier()
  }, [])
  async function handleDelete(id) {
    console.log('Deleting marque with ID:', id);
    try {
      const result = await API.graphql(graphqlOperation(deleteSuppliers, { input: { id } }));
      console.log('Deletion result:', result);
      fetchSupplier();
    } catch (error) {
      console.log('Error deleting marque', error);
    }
  }
    return (
        <>
        <PageTitle >Fournisseur</PageTitle>
        <MainDrawer>
            <NewItemDrawer item={item} />
        </MainDrawer>
        {loading && <Loading />}
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Link to="/AddSupplier" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Add Supplier
      </Link>
  </div>
  <Table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users ID</th>   
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {supplier.map((supplier, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{supplier.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supplier.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supplier.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {supplier.password}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{supplier.usersID}</td>
          <td className="px-6 py-4 whitespace-nowrap">
          <Button icon={MdCreate} className="ml-2" onClick={() => toggleForm()}></Button>
        <Button style={{backgroundColor: "red"}} icon={MdDelete} className="ml-2" onClick={() => handleDelete(supplier.id)}></Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
    </>
    );
};

export default Supplier;


