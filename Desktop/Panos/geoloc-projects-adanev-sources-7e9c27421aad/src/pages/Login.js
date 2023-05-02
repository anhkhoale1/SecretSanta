import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@windmill/react-ui';

import Error from '../components/form/Error';
import LabelArea from '../components/form/LabelArea';
import InputArea from '../components/form/InputArea';
import LoginImage from '../assets/img/login.jpg';
import useLoginSubmit from '../hooks/useLoginSubmit';

const Login = () => {

  const { onSubmit, register, handleSubmit, errors, loading } = useLoginSubmit();

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full"
                src={LoginImage}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-6 text-6xl font-semibold text-green-500 font-righteous">Panos</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                  <LabelArea label="Email" />
                  <InputArea register={register} defaultValue="admin@gmail.com" label="Email" name="email" type="email" placeholder="john@doe.com"/>
                  <Error errorName={errors.email} />

                  <div className="mt-6"></div>

                  <LabelArea label="Password" />
                  <InputArea register={register} defaultValue="1234567123" label="Password" name="password" type="password" placeholder="***************"/>
                  <Error errorName={errors.password} />

                  <Button disabled={loading} type="submit" className="mt-4 h-12 w-full font-ubuntu" to="/dashboard">Connexion</Button>
                </form>

                <p className="mt-4">
                  <Link className="text-sm font-medium text-green-500 hover:underline" to="/forgot-password">
                    Forgot your password?
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
