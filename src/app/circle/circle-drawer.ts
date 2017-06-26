import { WasmImports } from '../shared/wasm/wasm-imports.interface';

export class CircleDrawer implements WasmImports {
    constructor(
        public context: CanvasRenderingContext2D
    ) { }

    drawCircle(x: number, y: number, radius: number) {
        const context = this.context;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    }
}