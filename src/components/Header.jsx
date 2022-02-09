import React, {useState,useContext} from "react";
import Image from 'next/image';
import AppContext from "@context/AppContext";
import Link from "next/link";

import Menu from '@components/Menu';
import MyOrder from "@containers/MyOrder";

// import '@styles/Header.scss';
import styles from '@styles/Header.module.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle,setToggle] = useState(false);
  const [toggleOrders,setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
  }
  return (
    <>
      <nav className={styles.Nav}>
      <img src={menu.src} alt="menu" className={styles.menu} />

      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            strivex@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrders}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {
        toggle && <Menu />
      }
      {
        toggleOrders && <MyOrder />
      }
    </nav>
    </>
  );
};

export default Header;
