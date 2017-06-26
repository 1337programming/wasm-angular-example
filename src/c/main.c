// Specify the invoked JavaScript functions
extern void drawCircle(int x, int y, int r);

// Specify "native" WebAssembly functions, written in C
int drawCircles(int numCircles, int radius, int canvasWidth) {
    int y = 10;
    int x;
    int diameter = radius * 2;
    int incAmount = (canvasWidth - (diameter * 2)) / numCircles;
    for (x = diameter; x < (canvasWidth - diameter); x+= incAmount) {
        drawCircle(x, y, radius);
    }
    return 0;
}

