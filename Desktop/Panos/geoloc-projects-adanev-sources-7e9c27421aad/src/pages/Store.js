import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart} from 'react-icons/fi';
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import { API ,graphqlOperation} from 'aws-amplify'
import { listStores } from '../graphql/queries';
import { MdAddTask, MdCreate,MdDeleteOutline,MdDelete } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import {randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";
import { Button } from '@windmill/react-ui';
import { deleteStore} from '../graphql/mutations';

const Store = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const [Store, setStore] = useState([])

async function fetchStore() {
  try { 
    const apiData = await API.graphql({ query: listStores })
    const StoreData = apiData.data.listStores.items
    setStore(StoreData)
    console.log('Store:', StoreData)
  } catch (err) {
    console.log('error fetching Store', err)
  }
}

async function handleDelete(id) {
  console.log('Deleting store with ID:', id);
  try {
    const result = await API.graphql(graphqlOperation(deleteStore, { input: { id } }));
    console.log('Deletion result:', result);
    fetchStore();
  } catch (error) {
    console.log('Error deleting Store', error);
  }
}
useEffect(() => {
  fetchStore()
}, [])
const list = async () => {
  console.log('listing todos');
  const allTodos = await API.graphql(graphqlOperation(listStores));
  alert(JSON.stringify(allTodos));
};
    const { toggleDrawer } =  useContext(SidebarContext);
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
    }, []);

    return (
        <>
            <PageTitle>Store</PageTitle>
            <MainDrawer>
                <NewItemDrawer item={item} />
            </MainDrawer>
            {loading && <Loading />}
            
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Link to="/AddStore" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Add 
      </Link>
  </div>
            <table className="table-auto w-full">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-2 px-4 text-left">name</th>
      <th className="py-2 px-4 text-left">userlog</th>
      <th className="py-2 px-4 text-left">mdps</th>
      <th className="py-2 px-4 text-left">adress</th>
      <th className="py-2 px-4 text-left">tel_contact</th>
      <th className="py-2 px-4 text-left">email_contact</th>
      <th className="py-2 px-4 text-left">email_contact</th>
      <th className="py-2 px-4" />
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
      {Store.map((Store, index) => (

        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">{Store.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{Store.userlog}</td>
          <td className="px-6 py-4 whitespace-nowrap">{Store.tel_contact}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {Store.adress}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{Store.email_contact}</td>
          <td className="px-6 py-4 whitespace-nowrap">
          <Button icon={MdCreate} className="ml-2" onClick={() => toggleForm()}></Button>
        <Button style={{backgroundColor: "red"}} icon={MdDelete} className="ml-2" onClick={() => handleDelete(Store.id)}></Button>
          </td>
        </tr>
      ))}
    </tbody>
</table>
        </>
    );
};

export default Store;
