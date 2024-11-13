import React, { createContext, useContext } from 'react';

export const CollectionContext = createContext([]);

export function CollectionProvider({ children }) {
  const collectionItems = [
    { name: 'Kids 1', price: 599, discount: 15, imgSrc: '/assets/Images/K1.jpg', rating: 5 },
    { name: 'Kids 2', price: 799, discount: 20, imgSrc: '/assets/Images/k5.jpg', rating: 4 },
    { name: 'Kids 3', price: 599, discount: 10, imgSrc: '/assets/Images/K2.jpg', rating: 4 },
    { name: 'Kids 4', price: 999, discount: 25, imgSrc: '/assets/Images/k4.jpg', rating: 5 },
    { name: 'Kids 5', price: 399, discount: 5, imgSrc: '/assets/Images/K3.jpg', rating: 3 },
    { name: 'Kids 6', price: 499, discount: 15, imgSrc: '/assets/Images/k6.jpg', rating: 4 },
    { name: 'Kids 7', price: 599, discount: 10, imgSrc: '/assets/Images/K1.jpg', rating: 4 },
    { name: 'Men 1', price: 599, discount: 10, imgSrc: '/assets/Images/M1.jpg', rating: 4 },
    { name: 'Men 2', price: 699, discount: 15, imgSrc: '/assets/Images/M2.jpg', rating: 5 },
    { name: 'Men 3', price: 499, discount: 20, imgSrc: '/assets/Images/M3.jpg', rating: 3 },
    { name: 'Men 4', price: 899, discount: 25, imgSrc: '/assets/Images/M4.jpg', rating: 5 },
    { name: 'Men 5', price: 799, discount: 10, imgSrc: '/assets/Images/M5.jpg', rating: 4 },
    { name: 'Men 6', price: 499, discount: 5, imgSrc: '/assets/Images/M6.jpg', rating: 3 },
    { name: 'Men 7', price: 599, discount: 15, imgSrc: '/assets/Images/M7.jpg', rating: 4 },
    { name: 'Men 8', price: 699, discount: 10, imgSrc: '/assets/Images/M8.jpg', rating: 5 },
    { name: 'T-Shirt', price: 599, discount: 20, imgSrc: '/assets/Images/M9.jpg', rating: 4 },
    { name: 'fashion-T-Shirt', price: 599, discount: 30, imgSrc: '/assets/Images/M2.jpg', rating: 4 },
    { name: 'Formal Wear', price: 599, discount: 10, imgSrc: '/assets/Images/W2.jpg', rating: 4 },
    { name: 'Casual Dress', price: 699, discount: 15, imgSrc: '/assets/Images/W3.jpg', rating: 5 },
    { name: 'Summer Dress', price: 499, discount: 20, imgSrc: '/assets/Images/W4.jpg', rating: 3 },
    { name: 'Evening Gown', price: 899, discount: 25, imgSrc: '/assets/Images/W5.jpg', rating: 5 },
    { name: 'Cocktail Dress', price: 799, discount: 10, imgSrc: '/assets/Images/W6.jpg', rating: 4 },
    { name: 'Party Wear', price: 499, discount: 5, imgSrc: '/assets/Images/W7.jpg', rating: 3 },
    { name: 'Formal Dress', price: 599, discount: 15, imgSrc: '/assets/Images/W8.jpg', rating: 4 },
  ];

  return (
    <CollectionContext.Provider value={collectionItems}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  return useContext(CollectionContext);
}
