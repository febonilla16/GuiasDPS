import { useState } from "react";


export const useModal = (initialValue=false) => {
    const[isOpen,setIsOpen] = useState(initialValue)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true)
    }

    const closeModal = () => {
        setSelectedProduct(null);
        setIsOpen(false)
    }

    return [isOpen,openModal,closeModal,selectedProduct];
}