
import { createSlice } from '@reduxjs/toolkit';
import searchValues from '../../utils/search';
const initialState = {
    list: [
        {
            id: 1,
            name: " Планшет Apple iPad Pro 11",
            price: 45999,
            color: "Space Gray",
            memory: 256,
            diagonal: 11

        },
        {
            id: 2,
            name: "Планшет Apple iPad 10.9",
            price: 22499,
            color: "Silver",
            memory: 64,
            diagonal: 10.9

        },
        {
            id: 3,
            name: "Планшет Apple iPad mini",
            price: 32499,
            color: "pink",
            memory: 256,
            diagonal: 8.3

        },
        {
            id: 4,
            name: "Планшет Apple iPad 10.2",
            price: 23999,
            color: "Space Gray",
            memory: 256,
            diagonal: 10.2

        },
        {
            id: 5,
            name: "Телефон Samsung Galaxy S24 Ultra",
            price: 71999,
            color: "Titanium Gray",
            memory: 1,
            diagonal: 6.8

        },
        {
            id: 6,
            name: "Телефон Apple iPhone 15",
            price: 34999,
            color: "Pink",
            memory: 128,
            diagonal: 6.1

        },
        {
            id: 7,
            name: "Мобільний телефон Samsung Galaxy S23",
            price: 30999,
            color: "Phantom Black",
            memory: 128,
            diagonal: 6.1

        },
        {
            id: 8,
            name: "Ноутбук Apple MacBook Air 13",
            price: 36499,
            color: "Space Gray",
            memory: 8,
            memorySSD: 256,
            diagonal: 13.3

        },
        {
            id: 9,
            name: "Ноутбук Dell Inspiron 3525 ",
            price: 25999,
            color: "Silver",
            memory: 16,
            memorySSD: 512,
            diagonal: 15.6

        },
        {
            id: 10,
            name: "Ноутбук Lenovo LOQ 16IRH8",
            price: 55999,
            color: "Storm Grey",
            memory: 16,
            memorySSD: 1,
            diagonal: 16

        },
        {
            id: 11,
            name: "Ноутбук Lenovo IdeaPad Slim 3",
            price: 20999,
            color: "Arctic Grey",
            memory: 16,
            memorySSD: 512,
            diagonal: 15.6

        },
        {
            id: 12,
            name: "Телефон Apple iPhone 15 Pro Max",
            price: 60499,
            color: "Black Titanium",
            memory: 256,
            diagonal: 6.7

        },
        {
            id: 13,
            name: "телефон Samsung Galaxy Flip 5",
            price: 40999,
            color: "Pink",
            memory: 256,
            diagonal:  6.1

        },
        {
            id: 14,
            name: "телефон Apple iPhone 11",
            price: 20999,
            color: "White",
            memory: 64,
            diagonal: 6.1

        },
        {
            id: 15,
            name: "Планшет Samsung Galaxy Tab S9",
            price: 33299,
            color: "Graphite",
            memory: 128,
            diagonal: 11

        },
        {
            id: 16,
            name: "Планшет Samsung Galaxy Tab A9",
            price: 7399,
            color: "Graphite",
            memory: 64,
            diagonal: 8.7

        },
        {
            id: 17,
            name: "Планшет Samsung Galaxy Tab S6 Lite",
            price: 13099,
            color: "Blue",
            memory: 64,
            diagonal: 10.4

        },
        {
            id: 18,
            name: "Планшет Lenovo Tab M11",
            price: 7999,
            color: "Grey",
            memory: 128,
            diagonal: 11

        },
        {
            id: 19,
            name: "Телефон Apple iPhone 15",
            price: 34899,
            color: "Blue",
            memory: 128,
            diagonal: 6.1

        },
        {
            id: 20,
            name: "Ноутбук Apple MacBook Pro 16",
            price: 150299,
            color: "Silver",
            memory: 32,
            memorySSD: 1,
            diagonal: 16.2

        },

    ],
    searchList:[],
    searchValue:""
}


const productSlice = createSlice ({
    name: "product",
    initialState,
    reducers: {
        changeSearch: (state, action) => {
            state.searchValue = action.payload
            if (action.payload.length === 0) {
                state.searchList = []
            } else {
                state.searchList = [
                    ...state.list.filter(item => searchValues(item.name, action.payload))
                ]
            }
        }
        
    }
})

export const { changeSearch} = productSlice.actions

export default productSlice.reducer
