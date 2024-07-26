function  calculateNumber(a, b, type) {
    switch (type) {
        case 'SUM':
            return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            return Math.round(b) ? Math.round(a) / Math.round(b) : "Error";
        default:
            break;
    }
}
module.exports = calculateNumber;
