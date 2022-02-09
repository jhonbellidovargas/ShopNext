import React, {useContext} from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
// import '@styles/MyOrder.scss';
import styles from '@styles/MyOrder.module.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => (
					<OrderItem key={`orde-item-${product.id}`} product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<Link className="primary-button" href='/checkout'>
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
