def solution(s):
    b_count = 0
    z_count = 0
    x = s
    
    while x != '1':
        ic = len(x)
        x = ''.join(t for t in x if t == '1')
        c = len(x)
        z_count += ic - c
        x = format(c, 'b')
        b_count += 1
        
    return [b_count, z_count]
                