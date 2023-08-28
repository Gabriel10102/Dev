const pessoa = { 
    nome: "Aluno de TI",
    saudacao: function() {
      console.log(`Olá, eu sou ${this.nome}`);
        }
  };
pessoa.saudacao();