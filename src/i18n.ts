import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en_US: {
    translation: {
      "play": "PLAY",
      "ram": "ALLOCATED RAM",
      "settings": "SETTINGS",
      "repair": "REPAIR GAME",
      "server": "SERVER IP"
    }
  },
  en_GB: {
    translation: {
      "play": "PLAY",
      "ram": "ALLOCATED RAM",
      "settings": "SETTINGS",
      "repair": "REPAIR GAME",
      "server": "SERVER IP"
    }
  },
  pl_PL: {
    translation: {
      "play": "GRAJ",
      "ram": "PRZYDZIELONY RAM",
      "settings": "USTAWIENIA",
      "repair": "NAPRAW GRĘ",
      "server": "IP SERWERA"
    }
  },
  fr_FR: {
    translation: {
      "play": "JOUER",
      "ram": "RAM ALLOUÉE",
      "settings": "PARAMÈTRES",
      "repair": "RÉPARER LE JEU",
      "server": "IP DU SERVEUR"
    }
  },
  de_DE: {
    translation: {
      "play": "SPIELEN",
      "ram": "ZUGERIESENER RAM",
      "settings": "EINSTELLUNGEN",
      "repair": "SPIEL REPARIEREN",
      "server": "SERVER-IP"
    }
  },
  it_IT: {
    translation: {
      "play": "GIOCA",
      "ram": "RAM ALLOCATA",
      "settings": "IMPOSTAZIONI",
      "repair": "RIPARA GIOCO",
      "server": "IP DEL SERVER"
    }
  },
  es_ES: {
    translation: {
      "play": "JUGAR",
      "ram": "RAM ASIGNADA",
      "settings": "AJUSTES",
      "repair": "REPARAR JUEGO",
      "server": "IP DEL SERVIDOR"
    }
  },
  zh_CN: {
    translation: {
      "play": "开始游戏",
      "ram": "分配内存",
      "settings": "设置",
      "repair": "修复游戏",
      "server": "服务器地址"
    }
  },
  zh_HK: {
    translation: {
      "play": "開始遊戲",
      "ram": "分配記憶體",
      "settings": "設定",
      "repair": "修復遊戲",
      "server": "伺服器位址"
    }
  },
  ko_KR: {
    translation: {
      "play": "플레이",
      "ram": "할당된 RAM",
      "settings": "설정",
      "repair": "게임 복구",
      "server": "서버 IP"
    }
  },
  ja_JP: {
    translation: {
      "play": "プレイ",
      "ram": "割り当てられたRAM",
      "settings": "設定",
      "repair": "ゲームを修復",
      "server": "サーバーIP"
    }
  },
  ru_RU: {
    translation: {
      "play": "ИГРАТЬ",
      "ram": "ОЗУ",
      "settings": "НАСТРОЙКИ",
      "repair": "ПОЧИНИТЬ ИГРУ",
      "server": "IP СЕРВЕРА"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en_US", 
  fallbackLng: "en_US",
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;