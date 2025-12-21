int main() {
    int A, B;
    scanf("%d %d", &A, &B);
    int x = A * (B % 10);
    int y = A * (B % 100 / 10);
    int z = A * (B / 100);
    printf("%d\n%d\n%d\n%d", x, y, z, z*100+y*10+x);
}