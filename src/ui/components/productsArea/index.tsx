import { Button, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import { Product } from "../../../data/Product";
import { ProductCard } from "../productCard";

interface ProductsAreaProps {
    products: Product[];
    isPagination: boolean;
    limitActive: boolean;
}
export const ProductsArea = ({ products, isPagination, limitActive }: ProductsAreaProps) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [limitActiveb, setLimitActive] = useState(false)

    return (
        <Grid
            container
        >
            <Grid item container rowSpacing={3} justifyContent="left" paddingX={20}>
                {products.map((product, index) => {
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
            <Grid item mb={10} mt={4}>
                {limitActive && !isPagination && (
                    <Button
                        onClick={() => setLimitActive(false)}
                        variant="outlined"
                        sx={{
                            padding: "0.5rem 5rem",
                            color: "#b88e2f",
                            borderColor: "#b88e2f",
                            "&:hover": {
                                borderColor: "#b88e2f",
                                background: "#b88e2f",
                                color: "white",
                            },
                        }}
                    >
                        Show More
                    </Button>
                )}
                {isPagination && (
                    <Pagination
                        count={Math.ceil(products?.length / limit)}  // Calculate total number of pages based on data length and limit
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        variant="outlined"
                        shape="rounded"
                    />
                )

                }
            </Grid>
        </Grid>
    );
};