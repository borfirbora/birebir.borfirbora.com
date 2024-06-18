import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import CalEmbed from "./components/CalEmbed"
import Cal from "@calcom/embed-react";
function App() {
    return (
        <>
        <Helmet>
            <title>Anasayfa - Birebir Eğitimler</title>
        </Helmet>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App;