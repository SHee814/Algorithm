import string

s = input()
print(' '.join([str(s.find(i)) for i in string.ascii_lowercase]))