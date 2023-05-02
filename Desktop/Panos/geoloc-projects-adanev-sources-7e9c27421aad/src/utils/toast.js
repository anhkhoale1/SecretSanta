import { ToastContainer, toast, Zoom } from 'react-toastify';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) =>
    toast.success(message, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom
    });

const notifyError = (message) =>
    toast.error(message, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom
    });

// eslint-disable-next-line no-unused-expressions
<ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false}
                newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover transition={Zoom} />;

export { ToastContainer, notifySuccess, notifyError };
