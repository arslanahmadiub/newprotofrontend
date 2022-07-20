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
import React, { useState, useEffect } from 'react'
import { Box, styled } from '@mui/system'
import EditPartsDialog from './EditPartsDialog'
import DeletePartsDialog from './DeletePartsDialog'
import {
    getPartsApi,
    updatePartsApi,
    deletePartsApi,
} from '../../../api-services/PartsApi'
import { pick } from 'lodash'

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

const ViewParts = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const [selectedPartId, setSelectedPartId] = useState(null)

    const [subscribarList, setSubscribarList] = useState([])

    const [updateModelLoading, setUpdateModelLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [deleteModelOpen, setDeleteModelOpen] = useState(false)

    const [openUpdateModel, setOpenUpdateModel] = useState(false)
    const [partsData, setPartsData] = useState(null)

    const getPartsData = async () => {
        try {
            let { data } = await getPartsApi()
            setSubscribarList(data.data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getPartsData()
    }, [])

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

    const handelUpdate = async () => {
        setUpdateModelLoading(true)
        try {
            let requestedData = pick(partsData, [
                'quantity',
                'partNumber',
                'price',
            ])
            let { data } = await updatePartsApi(requestedData, partsData._id)
            if (data.success) {
                getPartsData()
            }
            setUpdateModelLoading(false)

            console.log('Data', data)
            setOpenUpdateModel(false)
        } catch (error) {
            console.log('Error', error)
            setUpdateModelLoading(false)
        }
    }

    const handleCloseDeleteModel = () => {
        setDeleteModelOpen(false)
        setSelectedPartId(null)
    }

    const handelDeleteModelOpen = (data) => {
        setSelectedPartId(data)
        setDeleteModelOpen(true)
    }
    const handelDelete = async () => {
        setDeleteLoading(true)
        try {
            let { data } = await deletePartsApi(selectedPartId)
            if (data.success) {
                setDeleteLoading(false)
                setDeleteModelOpen(false)
                setSelectedPartId(null)
                getPartsData()
            }
        } catch (error) {
            setDeleteLoading(false)
            console.log('Error', error)
        }
    }

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
                                        {item.partCategory}
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.partNumber}
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.partBrand}
                                    </TableCell>
                                    <TableCell>{item.unitType}</TableCell>
                                    <TableCell>${item.price}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>

                                    <TableCell>
                                        <IconButton
                                            onClick={() =>
                                                handelDeleteModelOpen(item._id)
                                            }
                                        >
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
                loading={updateModelLoading}
            />
            <DeletePartsDialog
                open={deleteModelOpen}
                handleClose={handleCloseDeleteModel}
                handelDelete={handelDelete}
                loading={deleteLoading}
            />
        </>
    )
}

export default ViewParts
