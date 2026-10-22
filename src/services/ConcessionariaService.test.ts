import { ConcessionariaService } from './ConcessionariaService';

describe('Serviço ConcessionariaService', () => {
    let mockRepository: any;

    let concessionariaService: ConcessionariaService;

    beforeEach(() => {

        mockRepository = {
            salvar: jest.fn(),
            listarTodos: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            excluir: jest.fn()
        };

        concessionariaService = new ConcessionariaService(mockRepository);
    });

    describe('Testando validações do método cadastrar', () => {

        it('deve lançar erro se o CNPJ não for informado', async () => {
            await expect(concessionariaService.cadastrar('Honda', '', 'São Paulo'))
                .rejects.toThrow("O CNPJ é obrigatório.");
        });

        it('deve lançar erro se a cidade não for informada', async () => {
            await expect(concessionariaService.cadastrar('Honda', '12345678000100', ''))
                .rejects.toThrow("A cidade é obrigatória.");
        });

    });

    describe('Testando validações do método buscarPorId', () => {

        it('deve lançar erro se a concessionária não existir no banco', async () => {
            mockRepository.buscarPorId.mockResolvedValue(null);

            await expect(concessionariaService.buscarPorId(999))
                .rejects.toThrow("Concessionária não encontrado.");
        });

    });

});