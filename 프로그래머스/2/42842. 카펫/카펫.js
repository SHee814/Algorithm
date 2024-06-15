function solution(brown, yellow) {
    let height_y = 1;
    let width_y = yellow / height_y;
    let brown_calculated = calculateBrown(width_y, height_y);
    
    while (brown_calculated !== brown) {
        height_y++;
        
        while (yellow % height_y > 0) height_y++;
        
        width_y = yellow / height_y;
        brown_calculated = calculateBrown(width_y, height_y);
    }
    
    return [width_y + 2, height_y + 2];
    
    function calculateBrown(w, h) {
        return (w + 2) * 2 + h * 2;
    }
}