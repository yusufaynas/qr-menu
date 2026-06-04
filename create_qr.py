import os

import qrcode

menu_url = os.getenv("MENU_URL") or "https://coruscating-starlight-08a7a7.netlify.app"

# QR kod oluştur
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(menu_url)
qr.make(fit=True)

# Resim oluştur
img = qr.make_image(fill_color="black", back_color="white")
img.save('qr_code.png')

print("QR kod oluşturuldu: qr_code.png")
print(f"QR URL: {menu_url}")
