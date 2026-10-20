"use server";

import { updateUser } from "@/controllers/EmployeeController";
import { isNumberObject } from "util/types";
import { UserData } from "@/controllers/EmployeeController";


export default async function updateEmployeeAction(formData: FormData) {
        const id = Number(formData.get('id'));
        const userData:UserData = {
                name: String(formData.get('name')),
                mail: String(formData.get('mail')),
                phone: Number(formData.get('phone')),
                department: String(formData.get('department')),
                accessProfile: String(formData.get('accessProfile'))
        };
        if (!id) {
                throw new Error('');
        }
        await updateUser(id, userData);
        }