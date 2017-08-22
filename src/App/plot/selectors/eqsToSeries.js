const eqsToSeries = (eqs) => [ eqs.map( ( m, b ) => [ {
    x: -5,
    y: (m*-5) + b
},{
    x: 5,
    y: (m*5) + b
} ])];

export default eqsToSeries;