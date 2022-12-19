const path = require('path')
const electron = require("electron");
const { on } = require('events');


const { app, BrowserWindow, ipcMain , Tray } = electron;

let mainWindow;
let tray;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
    height: 500, 
    width: 300,
    frame: false,
    resizable: false
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  //const iconName = process.platform === 'win32'? 'windows-icon.png'
  const iconName = process.platform==='win32'?'windows-icon.png':'iconTemplate.png'
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`)
  tray = new Tray(iconPath);
  tray.on('click', ()=>{
    mainWindow.show();
  })

});




