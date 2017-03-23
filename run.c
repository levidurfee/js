#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    char command[512];
    sprintf(command, "./fail %s %s", argv[1], argv[2]);
    printf("Running...\n");
    printf("%s %s\n", argv[1], argv[2]);
    int i = system(command);
    return 0;
}
