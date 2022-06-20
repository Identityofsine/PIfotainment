
mod weather;
use std::{error::Error};
use dotenv::dotenv;
use eframe::{run_native, epi::App, egui::{CentralPanel, Ui}, NativeOptions};


struct TestLine;

impl App for TestLine{
    fn update(&mut self, ctx: &eframe::egui::Context, frame: &eframe::epi::Frame) {
        CentralPanel::default().show(ctx, |ui| {
            ui.label("YO");
        });
    }

    fn name(&self) -> &str {
        "Nigga"
    }
}



// -> Result<(), Box<dyn Error>>
fn main() {
    // dotenv()?;
    // let apikey = std::env::var("apikey")?;
    // let zipcode = std::env::var("zipcode")?;
    // let result : weather::Weather = weather::get_weatherinfo(&apikey, &zipcode)?;
    // dbg!(result);
    // Ok(())
    let app = TestLine;
    let window_option = NativeOptions::default();
    run_native(Box::new(app), window_option);
}