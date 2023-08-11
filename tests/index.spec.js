const VittapadaJanayitr = require('@logmedaily/vittapada_janayitr');



describe('VittapadaJanayitr', () => {
    it('class instance', () => {
        expect(new VittapadaJanayitr()).toBeInstanceOf(VittapadaJanayitr);
    });

    it('initialize with no options', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        expect(vittapadaJanayitr.initialized).toBe(false);
    })

    it('initialize new mnemonic', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const newMnemonic = {password: "password@123", unlock: 'passphrase'};
        vittapadaJanayitr.initialize(newMnemonic);
        const decrypted = vittapadaJanayitr.decrypt(newMnemonic)
        expect(vittapadaJanayitr.initialized).toBe(true);

    })

    it('initialize new mnemonic with 24 number of words to test', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const newMnemonic = {password: "password@123", numOfWords: 24};
        vittapadaJanayitr.initialize(newMnemonic);
        newMnemonic.unlock = 'passphrase';
        const decrypted = vittapadaJanayitr.decrypt(newMnemonic)
        expect(vittapadaJanayitr.initialized).toBe(true);
        expect(decrypted.split(" ").length).toBe(24);
    });

    it('initialize with existing mnemonic', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon ability abandon",password: "password@123", unlock: 'passphrase'};
        vittapadaJanayitr.initialize(existingMnemonic);
        expect(vittapadaJanayitr.initialized).toBe(true);
        existingMnemonic.unlock = 'passphrase';
        const decrypted = vittapadaJanayitr.decrypt(existingMnemonic);
        expect(decrypted.split(" ").length).toBe(3);
        expect(decrypted).toBe(existingMnemonic.mnemonic);
    })

    it('should throw an error if invalid number of words is provided', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const newMnemonic = {password: "password@123", numOfWords: 2};
        expect(() => {
            vittapadaJanayitr.initialize(newMnemonic);
        }).toThrow('Invalid word count. Word count must be 3, 6, 9, 12, 15, 18, 21, or 24.');
    })

    it('should throw an error if invalid word in mnemonic is provided', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const newMnemonic = {password: "password@123", numOfWords: 3};
        newMnemonic.mnemonic = "wrongmnemonic abandon abandon ";
        expect(() => {
            vittapadaJanayitr.initialize(newMnemonic);
        }).toThrow('Invalid word count. Word count must be 3, 6, 9, 12, 15, 18, 21, or 24.');
    })

    it('should throw an error if length of mnemonic is less than 3', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const newMnemonic = {password: "password@123"};
        newMnemonic.mnemonic = "also";
        expect(() => {
            vittapadaJanayitr.initialize(newMnemonic);
        }).toThrow('Invalid word count. Word count must be 3, 6, 9, 12, 15, 18, 21, or 24.');
    })

    it('should throw an error if correct lock option is not provided', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon ability abandon",password: "password@123", unlock: 'all'};
        vittapadaJanayitr.initialize(existingMnemonic);
        expect(vittapadaJanayitr.initialized).toBe(true);
        expect(() => {
            vittapadaJanayitr.decrypt(existingMnemonic);
        }).toThrow('unlock must be either passphrase or seed');
    })

    it('should unlock seed', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon ability abandon",password: "password@123", unlock: 'seed'};
        vittapadaJanayitr.initialize(existingMnemonic);
        expect(vittapadaJanayitr.initialized).toBe(true);
        const decrypted = vittapadaJanayitr.decrypt(existingMnemonic);
        console.log(decrypted.toString('hex'))
        expect(Buffer.from(decrypted).toString('hex')).toBe("6524efbfbdefbfbd60efbfbdefbfbdefbfbd70efbfbd0dcdbdefbfbd23efbfbd3458efbfbdefbfbd2d7257c58c6316efbfbd7e41efbfbdefbfbd6d4d41efbfbdefbfbd46efbfbd15efbfbdefbfbdefbfbdefbfbdefbfbd08efbfbd24efbfbd7c6aefbfbd56efbfbd7031efbfbd7eefbfbd5d3b72efbfbd");

    })

    it('should throw error if password is not provided in options', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon ability abandon",unlock: 'passphrase'};
        expect(()=>{
            vittapadaJanayitr.initialize(existingMnemonic);

        }).toThrow('Password must be provided');
    })

    it('should not accept repetitive words as mnemonic input', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon abandon abandon",password: "password@123", unlock: 'passphrase'};
        expect(() => {
            vittapadaJanayitr.initialize(existingMnemonic);
        }).toThrow('Invalid mnemonic.');
    });

    it('should throw error', () => {
        const vittapadaJanayitr = new VittapadaJanayitr();
        const existingMnemonic = {mnemonic: "abandon dont abandon",password: "password@123", unlock: 'passphrase'};
        expect(() => {
            vittapadaJanayitr.initialize(existingMnemonic);
        }).toThrow('Invalid mnemonic.');
    });
})