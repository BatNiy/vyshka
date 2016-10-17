
Set Papka=./application

If Exist "%Papka%\*.*" (
   Echo RMDIR /s /q \"./application\"
)