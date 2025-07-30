import { NextRequest, NextResponse } from "next/server";
import devs from "@/data/devs.json";

export async function GET(req: NextRequest, { params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const dev = devs.find((dev) => dev.username === username);
    if (!dev) {
        return NextResponse.json({ error: "Dev not found" }, { status: 404 });
    }
    return NextResponse.json(dev);
}