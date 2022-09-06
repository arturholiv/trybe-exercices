def char_counter(text):
    """retorna a quantidade de caracteres da string"""
    result = dict()
    for char in text:
        if char in result:
          result[char] += 1
        else:
            result[char] = 1
    return result

def text_analyzer(text: str):
    """retorna dados sobre a string fornecida"""
    result = {}
    result ["original"] = text
    result["size"] = len(text)
    result["is_digit"] = text.isdigit()
    result["upper"] = text.upper()
    result["word_count"] = len(text.split())
    result["char_counter"] = char_counter(text)
    return result
print(text_analyzer("python it's cool"))