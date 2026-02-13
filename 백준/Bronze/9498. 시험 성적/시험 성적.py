# 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F

s = int(input())

if s >= 90:
    print('A')
elif s >= 80:
    print('B')
elif s >= 70:
    print('C')
elif s >= 60:
    print('D')
else:
    print('F')
