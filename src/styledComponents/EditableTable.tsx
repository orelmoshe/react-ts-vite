import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Table, TableBody, TableCell as MUITableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

import colors from '../consts/colors';

const TableTitle = styled('div')({
    color: colors.black,
    fontSize: 26,
    fontWeight: 400,
    marginBottom: 5
});

const TableCell = styled(MUITableCell)({
    textAlign: 'start'
});
interface InspectionDetail {
    label: string;
    value: string;
}

const EditableTable: React.FC<{
    title: string;
    details: InspectionDetail[];
    onChange: (index: number, newValue: string) => void;
}> = ({ title, details, onChange }) => (
    <Box mb={4}>
        <TableTitle >
            {title}
        </TableTitle>
        <TableContainer component={Paper}>
            <Table>
                {/* <TableHead>
                    <TableRow>
                        <TableCell>פרטים</TableCell>
                        <TableCell>ערכים</TableCell>
                    </TableRow>
                </TableHead> */}
                <TableBody>
                    {details.map((detail, index) => (
                        <TableRow key={index}>
                            <TableCell >{detail.label}</TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    value={detail.value}
                                    onChange={(e) => onChange(index, e.target.value)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

export default EditableTable;