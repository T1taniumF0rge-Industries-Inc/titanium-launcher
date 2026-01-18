#[tauri::command]
fn launch_game(ram: u32) -> String {
    format!("Launching Minecraft with {}GB RAM...", ram)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init()) // Essential for v2
        .invoke_handler(tauri::generate_handler![launch_game])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}