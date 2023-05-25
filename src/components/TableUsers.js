
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fecthAllUser } from '../services/UserService';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([])

    useEffect(()=> {
        getUsers();
    }, [])
    const getUsers = async () => {
        let res = await fecthAllUser();
        if(res && res.data && res.data.data) {
            setListUsers(res.data.data)
        }
    }
    console.log('>>> check', listUsers)
    return (<>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length>0 && 
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    </>)
}

export default TableUsers;