
import { NextResponse } from "next/server";
import { fetchAll, insert } from "@/controllers/EmployeeController";

export async function GET() {
    try {
        const employees = await fetchAll();
        return NextResponse.json(employees);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error while getting employees" },
            { status: 500 }
        );
    }
}

export async function POST(request:any) {
    try {
        const data = await request.json()
        const employee = await insert(data);

        return NextResponse.json(employee, { status: 201 });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error while posting employee" },
            { status: 400 }
        );
    }

}