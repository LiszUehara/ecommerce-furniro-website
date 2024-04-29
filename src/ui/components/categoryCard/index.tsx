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
import {Star, StarBorder} from "@mui/icons-material";
import {Category} from "../../../data/Category";
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    const navigate = useNavigate();
    return (
        <Card >
            <CardActionArea onClick={() =>
            navigate(`/shop?categoryIds=${category.id}`)
        }>
            <img
                src={category.image_link}
                style={{
                    borderRadius: '5px',
                    marginBottom: '10px',
                    maxWidth: '300px', 
                    maxHeight: '400px', 
                    objectFit: 'contain',
                }}
                alt={category.id+category.name}
            />
            <Typography variant={'h5'}>{category.name}</Typography>
            </CardActionArea>

        </Card>


    )
}
