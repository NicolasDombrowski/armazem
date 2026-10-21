
import "server-only";

import Employee from "../models/EmployeeModel";

export interface UserData{
    name: string;
    phone: number;
    mail: string;
    department: string;
    accessProfile: string;
}

export async function fetchAllUsers() {
    return Employee.findAll({ order: [["id", "ASC"]] });
}

export async function fetchUserById(id:number) {
    return Employee.findByPk(id);
}

export async function insertUser(data:UserData) {
    return Employee.create({
        name: data.name,
        phone: data.phone,
        mail: data.mail,
        department: data.department,
        access_profile: data.accessProfile,
    });
}

export async function updateUser(id:number, data:UserData) {

    const employee = await Employee.findByPk(id);

    if (!employee) return null;

    await employee.update({
        name: data.name,
        phone: data.phone,
        mail: data.mail,
        department: data.department,
        access_profile: data.accessProfile,
    });

    return employee;
}

export async function softDeleteUser(id:number) {

    const employee = await Employee.findByPk(id);

    if (!employee) return null;

    await employee.update({ active: false });

    return employee;
}

export async function dropUser(id:number) {

    const employee = await Employee.findByPk(id);

    if (!employee) return null;

    await employee.destroy();

    return employee;
}
