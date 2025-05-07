import sys

setNums = set([(int(x.rstrip()) % 42) for x in sys.stdin.readlines()])
print(len(setNums))