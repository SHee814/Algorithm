function solution(participant, completion) {
    const map = new Map();
    
    for (let name of completion) {
        map.set(name, (map.get(name) || 0) + 1);
    }
    
    for (let name of participant) {
        const value = map.get(name);
        
        if (value) {
            map.set(name, value - 1);
        } else {
            return name;
        }
    }
}