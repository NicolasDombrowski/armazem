
import "server-only";
import Employee from "../models/EmployeeModel.js";

export async function fetchAll() {
    return Employee.findAll();
}

export async function fetchById(id) {
    return Employee.findByPk(id);
}

export async function insert(data) {
    return Employee.create({
        name: data.name,
        phone: data.phone,
        mail: data.mail,
        department: data.department,
        access_profile: data.accessProfile,
    });
}

export async function update(id, data) {
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

export async function softDelete(id) {
    const employee = await Employee.findByPk(id);

    if (!employee) return null;

    await employee.update({ active: false });

    return employee;
}

export async function drop(id) {
    const employee = await Employee.findByPk(id);

    if (!employee) return null;

    await employee.destroy();

    return employee;
}
