import { NextResponse } from "next/server";

export default function middleware(req) {

    const { pathname } = req.nextUrl;

    // if (pathname === "/administrarUsuarios" && Profile?.id_rol !== 1) {
    //     return NextResponse.redirect("/notfound");
    // }

    return NextResponse.next();
}