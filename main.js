const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: "src/favicon.ico",
    show: false,
  });

  mainWindow.loadURL(path.join(__dirname, `/dist/converge/index.html`));
  mainWindow.setPosition(0, 0);
  mainWindow.setMenu(null);
  mainWindow.maximize();
  mainWindow.focus();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

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
