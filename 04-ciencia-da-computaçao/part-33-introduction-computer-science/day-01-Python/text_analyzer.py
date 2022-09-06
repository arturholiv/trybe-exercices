def text_analyzer(text):
    """retorna dados sobre a string fornecida"""
    result = {}
    result ["original"] = text
    result["size"] = len(text)
    return result
print(text_analyzer("python it's cool"))