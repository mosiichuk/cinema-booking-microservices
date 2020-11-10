import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Navbar from "Components/Navbar/Navbar";
import ComingSoonPage from "containers/CommingSoonPage/ComingSoonPage";
import MovieDetails from "containers/MovieDetails/MovieDetails";
import {AppContextProvider} from "context/AppContext";
import Footer from "Components/Footer/Footer";
import OrderTicketsSection from "./containers/OrderTicketsSection/OrderTicketsSection";

function App() {

    return (
        <BrowserRouter>
            <AppContextProvider>
                <Navbar/>

                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/coming-soon">
                        <ComingSoonPage/>
                    </Route>
                    <Route exact path="/movies/:id">
                        <MovieDetails/>
                    </Route>
                    <Route exact path="/showings/:showingId">
                        <OrderTicketsSection/>
                    </Route>
                </Switch>

                <Footer/>
            </AppContextProvider>
        </BrowserRouter>
    );
}

export default App;
