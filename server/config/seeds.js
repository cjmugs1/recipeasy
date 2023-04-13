const db = require('./connection');
const { User, Recipe, RecipeTags } = require('../models');

db.once('open', async () => {
  await RecipeTags.deleteMany();

  const recipeTags = await RecipeTags.insertMany([
    { name: 'American' },      // Tag 0 in array index
    { name: 'BBQ' },           // Tag 1 in array index
    { name: 'Breakfast' },     // Tag 2 in array index
    { name: 'Chinese' },       // Tag 3 in array index
    { name: 'Dessert' },       // Tag 4 in array index
    { name: 'French' },        // Tag 5 in array index
    { name: 'Greek' },         // Tag 6 in array index
    { name: 'Indian' },        // Tag 7 in array index
    { name: 'Italian' },       // Tag 8 in array index
    { name: 'Japanese' },      // Tag 9 in array index
    { name: 'Korean' },        // Tag 10 in array index
    { name: 'Mediterranean' }, // Tag 11 in array index
    { name: 'Mexican' },       // Tag 12 in array index
    { name: 'Middle Eastern' },// Tag 13 in array index
    { name: 'Seafood' },       // Tag 14 in array index
    { name: 'Snacks' },        // Tag 15 in array index
    { name: 'Soups' },         // Tag 16 in array index
    { name: 'Thai' },          // Tag 17 in array index
    { name: 'Vegan' },         // Tag 18 in array index
    { name: 'Vegetarian' },    // Tag 19 in array index
  ]);
  

  console.log('RecipeTags seeded');

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([ //italian tag 8
    {
      title: 'Spaghetti Carbonara',
      ingredients: [
        'Spaghetti',
        'Bacon',
        'Parmesan cheese',
        'Eggs',
        'Olive oil',
        'Salt',
        'Pepper',
      ],
      directions:
        'Cook the spaghetti according to the package instructions. While it cooks, whisk the eggs, Parmesan, salt, and pepper together in a bowl. Cook bacon in a skillet until crispy. Remove bacon and reserve some fat. Add the cooked spaghetti to the skillet with bacon fat, toss to coat, then add the egg mixture and quickly toss to combine. Serve immediately, garnished with extra Parmesan and chopped parsley.',
      imageURL: '/images/recipeURLimages/s-carbonara.jpg', // image of recipe stored in client/public/images/recipeURLimages
      tags: [recipeTags[8]._id],  //tag 8 for Italian
    },
    
  ]);

  console.log('Recipes seeded');

  await User.deleteMany();

  await User.create({
    name: "Christopher Dean",
    email: 'coderchrisdean@gmail.com',
    password: 'T3st123!',
    recipes: [recipes[8]._id],
  });



  console.log('Users seeded');

  process.exit();
});
