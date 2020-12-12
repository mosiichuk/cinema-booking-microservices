import React from 'react';
import {Route, useLocation} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Navbar from "Components/Navbar/Navbar";
import ComingSoonPage from "containers/CommingSoonPage/ComingSoonPage";
import MovieDetails from "containers/MovieDetails/MovieDetails";
import {AppContextProvider} from "context/AppContext";
import Footer from "Components/Footer/Footer";
import OrderTicketsSection from "./containers/OrderTicketsSection/OrderTicketsSection";
import OrderConfirmation from "./containers/OrderConfirmation/OrderConfirmation";

function App() {
    const location = useLocation();

    return (
        <AppContextProvider>
            <Navbar/>

            <Route path="/">
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/coming-soon" component={ComingSoonPage}/>
                <Route exact path="/movies/:id" component={MovieDetails}/>
                <Route exact path="/showings/:showingId" component={OrderTicketsSection}/>
                <Route exact path="/orderConfirmation/:orderId" component={OrderConfirmation}/>
            </Route>

            {location.pathname !== '/' && <Footer/>}
        </AppContextProvider>
    );
}

export default App;
