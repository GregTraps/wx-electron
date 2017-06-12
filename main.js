/**
 * Created by greg on 17-6-9.
 */
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win


app.on('ready',function () {
    win = new BrowserWindow({
        height: 900,
        width: 860,
        title: 'wx',
        zoomFactor : 1.5,
        allowDisplayingInsecureContent : true,
        allowRunningInsecureContent : true
    });
    win.loadURL('https://wx.qq.com/');
    // win.webContents.openDevTools();
    win.on('close',function () {
        win.destroy();
    });
});
app.on('window-all-closed',function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});