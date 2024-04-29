import { Box, Button, Grid, Link, Rating, Typography } from "@mui/material";
import { Footer } from "../../ui/components/footer";
import Header from "../../ui/components/header";
import { ReactNode, forwardRef, useState } from "react";
import { Product } from "../../data/Product";
import { ProductCard } from "../../ui/components/productCard";
import styled from "@emotion/styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { EcommerceFeaturesArea } from "../../ui/components/ecommerceFeaturesArea";
import { Facebook, KeyboardArrowRight, LinkedIn, Twitter } from "@mui/icons-material";
import useAxios from "../../data/hooks/useAxios";
import { axiosIntance } from "../../data/helper/axiox-instance";
import { useNavigate, useParams } from "react-router-dom";
// #F9F1E7
// background: #B88E2F;

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-weight: 400;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    border: 1px solid grey;
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    margin: 0 8px;
    outline: 0;
    min-width: 0;
    width: 1rem;
    height: 0.5rem;
    text-align: center;
    border: 0;
  
    &:hover {
    }
  
    &:focus {
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const StyledButton = styled("button")(
  ({ theme }) => `
    font-size: 0.5rem;
    box-sizing: border-box;
    line-height: 1.5;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    background-color: white;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
);

const NumberInput = forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

interface ProductExpandedProps {
  product: Product;
}
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    marginRight: 4,
    //   color: '#c4c4c4',
  },
  "& .MuiRating-iconEmpty": {
    marginRight: 4,
  },
  "& .MuiRating-iconHover": {
    //   color: '#c4c4c4',
  },
});
const CircleColor = styled("div")({
  height: "30px",
  width: "30px",
  borderRadius: "999px",
  //   cursor: "pointer",
  marginRight: "5px",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
  },
  "&.selected": {
    filter: "blur(1px)",
    // border: '1px solid #d5d5d5',
    boxShadow: "0 4px 20px rgba(95,159,159,0.8)",
  },
});
const SizeOption = styled("div")({
  height: "30px",
  width: "30px",
  fontSize: "13px",
  borderRadius: "5px",
  marginRight: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F9F1E7",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
  },
  "&.selected": {
    backgroundColor: "#B88E2F",
    color: "white",
  },
});
export const ProductExpanded = ({ product }: ProductExpandedProps) => {
  const [focusImage, setFocusImage] = useState(product.image_link);
  const [rating, setRating] = useState(1);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const otherImages = product.other_images_link.split(";");
  return (
    <Grid
      container
      paddingX={25}
      borderBottom={1}
      borderColor={"#d5d5d5"}
      mb={4}
    >
      <Grid item container xs={6}>
        <Grid item display="flex" flexDirection="column">
          {focusImage !== product.image_link && (
            <Grid
              item
              onClick={() => setFocusImage(product.image_link)}
              sx={{ cursor: "pointer" }}
              mb={2}
            >
              <img
                src={product.image_link}
                loading="lazy"
                width={80}
                alt={"Imagem Principal"}
              />
            </Grid>
          )}
          {otherImages.map((link, index) => {
            if (focusImage !== link)
              return (
                <Grid
                  item
                  onClick={() => setFocusImage(link)}
                  sx={{ cursor: "pointer" }}
                  mb={2}
                  key={link + index}
                >
                  <img
                    src={link}
                    loading="lazy"
                    width={80}
                    alt={`Imagem ${index}`}
                  />
                </Grid>
              );
          })}
        </Grid>
        <Grid item pl={3}>
          <img src={focusImage} alt={product.name} loading="lazy" width={400} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={6}
        flexDirection="column"
        alignItems={"left"}
        justifyContent="left"
      >
        <Typography
          variant="h5"
          textAlign={"left"}
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          {product.name}
        </Typography>
        <Typography
          textAlign={"left"}
          color={"grey"}
          sx={{ fontSize: "1.5rem" }}
        >
          R$ {product.price}
        </Typography>
        <Grid
          item
          display={"flex"}
          alignItems={"center"}
          justifyContent={"left"}
        >
          <StyledRating
            precision={0.5}
            color="grey"
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating((current) => newValue ?? current);
            }}
          />
          <Grid item borderLeft={1} borderColor={"#d5d5d5"} paddingY={1}>
            5 Costumer Review
          </Grid>
        </Grid>
        <Typography textAlign={"left"} marginTop={1} maxWidth={500}>
          {product.large_description}
        </Typography>
        <Grid
          item
          mt={3}
          display={"flex"}
          alignItems={"left"}
          justifyContent={"left"}
          flexDirection="column"
          width="100%"
        >
          <Typography textAlign={"left"} color={"grey"}>
            Size
          </Typography>
          <Grid item display="flex" flexDirection="row">
            <SizeOption
              className={size === "L" ? "selected" : ""}
              onClick={() => setSize("L")}
            >
              L
            </SizeOption>
            <SizeOption
              className={size === "XL" ? "selected" : ""}
              onClick={() => setSize("XL")}
            >
              XL
            </SizeOption>
            <SizeOption
              className={size === "XS" ? "selected" : ""}
              onClick={() => setSize("XS")}
            >
              XS
            </SizeOption>
          </Grid>
        </Grid>
        <Grid
          item
          mt={1}
          display={"flex"}
          alignItems={"left"}
          justifyContent={"left"}
          flexDirection="column"
          width="100%"
        >
          <Typography
            textAlign={"left"}
            color={"grey"}
          //   sx={{ fontSize: "1.5rem" }}
          >
            Color
          </Typography>
          <Grid item display="flex" flexDirection="row">
            <CircleColor
              className={color === "purple" ? "selected" : ""}
              onClick={() => setColor("purple")}
              style={{
                backgroundColor: "purple",
              }}
            />
            <CircleColor
              className={color === "black" ? "selected" : ""}
              onClick={() => setColor("black")}
              style={{
                backgroundColor: "black",
              }}
            />
            <CircleColor
              className={color === "brown" ? "selected" : ""}
              onClick={() => setColor("brown")}
              style={{
                backgroundColor: "brown",
              }}
            />
          </Grid>
        </Grid>
        <Grid item display="flex" mt={2}>
          <NumberInput
            aria-label="Quantity Input"
            min={1}
            max={99}
            value={quantity}
            onChange={(event, val) => setQuantity(val ?? 1)}
          />
          <Button
            variant="outlined"
            sx={{
              marginLeft: 1,
              marginRight: 1,
              padding: "0.75rem 2.5rem",
              color: "black",
              borderRadius: "15px",
              borderColor: "black",
              "&:hover": {
                borderColor: "black",
                // background: "#b88e2f",
                color: "black",
              },
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "0.75rem 2.5rem",
              color: "black",
              borderRadius: "15px",
              borderColor: "black",
              "&:hover": {
                borderColor: "black",
                // background: "#b88e2f",
                color: "black",
              },
            }}
          >
            + Compose
          </Button>
        </Grid>
        <Grid
          item
          container
          marginY={4}
          borderTop={1}
          paddingTop={2}
          rowSpacing={2}
          borderColor={"#d5d5d5"}
          sx={{
            color: "grey",
          }}
        >
          <Grid
            item
            xs={1.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            SKU
          </Grid>
          <Grid
            item
            xs={1}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            :
          </Grid>
          <Grid
            item
            xs={9.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            {product.sku}
          </Grid>

          <Grid
            item
            xs={1.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            Category
          </Grid>
          <Grid
            item
            xs={1}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            :
          </Grid>
          <Grid
            item
            xs={9.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            {product?.category?.name ?? product?.category_id}
          </Grid>

          <Grid
            item
            xs={1.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            Tags
          </Grid>
          <Grid
            item
            xs={1}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            :
          </Grid>
          <Grid
            item
            xs={9.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            Sofa, Chair, Home, Shop
          </Grid>

          <Grid
            item
            xs={1.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            Share
          </Grid>
          <Grid
            item
            xs={1}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
          >
            :
          </Grid>
          <Grid
            item
            xs={9.5}
            alignItems={"left"}
            justifyContent="left"
            display={"flex"}
            columnSpacing={2}
          >
            <Facebook width={25} height={25} />
            <LinkedIn
              width={25}
              height={25}
              style={{ margin: "0 15px" }}
            />
            <Twitter width={25} height={25} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface InfoProductProps {
  textDescription?: ReactNode;
  textAddInformation?: ReactNode;
}
export const InfoProduct = ({
  textAddInformation,
  textDescription,
}: InfoProductProps) => {
  const [activeOption, setActiveOption] = useState("Description");
  const styleActive = { cursor: "pointer", fontWeight: "600" };
  const styleInactive = { cursor: "pointer", color: "gray" };
  return (
    <Grid container mb={7}>
      <Grid
        item
        display="flex"
        width={"100%"}
        justifyContent="center"
        alignItems={"center"}
        gap={5}
      >
        <Typography
          display="inline"
          variant="h5"
          onClick={() => setActiveOption("Description")}
          sx={activeOption === "Description" ? styleActive : styleInactive}
        >
          Description
        </Typography>
        <Typography
          display="inline"
          variant="h5"
          onClick={() => setActiveOption("Additional Information")}
          sx={
            activeOption === "Additional Information"
              ? styleActive
              : styleInactive
          }
        >
          Additional Information
        </Typography>
      </Grid>
      <Grid item textAlign="justify" marginX={35} sx={{ color: "grey" }}>
        {activeOption === "Description" && textDescription}
        {activeOption === "Additional Information" && textAddInformation}
      </Grid>
    </Grid>
  );
};

interface RelatedProductsProps {
  relatedProducts: any[];
}
export const RelatedProducts = ({ relatedProducts }: RelatedProductsProps) => {
  const navigate = useNavigate();
  const [limitActive, setLimitActive] = useState(relatedProducts.length > 4 || relatedProducts.length > 7);
  const [limit, setLimit] = useState(4)

  return (
    <Grid
      container
      display="flex"
      width={"100%"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
    >
      <Grid item>
        <Typography
          variant="h5"
          mb={2}
          sx={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          Related Products
        </Typography>
      </Grid>
      <Grid item container spacing={3} justifyContent="left" paddingX={20}>
        {relatedProducts.map((product, index) => {
          if (index < limit || !limitActive) {
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
        {limitActive && (
          <Button
            onClick={() => {
              if (limit != 8) {
                setLimit(8)
              } else {
                navigate(`/shop?categoryIds=${relatedProducts[0]?.category_id}`)
              }
            }}
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
      </Grid>
    </Grid>
  );
};

export const AccessSimple = ({ name }: { name: string }) => {
  return (
    <Box
      bgcolor={"#F9F1E7"}
      alignItems="left"
      justifyContent="left"
      pl={25}
      mb={4}
      height={"100px"}
      display="flex"
      sx={{
        fontSize: "18px",
      }}
    >
      <Link
        href="/"
        color="grey"
        underline="none"
        display={"flex"}
        alignItems={"center"}
        marginRight={2}
      >
        Home
      </Link>
      <KeyboardArrowRight
        width="20"
        height="20"
        style={{ margin: "auto 0" }}
      />
      <Link
        href="/shop"
        color="grey"
        underline="none"
        display={"flex"}
        alignItems={"center"}
        marginX={2}
      >
        Shop
      </Link>
      <KeyboardArrowRight
        width="20"
        height="20"
        style={{ margin: "auto 0" }}
      />
      <Link
        href=""
        color="inherit"
        underline="none"
        borderLeft={1}
        marginY={4}
        display={"flex"}
        alignItems={"center"}
        marginLeft={2}
        pl={2}
      >
        {name}
      </Link>
    </Box>
  );
};
export const ProductDetails = () => {
  const { productId } = useParams();

  const [data, loading, error] = useAxios({
    axiosIntance: axiosIntance,
    method: 'GET',
    url: `products/${productId}`
  });

  return (
    <>
      <Header />
      <AccessSimple name={data?.name ?? ""} />

      {!loading && <>
        <ProductExpanded product={data} />
        <InfoProduct
          textAddInformation={data?.description}
          textDescription={data?.description}
        />
        <RelatedProducts relatedProducts={data?.relatedProducts} />
      </>}

      <EcommerceFeaturesArea />
      <Footer />
    </>
  );
};
