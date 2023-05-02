import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart} from 'react-icons/fi';
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import { API ,graphqlOperation} from 'aws-amplify'
import { listProducts } from '../graphql/queries';
import { MdAddTask, MdCreate,MdDeleteOutline,MdDelete } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import {randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";
import { Button } from '@windmill/react-ui';
import { deleteProducts } from '../graphql/mutations';

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const [product, setProduct] = useState([])
  const listTodos = `query listProducts {
    listProducts{
      items{
        id
        name
        description
        price
        slug
        images
        badges
        rating
        reviews
        availability
        compatibility
        attributes
        marqueID
        suppliersID
        type
        marque
      }
    }
  }`;
async function fetchProduct() {
  try { 
    const apiData = await API.graphql({ query: listProducts })
    const productData = apiData.data.listProducts.items
    setProduct(productData)
    console.log('product:', productData)
  } catch (err) {
    console.log('error fetching product', err)
  }
}

async function handleDelete(id) {
  console.log('Deleting marque with ID:', id);
  try {
    const result = await API.graphql(graphqlOperation(deleteProducts, { input: { id } }));
    console.log('Deletion result:', result);
    fetchProduct();
  } catch (error) {
    console.log('Error deleting product', error);
  }
}
useEffect(() => {
  fetchProduct()
}, [])
const list = async () => {
  console.log('listing todos');
  const allTodos = await API.graphql(graphqlOperation(listProducts));
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
            <PageTitle>Product</PageTitle>
            <MainDrawer>
                <NewItemDrawer item={item} />
            </MainDrawer>
            {loading && <Loading />}
            
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Link to="/AddProduct" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Add 
      </Link>
  </div>
            <table className="table-auto w-full">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-2 px-4 text-left">description</th>
      <th className="py-2 px-4 text-left">price</th>
      <th className="py-2 px-4 text-left">slug</th>
      <th className="py-2 px-4 text-left">Stock</th>  
      <th className="py-2 px-4 text-left">attributes</th>
      <th className="py-2 px-4 text-left">marque</th>
      <th className="py-2 px-4 text-left">Store</th>
      <th className="py-2 px-4 text-left">supplier</th>
      <th className="py-2 px-4" />
    </tr>
  </thead>
  <tbody>
    {product.map((product, index) => (
      <tr key={index}>
        <td className="py-2 px-4">
          <div className="flex items-center">
            <div>
              <div className="font-semibold">{product.description}</div>
              <div className="text-sm text-gray-500">{product.name}</div>
              <div className="text-sm text-gray-500">{product.slug}</div>
              <div className="text-sm text-gray-500">{product.compatibility}</div>
            </div>
          </div>
        </td>
        <td className="py-2 px-4">{product.price}</td>
        <td className="py-2 px-4">{product.slug}</td>
        <td className="py-2 px-4">{/* slug */}</td>
        <td className="py-2 px-4">{product.availability}</td>
        <td className="py-2 px-4">{product.attributes}</td>
        <td className="py-2 px-4">{product.marque}</td>
        <td className="py-2 px-4">{product.reviews}</td>
        <td className="py-2 px-4">{product.supplier}</td>
        <td className="py-2 px-4">
        <Button icon={MdCreate} className="ml-3" onClick={() => toggleForm()}></Button>
        <Button style={{backgroundColor: "red"}} icon={MdDelete} className="ml-2" onClick={() => handleDelete(product.id)}></Button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </>
    );
};

export default Product;
