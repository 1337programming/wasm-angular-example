import { WasmLoader } from './shared/wasm/wasm-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { WasmModule } from './shared/wasm/wasm.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WasmModule
  ],
  providers: [
    WasmLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
