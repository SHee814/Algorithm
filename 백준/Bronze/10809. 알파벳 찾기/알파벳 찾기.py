import string

S = input()
alphabet = string.ascii_lowercase
print(' '.join(map(lambda x: str(S.find(x)), alphabet)))