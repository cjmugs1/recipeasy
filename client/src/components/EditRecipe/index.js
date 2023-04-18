import { React, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload } from "antd";
import { useMutation } from "@apollo/client";
// import { UPDATE_RECIPE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useParams } from "react-router-dom";

const { TextArea } = Input;

function EditRecipe() {
    const { id } = useParams();
    console.log(id)
    const recipeId = id

    

    const [form] = Form.useForm();
  // adds recipe
//   const [updateRecipe, { error }] = useMutation(UPDATE_RECIPE);



  const [ingredientsFormData, setIngredientsFormData] = useState({
    name: [],
    quantity: [],
    unit: [],
  });

  const [timeFormData, setTimeFormData] = useState({
    amount: null,
    unit: "",
  });

  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    description: "",
    instructions: "",
    // tags: [],
    // imageURL: "",
  });

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
    console.log(ingredientsFormData);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;

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
      return;
    }

    if (id.includes("time")) {
      let field;
      if (id.includes("amount")) {
        field = "amount";
      } else {
        field = "unit";
      }

      setTimeFormData({ ...timeFormData, [field]: value});
      return;
    }

    console.log(id);
    setRecipeFormData({ ...recipeFormData, [id]: value });
  };

  // add function to handle form submission and add to User's profile
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("pressed");
    let ingredients = [];
    for (let i = 0; i < ingredientsFormData.name.length; i++) {
      let ingredient = {
        name: ingredientsFormData.name[i],
        quantity: Number(ingredientsFormData.quantity[i]),
        unit: ingredientsFormData.unit[i],
      };
      ingredients.push(ingredient);
    }
    console.log(ingredients);

    try {
      // add user id
      const userToken = Auth.getProfile();
      const userId = userToken.data._id;
      console.log(userId);
      console.log(recipeFormData);
      console.log({
        ...recipeFormData,
        ingredients,
        userId,
        originalLanguage: "English",
        cookTime: timeFormData,
      });
      let cookTime = timeFormData;
      cookTime.amount = Number(cookTime.amount)
      const { data } = await addNewRecipe({
        variables: {
          ...recipeFormData,
          ingredients,
          userId,
          originalLanguage: "English",
          cookTime
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setRecipeFormData({
      name: "",
      description: "",
      instructions: "",
      //   tags: [],
      //   imageURL: "",
    });
    setIngredientsFormData({
      name: [],
      quantity: [],
      unit: [],
    });
    setTimeFormData({
      amount: null,
      unit: "",
    });
    console.log(recipeFormData);
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
      <button onClick={() => window.location.assign("/")}>Back to Home</button>
      <div className="d-flex flex-column justify-content-center">
        <h1 className="my-5">Add your Recipe!</h1>
        <Form
          form={form}
          layout="horizontal"
          style={{
            padding: "0 7vw",
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
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
          <Form.Item required={true} label="Ingredients">
            <Form.List
              label="Ingredients"
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
                  required: true,
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {fields.map((field, index) => (
                    <Form.Item required={true} key={field.key}>
                      <Input.Group compact>
                        <Form.Item
                          name={[field.name, "quantity"]}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please add quantity or delete this field.",
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
                      style={{ width: "100%" }}
                      icon={<PlusOutlined />}
                    >
                      Add Ingredient
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </div>
              )}
            </Form.List>
          </Form.Item>

          {/* instructions */}
          <Form.Item
            name="instructions"
            required="true"
            label="Instructions"
            onChange={handleInputChange}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            required={true}
            label="Cooking Time"
          >
          <Input.Group compact>
            <Form.Item
              required={true}
              name="time-amount"             
              onChange={handleInputChange}
            >
              <Input placeholder="2" />
            </Form.Item>
            <Form.Item
              required={true}
              name="time-unit"
              onChange={handleInputChange}
            >
              <Input placeholder="hours"/>
            </Form.Item>
          </Input.Group>
          </Form.Item>
          

          <Form.Item required={false} label="Tags">
            <Form.List name="tags">
              {(fields, { add, remove }, { errors }) => (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {fields.map((field, index) => (
                    <Form.Item required={true} key={field.key}>
                      <Form.Item
                        name={[field.name, "tag"]}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please add quantity or delete this field.",
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
                      style={{ width: "100%" }}
                      icon={<PlusOutlined />}
                    >
                      Add Tag
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </div>
              )}
            </Form.List>
          </Form.Item>

          <Form.Item label="Upload Image" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleFormSubmit}>Add Recipe!</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default EditRecipe;