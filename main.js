const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/converge/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.setPosition(0, 0);
  mainWindow.setMenuBarVisibility(true);
  mainWindow.maximize();
  mainWindow.focus();

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });


}

app.on("ready", createWindow);


app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
