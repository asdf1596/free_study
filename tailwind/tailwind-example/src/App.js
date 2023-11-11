// src/App.js

import React from "react";
import "./App.css";

function App() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to My React + Tailwind CSS App
                </h1>
                <div className="max-w-md mx-auto">
                    <div className="bg-blue-500 text-white p-4 rounded-md mb-4">
                        <p className="text-lg font-semibold">Special Offer!</p>
                        <p>
                            Get 20% off on your first purchase. Use code:{" "}
                            <span className="font-mono">FIRST20</span>
                        </p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p className="text-lg font-semibold mb-2">
                            Latest Products
                        </p>
                        <ul>
                            <li className="flex items-center mb-2">
                                <img
                                    src="https://placekitten.com/50/50"
                                    alt="Product"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>Awesome Product 1</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <img
                                    src="https://placekitten.com/51/51"
                                    alt="Product"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>Awesome Product 2</span>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://placekitten.com/52/52"
                                    alt="Product"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>Awesome Product 3</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
