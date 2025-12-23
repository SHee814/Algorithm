#include <stdio.h>

int main(void) {
    int A, B, C;
    scanf("%d %d\n%d", &A, &B, &C);
    
    if (B + C >= 60) {
        int k = (B + C) / 60;
        B = (B + C) % 60;
        
        if (A + k >= 24) {
            A = (A+k) % 24;
        } else {
            A += k;
        }
    } else {
        B += C;
    }
    
    printf("%d %d", A, B);
}