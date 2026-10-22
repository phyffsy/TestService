import { Concessionaria } from './Concessionaria';

describe('Modelo Concessionaria', () => {
    it('deve criar uma concessionaria corretamente com nome, cnpj e cidade', () => {
        // Arrange
        const nomeDaConcessionaria = '2 Irmao';
        const cnpjDaConcessionaria = '111.222.333.444.555';
        const cidadeDaConcessionaria = 'Itapetininga-SP';

        const concessionaria = new Concessionaria(
            nomeDaConcessionaria,
            cnpjDaConcessionaria,
            cidadeDaConcessionaria
        );

        // Assert
        expect(concessionaria.nome).toBe('2 Irmao');
        expect(concessionaria.cnpj).toBe('111.222.333.444.555');
        expect(concessionaria.cidade).toBe('Itapetininga-SP');
        expect(concessionaria.id).toBeNull();
    });
});