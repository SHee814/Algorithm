import string

S = input().upper()
alphabet = string.ascii_uppercase
max_value = -1
most_often_char = '?'

for x in alphabet:
    v = S.count(x)
    
    if v > max_value:
        max_value = v
        most_often_char = x
    elif v == max_value:
        most_often_char = '?'

print(most_often_char)