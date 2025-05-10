import string

N, B = map(int, input().split())
digits = string.digits + string.ascii_uppercase
result = ''

while N > 0:
    N, q = divmod(N, B)
    result += digits[q]

print(result[::-1])