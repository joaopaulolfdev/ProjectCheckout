import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import React from 'react';

const PaymentSuccess = ({ title }) => {
    useDocumentTitle(title);
    return (
        <h5 className="text-center">Pagamento feito com sucesso!</h5>
    )
}

export default PaymentSuccess;