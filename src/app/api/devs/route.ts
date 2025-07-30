import { NextResponse } from "next/server";
import devs from "@/data/devs.json";

export async function GET() {
    return NextResponse.json(devs);
}
