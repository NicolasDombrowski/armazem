import "server-only";
import { db } from "@/lib/db";

export async function testDatabase() {
    const result = await db.query(
        "SELECT *"
    );

    return result.rows[0];
}