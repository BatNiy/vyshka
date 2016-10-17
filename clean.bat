
Set Papka=./application

If Exist "%Papka%\*.*" (
   RMDIR /s /q "./%Papka%"
)