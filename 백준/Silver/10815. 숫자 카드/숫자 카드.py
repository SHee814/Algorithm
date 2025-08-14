int(input())
cards = set(input().split())
int(input())
numbers = input().split()
result = ['1' if x in cards else '0' for x in numbers]

print(' '.join(result))