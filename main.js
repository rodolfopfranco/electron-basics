const {app, BrowserWindow} = require('electron')
let win;

// WINDOW CONFIGURATION:

function createWindow(){
    win = new BrowserWindow(
        {
            width: 600, 
            height: 600,
            backgroundColor: '#ffffff',
            icon: `file://${__dirname}/dist/assets/logo.png`
        }
    )

    win.loadURL(`file://${__dirname}/dist/app-teste/index.html`)
    // for debug use enable this:
    // win.webContents.openDevTools()
    win.on('closed', function() {
        win = null
    })
}

// APP CONFIGURATION:

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', function(){
    if (win === null) {
        createWindow()
    }
})