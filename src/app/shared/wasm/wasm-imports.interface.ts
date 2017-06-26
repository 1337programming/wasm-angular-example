// Our required C functions should match this interface.
export interface WasmImports {
    drawCircle(x: number, y: number, r: number): void;
}
