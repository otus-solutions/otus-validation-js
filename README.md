# otus-validation

Esse projeto tem como intuito fornecer uma ferramenta pra realizar validação de campos.

### Aplicação

```javascript
                var elementRegister = ElementRegisterFactory.create('IDENTIFICADOR', model);
                
                elementRegister.addValidator('upper-limit', {'reference': 10});
                elementRegister.addValidator('distinct', {'reference': 10});

                ValidationService.registerElement(elementRegister);
                ValidationService.validateAllElements(function(validationResponse){
                    console.log(validationResponse);
                });

```

### Response de Vadalição

```json
{
    "elementID": "IDE",
    "validators": [{
        "name": "nome do validator",
        "reference": "valor utilizado para referencia",
        "result": "true/false"
    }, {
        "name": "nome do validator",
        "reference": "valor utilizado para referencia",
        "result": "true/false"
    }, {
        "name": "nome do validator",
        "reference": "valor utilizado para referencia",
        "result": "true/false"
    }]
}
```

## Validadores Disponiveis

* Name: Mandatory
* Tipo: Any
* Value: mandatory
* Aplicação:
```javascript
                elementRegister.addValidator('mandatory', {});
```

* Name: Distinct
* Tipo: Any
* Value: distinct
* Aplicação:
```javascript
                elementRegister.addValidator('distinct', {'reference' : 10});
```

* Name: Lower Limit
* Tipo: Integer
* Value: lower-limit
* Aplicação:
```javascript
                elementRegister.addValidator('lower-limit', {'reference' : 5});
```

* Name: Upper Limit
* Tipo: Integer
* Value: upper-limit
* Aplicação:
```javascript
                elementRegister.addValidator('upper-limit', {'reference' : 100});
```

* Name: Date In
* Tipo: Date
* Value: date-in
* Aplicação:
```javascript
                elementRegister.addValidator('date-in', {'initial' : new Date(2016,1,1), 'end' : new Date(2017,1,1)});
```

* Name: Max Date
* Tipo: Date
* Value: max-date
* Aplicação:
```javascript
                elementRegister.addValidator('max-date', {'reference' : new Date(2017,1,1)});
```

* Name: Min Date
* Tipo: Date
* Value: min-date
* Aplicação:
```javascript
                elementRegister.addValidator('min-date', {'reference' : new Date(2016,1,1)});
```

* Name: Past Date
* Tipo: Date
* Value: past-date
* Aplicação:
```javascript
                elementRegister.addValidator('past-date', {});
```

* Name: Future Date
* Tipo: Date
* Value: future-date
* Aplicação:
```javascript
                elementRegister.addValidator('future-date', {});
```

* Name: Min Length
* Tipo: String
* Value: min-length
* Aplicação:
```javascript
                elementRegister.addValidator('min-length', {'size' : 1});
```

* Name: Max Length
* Tipo: String
* Value: max-length
* Aplicação:
```javascript
                elementRegister.addValidator('max-length', {'size' : 150});
```




