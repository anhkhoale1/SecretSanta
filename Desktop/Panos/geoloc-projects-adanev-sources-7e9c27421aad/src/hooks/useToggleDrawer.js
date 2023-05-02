import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';

const useToggleDrawer = () => {
  const [item, setItem] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { isDrawerOpen, toggleModal } = useContext(SidebarContext);

  const handleModalOpen = (item) => {
    setDisabled(true);
    setItem(item);
    toggleModal();
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setItem(null);
    }
  }, [isDrawerOpen]);

  return {
    disabled,
    setDisabled,
    item,
    setItem,
    handleModalOpen,
  };
};

export default useToggleDrawer;
