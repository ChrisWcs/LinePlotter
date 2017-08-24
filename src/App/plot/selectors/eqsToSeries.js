const convertEQ = ({ m, b }) => [
    { x: -5, y: (m * -5) + b },
    { x: 5, y: (m * 5) + b}
];

const eqsToSeries = eqs => eqs.map( eq => convertEQ(eq));

export default eqsToSeries;