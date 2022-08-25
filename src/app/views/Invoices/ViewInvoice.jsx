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
import Chip from '@mui/material/Chip'

import Typography from '@mui/material/Typography'

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

const ViewInvoice = () => {
    return (
        <Box width="100%" overflow="auto">
            <Typography variant="h4" gutterBottom>
                Invoices
            </Typography>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Invoice Number</TableCell>
                        <TableCell>Task ID</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Created Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Paid On</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left" sx={{ color: 'blue' }}>
                            Est291
                        </TableCell>
                        <TableCell align="left">10 Nov 2022</TableCell>
                        <TableCell align="left">Katherine Martin</TableCell>
                        <TableCell>10 Nov 2022</TableCell>
                        <TableCell>$479</TableCell>
                        <TableCell>
                            <Chip
                                label="Paid via Cash"
                                color="success"
                                size="small"
                            />
                        </TableCell>
                        <TableCell>11 Nov 2022</TableCell>
                    </TableRow>{' '}
                    <TableRow>
                        <TableCell align="left" sx={{ color: 'blue' }}>
                            Est291
                        </TableCell>
                        <TableCell align="left">10 Nov 2022</TableCell>
                        <TableCell align="left">Katherine Martin</TableCell>
                        <TableCell>10 Nov 2022</TableCell>
                        <TableCell>$479</TableCell>
                        <TableCell>
                            <Chip label="Sent" color="primary" size="small" />
                        </TableCell>
                        <TableCell>11 Nov 2022</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left" sx={{ color: 'blue' }}>
                            Est291
                        </TableCell>
                        <TableCell align="left">10 Nov 2022</TableCell>
                        <TableCell align="left">Katherine Martin</TableCell>
                        <TableCell>10 Nov 2022</TableCell>
                        <TableCell>$479</TableCell>
                        <TableCell>
                            <Chip label="Over due" color="error" size="small" />
                        </TableCell>
                        <TableCell>11 Nov 2022</TableCell>
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

export default ViewInvoice
