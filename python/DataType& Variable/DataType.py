
#Here are dataTypes in Python
# Integer
#float
#String
#Boolean
#set
#list
#range
#none
#tuple
#dictionary
#Typeof()
#is instance()

#Integer
my_integer = 10
print("Integer:", my_integer)
print("Type of my_integer:", type(my_integer))

#Float
my_float = 10.5
print("Float:", my_float)
print("Type of my_float:", type(my_float))

#String
my_string = "Hello, World!"
print("String:", my_string)
print("Type of my_string:", type(my_string))

#Boolean
my_boolean = True
print("Boolean:", my_boolean)
print("Type of my_boolean:", type(my_boolean))

#Set
my_set = {1, 2, 3}
print("Set:", my_set)
print("Type of my_set:", type(my_set))


#List
my_list = [1, 2, 3, 4, 5]
print("List:", my_list)
print("Type of my_list:", type(my_list))

#Range
my_range = range(1, 10)
print("Range:", list(my_range))
print("Type of my_range:", type(my_range))


#None
my_none = None
print("None:", my_none)
print("Type of my_none:", type(my_none))

#Tuple
my_tuple = (1, 2, 3)
print("Tuple:", my_tuple)
print("Type of my_tuple:", type(my_tuple))

#Dictionary
my_dict = {"name": "Alice", "age": 25}
print("Dictionary:", my_dict)
print("Type of my_dict:", type(my_dict))

#isinstance()
print("Is my_integer an instance of int?", isinstance(my_integer, int))
print("Is my_list an instance of list?", isinstance(my_list, list))
print("Is my_dict an instance of dict?", isinstance(my_dict, dict))
print("Is my_string an instance of str?", isinstance(my_string, str))
print("Is my_float an instance of float?", isinstance(my_float, float))
print("Is my_boolean an instance of bool?", isinstance(my_boolean, bool))
print("Is my_set an instance of set?", isinstance(my_set, set))
print("Is my_tuple an instance of tuple?", isinstance(my_tuple, tuple))

print("Is my_none an instance of NoneType?", isinstance(my_none, type(None)))


