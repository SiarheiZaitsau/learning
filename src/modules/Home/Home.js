import React from 'react';
import styles from './home.module.scss';
import Header from '../../components/Header/Header';
import AdBlock from '../../components/AdBlock/AdBlock';
import ContentSlides from '../../components/ContentSlides/ContentSlides';
import Gifts from '../../components/Gifts/Gifts';
import Events from '../../components/Events/Events';
import OrderFree from '../../components/OrderFree/OrderFree';
import FeedBack from '../../components/FeedBack/FeedBack';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <AdBlock />
            <ContentSlides />
            <Gifts />
            <Events />
            <OrderFree />
            <FeedBack />
            <Footer />
        </div>
    )
  }
  
  export default Home;