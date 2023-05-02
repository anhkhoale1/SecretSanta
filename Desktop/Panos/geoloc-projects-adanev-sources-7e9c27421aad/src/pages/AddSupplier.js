import React, {useContext, useState} from 'react';
import {ImStack, ImCreditCard} from 'react-icons/im';
import {FiShoppingCart} from 'react-icons/fi';
import { API } from 'aws-amplify'
import CardItemTwo from '../components/dashboard/CardItemTwo';
import {useEffect} from 'react';
import PageTitle from "../components/Typography/PageTitle";
import {randomFloatOf6Digits} from "../utils/tools";
import Loading from "../components/preloader/Loading";
import MainDrawer from "../components/drawer/MainDrawer";
import NewItemDrawer from "../components/drawer/NewItemDrawer";
import { SidebarContext } from "../context/SidebarContext";
import { useHistory } from 'react-router-dom';
import { createSuppliers } from '../graphql/mutations';
const AddSupplier = () => {

    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usersID, setUsersID] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const newProduct = {
          name: name,
          email: email,
          password: password,
          usersID: usersID,
        };
    
        await API.graphql({
          query: createSuppliers,
          variables: {
            input: newProduct
          }
        });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setPassword('');
        setUsersID('');
  
        alert('Product added successfully!');
      } catch (err) {
        console.log('Error creating product:', err);
        alert('An error occurred while trying to create the product.');
      }
    };
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
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
            <PageTitle>Dashboard</PageTitle>
            <MainDrawer>
                <NewItemDrawer item={item} />
            </MainDrawer>
            {loading && <Loading />}
            <div className="grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3">
                <CardItemTwo title="Today Order" Icon={ImStack} price={randomFloatOf6Digits()}
                             className="text-white bg-teal-500"/>
                <CardItemTwo title="This Month" Icon={FiShoppingCart} price={randomFloatOf6Digits()}
                             className="text-white bg-blue-500"/>
                <CardItemTwo title="Total Order" Icon={ImCreditCard} price={randomFloatOf6Digits()}
                             className="text-white bg-green-500"/>
            </div>
            <div className="mt-7">
            <div className="grid grid-cols-1">
    <div className="col-span-1">
      <div className="shadow overflow-hidden sm:rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="Email"
                id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">UsersID</label>
            <input
                type="text"
                name="usersID"
                id="usersID"
                value={usersID}
                onChange={(event) => setUsersID(event.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            </div>
            </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save
                </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
       
        </>
    );
};

export default AddSupplier;
