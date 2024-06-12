import React from 'react';
import ReactDom from 'react-dom/client';


export default function Hello() {
    return (
        <h1 className="text-3xl font-bold underline bg-red-600">Hello React</h1>
    )
}

const container = document.getElementById('hello');
const root = ReactDom.createRoot(container);
root.render(<Hello />);