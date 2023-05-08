const { app, BrowserWindow } = require("electron");

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

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow.destroy();
  });
}

app.whenReady().then(() => {
  createWindow();
});
