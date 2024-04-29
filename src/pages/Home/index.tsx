import {Product} from "../../data/Product";
import {ProductDetails} from "../ProductDetails/ProductDetails";
import React, {useState} from "react";
import Header from "../../ui/components/header";
import {Banner} from "../../ui/components/banner";
import {Button, Grid, Stack, Typography} from "@mui/material";
import {CategoryCard} from "../../ui/components/categoryCard";
import {ProductCard} from "../../ui/components/productCard";
import {EcommerceFeaturesArea} from "../../ui/components/ecommerceFeaturesArea";
import {Footer} from "../../ui/components/footer";
import useAxios from "../../data/hooks/useAxios";
import { axiosIntance } from "../../data/helper/axiox-instance";
import { useNavigate } from "react-router-dom";
import { Category } from "../../data/Category";


interface RelatedProductsProps {
    relatedProducts: Product[];
}
export const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
    const [limitActive, setLimitActive] = useState(relatedProducts.length > 4);
    const navigate = useNavigate();

    return (
        <Grid
            container
        >
            <Grid item container rowSpacing={3} justifyContent="left" paddingX={20}>
                {relatedProducts.map((product, index) => {
                    if (index < 4 || !limitActive) {
                        return (
                            <Grid item key={product.id} xs={3}>
                                <ProductCard product={product} />
                            </Grid>
                        );
                    } else {
                        return <></>;
                    }
                })}
            </Grid>
            <Grid
      container
      item
      mb={10}
      mt={4}
      width={'100%'}
      justifyContent="center"
      alignItems="center"
    >
      {limitActive && (
        <Button
          onClick={() => navigate('/shop')}
          variant="outlined"
          sx={{
            padding: '0.5rem 5rem',
            color: '#b88e2f',
            borderColor: '#b88e2f',
            '&:hover': {
              borderColor: '#b88e2f',
              background: '#b88e2f',
              color: 'white',
            },
          }}
        >
          Show More
        </Button>
      )}
    </Grid>
        </Grid>
    );
};

export const Home = ()=> {
    const [categories, loading, error] = useAxios({
        axiosIntance: axiosIntance,
        method: 'GET',
        url: 'categories'
    })

    console.log(categories)

    const myProduct: Product = {
        id: 1,
        name: "Cool T-Shirt",
        sku: "TSHIRT001",
        category_id: 2, // Assuming category ID 2 represents clothing
        description: "A comfortable and stylish T-shirt",
        large_description: "This T-shirt is made from 100% cotton and features a unique design. It's perfect for everyday wear or a casual outing.",
        price: 24.99,
        is_new: true,
        image_link: "/img.png",
        other_images_link: "https://example.com/product-images.zip",
        created_date: new Date("2024-04-24"), // Today's date
        updated_date: new Date("2024-04-24"), // Assuming product is just created today
    };
    const myProduct2: Product = {
        id: 2,
        name: "Cool T-Shirt",
        sku: "TSHIRT001",
        category_id: 2, // Assuming category ID 2 represents clothing
        description: "A comfortable and stylish T-shirt",
        large_description: "This T-shirt is made from 100% cotton and features a unique design. It's perfect for everyday wear or a casual outing.",
        price: 24.99,
        discount_price: 19.99, // Discounted price
        discount_percent: 20, // 20% discount
        is_new: false,
        image_link: "/img.png",
        other_images_link: "https://example.com/product-images.zip",
        created_date: new Date("2024-04-24"), // Today's date
        updated_date: new Date("2024-04-24"), // Assuming product is just created today
    };
    const myProduct3: Product = {
        id: 3,
        name: "Cool T-Shirt",
        sku: "TSHIRT001",
        category_id: 2, // Assuming category ID 2 represents clothing
        description: "A comfortable and stylish T-shirt",
        large_description: "This T-shirt is made from 100% cotton and features a unique design. It's perfect for everyday wear or a casual outing.",
        price: 24.99,
        is_new: false,
        image_link: "/img.png",
        other_images_link: "https://example.com/product-images.zip",
        created_date: new Date("2024-04-24"), // Today's date
        updated_date: new Date("2024-04-24"), // Assuming product is just created today
    };
    const myProduct4: Product = {
        id: 4,
        name: "Cool T-Shirt",
        sku: "TSHIRT001",
        category_id: 2, // Assuming category ID 2 represents clothing
        description: "A comfortable and stylish T-shirt",
        large_description: "This T-shirt is made from 100% cotton and features a unique design. It's perfect for everyday wear or a casual outing.",
        price: 24.99,
        is_new: false,
        image_link: "/img.png",
        other_images_link: "https://example.com/product-images.zip",
        created_date: new Date("2024-04-24"), // Today's date
        updated_date: new Date("2024-04-24"), // Assuming product is just created today
    };
    const myProduct5: Product = {
        id: 5,
        name: "Cool T-Shirt",
        sku: "TSHIRT001",
        category_id: 2, // Assuming category ID 2 represents clothing
        description: "A comfortable and stylish T-shirt",
        large_description: "This T-shirt is made from 100% cotton and features a unique design. It's perfect for everyday wear or a casual outing.",
        price: 24.99,
        is_new: false,
        image_link: "/img.png",
        other_images_link: "https://example.com/product-images.zip",
        created_date: new Date("2024-04-24"), // Today's date
        updated_date: new Date("2024-04-24"), // Assuming product is just created today
    };
    const products = [myProduct, myProduct2, myProduct3,myProduct4, myProduct5, myProduct5, myProduct5, myProduct5, myProduct5]
    return (
        <Stack>
            <Header/>
            <Banner/>
            <Typography variant="h5" padding={5} textAlign={"center"}>Browse The Range</Typography>
            <Grid container spacing={2} justifyContent="center">
                { categories && categories?.map((category: Category) => {
                    return <Grid item ><CategoryCard category={category}/></Grid>
                })}

            </Grid>

            <Typography variant="h4" padding={5} textAlign={"center"}>Our Products</Typography>
            <RelatedProducts relatedProducts={products}/>
            <EcommerceFeaturesArea/>
            <Footer/>
        </Stack>
    );
}
