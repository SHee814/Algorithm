from math import sqrt

def solution(brown, yellow):
    for h in range(1, int(sqrt(yellow))+1):
        if yellow % h > 0:
            continue
        
        w = yellow // h
        
        if (w+2+h)*2 == brown:
            return [w+2, h+2]
        