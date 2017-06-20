import { WasmAngularExamplePage } from './app.po';

describe('wasm-angular-example App', () => {
  let page: WasmAngularExamplePage;

  beforeEach(() => {
    page = new WasmAngularExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
