import { WasmImports } from './wasm-imports.interface';
import { WasmCode } from './wasm-code.interface';
import { Injectable, NgZone } from '@angular/core';

// 0. Include the WASM file in the build.
require('!!file-loader?name=main.wasm!../../../../build/main.wasm');

@Injectable()
export class WasmLoader {

    async loadWasm(wasmImports: WasmImports): Promise<WasmCode> {
        // 1. Load the wasm file.
        const wasmFile = await fetch('main.wasm');

        // 2. Get the Array Buffer
        const buffer = await wasmFile.arrayBuffer();

        // 3. Compile the buffer.
        const mod = await WebAssembly.compile(buffer);
        const imports = this.buildImports(wasmImports);

        // 3. Initiate, passing in the bytes source and the input params.
        const wasm = new WebAssembly.Instance(mod, imports);

        // 4. Return the exports, as the defined WasmCode.
        return wasm.exports as WasmCode;
    }

    private buildImports(wasmImports: WasmImports): any {
        const imports: any = {};
        imports.env = {
            _drawCircle: (x, y, r) => wasmImports.drawCircle(x, y, r)
        };
        imports.env.memoryBase = imports.env.memoryBase || 0;
        imports.env.tableBase = imports.env.tableBase || 0;
        if (!imports.env.memory) {
            imports.env.memory = new WebAssembly.Memory({ initial: 256 });
        }
        if (!imports.env.table) {
            imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
        }
        return imports;
    }
}
