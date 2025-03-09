@echo off
setlocal

:: Set the directory to list files from (change this as needed)
set "target_folder=C:\Users\Ashley\curseforge\minecraft\Instances\KrashPack Season 2\mods"

:: Output file
set "output_file=%~dp0file_list.txt"

:: Clear previous file list
echo Listing files in %target_folder% > "%output_file%"

:: Loop through files and write to output file
for /f "delims=" %%A in ('dir /b "%target_folder%"') do echo %%A >> "%output_file%"

echo File list saved to %output_file%
pause
