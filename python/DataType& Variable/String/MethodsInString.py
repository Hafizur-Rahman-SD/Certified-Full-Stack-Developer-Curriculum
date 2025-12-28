#[uppercase(),Lowercase(),strip(),replace(), split(),join(iterable),startswith(prefix),endswith(suffix),find(substring),count(substring),isalpha(),isdigit(),islower(),isupper(),isspace(),len(),type(),index(),format(),capitalize(),title(),zfill(width),center(width),ljust(width),rjust(width), swapcase(),casefold(),encode(),decode(),partition(separator),rpartition(separator),removeprefix(prefix),removesuffix(suffix), expandtabs(tabsize),maketrans(),translate(mapping)
my_string = "   Hello, World! Welcome to Python String Methods.   " 
# Uppercase
print("Uppercase:", my_string.upper())
# Lowercase
print("Lowercase:", my_string.lower())
# Strip
print("Stripped:", my_string.strip())   
# Replace
print("Replaced:", my_string.replace("World", "Universe"))
# Split
print("Split:", my_string.split())
# Join
words = ["Hello", "from", "Python"]
print("Joined:", " ".join(words))
# Startswith
print("Starts with '   He':", my_string.startswith("   He"))
# Endswith
print("Ends with '   ':", my_string.endswith("   "))
# Find
print("Find 'Python':", my_string.find("Python"))
# Count
print("Count 'o':", my_string.count("o"))
# Isalpha
print("Is alpha:", my_string.strip().isalpha())
# Isdigit
print("Is digit:", my_string.strip().isdigit())
# Islower
print("Is lower:", my_string.strip().islower())
# Isupper
print("Is upper:", my_string.strip().isupper())
# Isspace
print("Is space:", my_string.isspace())
# Length
print("Length:", len(my_string))
# Type
print("Type:", type(my_string))
# Index 
print("Index of 'W':", my_string.index("W"))
# Format
formatted_string = "Hello, {}. Welcome to {}!".format("Alice", "Python")
print("Formatted String:", formatted_string)
# Capitalize
print("Capitalized:", my_string.strip().capitalize())
# Title 
print("Title:", my_string.strip().title())
# Zfill
print("Zfill:", my_string.strip().zfill(40))
# Center
print("Centered:", my_string.strip().center(50, '*'))
# Ljust
print("Ljust:", my_string.strip().ljust(50, '-'))
# Rjust
print("Rjust:", my_string.strip().rjust(50, '+'))
# Swapcase
print("Swapcase:", my_string.swapcase())
# Casefold
print("Casefold:", my_string.casefold())
# Encode
encoded_string = my_string.encode('utf-8')
print("Encoded:", encoded_string)
# Decode
decoded_string = encoded_string.decode('utf-8')
print("Decoded:", decoded_string)
# Partition
print("Partition:", my_string.partition("World"))
# Rpartition
print("Rpartition:", my_string.rpartition("to"))
# Removeprefix
print("Removeprefix:", my_string.removeprefix("   Hello, "))
# Removesuffix
print("Removesuffix:", my_string.removesuffix("   "))   
