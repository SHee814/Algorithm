N = int(input())
nums = []

for _ in range(N):
    nums.append(int(input()))

print('\n'.join(map(str, sorted(nums))))