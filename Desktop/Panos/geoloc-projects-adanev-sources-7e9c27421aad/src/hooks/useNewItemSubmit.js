import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';

const useNewItemSubmit = (item) => {
  const { isDrawerOpen, closeDrawer } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const productData = {
      attributeUn: data.attributeUn,
      attributeDeux: data.attributeDeux,
      attributeTrois: data.attributeTrois,
      attributeQuatre: data.attributeQuatre,
    };

    if (item) {
      // Call update endpoint
      console.log("Update", productData);
      closeDrawer();
    } else {
      // Call update endpoint
      console.log("Add", productData);
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('attributeUn');
      setValue('attributeDeux');
      setValue('attributeTrois');
      setValue('attributeQuatre');
      return;
    }

    if (item) {
        setValue('attributeUn', item.attributeUn);
        setValue('attributeDeux', item.attributeDeux);
        setValue('attributeTrois', item.attributeTrois);
        setValue('attributeQuatre', item.attributeQuatre);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, setValue, isDrawerOpen]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useNewItemSubmit;
