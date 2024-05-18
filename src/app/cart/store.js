// store.js
"use client"

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      "id": 1,
      "name": "change",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2024-05-17T02:56:00.000Z",
      "updatedAt": "2024-05-17T15:21:50.000Z"
    },
    {
      "id": 2,
      "name": "Electronics",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2024-05-17T02:56:00.000Z",
      "updatedAt": "2024-05-17T02:56:00.000Z"
    },
    {
      "id": 3,
      "name": "Luis is the best",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2024-05-17T02:56:00.000Z",
      "updatedAt": "2024-05-17T12:45:43.000Z"
    },
    {
      "id": 4,
      "name": "Shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2024-05-17T02:56:00.000Z",
      "updatedAt": "2024-05-17T02:56:00.000Z"
    },
    {
      "id": 18,
      "name": "post",
      "image": "https://api.escuelajs.co/api/v1/files/b716.jpg",
      "creationAt": "2024-05-17T08:46:59.000Z",
      "updatedAt": "2024-05-17T08:46:59.000Z"
    },
    {
      "id": 21,
      "name": "New Category",
      "image": "https://placeimg.com/640/480/any",
      "creationAt": "2024-05-17T12:39:39.000Z",
      "updatedAt": "2024-05-17T12:39:39.000Z"
    },
    {
      "id": 22,
      "name": "Item-S",
      "image": "https://placeimg.com/640/480/any",
      "creationAt": "2024-05-17T13:32:02.000Z",
      "updatedAt": "2024-05-17T13:32:02.000Z"
    },
    {
      "id": 23,
      "name": "Books",
      "image": "https://api.lorem.space/image/book?w=150&h=220",
      "creationAt": "2024-05-17T13:46:08.000Z",
      "updatedAt": "2024-05-17T13:46:08.000Z"
    },
    {
      "id": 24,
      "name": "Books",
      "image": "https://api.lorem.space/image/book?w=150&h=220",
      "creationAt": "2024-05-17T15:21:47.000Z",
      "updatedAt": "2024-05-17T15:21:47.000Z"
    },
    {
      "id": 25,
      "name": "New Category",
      "image": "https://placeimg.com/640/480/any",
      "creationAt": "2024-05-17T15:21:50.000Z",
      "updatedAt": "2024-05-17T15:21:50.000Z"
    }
  ],
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
