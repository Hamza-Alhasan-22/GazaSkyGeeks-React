import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/productPage';
import HomePage from './pages/homePage';

export const NavBar = createContext(null);

function App() {
  const [cardsArry, setCardsArry] = useState([]);
  const [favArryProducts, setFavArryProducts] = useState([]);
  const [close, setClose] = useState(false);
  const [pageId, setPageId] = useState(0);
  const [typeFilter, setTypeFilter] = useState('');
  return (
    <>
      <NavBar.Provider value={{
        cards: [cardsArry, setCardsArry],
        closeState: [close, setClose],
        favList: [favArryProducts, setFavArryProducts],
        goToProductsPage: [pageId, setPageId],
        goToTypeFilter: [typeFilter, setTypeFilter]
      }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='products' element={<ProductPage pageState={[pageId, setPageId]} />} />
          </Routes>
        </BrowserRouter>
      </NavBar.Provider>
    </>
  );
}

export default App;
