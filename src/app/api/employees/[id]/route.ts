
import { NextResponse } from "next/server";
import {
    fetchById,
    update,
    softDelete,
    drop,
} from "@/controllers/EmployeeController";

export async function GET(
    request: any,
    { params }: { params: Promise<{ id: number }> }
) {
    const { id } = await params;
    const employee = await fetchById(id);

    if (!employee) {
        return NextResponse.json(
            { error: "Colaborador não encontrado" },
            { status: 404 }
        );
    }

    return NextResponse.json(employee);
}

export async function PATCH(
    request:any,
    { params }: {params: Promise<{ id: number}>}) {
    try {
        const { id } = await params;
        const data = await request.json();
        const employee = await update(id, data);

        if (!employee) {
            return NextResponse.json(
                { error: "Colaborador não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json(employee);
    } catch {
        return NextResponse.json(
            { error: "Erro ao atualizar colaborador" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request:any,
    { params }: {params: Promise<{ id: number}>}) {
    const { id } = await params;
    const employee = await softDelete(id);

    if (!employee) {
        return NextResponse.json(
            { error: "Colaborador não encontrado" },
            { status: 404 }
        );
    }

    return NextResponse.json(employee);
}