#[tauri::command]
async fn launch_game(ram: u32, server: String) -> Result<(), String> {
    // Logic: Sync JRE, Sync Forge/Fabric, and start the process
    println!("Launching with {}GB RAM joining {}", ram, server);
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![launch_game])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}