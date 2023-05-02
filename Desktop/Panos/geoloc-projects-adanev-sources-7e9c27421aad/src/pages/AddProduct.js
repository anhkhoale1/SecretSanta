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
import { createProducts } from '../graphql/mutations';

const AddProduct = () => {
    const [id] = useState('');
    const [Affiliate, setAffiliate] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [images, setImages] = useState('');
    const [badges, setBadges] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState('');
    const [availability, setAvailability] = useState('');
    const [compatibility, setCompatibility] = useState('');
    const [attributes, setAttributes] = useState('');
    const [marque, setMarque] = useState('');
    const [supplier, setSupplier] = useState('');
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
            Affiliate: Affiliate,
            name: name,
            description: description,
            price: price,
            slug: slug,
            images: images,
            badges: badges,
            rating: rating,
            reviews: reviews,
            availability: availability,
            compatibility: compatibility,
            attributes: attributes,
    
          };
      
          await API.graphql({
            query: createProducts,
            variables: {
              input: newProduct
            }
          });
      
          // Clear form fields after submission
          setDescription('');
          setPrice('');
          setSlug('');
          setImages('');
          setBadges('');
          setRating('');
          setReviews('');
          setAvailability('');
          setCompatibility('');
          setAttributes('');
          setMarque('');
          setSupplier('');
    
          alert('Product added successfully!');
        } catch (err) {
          console.log('Error creating product:', err);
          alert('An error occurred while trying to create the product.');
        }
      };
    return (
        <>
            <PageTitle>Add Product</PageTitle>
 
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
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="text"
              name="images"
              id="images"
              value={images}
              onChange={(event) => setImages(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="badges" className="block text-sm font-medium text-gray-700">Badges</label>
            <input
              type="text"
              name="badges"
              id="badges"
              value={badges}
              onChange={(event) => setBadges(event.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Stock</label>
            <input
                type="text"
                name="availability"
                id="availability"
                value={availability}
                onChange={(event) => setAvailability(event.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Affiliate" className="block text-sm font-medium text-gray-700">Affiliate</label>
            <input
                type="text"
                name="Affiliate"
                id="Affiliate"
                value={Affiliate}
                onChange={(event) => setCompatibility(event.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Supplier</label>
            <input
                type="text"
                name="supplier"
                id="supplier"
                value={supplier}
                onChange={(event) => setSupplier(event.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Store</label>
            <input
                type="text"
                name="Reviwes"
                id="reviews"
                value={reviews}
                onChange={(event) => setReviews(event.target.value)}
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

export default AddProduct;
