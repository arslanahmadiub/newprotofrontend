import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'

import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
} from '@mui/material'
import { Box, styled } from '@mui/system'
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

const ViewCustomer = () => {
    return (
        <Box width="100%" overflow="auto">
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    marginBottom: '30px',
                }}
            >
                <Typography variant="h5">Customers</Typography>
                <Button variant="contained" sx={{ marginLeft: '10px' }}>
                    Add Customer
                </Button>
            </Box>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Completed Task</TableCell>
                        <TableCell>Active Task </TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Muzamal</TableCell>
                        <TableCell align="left">03441234567</TableCell>
                        <TableCell align="left">10</TableCell>
                        <TableCell>10</TableCell>

                        <TableCell>
                            <IconButton>
                                <Icon color="error">close</Icon>
                            </IconButton>
                            <IconButton>
                                <Icon color="correct">edit</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Arslan</TableCell>
                        <TableCell align="left">03444334567</TableCell>
                        <TableCell align="left">11</TableCell>
                        <TableCell>9</TableCell>

                        <TableCell>
                            <IconButton>
                                <Icon color="error">close</Icon>
                            </IconButton>
                            <IconButton>
                                <Icon color="correct">edit</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Aqib</TableCell>
                        <TableCell align="left">03448764567</TableCell>
                        <TableCell align="left">13</TableCell>
                        <TableCell>7</TableCell>

                        <TableCell>
                            <IconButton>
                                <Icon color="error">close</Icon>
                            </IconButton>
                            <IconButton>
                                <Icon color="correct">edit</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Nasir</TableCell>
                        <TableCell align="left">03001234567</TableCell>
                        <TableCell align="left">15</TableCell>
                        <TableCell>5</TableCell>

                        <TableCell>
                            <IconButton>
                                <Icon color="error">close</Icon>
                            </IconButton>
                            <IconButton>
                                <Icon color="correct">edit</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </StyledTable>

            {/* <TablePagination
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
            /> */}
        </Box>
    )
}

export default ViewCustomer
