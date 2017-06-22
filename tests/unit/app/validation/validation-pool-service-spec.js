describe('ValidationPoolService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ValidationPoolService');
        });
    });

    it('should reset pool when call initPool', function() {
        var elementRegister = {
            'id': 'ID'
        };

        service.persist(elementRegister);
        expect(service.fetchAll().length).toEqual(1);

        service.initPool();
        expect(service.fetchAll().length).toEqual(0);
    });

    it('should add element in pool when call persist', function() {
        var elementRegister = {
            'id': 'ID'
        };

        expect(service.fetchAll().length).toEqual(0);
        service.persist(elementRegister);
        expect(service.fetchAll().length).toEqual(1);
    });

    it('should remove element in pool using ID to search', function() {
        var elementRegister = {
            'id': 'ID'
        };

        service.persist(elementRegister);
        expect(service.fetchAll().length).toEqual(1);
        service.remove(elementRegister.id);
        expect(service.fetchAll().length).toEqual(0);
    });

    it('should fetch element using ID', function() {
        var elementRegister = {
            'id': 'ID'
        };

        service.persist(elementRegister);
        expect(service.fetchAll().length).toEqual(1);
        expect(service.fetch(elementRegister.id)).toEqual(elementRegister);
    });

    it('fetchAll should return pool', function() {
        var elementRegister = {
            'id': 'ID'
        };
        var elementRegisterTwo = {
            'id': 'IDTwo'
        };
        var elementRegisterThree = {
            'id': 'IDThree'
        };

        service.persist(elementRegister);
        service.persist(elementRegisterTwo);
        service.persist(elementRegisterThree);

        var pool = service.fetchAll();
        expect(pool[0]).toEqual(elementRegister);
        expect(pool[1]).toEqual(elementRegisterTwo);
        expect(pool[2]).toEqual(elementRegisterThree);
    });

});
