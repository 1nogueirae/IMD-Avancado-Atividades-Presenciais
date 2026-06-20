Comando para criar o seed, dentro de admin: `npx knex seed:make create_servicos_category`

Conteúdo do arquivo `admin/seeds/create_servicos_category.js`:
```js
exports.seed = function(knex) {
  return knex('categories').insert([
    {
      name: 'Serviços'
    }
  ]);
};
```

Comando para executar só esse seed: `npx knex seed:run --specific=create_servicos_category.js`