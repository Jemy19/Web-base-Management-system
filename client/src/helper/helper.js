import _ from 'lodash'

export function getSum(transactions, type){
    let sum = _(transactions)
            .groupBy('type')
            .map((objs, key)=>{
                if(!type)return _.sumBy(objs,"amount")
                return{
                    'type': key,
                    'color': objs[0].color,
                    'total': _.sumBy(objs,'amount'),
                }
            })
            .value()
        return sum;
}

export function getLabel(transactions){
    let amountSum = getSum(transactions, 'type')
    let Total = _.sum(getSum(transactions))
    let percent = _(amountSum)
        .map(objs => _.assign(objs,{percent: (100*objs.total)/Total}))
        .value()

    return percent;
}

export function chart_Data(transactions){

    let dataValue = getSum(transactions)


    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],  
                hoverOffset: 4
              }]
            },  
            options:{
                cutout: 115
            }
    }
    return config;
}

export function getTotal(transactions){
    return _.sum(getSum(transactions))
}