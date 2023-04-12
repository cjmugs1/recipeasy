const db = require('../config/connection');
const { User, Recipe, RecipeTag } = require('../models');
import { faker } from '@faker-js/faker'

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
            language: `${languageLocales[Math.floor(Math.random * languageLocales.length)]}`,
        })
    };
    return users;
}

const createRecipe = async (users, numberOfRecipesPerUser) => {
    
}


module.exports = { createUser, createRecipe };