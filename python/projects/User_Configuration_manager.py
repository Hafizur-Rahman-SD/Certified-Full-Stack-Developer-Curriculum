# User Configuration Manager

# A dictionary to store user settings for testing
# Here we are storing some default settings
test_settings = {
    "theme": "light",
    "language": "english",
    "notifications": "enabled"
}


# Function 1: ADD SETTING

def add_setting(settings, pair):
    # pair is a tuple containing (key, value)

    # Extract key and value from the tuple
    key, value = pair

    # Convert key and value to lowercase
    key = key.lower()
    value = value.lower()

    # Check if the key already exists in the dictionary
    if key in settings:
        # If exists, return error message
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."

    # If key does not exist, add it
    settings[key] = value

    # Return success message
    return f"Setting '{key}' added with value '{value}' successfully!"


# 
# Function 2: UPDATE SETTING
def update_setting(settings, pair):

    # Extract key and value
    key, value = pair

    # Convert key and value to lowercase
    key = key.lower()
    value = value.lower()

    # Check if key exists
    if key in settings:
        # Update the value
        settings[key] = value

        # Return success message
        return f"Setting '{key}' updated to '{value}' successfully!"

    # If key does not exist
    return f"Setting '{key}' does not exist! Cannot update a non-existing setting."


# Function 3: DELETE SETTING
def delete_setting(settings, key):

    # Convert key to lowercase
    key = key.lower()

    # Check if key exists
    if key in settings:

        # Remove the key-value pair
        del settings[key]

        # Return success message
        return f"Setting '{key}' deleted successfully!"

    # If key does not exist
    return "Setting not found!"


# Function 4: VIEW SETTINGS
def view_settings(settings):

    # If dictionary is empty
    if not settings:
        return "No settings available."

    # Start building the result string
    result = "Current User Settings:\n"

    # Loop through dictionary
    for key, value in settings.items():

        # Capitalize first letter of key
        capitalized_key = key.capitalize()

        # Add formatted line
        result += f"{capitalized_key}: {value}\n"

    # Return the final string
    return result