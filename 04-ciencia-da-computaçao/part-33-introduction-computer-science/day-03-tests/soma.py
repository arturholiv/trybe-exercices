def soma(a, b):
    return a + b

def test_soma_positivos():
    assert soma(3, 5) == 8

def test_soma_negativos():
    assert soma(-3, -5) == -8


"""pytest soma.py -v => to run"""