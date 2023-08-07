import React from 'react';
import ReactDOM from 'react-dom/client';
import CategoryList from "./Components/Home/CategoryList/CategoryList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CategoryList

        data={[

            {
                type:'text',
                title:'t-shirt',
                pushLink:''

            },

            {
                type:'button',
                title:'blouze',
                content:[

                    {
                        text:'profile',
                        pushLink:'#/profile',

                    },

                    {
                        text:'logout',
                        pushLink:'#/logout',

                    },

                    {
                        text:'my account',
                        pushLink:'#/account',

                    },



                ]

            },

            {
                type:'text',
                title:'shirts',
                pushLink:''

            },

            {
                type:'text',
                title:'panth'

            },


        ]}

    />

);
