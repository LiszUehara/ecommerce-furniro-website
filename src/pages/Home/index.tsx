import { Product } from "../../data/Product";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import React, { useState } from "react";
import Header from "../../ui/components/header";
import { Banner } from "../../ui/components/banner";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { CategoryCard } from "../../ui/components/categoryCard";
import { ProductCard } from "../../ui/components/productCard";
import { EcommerceFeaturesArea } from "../../ui/components/ecommerceFeaturesArea";
import { Footer } from "../../ui/components/footer";
import useAxios from "../../data/hooks/useAxios";
import { axiosIntance } from "../../data/helper/axiox-instance";
import { useNavigate } from "react-router-dom";
import { Category } from "../../data/Category";


interface RelatedProductsProps {
    products: Product[];
}
export const RelatedProducts = ({ products }: RelatedProductsProps) => {
    const [limitActive, setLimitActive] = useState(products.length > 8);
    const navigate = useNavigate();

    return (
        <Grid
            container
        >
            <Grid item container spacing={3} justifyContent="left" paddingX={20}>
                {products?.map((product, index) => {
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

export const Home = () => {
    const [categories, loading, error] = useAxios({
        axiosIntance: axiosIntance,
        method: 'GET',
        url: 'categories'
    })

    const [products] = useAxios({
        axiosIntance: axiosIntance,
        method: 'GET',
        url: 'products?showDiscounts=true&isNew=true'
    })

    console.log(products)


    return (
        <Stack>
            <Header />
            <Banner />
            <Typography variant="h5" padding={5} textAlign={"center"}>Browse The Range</Typography>
            <Grid container spacing={2} justifyContent="center">
                {categories && categories?.map((category: Category) => {
                    return <Grid item ><CategoryCard category={category} /></Grid>
                })}

            </Grid>

            
            {
                products && <>
                <Typography variant="h4" padding={5} textAlign={"center"}>Our Products</Typography>
                <RelatedProducts products={products.data} />
                </>
            }
            
            <EcommerceFeaturesArea />
            <Footer />
        </Stack>
    );
}
