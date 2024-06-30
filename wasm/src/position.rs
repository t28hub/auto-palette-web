use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen(js_name = Position)]
#[derive(Debug)]
pub struct PositionBinding(pub(crate) u32, pub(crate) u32);

#[wasm_bindgen(js_class = Position)]
impl PositionBinding {
  #[wasm_bindgen(getter)]
  pub fn x(&self) -> u32 {
    self.0
  }

  #[wasm_bindgen(getter)]
  pub fn y(&self) -> u32 {
    self.1
  }
}
