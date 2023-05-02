import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Textarea } from '@windmill/react-ui';

import Title from '../form/Title';
import Error from '../form/Error';
import LabelArea from '../form/LabelArea';
import InputArea from '../form/InputArea';
import DrawerButton from '../form/DrawerButton';
import useNewItemSubmit from "../../hooks/useNewItemSubmit";

const NewItemDrawer = ({ item }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors
  } = useNewItemSubmit(item);

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50">
        {item ? (
          <Title title="Update Item" description="Updated an item and necessary information from here"/>
        ) : (
          <Title title="Add Item" description="Add an item and necessary information from here"/>
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative">
        <form onSubmit={handleSubmit(onSubmit)} className="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Attribute 1" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Attribute 1"
                  name="attributeUn"
                  type="text"
                  placeholder="Attribute 1"
                />
                <Error errorName={errors.attributeUn} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Attribute 2" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  required="false"
                  label="Attribute Deux"
                  name="attributeDeux"
                  type="text"
                  placeholder="Attribute Deux"
                />
                <Error errorName={errors.attributeDeux} />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Attribute Trois" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  className="border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                  {...register('attributeTrois', {
                    required: 'Attribute Trois is required!',
                    minLength: {
                      value: 20,
                      message: 'Minimum 20 character!',
                    },
                  })}
                  name="attributeTrois"
                  placeholder="Attribute Trois"
                  rows="4"
                  spellCheck="false"
                />
                <Error errorName={errors.attributeTrois} />
              </div>
            </div>
          </div>
          <DrawerButton item={item} title="Item" />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(NewItemDrawer);
