import { React, useState } from "react";
import { Layout, Col, Row } from 'antd';
import RecipeCard from "";
const { Content } = Layout;


// run query to back end to get the data, 
// then updated the global state object for recipes with the results
// then also save to indexed db






// function RecipeBrowser() {

// // useEffect(() => {
// //     if (data) {
// //       dispatch({
// //         type: UPDATE_PRODUCTS,
// //         products: data.products,
// //       });
// //       data.products.forEach((product) => {
// //         idbPromise('products', 'put', product);
// //       });
// //     } else if (!loading) {
// //       idbPromise('products', 'get').then((products) => {
// //         dispatch({
// //           type: UPDATE_PRODUCTS,
// //           products: products,
// //         });
// //       });
// //     }
// //   }, [data, loading, dispatch]);


// // return (
// //     <Content style={{ margin: '0 16px' }}>
// //         <Row gutter={[24, 16]}>
// //             <Col span={6}>
// //             {/* something like map each recipe in array to a card */}
// //             {recipes.map((recipe) => (
// //             <RecipeCard
// //               key={product._id}
// //               _id={product._id}
// //               image={product.image}
// //               name={product.name}
// //               cookTime={product.price}
              
// //             />
// //           ))}
            
//             </Col>
            
//         </Row>
//         {/* import recipe card component here!! (example content commented out below) */}

//         {/* <Breadcrumb
//         style={{
//             margin: '16px 0',
//         }}
//         >
//         <Breadcrumb.Item>User</Breadcrumb.Item>
//         <Breadcrumb.Item>Bill</Breadcrumb.Item>
//         </Breadcrumb>
//         <div
//         style={{
//             padding: 24,
//             minHeight: 360,
//             background: colorBgContainer,
//         }}
//         >
//         Bill is a cat.
//         </div> */}
//     </Content> 
// );
// }



// export default RecipeBrowser;