import React from 'react'


const Home = React.lazy(()=>import('../views/Home/Home'));
const Product = React.lazy(()=>import('../views/Product/product'));

const routes = [
    {path:'/',exact:true,component:Home},
    {path:'/product/:id',exact:true,component:Product},
]

export default routes;