"use server";

import { updateUser, UserData } from "@/controllers/EmployeeController";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function updateEmployeeAction(formData: FormData) {
        const id = Number(formData.get('id'));
        const userData:UserData = {
                name: String(formData.get('name')),
                mail: String(formData.get('mail')),
                phone: Number(formData.get('phone')),
                department: String(formData.get('department')),
                accessProfile: String(formData.get('access_profile'))
        };
        if (!id) {
                console.error('ID specified incorrectly')
                return;
        }
        await updateUser(id, userData);
        revalidatePath('/manage/user');
        redirect("/manage/user");
        }