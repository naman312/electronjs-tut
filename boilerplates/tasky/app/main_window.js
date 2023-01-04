const electron = require('electron');
const {BrowserWindow} = electron;

class MainWindow extends BrowserWindow {
constructor(url){
super({
    webPreferences: { nodeIntegration: true, 
        backgroundThrottling: false,
        contextIsolation: false },
    height: 500, 
    width: 300,
    frame: false,
    resizable: false
  });
  this.on('blur', this.onBlur.bind(this));
  this.loadURL(url)
}
onBlur(){
  this.hide(); 
}
}

module.exports=MainWindow;