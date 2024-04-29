import {
    Box,
    Button, Checkbox, CircularProgress, Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    Modal,
    Pagination,
    Select, Stack,
    Typography
} from "@mui/material";
import Header from "../../ui/components/header";
import {GridViewRounded, KeyboardArrowRight, Tune, ViewDayOutlined} from "@mui/icons-material";
import {Product} from "../../data/Product";
import {SetStateAction, useEffect, useState} from "react";
import {ProductCard} from "../../ui/components/productCard";
import {EcommerceFeaturesArea} from "../../ui/components/ecommerceFeaturesArea";
import {Footer} from "../../ui/components/footer";
import { axiosIntance } from "../../data/helper/axiox-instance";
import useAxios from "../../data/hooks/useAxios";
import { Category } from "../../data/Category";
import { useLocation } from 'react-router-dom';

export const ShopPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('categoryIds');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [data2, loading, error] = useAxios({
        axiosIntance: axiosIntance,
        method: 'GET',
        url: `products?page=${page}&limit=${limit}`
    });
    const [categories] = useAxios({
        axiosIntance: axiosIntance,
        method: 'GET',
        url: `categories`
    });

    const [data, setData] = useState(data2)
    const [shortBy, setShortBy] = useState('');
    const [showQtd, setShowQtd] = useState('16');
    const [open, setOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [isNotNew, setIsNotNew] = useState(false);
    const [categoryIds, setCategoryIds] = useState<number[]>([]);


    useEffect(()=>{
        if(paramValue){
            setCategoryIds([parseInt(paramValue)])
        }
    },[])


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFilterApply = () => {
      handleClose();
    };
  
    const handleNewChange = (event : any) => {
      setIsNew(event.target.checked);
    };

    const handleNotNewChange = (event : any) => {
        setIsNotNew(event.target.checked);
      };
  
    const handleCategoryChange = (event : any) => {
      const categoryId = parseInt(event.target.name, 10);
      if (event.target.checked) {
        setCategoryIds([...categoryIds, categoryId]);
      } else {
        setCategoryIds(categoryIds.filter(id => id !== categoryId));
      }
    };

    const changeShortBy = (event: any) => {
       setShortBy(event.target.value);
    };

    const changeShowQtd = (event: any) => {
        setLimit(event.target.value);
        setShowQtd(event.target.value)
        setPage(1);
    };

    useEffect(() => {
        const fetchData = async () => {
          const result = await axiosIntance.get(`products?page=${page}&limit=${limit}${isNew && !isNotNew ? '&isNew=true' : isNotNew && !isNew ? '&isNew=false' : ''}&categoryIds=${categoryIds.join(',')}&order=${shortBy}`);
          setData(result.data);
        };
    
        fetchData();
      }, [page, limit, isNew, isNotNew, categoryIds,shortBy ]);

    
    const FilterBar = ({ page, limit, total }: { page: number, limit: number, total: number }) => {
            
        const startIndex = (page - 1) * limit + 1;
        const endIndex = Math.min(page * limit, total);
    
        return (
            <Grid
                bgcolor={"#F9F1E7"}
                alignItems="center"
                justifyContent="center"
                pl={25}
                mb={4}
                height={"100px"}
                sx={{
                    fontSize: "18px",
                }}
                container spacing={2}>
    
                <Grid item xs={8}>
                    <Stack direction={'row'} spacing={2} alignItems="center" >
                        
                        <Button onClick={handleOpen} sx={{color: 'black'}} startIcon={<Tune/>}>
                        <Typography sx={{textTransform: 'none'}}>Filter</Typography>
                        </Button>
                        <GridViewRounded/>
                        <ViewDayOutlined/>
                        <Divider orientation={'vertical'}/>
                        <Typography>Showing {startIndex}–{endIndex} of {total} results</Typography>
                    </Stack>
    
                </Grid>
                <Grid item xs={4}>
                    <Stack direction={'row'} alignItems="center" justifyContent="center">
                        <Typography>Show</Typography>
                        <FormControl sx={{ m: 1, minWidth: 120, bgcolor: 'white'}}>
                            <Select
                                displayEmpty
                                value={showQtd}
                                onChange={changeShowQtd}
                            >
                                <MenuItem value={'8'}>8</MenuItem>
                                <MenuItem value={'16'}>16</MenuItem>
                                <MenuItem value={'32'}>32</MenuItem>
    
                            </Select>
                        </FormControl>
                        <Typography>Short by</Typography>
                        <FormControl sx={{ m: 1, minWidth: 120, bgcolor: 'white'}}>
                            <Select
                                displayEmpty
                                value={shortBy}
                                onChange={changeShortBy}
                            >
                                <MenuItem value={""}>Default</MenuItem>
                                <MenuItem value={"asc"}>Ascending</MenuItem>
                                <MenuItem value={"desc"}>Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
    
                </Grid>
    
    
            </Grid>
        );
    };

    interface ProductsAreaProps {
        products: {
            data: Product[],
            meta: any
        };
        isPagination: boolean;
    }

    const ProductsArea = ({ products, isPagination }: ProductsAreaProps) => {
        const [limitActive, setLimitActive] = useState(products?.meta?.itemCount > 4);
        
        return (
            <Grid container>
                <Grid item container rowSpacing={3} justifyContent="left" paddingX={20}>
                    {products?.data.map((product, index) => {
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
                            count={products?.meta?.pageCount}
                            page={page}
                            onChange={(event, value) => setPage(value)}
                            variant="outlined"
                            shape="rounded"
                        />
                    )}
                </Grid>
    
            </Grid>
        );
    };

    return(
        <>
            <Header />
            <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isNew} onChange={handleNewChange} />}
              label="Is New"
            />
            <FormControlLabel
              control={<Checkbox checked={isNotNew} onChange={handleNotNewChange} />}
              label="Is Not New"
            />
            {categories?.map((category: Category) => (
              <FormControlLabel
                key={category.id}
                control={<Checkbox checked={categoryIds.includes(category.id)} onChange={handleCategoryChange} name={category.id.toString()} />}
                label={`[${category.id}] ${category.name}`}
              />
            ))}
          </FormGroup>
          <Button onClick={handleFilterApply}>Apply Filters</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
            <Box
                sx={{backgroundImage: 'url("/shopBg.jpg")'}}
                flexDirection={"column"}
                height={200}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={2}
            >
                <Typography variant={'h3'}>Shop</Typography>
                <Stack direction={'row'}>
                    <Link
                        href="/"
                        color="black"
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
                        color="black"
                        underline="none"
                        display={"flex"}
                        alignItems={"center"}
                        marginX={2}
                    >
                        Shop
                    </Link>
                </Stack>

            </Box>
            <FilterBar page={data?.meta?.page ?? 1} limit={data?.meta?.limit ?? 0} total={data?.meta?.total ?? 0} />
            {
                loading ? <CircularProgress /> : <ProductsArea products={data} isPagination={true}/>
            }
            <EcommerceFeaturesArea/>
            <Footer/>
        </>
    )
}

