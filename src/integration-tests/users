const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http'); // ??
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../api/app');

chai.use(chaiHttp); // ??

const DB_NAME = 'Cookmaster';

describe('Testa requisito 1, que cria um endpoint para o cadastro de usuários -> POST /users', () => {
  const INVALID_ENTRIES = { message: 'Invalid entries. Try again.' };
  const EMAIL_REGISTERED = { message: 'Email already registered' };

  const DBServer = new MongoMemoryServer();
  let connectionMock = {}

  before(async () => {
    const URLMock = await DBServer.getUri();
    const OPTIONS  = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    connectionMock = await MongoClient.connect(URLMock, OPTIONS)

    sinon.stub(MongoClient, 'connect').resolves(connectionMock) // verificar essa linha
  });

  describe(('Quando o campo "name" não é enviado'), () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({})
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna objeto com a mensagem de erro "Invalid entries. Try again."', () => {
      expect(response.body).to.be.deep.equal(INVALID_ENTRIES);
    });
  });

  describe(('Quando o campo "email" não é enviado'), () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'Paula'
        })
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna objeto com a mensagem de erro "Invalid entries. Try again."', () => {
      expect(response.body).to.be.deep.equal(INVALID_ENTRIES);
    });
  });

  describe(('Quando o campo "password" não é enviado'), () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'Paula',
          email: 'teste@teste.com'
        })
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna objeto com a mensagem de erro "Invalid entries. Try again."', () => {
      expect(response.body).to.be.deep.equal(INVALID_ENTRIES);
    });
  });

  describe(('Quando o email enviado já está cadastrado no banco de dados'), () => {
    let response = {};

    before(async () => {
      await connectionMock.db(DB_NAME).collection('users').insertOne({
        name: 'Paula',
        email: 'teste@teste.com',
      })

      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'Claudiney',
          email: 'teste@teste.com',
        })
    });

    after(async () => {
      await connectionMock.db(DB_NAME).collection('users').deleteMany({});
    });

    it('Retorna status 409', () => {
      expect(response).to.have.status(409);
    });

    it('Retorna objeto com a mensagem de erro "Email already registered"', async () => {
      expect(response.body).to.be.deep.equal(EMAIL_REGISTERED);
    });
  });

  describe(('Quando todos os dados enviados são válidos'), () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send({
          name: 'Paula',
          email: 'teste@teste.com',
          password: '123456'
        })
    });

    after(async () => {
      await connectionMock.db(DB_NAME).collection('users').deleteMany({});
    });

    it('Retorna status 201', async () => {
      expect(response).to.have.status(201);
    });

    it('Retorna o usuário criado com o campo "role" com o valor "user".', async () => {
      const { _id } = await connectionMock.db(DB_NAME).collection('users')
        .findOne({ email: 'teste@teste.com' });

      const user = {
        _id: _id.toString(),
        name: 'Paula',
        email: 'teste@teste.com',
        role: 'user'
      }

      expect(response.body).to.be.deep.equal({ user });
    });

  });
  

});