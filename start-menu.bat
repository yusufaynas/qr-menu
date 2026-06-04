@echo off
REM QR Menüyü başlatmak için basit batch dosyası
REM Bu dosyaya çift tıklayarak menüyü anında açabilirsiniz

echo ===================================
echo  QR Menu Sistemi - Pastane
echo ===================================
echo.
echo Menu baslatlyor...
echo.

REM Python yüklenmiş mi kontrol et
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python ile server baslatiliyor...
    echo Tarayici otomatik acilacak...
    timeout /t 2
    start http://localhost:8000
    python -m http.server 8000
) else (
    echo Menu yerel olarak aciliyor...
    timeout /t 1
    start index.html
)

pause
