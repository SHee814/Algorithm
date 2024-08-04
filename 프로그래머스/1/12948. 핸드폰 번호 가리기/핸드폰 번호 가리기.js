function solution(phone_number) {
    const length = phone_number.length;
    let result = '';
    
    for (let i = 0; i < length - 4; i++) {
        result += '*';
    }
    
    return result + phone_number.slice(length - 4);
}