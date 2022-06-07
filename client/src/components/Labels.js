import React from 'react';
import {default as api} from '../store/apiSlice';
import { getLabel } from '../helper/helper';

export default function Labels(){

    const {data, isFetching, isSuccess, isError} = api.useGetLabelQuery()
    let Transactions;



    if (isFetching) {
        Transactions = <div>Fetching</div>
    } 
    else if(isSuccess){
        
        Transactions = getLabel(data,'type').map((v,i) => <LabelComponents key = {i} data = {v}></LabelComponents>)
    }
    else if(isError){
        Transactions = <div>Error</div>
    }


    return(
    <>
        {Transactions}
    </>
    )
}

function LabelComponents({data}){
    if(!data)return<></>
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
            <div className='w-2 h-2 rounded py-3'style={{background:data.color??''}}></div>
                <h3 className='text-md'>{data.type??''}</h3>
            </div>
            <h3 className = 'font-bold'>{Math.round(data.percent)??0}%</h3>
        </div>

    )
}