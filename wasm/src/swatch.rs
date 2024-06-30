use wasm_bindgen::prelude::wasm_bindgen;
use auto_palette::Swatch;
use crate::position::PositionBinding;

#[wasm_bindgen(js_name = Swatch)]
#[derive(Debug)]
pub struct SwatchBinding(pub(crate) Swatch<f64>);

#[wasm_bindgen(js_class = Swatch)]
impl SwatchBinding {
  #[wasm_bindgen(getter)]
  pub fn color(&self) -> String {
    self.0.color().to_hex_string()
  }

  #[wasm_bindgen(getter)]
  pub fn position(&self) -> PositionBinding {
    let (x, y) = self.0.position();
    PositionBinding(x, y)
  }

  #[wasm_bindgen(getter)]
  pub fn population(&self) -> usize {
    self.0.population()
  }

  #[wasm_bindgen(getter)]
  pub fn ratio(&self) -> f64 {
    self.0.ratio()
  }
}
