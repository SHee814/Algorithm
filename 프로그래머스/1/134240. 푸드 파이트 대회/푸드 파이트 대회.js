function solution(food) {
    let arrange = [];
    
    for (let i = 1; i < food.length; i++) {
        const amount = food[i];
        
        for (let j = 0; j < Math.floor(amount / 2); j++) {
            arrange.push(i);
        }
    }
    
    return arrange.join('') + '0' + arrange.reverse().join('');
}