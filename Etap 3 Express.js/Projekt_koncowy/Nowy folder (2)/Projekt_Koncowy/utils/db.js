const {join} = require('path');
const {writeFile,readFile} = require('fs').promises;
const {v4:uuid} = require('uuid');
const {ClientRecord} = require('../records/client-record')

class Db{
  constructor(JsonFileName) {
    this._pathFile = join(__dirname,'../data',JsonFileName)
    this._Load();
  }

  async _Load() {
    this._data = JSON.parse(await readFile(this._pathFile,'utf8')).map(obj => {
      return new ClientRecord(obj)
    });
    return this._data
  }

  save(){
    writeFile(this._pathFile,JSON.stringify(this._data),'utf8');

  }

  create(obj){
    const id = uuid()
    this._data.push(new ClientRecord({
      id,
      ...obj
    }));
    this.save()
    return id;
  }

  update(id,newObj){
    this._data = this._data.map(oldObj => (
      oldObj.id === id ? {
        ...oldObj,
        ...newObj,
      } : oldObj
    ))
    this.save()
  }

  delete(id){
    this._data = this._data.filter(oneObj => oneObj.id !== id);
    writeFile(this._pathFile,JSON.stringify(this._data),'utf8');
  }

  getOne(id){
    return this._data.find(oneObj => oneObj.id == id)
  }

  getAll(){
    return this._data;
  }

}

const DbClient = new Db('data-user.json')

module.exports = {
  DbClient
}


