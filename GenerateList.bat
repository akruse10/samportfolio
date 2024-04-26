@echo off
setlocal enabledelayedexpansion

set "list="
for %%i in (*.jpg) do (
  set "list=!list!'%%i', "
)

set "list=[!list:~0,-2!]"
echo !list! > imageList.txt
