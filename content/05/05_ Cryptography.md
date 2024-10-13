# Cryptography Programming Exercise

___Create a python program that can take a text file and output an encrypted version as a file in your folder on the system.___
</br>

I selected the RSA algorithm because it is a widely recognized public-key encryption method that plays a crucial role in understanding asymmetric cryptography. RSA provides a high level of security by using a pair of keys—one for encryption (public key) and another for decryption (private key). This method is fundamental in securing communications and is widely used in protocols such as SSL/TLS, which are essential in many secure systems today. By choosing RSA, the goal was to demonstrate how asymmetric encryption works and its practical applications in protecting sensitive data.

RSA would meet GDPR regulations if implemented correctly. The algorithm ensures that sensitive data is securely encrypted, thereby protecting it from unauthorized access, which aligns with GDPR’s strict requirements for data protection. By using RSA encryption, organizations can safeguard personal information and comply with GDPR’s data security standards. This exercise aimed to provide a practical example of RSA encryption to illustrate its relevance in securing data and meeting regulatory requirements.
</br>

**Python Program for RSA Encryption**
Here’s a simple Python program that uses the RSA algorithm to encrypt a text file and save the encrypted version as a new file:

```python
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import binascii

# Generate RSA keys
key = RSA.generate(2048)
public_key = key.publickey()

# Save the public and private keys
with open('private.pem', 'wb') as f:
    f.write(key.export_key('PEM'))

with open('public.pem', 'wb') as f:
    f.write(public_key.export_key('PEM'))

# Function to encrypt a file using the public key
def encrypt_file(input_file, output_file, public_key):
    with open(input_file, 'r') as f:
        plaintext = f.read()

    cipher = PKCS1_OAEP.new(public_key)
    ciphertext = cipher.encrypt(plaintext.encode('utf-8'))

    with open(output_file, 'wb') as f:
        f.write(ciphertext)

# Encrypt the text file
encrypt_file('plain_text.txt', 'encrypted_text.bin', public_key)
print("File encrypted and saved as 'encrypted_text.bin'.")
```

This program generates RSA keys, encrypts the contents of a text file, and saves the encrypted data as a new file. The `plain_text.txt` file is encrypted using the public key, and the result is stored in `encrypted_text.bin`. This demonstrates the practical application of RSA encryption in securing text files, making it suitable for compliance with data protection standards such as GDPR.