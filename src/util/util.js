const point = ( x, y ) => ({
    x,
    y,
});

export const convertEqToPoints = ( m, b ) => {
    return [ point( -5, (m*-5) + b), point( 5, (m*5) + b) ];
};