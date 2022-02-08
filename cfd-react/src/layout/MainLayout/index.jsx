import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SearchBar from '../../components/searchBar';
import SideMenu from '../../components/SideMenu';
import Footer from '../../components/Footer';
import ModalCard from '../../components/modalCard';


const MainLayout = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <SideMenu/>
            <main id="main-content">
                <Outlet/>
            </main>
            <ModalCard/>/
            <Footer />
        </div>
    )
}
export default  MainLayout;