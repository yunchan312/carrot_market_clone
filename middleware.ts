// import { NextRequest, NextResponse } from "next/server";
// import getSession from "./lib/session";
// import db from "./lib/db";

// export async function middleware(request: NextRequest) {
//   //   const session = await getSession();
//   //   const pathname = request.nextUrl.pathname;
//   //   if (pathname === "/") {
//   //     const response = NextResponse.next();
//   //     response.cookies.set("middleware-cookie", "hello");
//   //     return response;
//   //   }
//   //   //미들웨어는 모든 request에  발생한다.
//   //   if (pathname === "/profile") {
//   //     return Response.redirect(new URL("/", request.url));
//   //   }
//   // await db.user.findMany({}); ---> 에러발생 edge runtime관련

// }

// export const config = {
//   matcher: [
//     /*"/", "/profile", "/create-account", "/user/:path*"*/ "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
