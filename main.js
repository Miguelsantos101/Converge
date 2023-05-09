const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  let mainWindow = new BrowserWindow({
    title: "Converge.net",
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: "src/favicon.ico",
    show: false,
  });

  mainWindow.loadURL("http://localhost:4200");
  mainWindow.setPosition(1920, 0);
  mainWindow.maximize();
  mainWindow.focus();

  // Abrir o DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow.destroy();
  });
}

// Criando a barra de menu
const template = [
  {
    label: "Arquivo",
    submenu: [
      {
        label: "Sair",
        accelerator: "Alt+F4",
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Alterar Município",
    click: () => {
      console.log("Clicou em Alterar Município");
    },
  },
  {
    label: "Ajuda",
    submenu: [
      {
        label: "Ajuda",
        accelerator: "F1",
        click: () => {
          console.log("Clicou em Ajuda");
        },
      },
      {
        label: "Sobre",
        accelerator: "",
        click: () => {
          console.log("Clicou em Sobre");
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  createWindow();
});
