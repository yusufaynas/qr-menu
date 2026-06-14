import qrcode

# Netlify adresin
menu_url = "https://yunusemrepastanes.netlify.app"

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(menu_url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save('qr_code.png')

print("QR kod oluşturuldu: qr_code.png")
print(f"QR URL: {menu_url}")
