#include <stdio.h>

int main(void) {
    int max = 0;
    int idx = 0;
    
    for (int i = 0; i < 9; i++) {
        int x;
        scanf("%d", &x);
        
        if (x > max) {
            max = x;
            idx = i+1;
        }
    }
    
    printf("%d\n%d", max, idx);
}