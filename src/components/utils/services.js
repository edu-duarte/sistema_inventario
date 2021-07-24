class Services {

  createClient(client) {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(client);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    console.log('Cliente Cadastrado com Sucesso');
    alert('Cliente Cadastrado com Sucesso.');
  }

  listAllClients() {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    return clientes;
  }

  createProduct(product) {
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtos.push(product);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    console.log('Produto Cadastrado com Sucesso.');
    alert('Produto Cadastrado com Sucesso.');
  }

  listAllProducts() {
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    return produtos;
  }

}
export default Services;