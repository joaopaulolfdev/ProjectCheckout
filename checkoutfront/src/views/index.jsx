import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from '../views/Landing';
import NotFound from '../views/Error/404';
import Header from '../components/shared/header';
import Chat from '../views/Cart'
import PaymentSuccess from '../views/Cart/Payment/sucessfull';
import PaymentCancel from '../views/Cart/Payment/cancel';
import Product from '../views/Product';
import Category from './Category';

const Views = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <Routes>
                    <Route
                        path="/"
                        element={<Landing title="Página inicial" />}
                    />
                    <Route
                        path="/cart"
                        element={<Chat title="Seu carrinho" />}
                    />
                    <Route
                        path="/product/:id"
                        element={<Product title="Detalhes do produto" />}
                    />
                    <Route
                        path="/category/:id"
                        element={<Category title="Detalhes da categoria" />}
                    />
                    <Route
                        path="/payment/success"
                        element={<PaymentSuccess title="O pagamento foi realizado com sucesso" />}
                    />
                    <Route
                        path="/payment/cancel"
                        element={<PaymentCancel title="O pagamento foi cancelado" />}
                    />
                    <Route
                        path="*"
                        element={<NotFound title="página não encontrada" />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default Views;