N = int(input())
def move(s, e, r, d):
    if d == 1:
        print(f'{s} {e}')
        return
    
    move(s, r, e, d-1)
    print(f'{s} {e}')
    move(r, e, s, d-1)
    
print(2 ** N - 1)
move(1, 3, 2, N)