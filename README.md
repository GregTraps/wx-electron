# wx-electron
electron打包网页版微信

## To Run

  ```
  npm install
  
  npm run start 
  //or you can also
  electron .
  ```
  
## build

install [electron-builder](https://github.com/electron-userland/electron-builder)

  ```
  npm install electron-builder
  ```
  
打包时要用到electron-download下载electron，墙内地区可以添加  

  `ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`
  
到环境变量，详见[electron-download](https://github.com/electron-userland/electron-download)  

then  

  ```
  npm run dist
  //or you can
  build
  ```  
  
check you app in dist/
