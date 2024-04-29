import { useState } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Badge,
    Box,
    IconButton,
    Stack
} from "@mui/material";
import {Product} from "../../../data/Product";
import {
    CompareArrowsOutlined,
    FavoriteBorderOutlined,
    MailLock,
    ShareOutlined,
    Star,
    StarBorder
} from "@mui/icons-material";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            sx={{
                bgcolor: '#F4F5F7',
                maxWidth: 300,
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <CardActionArea>

                        <CardMedia
                            component="img"
                            height="300"
                            image={product.image_link}
                            alt={product.name}
                        />
                <CardContent  style={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Typography gutterBottom variant="h5" component="div">
                            R$ {product.discount_price ? product.discount_price : product.price}
                        </Typography>
                        {product.discount_price && (
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                style={{ textDecoration: 'line-through', color: '#B0B0B0' }} // Added underline style
                            >
                                R$ {product.price}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>
            </CardActionArea>
            {product.is_new && (
                <Typography sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: 'white',
                    backgroundColor: '#2EC1AC',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'  // Added alignItems
                }}>
                    New
                </Typography>
            )}
            {product.discount_percent && product.discount_percent > 0 && (
                <Typography sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: 'white',
                    backgroundColor: '#E97171',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'  // Added alignItems
                }}>
                    -50%
                </Typography>
            )}
            {hovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center', // Center vertically
                        zIndex: 1
                    }}
                >
                    <Box
                        sx={{ display: 'flex', marginBottom: '8px', width: '70%'}}
                    >
                        <Button
                            sx={{ flex: 1, backgroundColor: 'white', color: '#B88E2F', width: '70%'  }}
                            href={`/shop/${product.id}`}
                        >
                            See Details
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            startIcon={<ShareOutlined />}
                            style={{color: 'white'}}
                        >
                            Share
                        </Button>
                        <Button
                            startIcon={<CompareArrowsOutlined />}
                            style={{color: 'white'}}
                        >
                            Compare
                        </Button>
                        <Button
                            startIcon={<FavoriteBorderOutlined/>}
                            style={{color: 'white'}}
                        >
                            Like
                        </Button>
                    </Box>
                </Box>
            )}
        </Card>
    )
}
