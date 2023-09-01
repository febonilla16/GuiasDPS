import Modal from "./Modal";
import {useModal} from "../hooks/useModal"
import {data} from "./data"; 


const Modals = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, }) =>{
    const [isOpenModal1,openModal1,closeModal1,selectedProduct1] = useModal(false);
    
    const onAddProduct = product => 
    {
         if (allProducts.find(item => item.id === product.id)){
     const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item );
     setTotal(total + product.price * product.quantity); 
     setCountProducts(countProducts + product.quantity);
     return setAllProducts([...products]);} 
     setTotal(total + product.price * product.quantity); 
     setCountProducts(countProducts + product.quantity); 
     setAllProducts([...allProducts, product]);
     closeModal1();
    };
    return <div>
    <h2>Modales</h2>
    <div className='container-items'> {data.map(
            
            product => ( 
            <div className='item' key={product.id}>     
            <figure> 
            <img src={product.urlImage} alt={product.title} /> 
            </figure>
            <div className='info-product'>
            <h2>{product.nameProduct}</h2> <p className='price'>${product.price}</p>
            

            <button onClick={()=>openModal1(product)}>Ver detalles</button>
                {/**() => onAddProduct(product) */}

            </div> 
            </div>
            
            )
            
            )
            
            }
            
        </div>
   
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {
        selectedProduct1 && (
          <>
            <h3>{selectedProduct1.title}</h3>
                <p>{selectedProduct1.price}</p>
            <img src={selectedProduct1.urlImage} alt="Producto" />
            <button onClick={() => {onAddProduct(selectedProduct1)}}>Agregar al carrito</button>
          </>
        )}
        </Modal>
    </div>
};
export default Modals;