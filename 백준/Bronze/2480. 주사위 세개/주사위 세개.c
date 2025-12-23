#include <stdio.h>

int main(void) {
    int A, B, C;
    int result;
    scanf("%d %d %d", &A, &B, &C);
    
    if (A == B && B == C) {
        result = A * 1000 + 10000;
    } else if (A != B && B != C && C != A) {
        int D = (A > B ? A : B);
        result = ((C > D ? C : D)) * 100;
    } else {
        if (A == B || A == C) {
            result = A * 100 + 1000;
        } else {
            result = B * 100 + 1000;
        }
    }
    
    printf("%d", result);
}