def solution(s):
    t_count = 0
    z_count = 0
    x = s
    
    while x != '1':
        nx = ''
        t_count += 1
        
        for i in x:
            if i == '0':
                z_count += 1
            else:
                nx += '1'
        
        x = bin(len(nx))[2:]
    
    return [t_count, z_count]
        
                