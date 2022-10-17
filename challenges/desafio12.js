db.produtos.updateMany(
  { $and: [
    { ingredientes: {$not: { $in: ["ketchup"] } } },
    { nome: { $not: { $eq: "McChicken" } } },
  ] },
  { $addToSet: { ingredientes: "ketchup" } }
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });