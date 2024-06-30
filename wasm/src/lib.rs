use auto_palette::{Algorithm, ImageData, Palette};
use wasm_bindgen::{Clamped, JsValue, prelude::wasm_bindgen};
use std::str::FromStr;
use crate::palette::PaletteBinding;

mod swatch;
mod palette;
mod position;

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
