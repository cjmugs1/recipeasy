// form component allowing users to add new recipes with field's for recipe title, description, ingredients, instructions, and photo

import { React, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../utils/mutations";
import Auth from "../../utils/auth";

const { TextArea } = Input;

console.log();

function addRecipe(props) {
  const [form] = Form.useForm();
  // adds recipe
  const [addNewRecipe, { error }] = useMutation(ADD_RECIPE);

  const [ingredientsFormData, setIngredientsFormData] = useState({
    name: [],
    quantity: [],
    unit: [],
  });

  const [recipeFormData, setRecipeFormData] = useState({
    userId: "",
    name: "",
    description: "",
    instructions: "",
    tags: [],
    imageURL: "",
    cookTime: "",
    originalLanguage: ""
  });
    const userToken = Auth.getProfile();
    console.log(userToken);
    const userId = userToken.data._id;
  setRecipeFormData({...recipeFormData, ["userId"]: userId})

  const handleAddTag = () => {
    let updatedTags = recipeFormData.tags;
    updatedTags.push("");
    setRecipeFormData({ ...recipeFormData, ["tags"]: updatedTags });
  };
  const handleDeleteTag = (index) => {
    let updatedTags = recipeFormData.tags;
    updatedTags.splice(index, 1);
    setRecipeFormData({ ...recipeFormData, ["tags"]: updatedTags });
  };

  const handleIngredientDelete = (index) => {
    let ingredients = ingredientsFormData;
    ingredients.name.splice(index, 1);
    ingredients.quantity.splice(index, 1);
    ingredients.unit.splice(index, 1);
    setIngredientsFormData(ingredients);
  };

  const handleAddIngredient = () => {
    let ingredients = ingredientsFormData;
    ingredients.name.push("");
    ingredients.quantity.push("");
    ingredients.unit.push("");
    setIngredientsFormData(ingredients);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    console.log(id);

    if (id.includes("tags")) {
      const index = id.match(/\d+/)[0];
      const newTags = recipeFormData.tags;
      newTags[index] = value;
      return setRecipeFormData({ ...recipeFormData, ["tags"]: newTags });
    }

    // if these are ingredients, we need to make it an array
    if (id.includes("ingredients")) {
      const index = id.match(/\d+/)[0];
      let field;
      console.log;
      if (id.includes("quantity")) {
        field = "quantity";
      } else if (id.includes("unit")) {
        field = "unit";
      } else {
        field = "name";
      }
      const data = ingredientsFormData[field];

      data[index] = value;

      setIngredientsFormData({ ...ingredientsFormData, [field]: data });
      console.log(ingredientsFormData);
      return;
    }

    setRecipeFormData({ ...recipeFormData, [id]: value });
  };

  // add function to handle form submission and add to User's profile
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("pressed");
    let ingredients = []
    for (let i = 0; i<ingredientsFormData.name.length; i++) {
        let ingredient = {
            name: ingredientsFormData.name,
            quantity: ingredientsFormData.quantity,
            unit: ingredientsFormData.unit
        }
        ingredients.push(ingredient)
    }
    

    try {
    //   const newRecipe = await addNewRecipe({
    //     variables: {
    //       userId: "643079e4d34ddeec19b3d46f",
    //       name: "Fat bacon bits",
    //       description: "parmesan with queso",
    //       ingredients: [
    //         { name: "carrots", quantity: 3, unit: "carrrots" },
    //         { name: "greated parmesan", quantity: 5, unit: "cup" },
    //       ],
    //       instructions: "chop it",
    //       cookTime: "12 min",
    //       originalLanguage: "English",
    //     },
    //   });
    //   console.log(newRecipe);
        console.log({...recipeFormData, ingredients})
        const {data} = await addNewRecipe(
            {
            variables: {...recipeFormData, ingredients}
          });
          console.log(data)

    } catch (err) {
      console.error(err);
    }

    setRecipeFormData({
      name: "",
      description: "",
      ingredients: [],
      instructions: "",
      tags: [],
      imageURL: "",
      cookTime: "",
    });
    form.resetFields();
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
        onSubmit={handleFormSubmit}
      >
        <Form.Item
          required={true}
          label="Recipe Name"
          name="name"
          onChange={handleInputChange}
        >
          <Input />
        </Form.Item>

        <Form.Item
          required={true}
          label="Description"
          name="description"
          onChange={handleInputChange}
        >
          <Input />
        </Form.Item>

        {/* Ingredients  */}
        <Form.List
          name="ingredients"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(
                    new Error("At least 2 ingredients required")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Ingredients" : ""}
                  required={false}
                  key={field.key}
                >
                  <Input.Group compact>
                    <Form.Item
                      name={[field.name, "quantity"]}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please add quantity or delete this field.",
                        },
                      ]}
                      onChange={handleInputChange}
                    >
                      <Input
                        placeholder="Quantity (eg: 2)"
                        style={{ width: "60%" }}
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "unit"]}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: false,
                          whitespace: true,
                        },
                      ]}
                      onChange={handleInputChange}
                    >
                      <Input
                        placeholder="Unit (eg: cups) Not required"
                        style={{ width: "60%" }}
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "ingredient"]}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please add an ingredient or delete this field.",
                        },
                      ]}
                      onChange={handleInputChange}
                    >
                      <Input
                        placeholder="Ingredient (eg: chopped walnuts)"
                        style={{ width: "60%" }}
                      />
                    </Form.Item>
                  </Input.Group>

                  {fields.length > 2 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log(field.name);
                        handleIngredientDelete(field.name);
                        console.log("hi");
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    handleAddIngredient();

                    add();
                  }}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add Ingredient
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* instructions */}
        <Form.Item name="instructions" required="true" label="instructions">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          required={true}
          name="cookTime"
          label="Cooking Time"
          onChange={handleInputChange}
        >
          <Input />
        </Form.Item>

        <Form.List name="tags">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Tags" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    name={[field.name, "tag"]}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please add quantity or delete this field.",
                      },
                    ]}
                    onChange={handleInputChange}
                  >
                    <Input placeholder="French" style={{ width: "60%" }} />
                  </Form.Item>

                  {fields.length > 0 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={(event) => {
                        event.preventDefault();
                        handleDeleteTag(field.name);
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    handleAddTag();

                    add();
                  }}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add Tag
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="submit" onClick={handleFormSubmit}>
            Add Recipe!
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default addRecipe;
