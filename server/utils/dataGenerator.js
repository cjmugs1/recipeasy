const db = require('../config/connection');
const { faker } = require('@faker-js/faker') 

db.on('error', (err) => err)

const createUser = async (numberOfUsers) => {
    // custom values to use in password and user language generation
    const specialSymbols = ["#", "?", "!", "@", "$", "%", "^", "&", "*"]
    const languageLocales = ["en", "fr", "es"]
    
    const users = [];
    
    // generate a user object with random data
    for (let i=0; i < numberOfUsers; i++ ){
        // needed to abstract the name before the user object so that the username and email would have the correct first and last name
        let name = faker.name.fullName();
        users.push({
            username: faker.internet.userName(name.split(" ")[0], name.split(" ")[1]),
            name: name,
            email: faker.internet.email(name.split(" ")[0], name.split(" ")[1], 'gmail.dev', { allowSpecialCharacters: false }),
            password: `${faker.internet.password(6, false, /[A-Za-z]/)}${Math.floor(Math.random() * 9)}${specialSymbols[Math.floor(Math.random() * specialSymbols.length)]}`,
            language: `${languageLocales[Math.floor(Math.random() * languageLocales.length)]}`,
            recipes: []
        })
        console.log(users.password)
    };
    return users;
}

const createRecipeTag = async (numberOfTags) => {
    const recipeTagNames = ["American", "BBQ", "Chinese", "French", "Greek", "Indian", "Italian", "Japanese", "Korean", "Mediterranean", "Mexican", "Middle Eastern", "Thai", "Vegan", "Vegetarian", "Breakfast", "Lunch", "Dinner", "Snack", "Appetizer", "Dessert", "Soups", "Salads", "Sweet", "Sour", "Spicy", "Salty", "Seafood", "Pasta", "Grilled", "Southern", "Healthy"]
    const recipeTags = [];
    for (let i=0; i < numberOfTags; i++){
        recipeTags.push({
            name: recipeTagNames[i],
            recipes: []
        })
    }
    return recipeTags;
}

const createRecipe = async (users, recipeTags, numberOfRecipesPerUser) => {
    const cookingUnits = ["hr(s)", "min(s)"]

    const recipes = [];

    for (let i=0; i < users.length; i++){

        for (let j=0; j < numberOfRecipesPerUser; j++){

            const ingredients = [];
            // where 6 is the number of ingredients per recipe
            for (let k=0; k < 6; k++){
                ingredients.push({
                    quantity: faker.datatype.number(10),
                    unit: faker.science.unit().name,
                    name: faker.commerce.productMaterial(),
                })
            }
            
            const instructions = [];
            // where 6 is the number of instructions per recipe
            for (let k=0; k < 6; k++){
                instructions.push( `${faker.hacker.verb()} ${ingredients[k].name}` )
            }

            const cookTime = {
                amount: faker.datatype.number(10),
                unit: cookingUnits[Math.floor(Math.random() * cookingUnits.length)],
            }
            
            const tags = [
                recipeTags[Math.floor(Math.random() * recipeTags.length)]._id,
                recipeTags[Math.floor(Math.random() * recipeTags.length)]._id,
                recipeTags[Math.floor(Math.random() * recipeTags.length)]._id
            ];

            recipes.push({
                userId: users[i]._id,
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                ingredients: ingredients,
                instructions: instructions,
                cookTime: cookTime,
                imageURL: faker.image.food(480,480),
                tags: tags,
                originalLanguage: users[i].language,
                createdAt: Date.now(),
            })
        }
    }
    return recipes;
}

module.exports = { createUser, createRecipeTag, createRecipe };