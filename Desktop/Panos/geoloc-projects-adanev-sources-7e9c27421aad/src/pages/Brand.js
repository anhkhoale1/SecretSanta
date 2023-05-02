import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart} from 'react-icons/fi';
import { API,graphqlOperation } from 'aws-amplify'
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import {randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";
import { useHistory ,Link} from 'react-router-dom';
import { listMarques } from '../graphql/queries';
import { MdAddTask, MdCreate,MdDeleteOutline,MdDelete } from 'react-icons/md';
import { Button } from '@windmill/react-ui';
import { deleteMarque } from '../graphql/mutations';
const Brand = () => {
  
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const { toggleDrawer } =  useContext(SidebarContext);
  const [marques, setMarques] = useState([])
  const history = useHistory();

async function fetchProducts() {
  try { 
    const apiData = await API.graphql({ query: listMarques })
    const marquesData = apiData.data.listMarques.items
    setMarques(marquesData)
    console.log('marques:', marquesData)
  } catch (err) {
    console.log('error fetching marques', err)
  }
}
useEffect(() => {
  fetchProducts()

}, [])
async function handleDelete(id) {
  console.log('Deleting marque with ID:', id);
  try {
    const result = await API.graphql(graphqlOperation(deleteMarque, { input: { id } }));
    console.log('Deletion result:', result);
    fetchProducts();
  } catch (error) {
    console.log('Error deleting marque', error);
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
    return (
        <>
            <PageTitle >Marque</PageTitle>
            <MainDrawer>
                <NewItemDrawer item={item} />
            </MainDrawer>
            {loading && <Loading />}
<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Link to="/AddBrand" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Add brand 
      </Link>
  </div>
            <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Slug</th>
      <th>Type</th>
      <th>Fournisseur</th>
    </tr>
  </thead>
  <tbody>
    {marques.map((marque) => (
      <tr key={marque.id}>
        <td>{marque.name}</td>
        <td>{marque.slug}</td>
        <td>{marque.type}</td>
        <td>{marque.supplier}</td>
        <td><Button icon={MdCreate} className="ml-2" onClick={() => toggleForm()}></Button>
        <Button style={{backgroundColor: "red"}} icon={MdDelete} className="ml-2" onClick={() => handleDelete(marque.id)}></Button>
        </td>
      </tr>
      
    ))}

  </tbody>
</table>



        </>
    );
};

export default Brand;
