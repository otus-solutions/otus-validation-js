# otus-validation

Esse projeto tem como intuito fornecer uma ferramenta pra realizar validação de campos.

### Dependência

Módulo:
```javascript
(function() {

    angular
        .module('PROJETO', [
            'otus.validation'
        ]);

}());
```

Package.json:
```json
    "dependencies": {
        "otus-validation-js": "git@github.com:ccem-dev/otus-validation-js.git#dev"
    }
```

### Utilização

```javascript
                var elementRegister = ElementRegisterFactory.create('IDENTIFICADOR', answerReference);

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
                elementRegister.addValidator('mandatory', {'reference': true});
```

* Name: Distinct
* Tipo: Any
* Value: distinct
* Aplicação:
```javascript
                elementRegister.addValidator('distinct', {'reference' : 10});
```
* Name: In
* Tipo: Number
* Value: in
* Aplicação:
```javascript
                elementRegister.addValidator('in', {'reference': {'initial' : 1, 'end' : 10}});
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

* Name: Precision
* Tipo: Integer
* Value: precision
* Aplicação:
```javascript
                elementRegister.addValidator('precision', {'reference' : 3});
```

* Name: Scale
* Tipo: Integer
* Value: scale
* Aplicação:
```javascript
                elementRegister.addValidator('scale', {'reference' : 2});
```

* Name: Date In
* Tipo: Date
* Value: date-in
* Aplicação:
```javascript
                elementRegister.addValidator('range-date', {'reference:{'initial' : new Date(2016,1,1), 'end' : new Date(2017,1,1)}});
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
                elementRegister.addValidator('past-date', {'reference': true});
```

* Name: Future Date
* Tipo: Date
* Value: future-date
* Aplicação:
```javascript
                elementRegister.addValidator('future-date', {'reference': true});
```

* Name: Min Length
* Tipo: String
* Value: min-length
* Aplicação:
```javascript
                elementRegister.addValidator('min-length', {'reference' : 1});
```

* Name: Max Length
* Tipo: String
* Value: max-length
* Aplicação:
```javascript
                elementRegister.addValidator('max-length', {'reference' : 150});
```

* Name: Alphanumeric
* Tipo: String
* Value: alphanumeric
* Aplicação:
```javascript
                elementRegister.addValidator('alphanumeric', {'reference': true});
```

* Name: Lower Case
* Tipo: String
* Value: lower-Case
* Aplicação:
```javascript
                elementRegister.addValidator('lower-case', {'reference': true});
```

* Name: Specials
* Tipo: String
* Value: Specials
* Aplicação:
```javascript
                elementRegister.addValidator('specials', {'reference': true});
```

* Name: Upper Case
* Tipo: String
* Value: upper-case
* Aplicação:
```javascript
                elementRegister.addValidator('upper-case', {'reference': true});
```

* Name: Max Time
* Tipo: Time
* Value: max-time
* Aplicação:
```javascript
                elementRegister.addValidator('max-time', {'reference' : '22:00'});
```

* Name: Min Time
* Tipo: Time
* Value: min-time
* Aplicação:
```javascript
                elementRegister.addValidator('min-time', {'reference' : '06:00'});
```
