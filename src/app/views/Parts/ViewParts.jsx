import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material'
import React from 'react'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const subscribarList = [
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'close',
        number: 'all.',
        quantity: '10',
    },
    {
        category: 'shoes',
        brand: 'Nike',
        price: 99,
        unittype: 'open',
        number: 'all.',
        quantity: '10',
    },
]

const ViewParts = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Container>
            <Box width="100%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Unit Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subscribarList
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((subscriber, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        {subscriber.category}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.number}
                                    </TableCell>
                                    <TableCell align="left">
                                        {subscriber.brand}
                                    </TableCell>
                                    <TableCell>{subscriber.unittype}</TableCell>
                                    <TableCell>${subscriber.price}</TableCell>
                                    <TableCell>{subscriber.quantity}</TableCell>

                                    <TableCell>
                                        <IconButton>
                                            <Icon color="error">close</Icon>
                                        </IconButton>
                                        <IconButton>
                                            <Icon color="correct    ">
                                                edit
                                            </Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </StyledTable>

                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={subscribarList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Container>
    )
}

export default ViewParts
