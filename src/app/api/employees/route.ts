
import { NextResponse } from "next/server";
import { fetchAllUsers } from "@/controllers/EmployeeController";

export async function GET() {
    try {
        const employees = await fetchAllUsers();
        return NextResponse.json(employees);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error while getting employees" },
            { status: 500 }
        );
    }
}