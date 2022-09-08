def main ():
    MENU_OPTIONS = """
    Escolha uma opção:
    0 - Sair
    1 - Realizar Análise
    """

    user_input = input(MENU_OPTIONS)

    if user_input == '0':
        print("Saindo")

    if user_input == '1':
        print("Realizando Análise...")
    else:
        print(f"Opção desconhecida: {user_input}")
    

if __name__ == "__main__":
    main()