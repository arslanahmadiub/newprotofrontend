import React from 'react'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))


const CarRecentOrders = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>Recent Orders</Title>
            </CardHeader>
            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 3 }} colSpan={2}>
                                #ID
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Service
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Milage
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Assigned To
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Status
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Date
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                {/* #ID */}
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.id}
                                </TableCell>

                                {/* Service  */}
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.service}
                                </TableCell>

                                {/* Milage  */}
                                <TableCell
                                    sx={{ px: 0 }}
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.milage}
                                </TableCell>

                                {/* assigned to */}
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Avatar src={product.assignTo} />
                                    </Box>
                                </TableCell>

                                {/* Status */}
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.status}
                                </TableCell>

                                {/* Date */}
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    {product.date}
                                </TableCell>

                                {/* Action  */}
                                <TableCell sx={{ px: 0 }} colSpan={2}>
                                    <IconButton>
                                        <Icon color="primary">visible</Icon>
                                        <Icon color="primary">edit</Icon>
                                        <Icon color="red">delete</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

const productList = [
    {
        id: '#89623',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#89623',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#23424',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#34534',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#23454',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#23543',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#73545',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
    {
        id: '#24523',
        service: 'Oil Change',
        milage: '10,000',
        assignTo: '/assets/images/products/headphone-2.jpg',
        status: 'On Hold',
        date: '15/11/2022',
    },
]

export default CarRecentOrders
