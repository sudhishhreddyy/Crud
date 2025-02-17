import React from 'react'
import { For, Stack, Table, HStack } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const EmployeeTable = () => {
  return (
        <Stack gap="10">
              <Table.Root size="md" variant="outline">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>ID</Table.ColumnHeader>
                    <Table.ColumnHeader>Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Email</Table.ColumnHeader>
                    <Table.ColumnHeader>Age</Table.ColumnHeader>
                    <Table.ColumnHeader>Role</Table.ColumnHeader>
                    <Table.ColumnHeader>Salary</Table.ColumnHeader>
                    <Table.ColumnHeader>Actions</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {items.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell>{item.id}</Table.Cell>
                      <Table.Cell>{item.name}</Table.Cell>
                      <Table.Cell>{item.email}</Table.Cell>
                      <Table.Cell>{item.age}</Table.Cell>
                      <Table.Cell>{item.role}</Table.Cell>
                      <Table.Cell>{item.salary}</Table.Cell>
                      <Table.Cell>
                        <HStack gap="3">
                        <MdDelete size={20} className="icon" />
                        <FaRegEdit size={20} className="icon"  />
                        </HStack>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Stack>

  )
}

export default EmployeeTable

const items = [
  {
    id: 1,
    name: "John Doe",
    email: "John.doe@gmail.com",
    age: 28,
    role: "Developer",
    salary: 500000.0,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    age: 34,
    role: "Designer",
    salary: 450000.0,
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam.wilson@yahoo.com",
    age: 40,
    role: "Manager",
    salary: 700000.0,
  },
  {
    id: 4,
    name: "Lisa White",
    email: "lisa.white@hotmail.com",
    age: 25,
    role: "Intern",
    salary: 250000.0,
  },
  {
    id: 5,
    name: "Tom Harris",
    email: "tom.harris@gmail.com",
    age: 30,
    role: "Tester",
    salary: 400000.0,
  }
];

