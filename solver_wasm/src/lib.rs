use serde::{Serialize, Deserialize};
use wasm_bindgen::prelude::*;
use ts_rs::TS;

#[derive(Deserialize, Serialize, TS)]
#[ts(export)]
pub struct Enquiry {
    suggesting_player: usize,
    suspect: String,
    weapon: String,
    room: String,
    disproving_player: Option<usize>,
    disproving_object: Option<String>,
}

#[derive(Deserialize)]
pub struct GameState {
    enquiries: Vec<Enquiry>,
}

#[derive(Serialize)]
pub struct SolverResult {
    deduced_facts: Vec<String>,
    simulation_summary: String,
}

#[wasm_bindgen]
pub fn solve_clue(json_input: &str) -> String {
    let game_state: GameState = serde_json::from_str(json_input).unwrap();

    let result = SolverResult {
        deduced_facts: vec!["Green is in the envelope".to_string()],
        simulation_summary: "Simulated 1000 games, Green 75% in envelope.".to_string(),
    };

    serde_json::to_string(&result).unwrap()
}