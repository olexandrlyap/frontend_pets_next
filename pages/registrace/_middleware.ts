import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

    const { accessToken, refreshToken } = req.cookies

    if(!accessToken && !refreshToken) {
        console.log('you are not auth')
        return NextResponse.next()
    }

    console.log('hello you are authenticated proceed to dashboard')
    return NextResponse.redirect('http://localhost:3000/')
  // return new Response('Hello, world!')
 
}