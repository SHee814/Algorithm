import sys

input = sys.stdin.readlines()
N, M = map(int, input[0].split())
S = set(input[1:N+1])
str_list = input[N+1:]

print(sum(1 for x in str_list if x in S))