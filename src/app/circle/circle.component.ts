import { WasmCode } from '../shared/wasm/wasm-code.interface';
import { CircleDrawer } from './circle-drawer';
import { WasmImports } from '../shared/wasm/wasm-imports.interface';
import { WasmLoader } from '../shared/wasm/wasm-loader';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  public numCircles: number = 5;
  public radius: number = 5;
  public context
  public circleDrawer: CircleDrawer;
  public wasmExports: WasmCode;
  public canvasWidth: number = 400;
  public canvasHeight: number = 200;
  constructor(
    public wasmLoader: WasmLoader
  ) { }

  async ngOnInit() {
    this.circleDrawer = new CircleDrawer(this.canvas.nativeElement.getContext('2d'));
    this.wasmExports = await this.wasmLoader.loadWasm(this.circleDrawer);
  }

  drawCircles() {
    this.wasmExports._drawCircles(this.numCircles, this.radius, this.canvasWidth);
  }
}
