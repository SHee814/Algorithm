/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = [];
    
    for (let customer of accounts) {
        const totalMoney = customer.reduce((acc, m) => acc + m, 0);

        wealth.push(totalMoney);
    }

    return Math.max(...wealth);
};