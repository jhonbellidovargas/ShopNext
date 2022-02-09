import React,{useContext} from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
// import '../styles/OrderItem.scss';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';
const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (product) => {
		removeFromCart(product);
	}
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>$ {product?.price}</p>
			<Image src={close} alt="close" onClick={()=>handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
