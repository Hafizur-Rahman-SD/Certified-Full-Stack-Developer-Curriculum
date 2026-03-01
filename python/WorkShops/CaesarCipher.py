

# shift = 5
# alphabet = 'abcdefghijklmnopqrstuvwxyz' 

# shifted_alphabet = alphabet[shift:] + alphabet[:shift] 
# print(shifted_alphabet)


# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# shift = 5
# shifted_alphabet = alphabet[shift:] + alphabet[:shift]

# translation_table = str.maketrans(alphabet, shifted_alphabet)



# text = 'hello world'



# encrypted_text = text.translate(translation_table)


# print (encrypted_text)


# def caesar():
    # 1. Define the alphabet
#     alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
#     # 2. Define the shift value
#     shift = 5
    
#     # 3. Create the shifted alphabet
#     shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    
#     # 4. Create a translation table
#     translation_table = str.maketrans(alphabet, shifted_alphabet)
    
#     # 5. Define the text to encrypt
#     text = 'hello world'
    
#     # 6. Encrypt the text
#     encrypted_text = text.translate(translation_table)
    
#     # 7. Print the encrypted text
#     print(encrypted_text)

# # Call the function
# caesar()

# step 11
# def caesar(text, shift):
#     # 1. Define the alphabet
#     alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
#     # 2. Create the shifted alphabet using the shift parameter
#     shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    
#     # 3. Create a translation table
#     translation_table = str.maketrans(alphabet, shifted_alphabet)
    
#     # 4. Encrypt the text using the translation table
#     encrypted_text = text.translate(translation_table)
    
#     # 5. Return the encrypted text
#     return encrypted_text

# # Example usage
# message = 'hello world'
# shift_value = 5
# encrypted_message = caesar(message, shift_value)
# print(encrypted_message)


# encrypted_text = caesar('freeCodeCamp', 3)




def caesar(text, shift, encrypt=True):

    if not isinstance(shift, int):
        return 'Shift must be an integer value.'

    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25.'

    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if not encrypt:
        shift = - shift
    
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    translation_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    encrypted_text = text.translate(translation_table)
    return encrypted_text

def encrypt(text, shift):
    return caesar(text, shift)
    
def decrypt(text, shift):
    return caesar(text, shift, encrypt=False)

encrypted_text = encrypt('freeCodeCamp', 3)
print(encrypted_text)