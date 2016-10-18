
Set Papka=./application

If Exist "%Papka%\*.*" (
   RMDIR /s /q "./%Papka%"
)

set Papka =./node_modules

If Exist "%Papka%\*.*" (
   RMDIR /s /q "./%Papka%"
)

set Papka =./typings/globals

If Exist "%Papka%\*.*" (
   RMDIR /s /q "./%Papka%"
)

set Papka =./typings/modules

If Exist "%Papka%\*.*" (
   RMDIR /s /q "./%Papka%"
)

npm run npmInstall && npm run build_web_singl && npm run build_server_singl


