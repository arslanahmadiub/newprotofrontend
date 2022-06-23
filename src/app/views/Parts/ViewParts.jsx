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
import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import EditPartsDialog from './EditPartsDialog'

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
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const [openUpdateModel, setOpenUpdateModel] = useState(false)
    const [partsData, setPartsData] = useState(null)

    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleClose = () => {
        setOpenUpdateModel(false)
    }

    const handelEdit = (data) => {
        setOpenUpdateModel(true)
        setPartsData(data)
    }

    const handelChange = (e) => {
        setPartsData({ ...partsData, [e.target.name]: e.target.value })
    }

    const handelUpdate = () => {}

    return (
        <>
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
                            .map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        {item.category}
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.number}
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.brand}
                                    </TableCell>
                                    <TableCell>{item.unittype}</TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>

                                    <TableCell>
                                        <IconButton>
                                            <Icon color="error">close</Icon>
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handelEdit(item)}
                                        >
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
            <EditPartsDialog
                open={openUpdateModel}
                handleClose={handleClose}
                formData={partsData}
                handelChange={handelChange}
                handelUpdate={handelUpdate}
                loading={true}
            />
        </>
    )
}

export default ViewParts
