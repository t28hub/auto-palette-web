use auto_palette::{Algorithm, ImageData, Palette, Swatch, Theme};
use wasm_bindgen::{prelude::wasm_bindgen, Clamped, JsValue};
use std::str::FromStr;

#[wasm_bindgen(js_name = Swatch)]
#[derive(Debug)]
pub struct SwatchBinding(Swatch<f64>);

#[wasm_bindgen]
impl SwatchBinding {
  #[wasm_bindgen(getter)]
  pub fn color(&self) -> String {
    self.0.color().to_hex_string()
  }

  #[wasm_bindgen(getter)]
  pub fn position(&self) -> String {
    let (x, y) = self.0.position();
    format!("({}, {})", x, y)
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

#[wasm_bindgen(js_name = Palette)]
#[derive(Debug)]
pub struct PaletteBinding(Palette<f64>);

#[wasm_bindgen]
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

#[wasm_bindgen]
pub fn extract(
  width: u32,
  height: u32,
  data: Clamped<Vec<u8>>,
  algorithm: String,
) -> Result<PaletteBinding, JsValue> {
  console_error_panic_hook::set_once();

  let image_data = ImageData::new(width, height, &data.0).map_err(|e| {
    JsValue::from_str(&e.to_string())
  })?;
  let algorithm = Algorithm::from_str(&algorithm).map_err(|e| {
    JsValue::from_str(&e.to_string())
  })?;
  let palette = Palette::extract_with_algorithm(&image_data, algorithm)
    .map_err(|e| {
      JsValue::from_str(&e.to_string())
    })?;
  Ok(PaletteBinding(palette))
}
