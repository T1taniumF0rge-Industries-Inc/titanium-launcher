import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  const [ram, setRam] = useState(4);
  const [status, setStatus] = useState("");

  async function handleLaunch() {
    const result = await invoke("launch_game", { ram });
    setStatus(result as string);
  }

  return (
    <main className="container">
      <h1>{t('productName')}</h1>
      
      <div className="settings-card">
        <label>{t('ram')}: {ram}GB</label>
        <input 
          type="range" min="1" max="32" 
          value={ram} 
          onChange={(e) => setRam(Number(e.target.value))} 
        />
        
        <button onClick={handleLaunch}>{t('play')}</button>
        <p>{status}</p>
      </div>

      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en_US">English</option>
        <option value="pl_PL">Polski</option>
        <option value="ru_RU">Русский</option>
      </select>
    </main>
  );
}

export default App;