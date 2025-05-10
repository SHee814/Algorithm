T = int(input())

for _ in range(T):
    C = int(input())
    q, C = divmod(C, 25)
    d, C = divmod(C, 10)
    n, C = divmod(C, 5)
    p = C
    print(f'{q} {d} {n} {p}')
