import React from 'react'
import MaterialTable from 'material-table'
import PreviewIcon from '@mui/icons-material/Preview'
import { useNavigate } from 'react-router-dom'

const columns = [
    { title: 'Name', field: 'mechanicName' },
    { title: 'Phone', field: 'mechanicPhone' },
    { title: 'Completed Task', field: 'completedTask' },
    { title: 'Active Task', field: 'activeTask' },
]

const ViewMechanic = () => {
    const navigate = useNavigate()

    return (
        <MaterialTable
            columns={columns}
            style={{ paddingLeft: '15px', paddingRight: '15px' }}
            data={[
                {
                    mechanicName: 'Arslan Ahmad',
                    mechanicPhone: '03023338991',
                    completedTask: 15,
                    activeTask: 2,
                },
            ]}
            actions={[
                {
                    icon: 'delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData) =>
                        alert('You want to delete ' + rowData.name),
                },
                {
                    icon: PreviewIcon,
                    tooltip: 'View User',
                    onClick: (event, rowData) =>
                        navigate('/mechanic/view/details/1234345532'),
                },
            ]}
            options={{
                actionsColumnIndex: -1,
            }}
            title="Mechanic"
        />
    )
}

export default ViewMechanic
