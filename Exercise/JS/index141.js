const tripExpenses =[
    199,
    5000,
    50
];
const budget = tripExpenses.reduce(function(acumulator,expense){
    return acumulator+expense;
});
