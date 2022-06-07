import React from "react";
import 'boxicons';
import {default as api} from '../store/apiSlice';


export default function List () {

    const {data, isFetching, isSuccess, isError} = api.useGetLabelQuery()
    const [deleteTransaction]  = api.useDeleteTransactionMutation()
    let Transactions;

    const handlerClick = (e) =>{
        if(!e.target.dataset.id) return 0;
        deleteTransaction({_id:e.target.dataset.id})
    }

    if (isFetching) {
        Transactions = <div>Fetching</div>
    } 
    else if(isSuccess){
        Transactions = data.map((v,i) => <Transaction key = {i} category = {v} handler = {handlerClick}></Transaction>)
    }
    else if(isError){
        Transactions = <div>Error</div>
    }

  

    return(
       <div className="flex flex-col py-6 gap-3">
           <h1 className="py-4 text-md font-bold text-xl">Transaction History</h1>
          {Transactions}
       </div>
    )
}


function Transaction({category, handler}){
    if(!category)return null;
    return(
        <div className="item flex justify-center bg-gray-50 py-3 rounded-r" style={{borderRight:`8px solid ${category.color??''}`}}>
            <button className="px-3" onClick = {handler} ><box-icon name='trash' data-id = {category._id??''}></box-icon></button>
            <span className="block w-full">{category.name??""}</span>
        </div>
    )
}