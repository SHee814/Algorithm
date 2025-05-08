import sys

grade_table = {
    "A+": 4.5,
    "A0": 4,
    "B+": 3.5,
    "B0": 3,
    "C+": 2.5,
    "C0": 2,
    "D+": 1.5,
    "D0": 1,
    "F": 0
}

total_grade = 0
total_credit = 0

for line in sys.stdin:
    _, c, g = line.rstrip().split()
    
    if g == 'P': continue
    
    total_credit += float(c)
    total_grade += float(c) * grade_table[g]

print(total_grade / total_credit if total_credit > 0 else 0)