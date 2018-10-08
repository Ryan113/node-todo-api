const supertest = request('supertest');
const expect = request('supertest');

const {Todo} = require('./../models/todo');
const {app} = require('./../server');

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    });
    .end((err, res) => {
      if (err) {
        return done(err);
      }

      Todo.find().then(todos)
    });
  });
});
