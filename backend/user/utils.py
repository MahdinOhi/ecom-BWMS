import pyotp
from django.core.mail import send_mail

def generate_otp():
    # Generate a 6-digit numeric OTP using pyotp
    return pyotp.TOTP(pyotp.random_base32(), digits=6, interval=300).now()

def send_otp_email(email, code):
    send_mail(
        'Your OTP Code',
        f'Your OTP code is {code}',
        'your_gmail@gmail.com',  # must match EMAIL_HOST_USER
        [email],
        fail_silently=False,
    ) 