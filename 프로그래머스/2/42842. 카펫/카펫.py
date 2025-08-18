def solution(brown, yellow):
    for i in range(1, yellow+1):
        if yellow % i == 0:
            expected = (i + (yellow / i + 2)) * 2
            
            if expected == brown:
                return [int(yellow / i)+2, i+2]