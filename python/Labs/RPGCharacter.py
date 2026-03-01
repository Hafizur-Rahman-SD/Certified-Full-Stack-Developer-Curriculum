full_dot = '●'
empty_dot = '○'

def create_character(name, strength, intelligence, charisma):
    # Character name validation 
    if not isinstance(name, str):
        return "The character name should be a string"
    if name == "":
        return "The character should have a name"
    if len(name) > 10:
        return "The character name is too long"
    if " " in name:
        return "The character name should not contain spaces"
    
    # Stats validation 
    stats = [strength, intelligence, charisma]
    if not all(isinstance(stat, int) for stat in stats):
        return "All stats should be integers"
    if any(stat < 1 for stat in stats):
        return "All stats should be no less than 1"
    if any(stat > 4 for stat in stats):
        return "All stats should be no more than 4"
    if sum(stats) != 7:
        return "The character should start with 7 points"
    
    #  Build the output string
    result = name + "\n"
    abbreviations = ["STR", "INT", "CHA"]
    
    for i in range(3):
        full_dots = "●" * stats[i]
        empty_dots = "○" * (10 - stats[i])
        result += f"{abbreviations[i]} {full_dots}{empty_dots}\n"
    
    return result.strip()  # remove the last newline