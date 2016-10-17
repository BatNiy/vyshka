
Set Papka=./application

If Exist "%Papka%\*.*" (
   Echo RMDIR /s /q \"./application\"
)

set Papka =./node_modules

If Exist "%Papka%\*.*" (
   Echo RMDIR /s /q \"./application\"
)

set Papka =./typings/globals

If Exist "%Papka%\*.*" (
   Echo RMDIR /s /q \"./application\"
)

set Papka =./typings/modules

If Exist "%Papka%\*.*" (
   Echo RMDIR /s /q \"./application\"
)

npm run npmInstall;

npm run build_web_singl;

npm run build_server_singl;


