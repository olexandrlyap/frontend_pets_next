import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

    const { accessToken, refreshToken } = req.cookies

    if(!accessToken && !refreshToken) {
      console.log('user is authenticated')
        return NextResponse.redirect('http://localhost:3000/prihlaseni')
    }
    console.log('user is authenticated and may proceed')
    return NextResponse.next()
 
}