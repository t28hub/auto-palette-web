use wasm_bindgen::prelude::wasm_bindgen;
use auto_palette::{Palette, Theme};
use wasm_bindgen::JsValue;
use std::str::FromStr;
use crate::swatch::SwatchBinding;

#[wasm_bindgen(js_name = Palette)]
#[derive(Debug)]
pub struct PaletteBinding(pub(crate) Palette<f64>);

#[wasm_bindgen(js_class = Palette)]
impl PaletteBinding {
  #[wasm_bindgen(getter)]
  pub fn length(&self) -> usize {
    self.0.len()
  }

  #[wasm_bindgen(js_name = isEmpty)]
  pub fn is_empty(&self) -> bool {
    self.0.is_empty()
  }

  #[wasm_bindgen(js_name = findSwatches)]
  pub fn find_swatches(&self, n: usize, theme: String) -> Result<Vec<SwatchBinding>, JsValue> {
    let theme = Theme::from_str(&theme).map_err(|e| JsValue::from_str(&e.to_string()))?;
    let found = self.0
      .find_swatches_with_theme(n, theme)
      .into_iter()
      .map(SwatchBinding)
      .collect();
    Ok(found)
  }
}
