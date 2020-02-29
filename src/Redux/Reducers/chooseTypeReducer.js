import * as Types from "../../Constants";

const initialState = [
    // Top clothes
    {
        id: 'topcloth_1',
        type: "topclothes",
        name: "Top Cloth 1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth1_show.jpg',
        imgSrc_png: './images/clothes/topcloth1.png',
    },
    {
        id: 'topcloth_2',
        type: "topclothes",
        name: "Top Cloth 2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth2_show.jpg',
        imgSrc_png: './images/clothes/topcloth2.png',
    },
    {
        id: 'topcloth_3',
        type: "topclothes",
        name: "Top Cloth 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth3_show.jpg',
        imgSrc_png: './images/clothes/topcloth3.png',
    },
    {
        id: 'topcloth_4',
        type: "topclothes",
        name: "Top Cloth 4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth4_show.jpg',
        imgSrc_png: './images/clothes/topcloth4.png',
    },
    {
        id: 'topcloth_5',
        type: "topclothes",
        name: "Top Cloth 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth5_show.jpg',
        imgSrc_png: './images/clothes/topcloth5.png',
    },
    {
        id: 'topcloth_6',
        type: "topclothes",
        name: "Top Cloth ",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        imgSrc_jpg: './images/clothes/topcloth6_show.jpg',
        imgSrc_png: './images/clothes/topcloth6.png',
    },
];

const chooseTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHOOSE_TYPE: {
            let productsList = [
                // Top clothes
                {
                    id: 'topcloth_1',
                    type: "topclothes",
                    name: "Top Cloth 1",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth1_show.jpg',
                    imgSrc_png: './images/clothes/topcloth1.png',
                },
                {
                    id: 'topcloth_2',
                    type: "topclothes",
                    name: "Top Cloth 2",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth2_show.jpg',
                    imgSrc_png: './images/clothes/topcloth2.png',
                },
                {
                    id: 'topcloth_3',
                    type: "topclothes",
                    name: "Top Cloth 3",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth3_show.jpg',
                    imgSrc_png: './images/clothes/topcloth3.png',
                },
                {
                    id: 'topcloth_4',
                    type: "topclothes",
                    name: "Top Cloth 4",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth4_show.jpg',
                    imgSrc_png: './images/clothes/topcloth4.png',
                },
                {
                    id: 'topcloth_5',
                    type: "topclothes",
                    name: "Top Cloth 5",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth5_show.jpg',
                    imgSrc_png: './images/clothes/topcloth5.png',
                },
                {
                    id: 'topcloth_6',
                    type: "topclothes",
                    name: "Top Cloth ",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/topcloth6_show.jpg',
                    imgSrc_png: './images/clothes/topcloth6.png',
                },

                // Both clothes
                {
                    id: 'botcloth_1',
                    type: "botclothes",
                    name: "Bot Cloth 1",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/botcloth1_show.jpg',
                    imgSrc_png: './images/clothes/botcloth1.png',
                },
                {
                    id: 'botcloth_2',
                    type: "botclothes",
                    name: "Bot Cloth 2",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/botcloth2_show.jpg',
                    imgSrc_png: './images/clothes/botcloth2.png',
                },
                {
                    id: 'botcloth_3',
                    type: "botclothes",
                    name: "Bot Cloth 3",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/botcloth3_show.jpg',
                    imgSrc_png: './images/clothes/botcloth3.png',
                },
                {
                    id: 'botcloth_4',
                    type: "botclothes",
                    name: "Bot Cloth 4",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/botcloth4_show.jpg',
                    imgSrc_png: './images/clothes/botcloth4.png',
                },
                {
                    id: 'botcloth_5',
                    type: "botclothes",
                    name: "Bot Cloth 5",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/clothes/botcloth5_show.jpg',
                    imgSrc_png: './images/clothes/botcloth5.png',
                },

                // Shoes
                {
                    id: 'shoes_1',
                    type: "shoes",
                    name: "Shoes 1",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/shoes/shoes1_show.jpg',
                    imgSrc_png: './images/shoes/shoes1.png',
                },
                {
                    id: 'shoes_2',
                    type: "shoes",
                    name: "Shoes 2",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/shoes/shoes2_show.jpg',
                    imgSrc_png: './images/shoes/shoes2.png',
                },
                {
                    id: 'shoes_3',
                    type: "shoes",
                    name: "Shoes 3",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/shoes/shoes3_show.jpg',
                    imgSrc_png: './images/shoes/shoes3.png',
                },
                {
                    id: 'shoes_4',
                    type: "shoes",
                    name: "Shoes 4",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/shoes/shoes4_show.jpg',
                    imgSrc_png: './images/shoes/shoes4.png',
                },
                {
                    id: 'shoes_5',
                    type: "shoes",
                    name: "Shoes 5",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/shoes/shoes5_show.jpg',
                    imgSrc_png: './images/shoes/shoes5.png',
                },

                // Handbags
                {
                    id: 'handbag_1',
                    type: "handbags",
                    name: "Handbag 1",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/handbags/handbag1_show.jpg',
                    imgSrc_png: './images/handbags/handbag1.png',
                },
                {
                    id: 'handbag_2',
                    type: "handbags",
                    name: "Handbag 2",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/handbags/handbag2_show.jpg',
                    imgSrc_png: './images/handbags/handbag2.png',
                },
                {
                    id: 'handbag_3',
                    type: "handbags",
                    name: "Handbag 3",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/handbags/handbag3_show.jpg',
                    imgSrc_png: './images/handbags/handbag3.png',
                },

                // Necklaces
                {
                    id: 'necklace_1',
                    type: "necklaces",
                    name: "Necklace 1",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/necklaces/necklace1_show.jpg',
                    imgSrc_png: './images/necklaces/necklace1.png',
                },
                {
                    id: 'necklace_2',
                    type: "necklaces",
                    name: "Necklace 2",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/necklaces/necklace2_show.jpg',
                    imgSrc_png: './images/necklaces/necklace2.png',
                },
                {
                    id: 'necklace_3',
                    type: "necklaces",
                    name: "Necklace 3",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
                    imgSrc_jpg: './images/necklaces/necklace3_show.jpg',
                    imgSrc_png: './images/necklaces/necklace3.png',
                },
            ]
            let filterProductsList = productsList.filter((item) => {
                return item.type === action.payload;
            })
            state = filterProductsList;
            return [...state];
        }
        default:
            return state;
    }
}

export default chooseTypeReducer;