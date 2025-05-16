N = int(input())
members = []

for _ in range(N):
    age, name = input().split()
    members.append([int(age), name])
    
members.sort(key=lambda x: x[0])
print('\n'.join([f'{str(age)} {name}' for age, name in members]))