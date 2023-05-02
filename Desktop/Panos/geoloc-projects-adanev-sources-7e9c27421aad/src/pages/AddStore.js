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
import { createStore } from '../graphql/mutations';

const AddStore = () => {

  const[store, setStore] = useState('');
  const[name, setName] = useState('');
  const[userlog, setUserlog] = useState('');
  const[mdps, setMdps] = useState('');
  const[adress, setAdress] = useState('');
  const[tel_contact, setTel_contact] = useState('');
  const[email_contact, setEmail_contact] = useState('');
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
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const newProduct = {
          name,
          userlog,
          mdps,
          adress,
          tel_contact,
          email_contact
        };
        
        await API.graphql({
          query: createStore,
          variables: {
            input: newProduct
          }
        });
    
        setAdress('');
        setStore('');
        setName('');
        setUserlog('');
        setMdps('');
        setTel_contact('');
        setEmail_contact('');
        
        // Clear form fields after submission
        
        alert('Store added successfully!');
      } catch (err) {
        console.log('Error creating product:', err);
        alert('An error occurred while trying to create the product.');
      }
    };
    
    return (
        <>
            <PageTitle>Store</PageTitle>

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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="userlog" className="block text-sm font-medium text-gray-700">User</label>
            <input
              type="text"
              name="userlog"
              id="userlog"
              value={userlog}
              onChange={(event) => setUserlog(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="mdps" className="block text-sm font-medium text-gray-700">mdp</label>
            <input
              type="text"
              name="mdps"
              id="mdps"
              value={mdps}
              onChange={(event) => setMdps(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="adress" className="block text-sm font-medium text-gray-700">adress</label>
            <input
              type="text"
              name="adress"
              id="adress"
              value={adress}
              onChange={(event) => setAdress(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="tel_contact" className="block text-sm font-medium text-gray-700">tel_contact</label>
            <input
              type="text"
              name="tel_contact"
              id="tel_contact"
              value={tel_contact}
              onChange={(event) => setTel_contact(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email_contact" className="block text-sm font-medium text-gray-700">email_contact</label>
            <input
                type="text"
                name="email_contact"
                id="email_contact"
                value={email_contact}
                onChange={(event) => setEmail_contact(event.target.value)}
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

export default AddStore;
